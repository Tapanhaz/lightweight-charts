"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6784],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>h});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(r),y=a,h=g["".concat(p,".").concat(y)]||g[y]||u[y]||i;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},84352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const i={id:"OhlcData",title:"Interface: OhlcData",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/OhlcData",id:"version-4.0/api/interfaces/OhlcData",title:"Interface: OhlcData",description:"Represents a bar with a Time and open, high, low, and close prices.",source:"@site/versioned_docs/version-4.0/api/interfaces/OhlcData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/OhlcData",permalink:"/lightweight-charts/docs/4.0/api/interfaces/OhlcData",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"OhlcData",title:"Interface: OhlcData",sidebar_label:"OhlcData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"open",id:"open",level:3},{value:"high",id:"high",level:3},{value:"low",id:"low",level:3},{value:"close",id:"close",level:3}],s={toc:c},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Represents a bar with a ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#time"},"Time")," and open, high, low, and close prices."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"OhlcData"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BarData"},(0,a.yg)("inlineCode",{parentName:"a"},"BarData"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/CandlestickData"},(0,a.yg)("inlineCode",{parentName:"a"},"CandlestickData"))))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"time"},"time"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"time"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#time"},(0,a.yg)("inlineCode",{parentName:"a"},"Time"))),(0,a.yg)("p",null,"The bar time."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"open"},"open"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"open"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The open price."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"high"},"high"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"high"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The high price."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"low"},"low"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"low"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The low price."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"close"},"close"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"close"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The close price."))}u.isMDXComponent=!0}}]);