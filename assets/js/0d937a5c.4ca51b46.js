"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9952],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>d});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,d=u["".concat(p,".").concat(g)]||u[g]||y[g]||l;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},60500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(45072),i=(t(11504),t(95788));const l={id:"GridLineOptions",title:"Interface: GridLineOptions",sidebar_label:"GridLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,a={unversionedId:"api/interfaces/GridLineOptions",id:"version-4.0/api/interfaces/GridLineOptions",title:"Interface: GridLineOptions",description:"Grid line options.",source:"@site/versioned_docs/version-4.0/api/interfaces/GridLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/GridLineOptions",permalink:"/lightweight-charts/docs/4.0/api/interfaces/GridLineOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"GridLineOptions",title:"Interface: GridLineOptions",sidebar_label:"GridLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"style",id:"style",level:3},{value:"visible",id:"visible",level:3}],c={toc:s},u="wrapper";function y(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Grid line options."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"color"},"color"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"color"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,"Line color."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'#D6DCDE'")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"style"},"style"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"style"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/LineStyle"},(0,i.yg)("inlineCode",{parentName:"a"},"LineStyle"))),(0,i.yg)("p",null,"Line style."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/enums/LineStyle#solid"},"Solid")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"visible"},"visible"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"visible"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,"Display the lines."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"true")))}y.isMDXComponent=!0}}]);