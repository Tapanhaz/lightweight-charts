"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||n;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},30955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={},o="From v3 to v4",s={unversionedId:"migrations/from-v3-to-v4",id:"version-4.1/migrations/from-v3-to-v4",title:"From v3 to v4",description:"In this document you can find the migration guide from the previous version v3 to v4.",source:"@site/versioned_docs/version-4.1/migrations/from-v3-to-v4.md",sourceDirName:"migrations",slug:"/migrations/from-v3-to-v4",permalink:"/lightweight-charts/docs/migrations/from-v3-to-v4",draft:!1,tags:[],version:"4.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"From v2 to v3",permalink:"/lightweight-charts/docs/migrations/from-v2-to-v3"},next:{title:"iOS wrapper",permalink:"/lightweight-charts/docs/ios"}},l={},c=[{value:"Exported enum <code>LasPriceAnimationMode</code> has been removed",id:"exported-enum-laspriceanimationmode-has-been-removed",level:2},{value:"<code>scaleMargins</code> option has been removed from series options",id:"scalemargins-option-has-been-removed-from-series-options",level:2},{value:"<code>backgroundColor</code> from <code>layout</code> options has been removed",id:"backgroundcolor-from-layout-options-has-been-removed",level:2},{value:"<code>overlay</code> property of series options has been removed",id:"overlay-property-of-series-options-has-been-removed",level:2},{value:"<code>priceScale</code> option has been removed",id:"pricescale-option-has-been-removed",level:2},{value:"<code>priceScale()</code> method of chart API now requires to provide price scale id",id:"pricescale-method-of-chart-api-now-requires-to-provide-price-scale-id",level:2},{value:"<code>drawTicks</code> from <code>leftPriceScale</code> and <code>rightPriceScale</code> options has been renamed to <code>ticksVisible</code>",id:"drawticks-from-leftpricescale-and-rightpricescale-options-has-been-renamed-to-ticksvisible",level:2},{value:"The type of outbound time values has been changed",id:"the-type-of-outbound-time-values-has-been-changed",level:2},{value:"<code>seriesPrices</code> property from <code>MouseEventParams</code> has been removed",id:"seriesprices-property-from-mouseeventparams-has-been-removed",level:2},{value:"<code>MouseEventParams</code> field <code>hoveredMarkerId</code> was renamed to <code>hoveredObjectId</code>",id:"mouseeventparams-field-hoveredmarkerid-was-renamed-to-hoveredobjectid",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"from-v3-to-v4"},"From v3 to v4"),(0,i.kt)("p",null,"In this document you can find the migration guide from the previous version v3 to v4."),(0,i.kt)("h2",{id:"exported-enum-laspriceanimationmode-has-been-removed"},"Exported enum ",(0,i.kt)("inlineCode",{parentName:"h2"},"LasPriceAnimationMode")," has been removed"),(0,i.kt)("p",null,"Please use ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LastPriceAnimationMode"},(0,i.kt)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))," instead."),(0,i.kt)("h2",{id:"scalemargins-option-has-been-removed-from-series-options"},(0,i.kt)("inlineCode",{parentName:"h2"},"scaleMargins")," option has been removed from series options"),(0,i.kt)("p",null,"Previously, you could do something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries({\n    scaleMargins: { /* options here */},\n});\n")),(0,i.kt)("p",null,"And ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMargins")," option was applied to series' price scale as ",(0,i.kt)("inlineCode",{parentName:"p"},"scaleMargins")," option."),(0,i.kt)("p",null,"Since v4 this option won't be applied to the price scale and will be just ignored (if you're using TypeScript you will get a compilation error)."),(0,i.kt)("p",null,"To fix this, you need to apply these options to series' price scale:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries();\n\nseries.priceScale().applyOptions({\n    scaleMargins: { /* options here */},\n});\n")),(0,i.kt)("h2",{id:"backgroundcolor-from-layout-options-has-been-removed"},(0,i.kt)("inlineCode",{parentName:"h2"},"backgroundColor")," from ",(0,i.kt)("inlineCode",{parentName:"h2"},"layout")," options has been removed"),(0,i.kt)("p",null,"If you want to have solid background color you need to use ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/LayoutOptions#background"},(0,i.kt)("inlineCode",{parentName:"a"},"background"))," property instead, e.g. instead of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    layout: {\n        backgroundColor: 'red',\n    },\n});\n")),(0,i.kt)("p",null,"use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    layout: {\n        background: {\n            type: ColorType.Solid,\n            color: 'red',\n        },\n    },\n});\n")),(0,i.kt)("h2",{id:"overlay-property-of-series-options-has-been-removed"},(0,i.kt)("inlineCode",{parentName:"h2"},"overlay")," property of series options has been removed"),(0,i.kt)("p",null,"Please follow ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/migrations/from-v2-to-v3#creating-overlay"},"the guide for migrating from v2 to v3")," where this option was deprecated."),(0,i.kt)("h2",{id:"pricescale-option-has-been-removed"},(0,i.kt)("inlineCode",{parentName:"h2"},"priceScale")," option has been removed"),(0,i.kt)("p",null,"Please follow ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/migrations/from-v2-to-v3#two-price-scales"},"the guide for migrating from v2 to v3"),"."),(0,i.kt)("h2",{id:"pricescale-method-of-chart-api-now-requires-to-provide-price-scale-id"},(0,i.kt)("inlineCode",{parentName:"h2"},"priceScale()")," method of chart API now requires to provide price scale id"),(0,i.kt)("p",null,"Before v4 you could write the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const priceScale = chart.priceScale();\n")),(0,i.kt)("p",null,"And in ",(0,i.kt)("inlineCode",{parentName:"p"},"priceScale")," you had a right price scale if it is visible and a left price scale otherwise."),(0,i.kt)("p",null,"Since v4 you have to provide an ID of price scale explicitly, e.g. if you want to get a right price scale you need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"'right'"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const rightPriceScale = chart.priceScale('right');\nconst leftPriceScale = chart.priceScale('left');\n")),(0,i.kt)("h2",{id:"drawticks-from-leftpricescale-and-rightpricescale-options-has-been-renamed-to-ticksvisible"},(0,i.kt)("inlineCode",{parentName:"h2"},"drawTicks")," from ",(0,i.kt)("inlineCode",{parentName:"h2"},"leftPriceScale")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"rightPriceScale")," options has been renamed to ",(0,i.kt)("inlineCode",{parentName:"h2"},"ticksVisible")),(0,i.kt)("p",null,"Since v4 you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ticksVisible")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"drawTicks"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    leftPriceScale: {\n        ticksVisible: false,\n    },\n    rightPriceScale: {\n        ticksVisible: false,\n    },\n});\n")),(0,i.kt)("p",null,"Also this option is off by default."),(0,i.kt)("h2",{id:"the-type-of-outbound-time-values-has-been-changed"},"The type of outbound time values has been changed"),(0,i.kt)("p",null,"Affected API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#subscribeclick"},(0,i.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeClick"))," (via ",(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/MouseEventParams#time"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventParams.time")),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#subscribecrosshairmove"},(0,i.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeCrosshairMove"))," (via ",(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/MouseEventParams#time"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventParams.time")),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/LocalizationOptions#timeformatter"},(0,i.kt)("inlineCode",{parentName:"a"},"LocalizationOptions.timeFormatter"))," (via argument of ",(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/#timeformatterfn"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeFormatterFn")),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/TimeScaleOptions#tickmarkformatter"},(0,i.kt)("inlineCode",{parentName:"a"},"TimeScaleOptions.tickMarkFormatter"))," (via argument of ",(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/#tickmarkformatter"},(0,i.kt)("inlineCode",{parentName:"a"},"TickMarkFormatter")),")")),(0,i.kt)("p",null,"Previously the type of an inbound time (a values you provide to the library, e.g. in ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#setdata"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi.setData")),") was different from an outbound one (a values the library provides to your code, e.g. an argument of ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/LocalizationOptions#timeformatter"},(0,i.kt)("inlineCode",{parentName:"a"},"LocalizationOptions.timeFormatter")),").\nSo the difference between types was that outbound time couldn't be a business day string."),(0,i.kt)("p",null,"Since v4 we improved our API in this matter and now the library will return exactly the same values back for all time-related properties."),(0,i.kt)("p",null,"Thus, if you provide a string to your series in ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#setdata"},(0,i.kt)("inlineCode",{parentName:"a"},"ISeriesApi.setData")),", you'll receive exactly the same value back:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"series.setData([\n    { time: '2001-01-01', value: 1 },\n]);\n\nchart.applyOptions({\n    localization: {\n        timeFormatter: time => time, // will be '2001-01-01' for the bar above\n    },\n    timeScale: {\n        tickMarkFormatter: time => time, // will be '2001-01-01' for the bar above\n    },\n});\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.time); // will be '2001-01-01' if you hover the bar above\n});\n\nchart.subscribeClick(param => {\n    console.log(param.time); // will be '2001-01-01' if you click on the bar above\n});\n")),(0,i.kt)("p",null,"Handling this breaking change depends on your needs and your handlers, but generally speaking you need to convert provided time to a desired format manually if it is required.\nFor example, you could use provided helpers to check the type of a time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    createChart,\n    isUTCTimestamp,\n    isBusinessDay,\n} from 'lightweight-charts';\n\nconst chart = createChart(document.body);\n\nchart.subscribeClick(param => {\n    if (param.time === undefined) {\n        // the time is undefined, i.e. there is no any data point where a time could be received from\n        return;\n    }\n\n    if (isUTCTimestamp(param.time)) {\n        // param.time is UTCTimestamp\n    } else if (isBusinessDay(param.time)) {\n        // param.time is a BusinessDay object\n    } else {\n        // param.time is a business day string in ISO format, e.g. `'2010-01-01'`\n    }\n});\n")),(0,i.kt)("h2",{id:"seriesprices-property-from-mouseeventparams-has-been-removed"},(0,i.kt)("inlineCode",{parentName:"h2"},"seriesPrices")," property from ",(0,i.kt)("inlineCode",{parentName:"h2"},"MouseEventParams")," has been removed"),(0,i.kt)("p",null,"Affected API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#subscribeclick"},(0,i.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeClick"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/IChartApi#subscribecrosshairmove"},(0,i.kt)("inlineCode",{parentName:"a"},"IChartApi.subscribeCrosshairMove")))),(0,i.kt)("p",null,"The property ",(0,i.kt)("inlineCode",{parentName:"p"},"seriesPrices")," of ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/MouseEventParams"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventParams"))," has been removed."),(0,i.kt)("p",null,"Instead, you can use ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/MouseEventParams#seriesdata"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseEventParams.seriesData"))," - it is pretty similar to the old ",(0,i.kt)("inlineCode",{parentName:"p"},"seriesPrices"),", but it contains series' data items instead of just prices:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"lineSeries.setData([{ time: '2001-01-01', value: 1 }]);\nbarSeries.setData([{ time: '2001-01-01', open: 5, high: 10, low: 1, close: 7 }]);\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.seriesData.get(lineSeries)); // { time: '2001-01-01', value: 1 } or undefined\n    console.log(param.seriesData.get(barSeries)); // { time: '2001-01-01', open: 5, high: 10, low: 1, close: 7 } or undefined\n});\n")),(0,i.kt)("h2",{id:"mouseeventparams-field-hoveredmarkerid-was-renamed-to-hoveredobjectid"},(0,i.kt)("inlineCode",{parentName:"h2"},"MouseEventParams")," field ",(0,i.kt)("inlineCode",{parentName:"h2"},"hoveredMarkerId")," was renamed to ",(0,i.kt)("inlineCode",{parentName:"h2"},"hoveredObjectId")),(0,i.kt)("p",null,"Since v4 you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"hoveredObjectId")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"hoveredMarkerId"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"chart.subscribeCrosshairMove(param => {\n    console.log(param.hoveredObjectId);\n});\n\nchart.subscribeClick(param => {\n    console.log(param.hoveredObjectId);\n});\n")))}m.isMDXComponent=!0}}]);