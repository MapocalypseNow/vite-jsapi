import{_ as c,$ as f,a0 as _,g as y,cq as I,a as v,cK as V,cL as T,cM as q,R as Q,bC as b,m,bF as d,s as S}from"./index.cdd966ee.js";import{t as F,o as w,n as g}from"./imageUtils.c4b763b5.js";import{y as U,u as C}from"./LayerView.b86660cd.js";import{i as x}from"./RefreshableLayerView.d2794e1d.js";import{s as R,a as L}from"./drapedUtils.ead7f0f2.js";import"./BitmapTileContainer.8c03c801.js";import"./Bitmap.e783b63a.js";import"./utils.ec501445.js";import"./Utils.19635f88.js";import"./enums.0295eb81.js";import"./enums.2d9e6f64.js";import"./Texture.07a8008f.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.62f7ff4c.js";import"./TileContainer.199d54bd.js";import"./WGLContainer.502f3b80.js";import"./pixelUtils.6e8821d6.js";import"./VertexArrayObject.7c57eb61.js";import"./ProgramTemplate.f12547a6.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";const P=e=>{let t=class extends e{async fetchPopupFeatures(s,r){const{layer:l}=this;if(!s)throw new y("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:l});if(l.type!=="tile")throw new y("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:l.type});const h=this.get("view.scale"),n=l.allSublayers.toArray().filter(i=>{const a=i.minScale===0||h<=i.minScale,o=i.maxScale===0||h>=i.maxScale;return i.popupTemplate&&i.popupEnabled&&i.visible&&a&&o});return I(n.map(async i=>{const a=i.createQuery(),o=v(r)?r.event:null,p=R({renderer:i.renderer,event:o});return a.geometry=this.createFetchPopupFeaturesQueryGeometry(s,p),a.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(a)).features})).then(i=>[].concat(...i.map(a=>a.value).filter(Boolean)))}};return c([f()],t.prototype,"layer",void 0),t=c([_("esri.layers.mixins.TileLayerView")],t),t},$=[0,0];let u=class extends P(x(F(U(C)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new V(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new T({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,s)=>this.fetchTile(t,s)}),this._tileStrategy=new q({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(Q(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return b((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return L(e,t,this.view)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)))}isUpdating(){var e,t;return(t=(e=this._fetchQueue)==null?void 0:e.updating)!=null?t:!1}acquireTile(e){const t=this._bitmapView.createTile(e),s=t.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords($,t.key),s.resolution=this._tileInfoView.getTileResolution(t.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e,r)}catch(i){if(!m(i)&&!this.resampling)return w(this._tileInfoView.tileInfo.size);if(l<3){const a=this._tileInfoView.getTileParentId(e.id);if(a){const o=new d(a),p=await this.fetchTile(o,{...t,resamplingLevel:l+1});return g(this._tileInfoView,p,o,e)}}throw i}const h=new d(0,0,0,0);let n;try{if(await s.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:r}),h.level!==e.level&&!this.resampling)return w(this._tileInfoView.tileInfo.size);n=await this._fetchImage(h,r)}catch(i){if(m(i))throw i;n=await this._fetchImage(e,r)}return this.resampling?g(this._tileInfoView,n,h,e):n}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){m(t)||S.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};c([f()],u.prototype,"_fetchQueue",void 0),c([f()],u.prototype,"resampling",null),u=c([_("esri.views.2d.layers.TileLayerView2D")],u);const re=u;export{re as default};
