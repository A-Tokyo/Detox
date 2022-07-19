"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1886:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={id:"mocking",slug:"guide/mocking",title:"Mocking",sidebar_label:"Mocking"},i=void 0,l={unversionedId:"mocking",id:"version-19.x/mocking",isDocsHomePage:!1,title:"Mocking",description:"Mocking",source:"@site/versioned_docs/version-19.x/Guide.Mocking.md",sourceDirName:".",slug:"/guide/mocking",permalink:"/Detox/docs/guide/mocking",editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.Mocking.md",tags:[],version:"19.x",frontMatter:{id:"mocking",slug:"guide/mocking",title:"Mocking",sidebar_label:"Mocking"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Debugging in Android Studio",permalink:"/Detox/docs/guide/debugging-in-android-studio"},next:{title:"Migration Guide",permalink:"/Detox/docs/guide/migration"}},s=[{value:"Mocking",id:"mocking",children:[{value:"Usage",id:"usage",children:[{value:"Configuration",id:"configuration",children:[],level:4},{value:"Triggering",id:"triggering",children:[],level:4},{value:"Example of how to mock a module",id:"example-of-how-to-mock-a-module",children:[],level:4}],level:3}],level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mocking"},"Mocking"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This guide is a bit out of date. We hope to have it updated soon.")),(0,a.kt)("p",null,"Mocking is an important part of testing. You may want to alter some behavior of your app during test and replace it with a mock. Here are some example reasons why this could be useful:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change server endpoints to point to a mock/staging server instead of the regular production server"),(0,a.kt)("li",{parentName:"ul"},"Stub a feature the simulator doesn\u2019t support"),(0,a.kt)("li",{parentName:"ul"},"Prepare mock environment data like GPS position, Contacts/Photos found on the device, etc")),(0,a.kt)("p",null,"Note that mocking in end-to-end tests like in Detox is very different from mocking in unit tests like in Jest. With unit tests, the mocks can change between test case to test case. With Detox, remember that we\u2019re building the app once before all tests start. This means that mocks cannot be replaced between test cases. We\u2019ll have to assume our mock remains static during all test cases."),(0,a.kt)("p",null,"We\u2019ll only concentrate on mocking by changing JavaScript files under React Native apps."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-repackager"},(0,a.kt)("inlineCode",{parentName:"a"},"react-native-repackager"))," extends React Native packager\u2019s ability to override JavaScript files with different extensions. Just like you can create ",(0,a.kt)("inlineCode",{parentName:"p"},"myFile.ios.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"myFile.android.js"),", you\u2019ll be able to create ",(0,a.kt)("inlineCode",{parentName:"p"},"myFile.e2e.js")," that will take over during Detox tests. This even works under ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," which means we can publish libraries that contain ready-made mock implementations."),(0,a.kt)("p",null,"This replacement mechanism provides a lot of flexibility to change implementations for testing without affecting your production code. For more information and detailed usage instructions, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-repackager/blob/master/README.md"},"read the docs"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Repackager is available for RN 0.44 and 0.51. It is natively supported in RN 0.55 an up."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For RN < 0.55, setup ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-repackager")," in your library.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the Metro bundler to use the extensions defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"RN_SRC_EXT"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you use 0.55 <= RN < 0.59, create a file called ",(0,a.kt)("inlineCode",{parentName:"li"},"rn-cli.config.js")," in the root folder."),(0,a.kt)("li",{parentName:"ul"},"If you use RN >= 0.59 (which in turn uses Metro with breaking changes introduced in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/metro/releases/tag/v0.43.0"},"0.43"),") the file should be named ",(0,a.kt)("inlineCode",{parentName:"li"},"metro.config.js")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"metro.config.json")," (or define metro field in ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),") to the root directory.\nThen set up ",(0,a.kt)("inlineCode",{parentName:"li"},"resolver.sourceExts")," to prioritize any given source extension over the default one:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts\nmodule.exports = {\n  resolver: { \n    sourceExts: process.env.RN_SRC_EXT\n                ? process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts)\n                : defaultSourceExts\n  }\n};\n")),(0,a.kt)("p",{parentName:"li"},"or if you have RN < 0.57 or Metro < 0.43 use the old Metro configuration format:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n getSourceExts: () => process.env.RN_SRC_EXT ? \n                      process.env.RN_SRC_EXT.split(',') : []\n};\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"anyfile.e2e.js")," alongside ",(0,a.kt)("inlineCode",{parentName:"p"},"anyfile.js")))),(0,a.kt)("h4",{id:"triggering"},"Triggering"),(0,a.kt)("p",null,"Whenever Metro runs with ",(0,a.kt)("inlineCode",{parentName:"p"},"RN_SRC_EXT")," environment variable set, it will override the default files with the ones set in ",(0,a.kt)("inlineCode",{parentName:"p"},"RN_SRC_EXT"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> RN_SRC_EXT=e2e.js react-native start\n> RN_SRC_EXT=e2e.js xcodebuild <params>\n> RN_SRC_EXT=e2e.js ./gradlew assembleRelease\n")),(0,a.kt)("h4",{id:"example-of-how-to-mock-a-module"},"Example of how to mock a module"),(0,a.kt)("p",null,"If you want to mock a module, here is an example of how to do it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the steps above in the ",(0,a.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration")," section")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a file that just imports the module, ",(0,a.kt)("inlineCode",{parentName:"p"},"YourNativeModuleProvider.js"),", containing:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { NativeModules } from 'react-native';\n\nexport const { YourNativeModule } = NativeModules;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a file on the same directory - ",(0,a.kt)("inlineCode",{parentName:"p"},"YourNativeModuleProvider.e2e.js"),", containing:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// You can add a console.log here so it shows on your react-native console:\nconsole.log('We are now using our mocked NativeModule')\n\nconst YourNativeModule = {\n  mockedFunctionCall: () => 'Do something'\n}\nexport { YourNativeModule };\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run Metro using the information in ",(0,a.kt)("a",{parentName:"p",href:"#Triggering"},"Triggering"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'On your simulator, enable debug mode, and you should see "We are now using our mocked ',(0,a.kt)("inlineCode",{parentName:"p"},"NativeModule"),'"'))))}p.isMDXComponent=!0}}]);