"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8956],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>g});var i=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(45072),a=(n(11504),n(95788));const r={sidebar_position:0,sidebar_label:"Candlesticks",pagination_title:"Candlestick Widths",title:"Candlestick Width Calculations",description:"Describes the calculation for candlestick body widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","candlestick","width"]},o=void 0,c={unversionedId:"plugins/pixel-perfect-rendering/widths/candlestick",id:"plugins/pixel-perfect-rendering/widths/candlestick",title:"Candlestick Width Calculations",description:"Describes the calculation for candlestick body widths",source:"@site/docs/plugins/pixel-perfect-rendering/widths/candlestick.md",sourceDirName:"plugins/pixel-perfect-rendering/widths",slug:"/plugins/pixel-perfect-rendering/widths/candlestick",permalink:"/lightweight-charts/docs/next/plugins/pixel-perfect-rendering/widths/candlestick",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Candlesticks",pagination_title:"Candlestick Widths",title:"Candlestick Width Calculations",description:"Describes the calculation for candlestick body widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","candlestick","width"]},sidebar:"docsSidebar",previous:{title:"Pixel Perfect Rendering",permalink:"/lightweight-charts/docs/next/plugins/pixel-perfect-rendering/"},next:{title:"Columns",permalink:"/lightweight-charts/docs/next/plugins/pixel-perfect-rendering/widths/columns"}},l={},s=[],p={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,i.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"It is recommend that you first read the ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/plugins/pixel-perfect-rendering/"},"Pixel Perfect Rendering")," page.")),(0,a.yg)("p",null,"The following functions can be used to get the calculated width that the library would use for a candlestick at a specific bar spacing and device pixel ratio."),(0,a.yg)("p",null,"Below a bar spacing of 4, the library will attempt to use as large a width as possible without the possibility of overlapping, whilst above 4 then the width will start to trend towards an 80% width of the available space."),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"It is expected that candles can overlap slightly at smaller bar spacings (more pronounced on lower resolution devices). This produces a more readable chart. If you need to ensure that bars can never overlap then rather use the widths for ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/plugins/pixel-perfect-rendering/widths/columns"},"Columns")," or the ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/plugins/pixel-perfect-rendering/widths/full-bar-width"},"full bar width")," calculation.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"function optimalCandlestickWidth(\n    barSpacing: number,\n    pixelRatio: number\n): number {\n    const barSpacingSpecialCaseFrom = 2.5;\n    const barSpacingSpecialCaseTo = 4;\n    const barSpacingSpecialCaseCoeff = 3;\n    if (barSpacing >= barSpacingSpecialCaseFrom && barSpacing <= barSpacingSpecialCaseTo) {\n        return Math.floor(barSpacingSpecialCaseCoeff * pixelRatio);\n    }\n    // coeff should be 1 on small barspacing and go to 0.8 while bar spacing grows\n    const barSpacingReducingCoeff = 0.2;\n    const coeff =\n        1 -\n        (barSpacingReducingCoeff *\n            Math.atan(\n                Math.max(barSpacingSpecialCaseTo, barSpacing) - barSpacingSpecialCaseTo\n            )) /\n            (Math.PI * 0.5);\n    const res = Math.floor(barSpacing * coeff * pixelRatio);\n    const scaledBarSpacing = Math.floor(barSpacing * pixelRatio);\n    const optimal = Math.min(res, scaledBarSpacing);\n    return Math.max(Math.floor(pixelRatio), optimal);\n}\n\n/**\n * Calculates the candlestick width that the library would use for the current\n * bar spacing.\n * @param barSpacing bar spacing in media coordinates\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns The width (in bitmap coordinates) that the chart would use to draw a candle body\n */\nexport function candlestickWidth(\n    barSpacing: number,\n    horizontalPixelRatio: number\n): number {\n    let width = optimalCandlestickWidth(barSpacing, horizontalPixelRatio);\n    if (width >= 2) {\n        const wickWidth = Math.floor(horizontalPixelRatio);\n        if (wickWidth % 2 !== width % 2) {\n            width--;\n        }\n    }\n    return width;\n}\n")))}h.isMDXComponent=!0}}]);