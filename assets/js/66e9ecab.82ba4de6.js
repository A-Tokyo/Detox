"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6136],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8606:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const o={id:"mocking-open-with-url",slug:"api/mocking-open-with-url",title:"Mocking Open With URL (Deep Links)",sidebar_label:"Mocking Open With URL (Deep Links)"},a=void 0,p={unversionedId:"mocking-open-with-url",id:"mocking-open-with-url",isDocsHomePage:!1,title:"Mocking Open With URL (Deep Links)",description:"Mocking Open With URL (Deep Links)",source:"@site/../docs/APIRef.MockingOpenWithURL.md",sourceDirName:".",slug:"/api/mocking-open-with-url",permalink:"/Detox/docs/next/api/mocking-open-with-url",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/APIRef.MockingOpenWithURL.md",tags:[],version:"current",frontMatter:{id:"mocking-open-with-url",slug:"api/mocking-open-with-url",title:"Mocking Open With URL (Deep Links)",sidebar_label:"Mocking Open With URL (Deep Links)"},sidebar:"tutorialSidebar",previous:{title:"Launch Arguments",permalink:"/Detox/docs/next/api/launch-args"},next:{title:"Mocking User Notifications",permalink:"/Detox/docs/next/api/mocking-user-notifications"}},c=[{value:"Mocking Open With URL (Deep Links)",id:"mocking-open-with-url-deep-links",children:[{value:"Mocking App Launch With a URL",id:"mocking-app-launch-with-a-url",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Mocking Opening With a URL On a Launched App",id:"mocking-opening-with-a-url-on-a-launched-app",children:[],level:3}],level:2}],l={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mocking-open-with-url-deep-links"},"Mocking Open With URL (Deep Links)"),(0,r.kt)("p",null,"You can mock opening the app from URL to test your app\u2019s deep link handling mechanism."),(0,r.kt)("h3",{id:"mocking-app-launch-with-a-url"},"Mocking App Launch With a URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await device.launchApp({newInstance: true, url, sourceApp: bundleId}); // sourceApp is an optional iOS-only argument\n")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"describe('launch app from URL', () => {\n    it('should handle URL successfully', async () => {\n      await device.launchApp({\n        newInstance: true,\n        url: 'scheme://some.url',\n        sourceApp: 'com.apple.mobilesafari'\n      });\n      await expect(element(by.text('a label'))).toBeVisible();\n    });\n  });\n")),(0,r.kt)("h3",{id:"mocking-opening-with-a-url-on-a-launched-app"},"Mocking Opening With a URL On a Launched App"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"iOS-only")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await device.openURL({url: 'scheme://some.url', sourceApp: 'com.apple.mobilesafari'});\n")))}u.isMDXComponent=!0}}]);