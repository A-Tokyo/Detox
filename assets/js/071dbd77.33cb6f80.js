"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Test runner",l={unversionedId:"config/testRunner",id:"config/testRunner",title:"Test runner",description:"| Property     | Value    | Description                                                                 |",source:"@site/../docs/config/testRunner.md",sourceDirName:"config",slug:"/config/testRunner",permalink:"/Detox/docs/next/config/testRunner",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/config/testRunner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Session",permalink:"/Detox/docs/next/config/session"},next:{title:"Command Line Tools",permalink:"/Detox/docs/next/api/detox-cli"}},s={},p=[{value:"Jest config",id:"jest-config",level:2},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Parallel Test Execution",id:"parallel-test-execution",level:3},{value:"How to Run Unit and E2E Tests in the Same Project",id:"how-to-run-unit-and-e2e-tests-in-the-same-project",level:3}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-runner"},"Test runner"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"testRunner")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"jest"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Required.")," Should be ",(0,a.kt)("inlineCode",{parentName:"td"},'"jest"')," for the proper ",(0,a.kt)("inlineCode",{parentName:"td"},"detox test")," CLI functioning.")))),(0,a.kt)("p",null,"A typical Detox configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},".detoxrc.js")," file looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "runnerConfig": "e2e/config.json",\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        "type": "iPhone 12 Pro Max"\n      }\n    }\n  },\n  "apps": {\n    "ios.release": {\n      "type": "ios.app",\n      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/example.app",\n      "build": "<...xcodebuild command...>",\n    }\n  },\n  "configurations": {\n    "ios.sim.release": {\n      "device": "simulator",\n      "app": "ios.release"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"jest-config"},"Jest config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"maxWorkers")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Recommended.")," It prevents potential overallocation of mobile devices according to the default logic of Jest (",(0,a.kt)("inlineCode",{parentName:"td"},"maxWorkers = cpusCount \u2014 1"),") for the default workers count. To override it, ",(0,a.kt)("a",{parentName:"td",href:"/Detox/docs/next/api/detox-cli#test"},"use CLI arguments"),", or see ",(0,a.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/configuration#maxworkers-number--string"},"Jest documentation")," if you plan to change the default value in the config.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"testEnvironment")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"./environment"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Required.")," Needed for the proper functioning of Jest and Detox. See ",(0,a.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/en/configuration#testenvironment-string"},"Jest documentation")," for more details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"testRunner")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"jest-circus/runner"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Required.")," Needed for the proper functioning of Jest and Detox. See ",(0,a.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/en/configuration#testrunner-string"},"Jest documentation")," for more details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"testTimeout")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"120000")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Required"),". Overrides the default timeout (5 seconds), which is usually too short to complete a single end-to-end test.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"reporters")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'["detox/runners/jest/reporter"]')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Recommended.")," Sets up our streamline replacement for ",(0,a.kt)("a",{parentName:"td",href:"https://jestjs.io/docs/en/configuration#reporters-array-modulename-modulename-options"},"Jest\u2019s default reporter"),", which removes Jest\u2019s default buffering of ",(0,a.kt)("inlineCode",{parentName:"td"},"console.log()")," output. That is helpful for end-to-end tests since log messages appear on the screen without any artificial delays.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"verbose")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"Conditional.")," Must be ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if above you have replaced Jest\u2019s default reporter with Detox\u2019s ",(0,a.kt)("inlineCode",{parentName:"td"},"reporter"),". Optional otherwise.")))),(0,a.kt)("p",null,"A typical ",(0,a.kt)("inlineCode",{parentName:"p"},"jest-circus")," configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e/config.json")," file would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "jest-circus/runner",\n  "testEnvironment": "./environment",\n  "testTimeout": 120000,\n  "reporters": ["detox/runners/jest/reporter"],\n  "verbose": true\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The custom ",(0,a.kt)("inlineCode",{parentName:"li"},"SpecReporter")," is recommended to be registered as a listener. It takes care of logging on a per-spec basis (i.e. when ",(0,a.kt)("inlineCode",{parentName:"li"},"it('...')")," functions start and end) \u2014 which Jest does not do by default."),(0,a.kt)("li",{parentName:"ul"},"The custom ",(0,a.kt)("inlineCode",{parentName:"li"},"WorkerAssignReporter")," prints for every next test suite which device is assigned to its execution.")),(0,a.kt)("p",null,"This is how a typical Jest log output looks when ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecReporter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkerAssignReporter")," are enabled in ",(0,a.kt)("inlineCode",{parentName:"p"},"streamline-reporter")," is set up in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"SpecReporter")," added in ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e/environment.js"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Streamlined output",src:n(8750).Z,width:"1396",height:"546"})),(0,a.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,a.kt)("p",null,"There are some things you should notice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don\u2019t worry about mocks being used, Detox works on the compiled version of your app."),(0,a.kt)("li",{parentName:"ul"},"Detox exposes its primitives (",(0,a.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"device"),", ...) globally, it will override Jest\u2019s global ",(0,a.kt)("inlineCode",{parentName:"li"},"expect")," object."),(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"import jestExpect from 'expect'")," if you need.")),(0,a.kt)("h3",{id:"parallel-test-execution"},"Parallel Test Execution"),(0,a.kt)("p",null,"Through Detox' CLI, Jest can be started with ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/parallel-test-execution"},"multiple workers")," that run tests simultaneously, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --configuration <yourConfigurationName> --maxWorkers 2\n")),(0,a.kt)("p",null,"In this mode, Jest effectively assigns one worker per each test file.\nPer-spec logging offered by the ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecReporter")," mentioned earlier, does not necessarily make sense, as the workers' outputs get mixed up."),(0,a.kt)("p",null,"By default, we disable ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecReporter")," in a multi-workers environment.\nIf you wish to force-enable it nonetheless, the ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/next/api/detox-cli#test"},(0,a.kt)("inlineCode",{parentName:"a"},"--jest-report-specs"))," CLI option can be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"detox test"),", e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --configuration <yourConfigurationName> --maxWorkers 2 --jest-report-specs\n")),(0,a.kt)("h3",{id:"how-to-run-unit-and-e2e-tests-in-the-same-project"},"How to Run Unit and E2E Tests in the Same Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create different Jest configs for unit and E2E tests, e.g. in ",(0,a.kt)("inlineCode",{parentName:"li"},"e2e/config.json")," (for Detox) and ",(0,a.kt)("inlineCode",{parentName:"li"},"jest.config.js"),"\n(for unit tests). For example, in Jest\u2019s E2E config you can set ",(0,a.kt)("inlineCode",{parentName:"li"},"testMatch")," to look for ",(0,a.kt)("inlineCode",{parentName:"li"},"<rootDir>/e2e/**/*.test.js$"),"\nglob, and this way avoid accidental triggering of unit tests in your ",(0,a.kt)("inlineCode",{parentName:"li"},"src/")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"lib/")," folder."),(0,a.kt)("li",{parentName:"ul"},"To run your E2E tests, use ",(0,a.kt)("inlineCode",{parentName:"li"},"detox test")," command (or ",(0,a.kt)("inlineCode",{parentName:"li"},"npx detox test"),", if you haven\u2019t installed ",(0,a.kt)("inlineCode",{parentName:"li"},"detox-cli"),").")))}u.isMDXComponent=!0},8750:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/streamlined_logging-4ad2e1c374cd34a97dfc9a9f090ddcb6.png"}}]);