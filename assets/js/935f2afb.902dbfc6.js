"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","items":[{"type":"link","label":"Getting Started","href":"/Detox/docs/next/introduction/getting-started","docId":"introduction/getting-started"},{"type":"link","label":"Building with Detox","href":"/Detox/docs/next/introduction/introduction/building-with-detox","docId":"introduction/building-with-detox"},{"type":"link","label":"Writing Your First Test","href":"/Detox/docs/next/introduction/writing-first-test","docId":"introduction/writing-first-test"},{"type":"link","label":"Preparing for CI","href":"/Detox/docs/next/introduction/preparing-for-ci","docId":"introduction/preparing-for-ci"},{"type":"link","label":"Debugging","href":"/Detox/docs/next/introduction/debugging","docId":"introduction/debugging"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Overview","href":"/Detox/docs/next/config/overview","docId":"config/overview"},{"type":"link","label":"Devices","href":"/Detox/docs/next/config/devices","docId":"config/devices"},{"type":"link","label":"Apps","href":"/Detox/docs/next/config/apps","docId":"config/apps"},{"type":"link","label":"Artifacts","href":"/Detox/docs/next/config/artifacts","docId":"config/artifacts"},{"type":"link","label":"Behavior","href":"/Detox/docs/next/config/behavior","docId":"config/behavior"},{"type":"link","label":"Logger","href":"/Detox/docs/next/config/logger","docId":"config/logger"},{"type":"link","label":"Session","href":"/Detox/docs/next/config/session","docId":"config/session"},{"type":"link","label":"Test runner","href":"/Detox/docs/next/config/testRunner","docId":"config/testRunner"}],"collapsed":true,"collapsible":true},{"type":"category","label":"API Reference","items":[{"type":"link","label":"Command Line Tools","href":"/Detox/docs/next/api/detox-cli","docId":"api/detox-cli"},{"type":"link","label":"Device","href":"/Detox/docs/next/api/device","docId":"api/device"},{"type":"link","label":"Matchers","href":"/Detox/docs/next/api/matchers","docId":"api/matchers"},{"type":"link","label":"Actions","href":"/Detox/docs/next/api/actions","docId":"api/actions"},{"type":"link","label":"Expect","href":"/Detox/docs/next/api/expect","docId":"api/expect"},{"type":"link","label":"Logger","href":"/Detox/docs/next/api/logger","docId":"api/logger"},{"type":"link","label":"Internals","href":"/Detox/docs/next/api/internals","docId":"api/internals"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Troubleshooting","items":[{"type":"link","label":"Dealing With Problems With Building the App & Detox","href":"/Detox/docs/next/troubleshooting/building-the-app","docId":"building-the-app"},{"type":"link","label":"Dealing With Problems With Running Tests","href":"/Detox/docs/next/troubleshooting/running-tests","docId":"running-tests"},{"type":"link","label":"Dealing With Synchronization Issues in Tests","href":"/Detox/docs/next/troubleshooting/synchronization","docId":"synchronization"},{"type":"link","label":"Dealing With Flakiness in Tests","href":"/Detox/docs/next/troubleshooting/flakiness","docId":"flakiness"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Parallel Test Execution","href":"/Detox/docs/next/guide/parallel-test-execution","docId":"parallel-test-execution"},{"type":"link","label":"Using Genymotion Cloud","href":"/Detox/docs/next/guide/genymotion-cloud","docId":"guide/genymotion-cloud"},{"type":"link","label":"Taking Screenshots","href":"/Detox/docs/next/guide/taking-screenshots","docId":"guide/taking-screenshots"},{"type":"link","label":"Mocking","href":"/Detox/docs/next/guide/mocking","docId":"mocking"},{"type":"link","label":"Using Launch Arguments","href":"/Detox/docs/next/api/launch-args","docId":"launch-args"},{"type":"link","label":"Mocking Open With URL (Deep Links)","href":"/Detox/docs/next/api/mocking-open-with-url","docId":"mocking-open-with-url"},{"type":"link","label":"Mocking User Notifications","href":"/Detox/docs/next/api/mocking-user-notifications","docId":"mocking-user-notifications"},{"type":"link","label":"Mocking User Activity","href":"/Detox/docs/next/api/mocking-user-activity","docId":"mocking-user-activity"},{"type":"link","label":"Developing Your App While Writing Tests","href":"/Detox/docs/next/guide/developing-while-writing-tests","docId":"developing-while-writing-tests"},{"type":"link","label":"Setting Up an Android Development & Testing Environment","href":"/Detox/docs/next/guide/android-dev-env","docId":"android-dev-env"},{"type":"link","label":"ProGuard configuration","href":"/Detox/docs/next/guide/proguard-configuration","docId":"proguard-configuration"},{"type":"link","label":"Uninstalling Detox","href":"/Detox/docs/next/guide/uninstalling","docId":"uninstalling"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Articles","items":[{"type":"link","label":"Design Principles","href":"/Detox/docs/next/articles/design-principles","docId":"articles/design-principles"},{"type":"link","label":"How Detox Works","href":"/Detox/docs/next/articles/how-detox-works","docId":"articles/how-detox-works"},{"type":"link","label":"Third-Party Drivers","href":"/Detox/docs/next/articles/third-party-drivers","docId":"articles/third-party-drivers"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Migration Guide","href":"/Detox/docs/next/guide/migration","docId":"migration"},{"type":"link","label":"Contributing","href":"/Detox/docs/next/contributing","docId":"contributing"}]},"docs":{"android-dev-env":{"id":"android-dev-env","title":"Setting Up an Android Development & Testing Environment","description":"Setting Up an Android Development & Testing Environment","sidebar":"tutorialSidebar"},"api/actions":{"id":"api/actions","title":"Actions","description":"Detox uses matchers to find UI elements in your app and actions to simulate user interaction with those elements.","sidebar":"tutorialSidebar"},"api/detox-cli":{"id":"api/detox-cli","title":"Command Line Tools","description":"detox-cli lets you operate Detox from command line.","sidebar":"tutorialSidebar"},"api/device":{"id":"api/device","title":"Device","description":"The device object is globally available in every test file, unless you use exposeGlobals: false in the behavior config,","sidebar":"tutorialSidebar"},"api/expect":{"id":"api/expect","title":"Expect","description":"Detox uses matchers to match UI elements in your app and expectations to verify those elements are in the expected state.","sidebar":"tutorialSidebar"},"api/internals":{"id":"api/internals","title":"Internals","description":"This section might be more volatile than the other ones, yet we\'ll do our","sidebar":"tutorialSidebar"},"api/logger":{"id":"api/logger","title":"Logger","description":"TODO: rewrite this document","sidebar":"tutorialSidebar"},"api/matchers":{"id":"api/matchers","title":"Matchers","description":"Detox uses matchers to match UI elements in your app.","sidebar":"tutorialSidebar"},"articles/design-principles":{"id":"articles/design-principles","title":"Design Principles","description":"Traditionally, end-to-end tests on mobile are riddled with inherent issues, making the testing process difficult and lowering ROI for developers. We believe that the only way to solve these issues at the core is by changing some of the basic principles of our approach.","sidebar":"tutorialSidebar"},"articles/how-detox-works":{"id":"articles/how-detox-works","title":"How Detox Works","description":"Detox is an end-to-end testing framework. This means it runs your app on an actual device/simulator and interacts with it just like a real user would. This type of testing can give a lot of confidence in your app and help automate a manual QA process.","sidebar":"tutorialSidebar"},"articles/third-party-drivers":{"id":"articles/third-party-drivers","title":"Third-Party Drivers","description":"Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.","sidebar":"tutorialSidebar"},"building-the-app":{"id":"building-the-app","title":"Dealing With Problems With Building the App & Detox","description":"Dealing With Problems With Building the App & Detox","sidebar":"tutorialSidebar"},"config/apps":{"id":"config/apps","title":"Apps","description":"The format of Detox config allows you to define inside it multiple app configs in a key-value manner, i.e.:","sidebar":"tutorialSidebar"},"config/artifacts":{"id":"config/artifacts","title":"Artifacts","description":"Detox can store artifacts such as transient screenshots and device logs.","sidebar":"tutorialSidebar"},"config/behavior":{"id":"config/behavior","title":"Behavior","description":"If you need to tweak the flow of detox.init() or detox.cleanup() steps,","sidebar":"tutorialSidebar"},"config/devices":{"id":"config/devices","title":"Devices","description":"The format of Detox config allows you to define inside it multiple device configs in a key-value manner, i.e.:","sidebar":"tutorialSidebar"},"config/logger":{"id":"config/logger","title":"Logger","description":"level","sidebar":"tutorialSidebar"},"config/overview":{"id":"config/overview","title":"Overview","description":"Config resolution","sidebar":"tutorialSidebar"},"config/session":{"id":"config/session","title":"Session","description":"Detox can either initialize a server using a generated configuration, or can be overridden with a manual configuration:","sidebar":"tutorialSidebar"},"config/testRunner":{"id":"config/testRunner","title":"Test runner","description":"| Property     | Value    | Description                                                                 |","sidebar":"tutorialSidebar"},"contributing":{"id":"contributing","title":"Contributing","description":"Contributing","sidebar":"tutorialSidebar"},"developing-while-writing-tests":{"id":"developing-while-writing-tests","title":"Developing Your App While Writing Tests","description":"Developing Your App While Writing Tests","sidebar":"tutorialSidebar"},"flakiness":{"id":"flakiness","title":"Dealing With Flakiness in Tests","description":"Dealing With Flakiness in Tests","sidebar":"tutorialSidebar"},"guide/genymotion-cloud":{"id":"guide/genymotion-cloud","title":"Using Genymotion Cloud","description":"As the number of your end-to-end tests grows, the overall test session duration might easily surpass an hour or two.","sidebar":"tutorialSidebar"},"guide/taking-screenshots":{"id":"guide/taking-screenshots","title":"Taking Screenshots","description":"Detox supports taking in-test screenshots of the device, making the result immediately available in the form of an image file.","sidebar":"tutorialSidebar"},"introduction/building-with-detox":{"id":"introduction/building-with-detox","title":"Building with Detox","description":"This article mainly covers standard React Native projects.","sidebar":"tutorialSidebar"},"introduction/debugging":{"id":"introduction/debugging","title":"Debugging","description":"Detox Tests","sidebar":"tutorialSidebar"},"introduction/getting-started":{"id":"introduction/getting-started","title":"Getting Started","description":"Welcome to Detox!","sidebar":"tutorialSidebar"},"introduction/preparing-for-ci":{"id":"introduction/preparing-for-ci","title":"Preparing for CI","description":"This guide is outdated.","sidebar":"tutorialSidebar"},"introduction/writing-first-test":{"id":"introduction/writing-first-test","title":"Writing Your First Test","description":"This article is outdated and it suggests using a deprecated tool.","sidebar":"tutorialSidebar"},"launch-args":{"id":"launch-args","title":"Using Launch Arguments","description":"Launch Arguments","sidebar":"tutorialSidebar"},"migration":{"id":"migration","title":"Migration Guide","description":"We are improving Detox API as we go along, sometimes these changes require us to break the API in order for it to make more sense. These migration guides refer to breaking changes. If a newer version has no entries in this document, it means it does not require special migration steps. Refer to the release notes of the latter builds to learn about their improvements and changes.","sidebar":"tutorialSidebar"},"mocking":{"id":"mocking","title":"Mocking","description":"This article previously focused on the older React Native versions (<0.59), so if you need to access it, follow this Git history link.","sidebar":"tutorialSidebar"},"mocking-open-with-url":{"id":"mocking-open-with-url","title":"Mocking Open With URL (Deep Links)","description":"Mocking Open With URL (Deep Links)","sidebar":"tutorialSidebar"},"mocking-user-activity":{"id":"mocking-user-activity","title":"Mocking User Activity","description":"Mocking User Activity","sidebar":"tutorialSidebar"},"mocking-user-notifications":{"id":"mocking-user-notifications","title":"Mocking User Notifications","description":"Mocking User Notifications","sidebar":"tutorialSidebar"},"parallel-test-execution":{"id":"parallel-test-execution","title":"Parallel Test Execution","description":"Parallel Test Execution","sidebar":"tutorialSidebar"},"proguard-configuration":{"id":"proguard-configuration","title":"ProGuard configuration","description":"You can skip this guide if you are working solely with debug builds (android.emu.debug, etc.),","sidebar":"tutorialSidebar"},"running-tests":{"id":"running-tests","title":"Dealing With Problems With Running Tests","description":"Dealing With Problems With Running Tests","sidebar":"tutorialSidebar"},"synchronization":{"id":"synchronization","title":"Dealing With Synchronization Issues in Tests","description":"Dealing With Synchronization Issues in Tests","sidebar":"tutorialSidebar"},"troubleshooting":{"id":"troubleshooting","title":"Troubleshooting","description":"Troubleshooting"},"Troubleshooting.Artifacts":{"id":"Troubleshooting.Artifacts","title":"Artifacts","description":"Video Recording Issues on CI"},"uninstalling":{"id":"uninstalling","title":"Uninstalling Detox","description":"Uninstalling Detox","sidebar":"tutorialSidebar"}}}')}}]);