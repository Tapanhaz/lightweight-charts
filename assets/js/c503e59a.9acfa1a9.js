"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"TrackingModeOptions",title:"Interface: TrackingModeOptions",sidebar_label:"TrackingModeOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,l={unversionedId:"api/interfaces/TrackingModeOptions",id:"version-3.8/api/interfaces/TrackingModeOptions",title:"Interface: TrackingModeOptions",description:"Represent options for the tracking mode's behavior.",source:"@site/versioned_docs/version-3.8/api/interfaces/TrackingModeOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TrackingModeOptions",permalink:"/lightweight-charts/docs/3.8/api/interfaces/TrackingModeOptions",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"TrackingModeOptions",title:"Interface: TrackingModeOptions",sidebar_label:"TrackingModeOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},c=[{value:"Properties",id:"properties",level:2},{value:"exitMode",id:"exitmode",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represent options for the tracking mode's behavior."),(0,i.kt)("p",null,"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"exitmode"},"exitMode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"exitMode"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/TrackingModeExitMode"},(0,i.kt)("inlineCode",{parentName:"a"},"TrackingModeExitMode"))),(0,i.kt)("p",null,"Determine how to exit the tracking mode."),(0,i.kt)("p",null,"By default, mobile users will long press to deactivate the scroll and have the ability to check values and dates.\nAnother press is required to activate the scroll, be able to move left/right, zoom, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/TrackingModeExitMode#onnexttap"},"OnNextTap")))}u.isMDXComponent=!0}}]);