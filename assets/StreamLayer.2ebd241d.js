import{_ as e,$ as i,a0 as g,cp as R,iK as $,iL as j,i2 as P,iM as T,i3 as O,i4 as _,ed as E,ee as F,ef as D,eg as N,iJ as k,aL as v,g as p,a as L,aM as A,iN as u,jH as C,s as J,j8 as U,dl as G,al as V,g_ as y,i7 as M,d2 as q,U as z,iO as Q,cr as W,g8 as H,cJ as K,iP as X,iQ as Y,iR as Z,iE as B,gE as m,jN as ee,jO as te,i9 as ie,dj as re,iT as se,i8 as oe,cT as h,iU as ne,ej as ae,jP as le,jQ as pe,ia as de,cu as ye}from"./index.f1f1f1c7.js";var c;let l=c=class extends R{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new c({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([i({type:Number,json:{write:!0}})],l.prototype,"age",void 0),e([i({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),e([i({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),e([i({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=c=e([g("esri.layers.support.PurgeOptions")],l);const b=l,f=de();let t=class extends $(j(P(T(O(_(E(F(D(N(k(ye))))))))))){constructor(...r){super(...r),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new b,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(r,s){return typeof r=="string"?{url:r,...s}:r}load(r){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=L(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},r).catch(A).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){u(r,this.fieldsIndex),this._set("renderer",r)}readRenderer(r,s,o){const n=(s=s.layerDefinition||s).drawingInfo&&s.drawingInfo.renderer||void 0;if(n){const a=C(n,s,o)||void 0;return a||J.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),a}if(s.defaultSymbol)return s.types&&s.types.length?new U({defaultSymbol:d(s.defaultSymbol,s,o),field:s.typeIdField,uniqueValueInfos:s.types.map(a=>({id:a.id,symbol:d(a.symbol,a,o)}))}):new G({symbol:d(s.defaultSymbol,s,o)})}async connect(r){const[{createConnection:s}]=await Promise.all([V(()=>import("./createConnection.2866ab26.js"),["assets/createConnection.2866ab26.js","assets/index.f1f1f1c7.js","assets/index.279f609b.css"]),this.load()]),o=y.toJSON(this.geometryType),{customParameters:n=null,definitionExpression:a=null,geometryDefinition:w=null,maxReconnectionAttempts:I=0,maxReconnectionInterval:S=20,spatialReference:x=this.spatialReference}=r||this.createConnectionParameters();return s(this.parsedUrl,this.spatialReference,x,o,{geometry:w,where:a},I,S,n)}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(r){return M(this,r)}createQuery(){const r=new q;return r.returnGeometry=!0,r.outFields=["*"],r.where=this.definitionExpression||"1=1",r}getFieldDomain(r,s){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===r&&(o=n.domain),!!o)),o}getField(r){return this.fieldsIndex.get(r)}serviceSupportsSpatialReference(r){return!0}async _fetchService(r){var s,o;if(this.webSocketUrl){if(!((s=this.timeInfo)!=null&&s.trackIdField))throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:n}=await z(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:r});this.sourceJSON=n}return this.sourceJSON={...(o=this.sourceJSON)!=null?o:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),u(this.renderer,this.fieldsIndex),Q(this.timeInfo,this.fieldsIndex),W(this,{origin:"service"})}};e([i({type:String})],t.prototype,"copyright",void 0),e([i({readOnly:!0})],t.prototype,"defaultPopupTemplate",null),e([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],t.prototype,"definitionExpression",void 0),e([i({type:String})],t.prototype,"displayField",void 0),e([i({type:H})],t.prototype,"elevationInfo",void 0),e([i(f.fields)],t.prototype,"fields",void 0),e([i(f.fieldsIndex)],t.prototype,"fieldsIndex",void 0),e([i({type:K})],t.prototype,"geometryDefinition",void 0),e([i({type:y.apiValues,json:{read:{reader:y.read}}})],t.prototype,"geometryType",void 0),e([i(X)],t.prototype,"labelsVisible",void 0),e([i({type:[Y],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:Z},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),e([i(B)],t.prototype,"legendEnabled",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i({type:m})],t.prototype,"maxReconnectionAttempts",void 0),e([i({type:m})],t.prototype,"maxReconnectionInterval",void 0),e([i(ee)],t.prototype,"maxScale",void 0),e([i(te)],t.prototype,"minScale",void 0),e([i({type:String})],t.prototype,"objectIdField",void 0),e([i({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],t.prototype,"operationalLayerType",void 0),e([i(ie)],t.prototype,"popupEnabled",void 0),e([i({type:re,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),e([i({type:b})],t.prototype,"purgeOptions",void 0),e([i({types:se,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:oe,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],t.prototype,"renderer",null),e([h("service","renderer",["drawingInfo.renderer","defaultSymbol"]),h("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],t.prototype,"readRenderer",null),e([i(ne)],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i()],t.prototype,"sourceJSON",void 0),e([i({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],t.prototype,"spatialReference",void 0),e([i({json:{read:!1}})],t.prototype,"type",void 0),e([i(ae)],t.prototype,"url",void 0),e([i({type:Number})],t.prototype,"updateInterval",void 0),e([i({type:String})],t.prototype,"webSocketUrl",void 0),t=e([g("esri.layers.StreamLayer")],t);const d=le({types:pe}),ue=t;export{ue as default};