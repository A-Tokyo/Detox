const fs = require('fs');

const _ = require('lodash');

const DetoxContext = require('./DetoxContext');
const { DetoxInternalError } = require('./errors');
const { SecondarySessionState } = require('./ipc/state');
const symbols = require('./symbols');
const uuid = require('./utils/uuid');

const { $cleanup, $init, $initWorker, $logger, $restoreSessionState, $sessionState } = DetoxContext.protected;
const _ipcClient = Symbol('ipcClient');

class DetoxSecondaryContext extends DetoxContext {
  constructor() {
    super();
    /**
     * @protected
     * @type {*}
     */
    this[_ipcClient] = null;
  }

  //#region Internal members
  [symbols.reportFailedTests] = async (testFilePaths) => {
    if (this[_ipcClient]) {
      await this[_ipcClient].reportFailedTests(testFilePaths);
    } else {
      throw new DetoxInternalError('Detected an attempt to report failed tests using a non-initialized context.');
    }
  };
  //#endregion

  //#region Protected members
  async [$init]() {
    const IPCClient = require('./ipc/IPCClient');

    if (!this[_ipcClient]) {
      this[_ipcClient] = new IPCClient({
        id: `secondary-${process.pid}`,
        state: this[$sessionState],
        logger: this[$logger],
      });

      await this[_ipcClient].init();
    }
  }

  async [$initWorker](opts) {
    await super[$initWorker](opts);
    await this[_ipcClient].registerWorker(opts.workerId);
  }

  async [$cleanup]() {
    if (this[_ipcClient]) {
      await this[_ipcClient].dispose();
      this[_ipcClient] = null;
    }
  }

  /**
   * @protected
   * @override
   * @return {SecondarySessionState}
   */
  [$restoreSessionState]() {
    return _.defaultsDeep(
      SecondarySessionState.parse(fs.readFileSync(process.env.DETOX_CONFIG_SNAPSHOT_PATH)),
      { detoxConfig: { sessionConfig: { sessionId: uuid.UUID() } } }
    );
  }
  //#endregion
}

module.exports = DetoxSecondaryContext;