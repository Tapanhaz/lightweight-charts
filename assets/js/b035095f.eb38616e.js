"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"WhitespaceData",title:"Interface: WhitespaceData<HorzScaleItem>",sidebar_label:"WhitespaceData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/WhitespaceData",id:"api/interfaces/WhitespaceData",title:"Interface: WhitespaceData<HorzScaleItem>",description:"Represents a whitespace data item, which is a data point without a value.",source:"@site/docs/api/interfaces/WhitespaceData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/WhitespaceData",permalink:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WhitespaceData",title:"Interface: WhitespaceData<HorzScaleItem>",sidebar_label:"WhitespaceData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"customValues",id:"customvalues",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a whitespace data item, which is a data point without a value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n    { time: '2018-12-03', value: 27.02 },\n    { time: '2018-12-04' }, // whitespace\n    { time: '2018-12-05' }, // whitespace\n    { time: '2018-12-06' }, // whitespace\n    { time: '2018-12-07' }, // whitespace\n    { time: '2018-12-08', value: 23.92 },\n    { time: '2018-12-13', value: 30.74 },\n];\n")),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#time"},(0,r.kt)("inlineCode",{parentName:"a"},"Time")))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"WhitespaceData"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/OhlcData"},(0,r.kt)("inlineCode",{parentName:"a"},"OhlcData"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData"},(0,r.kt)("inlineCode",{parentName:"a"},"SingleValueData"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"time"},"time"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"time"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"HorzScaleItem")),(0,r.kt)("p",null,"The time of the data."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"customvalues"},"customValues"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"customValues"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("p",null,"Additional custom values which will be ignored by the library, but\ncould be used by plugins."))}m.isMDXComponent=!0}}]);