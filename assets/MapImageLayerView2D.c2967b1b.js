import{a as P,as as k,bY as z,_ as n,$ as h,dO as D,c1 as W,cJ as M,aL as Z,dP as X,a0 as F,cp as q,dQ as Y,cS as O,cT as K,dR as ee,dS as te,dF as re,dT as ie,dU as se,dV as oe,U as ae,c$ as ne,dq as le,dc as pe,cQ as he,g as G,al as ue,dW as ye,dX as me,ci as de,t as ce,h as fe,cq as ge,d3 as we,m as ve,s as be,R as A,ct as xe}from"./index.cdd966ee.js";import{a as $e}from"./BitmapContainer.ce16eb4c.js";import{y as _e,u as Ie}from"./LayerView.b86660cd.js";import{o as Se}from"./BaseGraphicContainer.4b91077d.js";import{n as Ee}from"./HighlightGraphicContainer.c17f4c61.js";import{v as Pe}from"./ExportStrategy.c573b163.js";import{i as Re,r as Fe}from"./scaleUtils.6a659349.js";import{c as je}from"./ExportImageParameters.ccefb91e.js";import{n as V}from"./floorFilterUtils.05eb8c6a.js";import{s as T,a as Ne}from"./drapedUtils.ead7f0f2.js";import{i as Oe}from"./sublayerUtils.450cb3ff.js";import{d as Ve,s as Ue}from"./popupUtils.6a9f7a49.js";import{i as Ge}from"./RefreshableLayerView.d2794e1d.js";import"./WGLContainer.502f3b80.js";import"./enums.2d9e6f64.js";import"./pixelUtils.6e8821d6.js";import"./utils.ec501445.js";import"./Utils.19635f88.js";import"./enums.0295eb81.js";import"./Texture.07a8008f.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.62f7ff4c.js";import"./VertexArrayObject.7c57eb61.js";import"./ProgramTemplate.f12547a6.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./ExpandedCIM.6eb0b294.js";import"./BidiEngine.d8bba3fc.js";import"./Rect.95b0fd2e.js";import"./quantizationUtils.78b8ca28.js";import"./GeometryUtils.4f19e772.js";import"./floatRGBA.07667d79.js";import"./normalizeUtilsSync.f8dce869.js";import"./projectionSupport.627b4ce4.js";import"./json.879c9adc.js";import"./FeatureContainer.9768583c.js";import"./TileContainer.199d54bd.js";import"./visualVariablesUtils.372992d2.js";import"./visualVariablesUtils.b89780bc.js";import"./Matcher.43ee31dd.js";import"./tileUtils.85f52fa9.js";import"./TileClipper.14d86807.js";import"./Geometry.d049a63c.js";import"./devEnvironmentUtils.d8d0484c.js";import"./schemaUtils.12e5ffd6.js";import"./createSymbolSchema.a9c3bbd0.js";import"./util.7bcb48f7.js";import"./ComputedAttributeStorage.ca48981a.js";import"./centroid.522aecae.js";import"./vec3f32.1121a836.js";import"./Bitmap.e783b63a.js";const L=r=>r.spatialReference.wkid||JSON.stringify(r.spatialReference);function Ae(r,e){const{dpi:t,gdbVersion:i,geometry:s,geometryPrecision:o,height:m,layerOption:u,mapExtent:a,maxAllowableOffset:l,returnFieldName:p,returnGeometry:y,returnUnformattedValues:g,returnZ:_,spatialReference:x,timeExtent:$,tolerance:c,width:S}=r.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:v}=Te(r),U=e&&P(e.geometry)?e.geometry:null,b={geometryPrecision:o,maxAllowableOffset:l,returnFieldName:p,returnGeometry:y,returnUnformattedValues:g,returnZ:_,tolerance:c},E=U&&U.toJSON()||s;if(b.imageDisplay=`${S},${m},${t}`,i&&(b.gdbVersion=i),E&&(delete E.spatialReference,b.geometry=JSON.stringify(E),b.geometryType=k(E)),x?b.sr=x.wkid||JSON.stringify(x):E&&E.spatialReference?b.sr=L(E):a&&a.spatialReference&&(b.sr=L(a)),b.time=$?[$.start,$.end].join(","):null,a){const{xmin:C,ymin:H,xmax:Q,ymax:B}=a;b.mapExtent=`${C},${H},${Q},${B}`}return f&&(b.layerDefs=f),w&&!f&&(b.dynamicLayers=w),b.layers=u==="popup"?"visible":u,v&&!w&&(b.layers+=`:${v.join(",")}`),b}function Te(r){var x,$;const{mapExtent:e,floors:t,width:i,sublayers:s,layerIds:o,layerOption:m,gdbVersion:u}=r,a=($=(x=s==null?void 0:s.find(c=>c.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,l=m==="popup",p={},y=Re({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),g=[],_=c=>{const S=y===0,w=c.minScale===0||y<=c.minScale,f=c.maxScale===0||y>=c.maxScale;if(c.visible&&(S||w&&f))if(c.sublayers)c.sublayers.forEach(_);else{if((o==null?void 0:o.includes(c.id))===!1||l&&(!c.popupTemplate||!c.popupEnabled))return;g.unshift(c)}};if(s==null||s.forEach(_),s&&!g.length)p.layerIds=[];else{const c=Oe(g,a,u),S=g.map(w=>{const f=V(t,w);return w.toExportImageJSON(f)});if(c)p.dynamicLayers=JSON.stringify(S);else{if(s){let f=g.map(({id:v})=>v);o&&(f=f.filter(v=>o.includes(v))),p.layerIds=f}else o!=null&&o.length&&(p.layerIds=o);const w=Le(t,g);if(P(w)&&w.length){const f={};for(const v of w)v.definitionExpression&&(f[v.id]=v.definitionExpression);Object.keys(f).length&&(p.layerDefs=JSON.stringify(f))}}}return p}function Le(r,e){const t=!!(r!=null&&r.length),i=e.filter(s=>s.definitionExpression!=null||t&&s.floorInfo!=null);return i.length?i.map(s=>{const o=V(r,s),m=z(o,s.definitionExpression);return{id:s.id,definitionExpression:m}}):null}var N;let d=N=class extends q{constructor(r){super(r),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(r){return Y(N,r)}};n([h({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([h()],d.prototype,"floors",void 0),n([h({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([h({types:D,json:{read:W,write:!0}})],d.prototype,"geometry",void 0),n([h({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([h({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([h({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([h({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([h({type:M,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([h({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([h({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([h({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([h({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([h({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([h({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([h({type:Z,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([h()],d.prototype,"sublayers",void 0),n([h({type:X,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([h({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([h({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=N=n([F("esri.rest.support.IdentifyParameters")],d);const J=d;let I=class extends q{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(r,e){return O.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(r,e){if(!r)return;const{attributes:t,geometry:i}=r;t&&(e.attributes={...t}),P(i)&&(e.geometry=i.toJSON(),e.geometryType=te.toJSON(i.type))}};n([h({type:String,json:{write:!0}})],I.prototype,"displayFieldName",void 0),n([h({type:O})],I.prototype,"feature",void 0),n([K("feature",["attributes","geometry"])],I.prototype,"readFeature",null),n([ee("feature")],I.prototype,"writeFeature",null),n([h({type:Number,json:{write:!0}})],I.prototype,"layerId",void 0),n([h({type:String,json:{write:!0}})],I.prototype,"layerName",void 0),I=n([F("esri.rest.support.IdentifyResult")],I);const Me=I;async function qe(r,e,t){const i=(e=Ce(e)).geometry?[e.geometry]:[],s=re(r);return s.path+="/identify",ie(i).then(o=>{const m=Ae(e,{geometry:o&&o[0]}),u=se({...s.query,f:"json",...m}),a=oe(u,t);return ae(s.path,a).then(Je).then(l=>He(l,e.sublayers))})}function Je(r){const e=r.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map(t=>Me.fromJSON(t)),e}function Ce(r){return r=J.from(r)}function He(r,e){if(!(e!=null&&e.length))return r;const t=new Map;function i(s){t.set(s.id,s),s.sublayers&&s.sublayers.forEach(i)}e.forEach(i);for(const s of r.results)s.feature.sourceLayer=t.get(s.layerId);return r}let j=null;const Qe=r=>{let e=class extends r{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new le,this.updateHighlightedFeatures=pe(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){this.exportImageParameters=new je({layer:this.layer}),this.handles.add([he(()=>this.highlightGraphics,"change",t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t.added).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)})])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,i){var m,u,a,l,p,y;const{layer:s}=this;if(!t)throw new G("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const o=(a=(u=(m=this.layer.capabilities)==null?void 0:m.operations)==null?void 0:u.supportsQuery)!=null?a:!0;if(!(((y=(p=(l=this.layer.capabilities)==null?void 0:l.operations)==null?void 0:p.supportsIdentify)!=null?y:!0)&&this.layer.version>=10.5)&&!o)throw new G("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:s});return o?this._fetchPopupFeaturesUsingQueries(t,i):this._fetchPopupFeaturesUsingIdentify(t,i)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}async _updateHighlightedFeaturesSymbols(t){for(const i of t){const s="renderer"in i.sourceLayer&&i.sourceLayer.renderer;"geometryType"in i.sourceLayer&&i.sourceLayer.geometryType==="point"&&s&&"getSymbolAsync"in s&&s.getSymbolAsync(i).then(async o=>{var a;let m="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:null;const u="visualVariables"in s&&((a=s.visualVariables)==null?void 0:a.find(l=>l.type==="size"));u&&(j||(j=(await ue(()=>import("./index.cdd966ee.js").then(function(l){return l.k_}),["assets/index.cdd966ee.js","assets/index.279f609b.css"])).getSize),m=j(u,i,{view:this.view.type,scale:this.view.scale,shape:o.type==="simple-marker"?o.style:null})),this.highlightGraphics.includes(i)&&(i.symbol=new ye({style:"square",size:m,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i.visible=!0,this.highlightGraphicUpdated(i,"symbol"))})}}async _updateHighlightedFeaturesGeometries(t){this._highlightGeometriesResolution=t;const i=this.highlightGraphics;if(!i.length||!this.layer.capabilities.operations.supportsQuery)return;const s=this._getTargetResolution(t),o=new Map;for(const a of i)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>s){const l=a.sourceLayer;me(o,l,()=>new Map).set(a.getObjectId(),a)}const m=Array.from(o,([a,l])=>{const p=a.createQuery();return p.objectIds=[...l.keys()],p.outFields=[a.objectIdField],p.returnGeometry=!0,p.maxAllowableOffset=s,p.outSpatialReference=this.view.spatialReference,a.queryFeatures(p)}),u=await Promise.all(m);if(!this.destroyed)for(const{features:a}of u)for(const l of a){const p=l.sourceLayer,y=o.get(p).get(l.getObjectId());y&&this.highlightGraphics.includes(y)&&(y.geometry=l.geometry,this.highlightGraphicUpdated(y,"geometry"),this._featuresResolutions.set(y,s))}}_getTargetResolution(t){const i=t*de(this.view.spatialReference),s=i/16;return s<=10?0:t/i*s}async _fetchPopupFeaturesUsingIdentify(t,i){const s=await this._createIdentifyParameters(t,i);if(ce(s))return[];const{results:o}=await qe(this.layer.parsedUrl,s);return o.map(m=>m.feature)}async _createIdentifyParameters(t,i){const{floors:s,spatialReference:o,scale:m}=this.view,u=P(i)?i.event:null,a=await this._collectPopupProviders(this.layer.sublayers,m,i);if(!a.length)return null;await Promise.all(a.map(({sublayer:x})=>x.load().catch(()=>{})));const l=Math.min(fe("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((x,$)=>$.renderer?T({renderer:$.renderer,event:u}):x,2)),p=this.createFetchPopupFeaturesQueryGeometry(t,l),y=Fe(m,o),g=Math.round(p.width/y),_=new M({xmin:p.center.x-y*g,ymin:p.center.y-y*g,xmax:p.center.x+y*g,ymax:p.center.y+y*g,spatialReference:p.spatialReference});return new J({floors:s,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:_,returnGeometry:!0,spatialReference:o,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:l,width:g})}async _fetchPopupFeaturesUsingQueries(t,i){const s=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,i),o=P(i)?i.event:null,m=s.map(async({sublayer:u,popupTemplate:a})=>{var S,w;await u.load().catch(()=>{});const l=u.createQuery(),p=T({renderer:u.renderer,event:o}),y=this.createFetchPopupFeaturesQueryGeometry(t,p);if(l.geometry=y,l.outFields=await Ve(u,a),l.timeExtent=this.timeExtent,"floors"in this.view){const f=(w=(S=this.view)==null?void 0:S.floors)==null?void 0:w.clone(),v=V(f,u);P(v)&&(l.where=l.where?`(${l.where}) AND (${v})`:v)}const g=this._getTargetResolution(y.width/p),_=await this._loadArcadeModules(a),x=u.geometryType==="point"||_&&_.arcadeUtils.hasGeometryOperations(a);x||(l.maxAllowableOffset=g);const{features:$}=await u.queryFeatures(l),c=x?0:g;for(const f of $)this._featuresResolutions.set(f,c);return $});return(await ge(m)).reverse().reduce((u,a)=>a.value?[...u,...a.value]:u,[]).filter(u=>u!=null)}async _collectPopupProviders(t,i,s){const o=[],m=async a=>{const l=a.minScale===0||i<=a.minScale,p=a.maxScale===0||i>=a.maxScale;if(a.visible&&l&&p){if(a.sublayers)a.sublayers.forEach(m);else if(a.popupEnabled){const y=Ue(a,{...s,defaultPopupTemplateEnabled:!1});P(y)&&o.unshift({sublayer:a,popupTemplate:y})}}},u=t.toArray().reverse().map(m);return await Promise.all(u),o}_loadArcadeModules(t){var i;if(((i=t.expressionInfos)==null?void 0:i.length)||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression"))return we()}};return n([h()],e.prototype,"highlightGraphics",void 0),n([h()],e.prototype,"exportImageParameters",void 0),n([h({readOnly:!0})],e.prototype,"exportImageVersion",null),n([h()],e.prototype,"layer",void 0),n([h()],e.prototype,"suspended",void 0),n([h(ne)],e.prototype,"timeExtent",void 0),e=n([F("esri.views.layers.MapImageLayerView")],e),e};let R=class extends Qe(Ge(_e(Ie))){update(r){this.strategy.update(r).catch(e=>{ve(e)||be.getLogger(this.declaredClass).error(e)}),r.stationary&&this.updateHighlightedFeatures(r.state.resolution),this._highlightView.processUpdate(r)}attach(){const{imageMaxWidth:r,imageMaxHeight:e,version:t}=this.layer,i=t>=10.3,s=t>=10;this._bitmapContainer=new $e,this.container.addChild(this._bitmapContainer),this._highlightView=new Se({view:this.view,graphics:this.highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Ee(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container),this.strategy=new Pe({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.handles.add(A(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(A(()=>{var o;return(o=this.view)==null?void 0:o.floors},()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(r){let e=null;if(r instanceof O?e=[r]:xe.isCollection(r)&&r.length>0?e=r.toArray():Array.isArray(r)&&r.length>0&&(e=r),e=e==null?void 0:e.filter(Boolean),!e||!e.length)return{remove:()=>{}};for(const t of e)"geometryType"in t.sourceLayer&&t.sourceLayer.geometryType==="point"&&(t.visible=!1);return this.highlightGraphics.addMany(e),{remove:()=>{this.highlightGraphics.removeMany(e)}}}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}createFetchPopupFeaturesQueryGeometry(r,e){return Ne(r,e,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}highlightGraphicUpdated(r,e){this._highlightView.graphicUpdateHandler({graphic:r,property:e})}fetchImage(r,e,t,i){return this.layer.fetchImage(r,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}fetchImageBitmap(r,e,t,i){return this.layer.fetchImageBitmap(r,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};n([h()],R.prototype,"strategy",void 0),n([h()],R.prototype,"updating",void 0),R=n([F("esri.views.2d.layers.MapImageLayerView2D")],R);const Qt=R;export{Qt as default};
