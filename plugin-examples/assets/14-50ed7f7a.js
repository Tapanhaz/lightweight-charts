var f=Object.defineProperty;var U=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(U(a,typeof e!="symbol"?e+"":e,t),t);import{C as H}from"./lightweight-charts.production-5884abed.js";import{g as x}from"./sample-data-c7d89ab8.js";const S=""+new URL("image-89ed9c98.svg",import.meta.url).href;class v{constructor(e,t){i(this,"_source");i(this,"_view");this._source=e,this._view=t}draw(e){e.useMediaCoordinateSpace(t=>{const r=t.context,s=this._view._placement;if(s){if(!this._source._imgElement)throw new Error("Image element missing.");r.globalAlpha=this._source._options.alpha??1,r.drawImage(this._source._imgElement,s.x,s.y,s.width,s.height)}})}}class V{constructor(e){i(this,"_source");i(this,"_placement",null);this._source=e}zOrder(){return"bottom"}update(){this._placement=this._determinePlacement()}renderer(){return new v(this._source,this)}_determinePlacement(){if(!this._source._chart)return null;const e=this._source._chart.priceScale("left").width(),t=this._source._chart.timeScale().width(),r=e,s=this._source._chart.chartElement().clientHeight-this._source._chart.timeScale().height(),n=Math.round(t/2)+r,g=Math.round(s/2)+0,c=this._source._options.padding??0;let h=t-2*c,o=s-2*c;this._source._options.maxHeight&&(o=Math.min(o,this._source._options.maxHeight)),this._source._options.maxWidth&&(h=Math.min(h,this._source._options.maxWidth));const p=h/this._source._imageWidth,w=o/this._source._imageHeight,_=Math.min(p,w),m=this._source._imageWidth*_,l=this._source._imageHeight*_,E=n-.5*m,W=g-.5*l;return{x:E,y:W,height:l,width:m}}}class q{constructor(e,t){i(this,"_paneViews");i(this,"_imgElement",null);i(this,"_imageUrl");i(this,"_options");i(this,"_imageHeight",0);i(this,"_imageWidth",0);i(this,"_chart",null);i(this,"_containerElement",null);i(this,"_requestUpdate");this._imageUrl=e,this._options=t,this._paneViews=[new V(this)]}attached({chart:e,requestUpdate:t}){this._chart=e,this._requestUpdate=t,this._containerElement=e.chartElement(),this._imgElement=new Image,this._imgElement.onload=()=>{var r,s;this._imageHeight=((r=this._imgElement)==null?void 0:r.naturalHeight)??1,this._imageWidth=((s=this._imgElement)==null?void 0:s.naturalWidth)??1,this._paneViews.forEach(n=>n.update()),this.requestUpdate()},this._imgElement.src=this._imageUrl}detached(){this._imgElement=null}requestUpdate(){this._requestUpdate&&this._requestUpdate()}updateAllViews(){this._paneViews.forEach(e=>e.update())}paneViews(){return this._paneViews}}const d=document.querySelector("#chart");if(!d)throw new Error("Unable to located container div element");const I=window.chart=H(d,{autoSize:!0}),M=new q(S,{maxHeight:400,maxWidth:400,padding:50,alpha:.4}),u=I.addLineSeries(),P=x();u.setData(P);u.attachPrimitive(M);
