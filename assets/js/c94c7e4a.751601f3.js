"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[760],{95788:(e,r,t)=>{t.d(r,{Iu:()=>y,yg:()=>m});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},y=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),g=s(t),c=a,m=g["".concat(o,".").concat(c)]||g[c]||u[c]||i;return t?n.createElement(m,l(l({ref:r},y),{},{components:t})):n.createElement(m,l({ref:r},y))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[g]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31260:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=t(45072),a=(t(11504),t(95788));const i={id:"SeriesMarker",title:"Interface: SeriesMarker<TimeType>",sidebar_label:"SeriesMarker",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/SeriesMarker",id:"version-4.0/api/interfaces/SeriesMarker",title:"Interface: SeriesMarker<TimeType>",description:"Represents a series marker.",source:"@site/versioned_docs/version-4.0/api/interfaces/SeriesMarker.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesMarker",permalink:"/lightweight-charts/docs/4.0/api/interfaces/SeriesMarker",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"SeriesMarker",title:"Interface: SeriesMarker<TimeType>",sidebar_label:"SeriesMarker",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3},{value:"position",id:"position",level:3},{value:"shape",id:"shape",level:3},{value:"color",id:"color",level:3},{value:"id",id:"id",level:3},{value:"text",id:"text",level:3},{value:"size",id:"size",level:3}],y={toc:s},g="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(g,(0,n.c)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Represents a series marker."),(0,a.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"TimeType"))))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"time"},"time"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"time"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"TimeType")),(0,a.yg)("p",null,"The time of the marker."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"position"},"position"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"position"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#seriesmarkerposition"},(0,a.yg)("inlineCode",{parentName:"a"},"SeriesMarkerPosition"))),(0,a.yg)("p",null,"The position of the marker."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"shape"},"shape"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"shape"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#seriesmarkershape"},(0,a.yg)("inlineCode",{parentName:"a"},"SeriesMarkerShape"))),(0,a.yg)("p",null,"The shape of the marker."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"color"},"color"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"color"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The color of the marker."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"id"},"id"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"id"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The ID of the marker."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"text"},"text"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"text"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The optional text of the marker."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"size"},"size"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"size"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The optional size of the marker."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"1")))}u.isMDXComponent=!0}}]);