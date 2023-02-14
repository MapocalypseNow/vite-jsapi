import{a3 as _,a4 as m,a5 as q,a6 as U,h as N,s as B,b1 as S,b2 as M,b3 as P,b4 as G,Q as Y,t as z,E as V,H as L,a as E,C as $,b5 as k,b6 as j,g as W}from"./vendor.2b982caa.js";import{d as y,b as A,S as I}from"./Utils.e28b12d1.js";import{U as K}from"./MaterialKey.8a7fb55b.js";import{r as Q,s as D}from"./enums.0295eb81.js";import{C as h}from"./enums.2d9e6f64.js";const R=-1;let p=class extends U{constructor(s){super(s),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=N("mapview-transitions-duration"),this.effects=[]}set effect(s){if(this._get("effect")!==(s=s||"")){this._set("effect",s);try{this._transitionTo(x(s))}catch(e){this._transitionTo([]),B.getLogger(this.declaredClass).warn("Invalid Effect",{effect:s,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(s){this._updateForScale(s)}get transitioning(){return this._to!==null}canTransitionTo(s){try{return this.scale>0&&F(this._current,x(s),this.scale)}catch{return!1}}transitionStep(s,e){this._applyTimeTransition(s),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(s){this.scale>0&&F(this._current,s,this.scale)?(this._final=s,this._to=S(s),J(this._current,this._to,this.scale),this._from=S(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=s),this._set("effects",this._current[0]?S(this._current[0].effects):[])}_applyTimeTransition(s){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=s;const e=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const i=this._current[t],n=this._from[t],o=this._to[t];i.scale=X(n.scale,o.scale,e);for(let r=0;r<i.effects.length;r++){const c=i.effects[r],l=n.effects[r],d=o.effects[r];c.interpolate(l,d,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?S(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(s){if(this._set("scale",s),this._current.length===0)return;const e=this._current,t=this._current.length-1;let i,n,o=1;if(e.length===1||s>=e[0].scale)n=i=e[0].effects;else if(s<=e[t].scale)n=i=e[t].effects;else for(let r=0;r<t;r++){const c=e[r],l=e[r+1];if(c.scale>=s&&l.scale<=s){o=(s-c.scale)/(l.scale-c.scale),i=c.effects,n=l.effects;break}}for(let r=0;r<this.effects.length;r++)this.effects[r].interpolate(i[r],n[r],o)}};function x(s){const e=M(s)||[];return Z(e)?[{scale:R,effects:e}]:e}function F(s,e,t){var i,n,o,r;return!((i=s[0])!=null&&i.effects)||!((n=e[0])!=null&&n.effects)?!0:!((((o=s[0])==null?void 0:o.scale)===R||((r=e[0])==null?void 0:r.scale)===R)&&(s.length>1||e.length>1)&&t<=0)&&P(s[0].effects,e[0].effects)}function J(s,e,t){var l,d;const i=s.length>e.length?s:e,n=s.length>e.length?e:s,o=n[n.length-1],r=(l=o==null?void 0:o.scale)!=null?l:t,c=(d=o==null?void 0:o.effects)!=null?d:[];for(let a=n.length;a<i.length;a++)n.push({scale:r,effects:[...c]});for(let a=0;a<i.length;a++)n[a].scale=n[a].scale===R?t:n[a].scale,i[a].scale=i[a].scale===R?t:i[a].scale,G(n[a].effects,i[a].effects)}function X(s,e,t){return s+(e-s)*t}function Z(s){const e=s[0];return!!e&&"type"in e}_([m()],p.prototype,"_to",void 0),_([m()],p.prototype,"duration",void 0),_([m({value:""})],p.prototype,"effect",null),_([m({readOnly:!0})],p.prototype,"effects",void 0),_([m({readOnly:!0})],p.prototype,"hasEffects",null),_([m({value:0})],p.prototype,"scale",null),_([m({readOnly:!0})],p.prototype,"transitioning",null),p=_([q("esri.layers.effects.EffectView")],p);const ee=1/N("mapview-transitions-duration");class te extends Y{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return z(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=V(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=V(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){var e,t;(e=this._fadeInResolver)==null||e.call(this),this._fadeInResolver=null,(t=this._fadeOutResolver)==null||t.call(this),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var e;(e=this.parent)==null||e.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const i=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===i)this.computedVisible=this.visible;else{const o=e*ee;this.computedOpacity=n>i?Math.max(i,n-o):Math.min(i,n+o),this.computedVisible=this.computedOpacity>0;const r=i===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}class oe extends te{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){var e,t;return(t=(e=this._effectView)==null?void 0:e.effects)!=null?t:null}get effect(){var e,t;return(t=(e=this._effectView)==null?void 0:e.effect)!=null?t:""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new p),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}beforeRender(e){super.beforeRender(e);for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{dvs:L()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}class g{static getStorageSpec(e){return null}static createOrUpdateRendererSchema(e,t){return E(e)&&e.type==="default"?e:{type:"default"}}static getVariation(e){return{}}static getVariationHash(e){return 0}}g.type="default",g.programSpec=null;class b extends g{static getStorageSpec({attributes:e}){return{visualVariables:!1,attributes:e!=null?e:null}}static _createRendererSchema(){return{type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(e,t){const{attributes:i,dotValue:n,referenceScale:o,dotSize:r,dotBlendingEnabled:c,seed:l,backgroundColor:d}=t,a=E(e)&&e.type==="dot-density"?e:this._createRendererSchema();a.dotValue=n,a.dotSize=r,a.dotScale=o,a.dotBlending=c,a.seed=l;const{colors:w,activeDots:v,backgroundColor:f}=a;for(let u=0;u<Q;u++){const C=u>=i.length?null:i[u].color;y(w,C,4*u)}for(let u=0;u<8;u++)v[u]=u<t.attributes.length?1:0;return y(f,d),a}static getVariation(e){return{ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}}b.type="dot-density",b.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.SHORT},{location:1,name:"a_id",count:3,type:h.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:h.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:h.FLOAT}]}};class O extends g{static getStorageSpec({field:e,valueExpression:t}){return{visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return{type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(e,t){const{radius:i,minDensity:n,maxDensity:o,referenceScale:r,field:c,valueExpression:l,colorStops:d}=t,a=o-n,w=c||l?1:0,v=d.map(({color:C,ratio:H})=>`${H}:${C.toString()}`).join();let f,u=!0;return E(e)&&e.type==="heatmap"?(f=e,u=v!==e.gradientHash):f=this._createRendererSchema(),f.radius=$(i),f.minDensity=n,f.densityRange=a,f.referenceScale=r,f.isFieldActive=w,u&&(f.gradient=k(d),f.gradientHash=v),f}}O.type="heatmap",O.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.SHORT},{location:1,name:"a_vertexOffset",count:2,type:h.SHORT},{location:4,name:"a_id",count:4,type:h.UNSIGNED_BYTE}]}};class T extends g{static getStorageSpec({attributes:e}){return{visualVariables:!0,attributes:e!=null?e:null}}static _createRendererSchema(){return{type:"pie-chart",colors:new Float32Array(4*D),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(e,t){const{attributes:i,defaultColor:n,holePercentage:o,othersCategory:r,outline:c}=t,l=E(e)&&e.type==="pie-chart"?e:this._createRendererSchema();for(let d=0;d<D;d++){const a=d>=i.length?new j([0,0,0,0]):i[d].color;y(l.colors,a,4*d)}return y(l.defaultColor,n),y(l.othersColor,r==null?void 0:r.color),y(l.outlineColor,c==null?void 0:c.color),l.outlineWidth=$((c==null?void 0:c.width)||0),l.holePercentage=o,l.sectorThreshold=(r==null?void 0:r.threshold)||0,l.numberOfFields=i.length,l}static getVariation(e){return{numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}T.type="pie-chart",T.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:h.SHORT},{location:1,name:"a_vertexOffset",count:2,type:h.SHORT},{location:2,name:"a_texCoords",count:2,type:h.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:h.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:h.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:h.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:h.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:h.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:h.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};function le(s,e){if(s.type!==e)throw new W("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${e}" but found type "${s.type}"`)}function ce(s){switch(s==null?void 0:s.type){case"dot-density":return b;case"heatmap":return O;case"pie-chart":return T;default:return g}}function he(s){const{geometryType:e,symbologyType:t}=K.load(s);switch(e){case A.FILL:if(t===I.DOT_DENSITY)return b;break;case A.MARKER:switch(t){case I.HEATMAP:return O;case I.PIE_CHART:return T}}return g}export{p as a,ce as c,g as e,oe as i,he as p,te as r,le as s};
