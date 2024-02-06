"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5848],{95788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>d});var n=t(11504);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(t),u=i,d=g["".concat(p,".").concat(u)]||g[u]||y[u]||a;return t?n.createElement(d,s(s({ref:r},c),{},{components:t})):n.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27892:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(45072),i=(t(11504),t(95788));const a={id:"SeriesOptionsMap",title:"Interface: SeriesOptionsMap",sidebar_label:"SeriesOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},s=void 0,o={unversionedId:"api/interfaces/SeriesOptionsMap",id:"version-3.8/api/interfaces/SeriesOptionsMap",title:"Interface: SeriesOptionsMap",description:"Represents the type of options for each series type.",source:"@site/versioned_docs/version-3.8/api/interfaces/SeriesOptionsMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesOptionsMap",permalink:"/lightweight-charts/docs/3.8/api/interfaces/SeriesOptionsMap",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"SeriesOptionsMap",title:"Interface: SeriesOptionsMap",sidebar_label:"SeriesOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},l=[{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3}],c={toc:l},g="wrapper";function y(e){let{components:r,...t}=e;return(0,i.yg)(g,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents the type of options for each series type."),(0,i.yg)("p",null,"For example a bar series has options represented by ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#barseriesoptions"},"BarSeriesOptions"),"."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"bar"},"Bar"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Bar"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#barseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"BarSeriesOptions"))),(0,i.yg)("p",null,"The type of bar series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"candlestick"},"Candlestick"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Candlestick"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#candlestickseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CandlestickSeriesOptions"))),(0,i.yg)("p",null,"The type of candlestick series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"area"},"Area"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Area"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#areaseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"AreaSeriesOptions"))),(0,i.yg)("p",null,"The type of area series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"baseline"},"Baseline"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Baseline"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#baselineseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"BaselineSeriesOptions"))),(0,i.yg)("p",null,"The type of baseline series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"line"},"Line"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Line"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#lineseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"LineSeriesOptions"))),(0,i.yg)("p",null,"The type of line series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"histogram"},"Histogram"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Histogram"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#histogramseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"HistogramSeriesOptions"))),(0,i.yg)("p",null,"The type of histogram series options."))}y.isMDXComponent=!0}}]);