import{_ as t,$ as a,ar as S,dR as O,a0 as u,cp as $,du as b,ib as x,jc as N,aY as L,it as R,ct as M,bP as I,U as A,ep as w,ed as j,ee as J,ef as U,i3 as D,eg as P,ie as V,am as K,cQ as E,dn as q,bQ as z,aM as G,a as Q,t as k,g as d,cT as C,ii as F,cu as Y}from"./index.f1f1f1c7.js";import{g as m}from"./persistable.285e4062.js";import{N as B,L as v}from"./SceneService.d7b9c0f4.js";import{s as H,l as W,u as X,m as Z}from"./I3SLayerDefinitions.c9a10c4d.js";import"./multiOriginJSONSupportUtils.38b69b9c.js";import"./originUtils.2d0aad75.js";import"./resourceUtils.ce895b8b.js";var h;let n=h=class extends ${constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!b(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new x("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const l=new S;N(e,l,o.layer.spatialReference),i[r]=l.toJSON(o)}else i[r]=e.toJSON(o);delete i[r].spatialReference}clone(){return new h({geometry:L(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([u("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends R(M.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const r=new p;for(const o of e)r.add(c.fromJSON(o,i));return r}static async fromUrl(e,i,r){const o={url:I(e),origin:"service"},l=await A(e,{responseType:"json",signal:w(r,"signal")}),_=i.toJSON(),f=[];for(const g of l.data)f.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:_}},o));return new p({url:e,items:f})}};t([a({type:String})],y.prototype,"url",void 0),y=p=t([u("esri.layers.support.SceneModifications")],y);const T=y;let s=class extends B(j(J(U(D(P(V(Y))))))){constructor(...e){super(...e),this._handles=new K,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(E(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,q))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,r){this._modificationsSource={url:z(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){G(r)}if(await this._fetchService(i),Q(this._modificationsSource)){const r=await T.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!k(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],s.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],s.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],s.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([a({type:H,readOnly:!0})],s.prototype,"nodePages",void 0),t([a({type:[W],readOnly:!0})],s.prototype,"materialDefinitions",void 0),t([a({type:[X],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),t([a({type:[Z],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:T}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],s.prototype,"modifications",void 0),t([C(["web-scene","portal-item"],"modifications")],s.prototype,"readModifications",null),t([a(F)],s.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),s=t([u("esri.layers.IntegratedMeshLayer")],s);const ne=s;export{ne as default};