import{_ as s,$ as m,c$ as F,a0 as b,g,m as M,s as $,R as E,cJ as R}from"./index.f1f1f1c7.js";import{a as I}from"./BitmapContainer.52767d8e.js";import{y as V,u as q}from"./LayerView.a16502a0.js";import{v as U}from"./ExportStrategy.fba188e3.js";import{i as W}from"./RefreshableLayerView.42ecba72.js";import{l as L}from"./ExportWMSImageParameters.8856f927.js";import"./WGLContainer.e3748ee7.js";import"./enums.2d9e6f64.js";import"./pixelUtils.dc9d81f1.js";import"./utils.2f1fe8d1.js";import"./Utils.179e2134.js";import"./enums.0295eb81.js";import"./Texture.d26936f9.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.92c8cd8f.js";import"./VertexArrayObject.998efc15.js";import"./ProgramTemplate.2e051bd0.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./Bitmap.c95e60b9.js";const j=t=>{let e=class extends t{initialize(){this.exportImageParameters=new L({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:n}=a;if(!n)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:o,height:p,x:d,y:l}=u;if(!(i&&o&&p))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:o,height:p});return a.fetchFeatureInfo(i,o,p,d,l)}};return s([m()],e.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],e.prototype,"exportImageVersion",null),s([m()],e.prototype,"layer",void 0),s([m(F)],e.prototype,"timeExtent",void 0),e=s([b("esri.layers.mixins.WMSLayerView")],e),e};let h=class extends j(W(V(q))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{M(e)||$.getLogger(this.declaredClass).error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:r}=t;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new U({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(E(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:r}=this,{x:a,y:n}=t,{spatialReference:u}=e;let i=null,o=0,p=0;if(r.children.some(C=>{const{width:x,height:f,resolution:w,x:c,y}=C,v=c+w*x,P=y-w*f;return a>=c&&a<=v&&n<=y&&n>=P&&(i=new R({xmin:c,ymin:P,xmax:v,ymax:y,spatialReference:u}),o=x,p=f,!0)}),!i)return null;const d=i.width/o,l=Math.round((a-i.xmin)/d),S=Math.round((i.ymax-n)/d);return{extent:i,width:o,height:p,x:l,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,a){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,...a})}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([b("esri.views.2d.layers.WMSLayerView2D")],h);const se=h;export{se as default};