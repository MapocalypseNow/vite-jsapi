import{i2 as g,i3 as m,ee as _,ef as S,ed as T,eg as b,Y as w,i4 as O,ie as R,iJ as U,a as d,aM as W,aL as f,bP as $,U as h,dG as P,g as u,er as j,fX as L,cv as B,hs as I,_ as a,$ as o,cT as M,dR as D,co as k,ej as A,a0 as C,cu as N}from"./index.cdd966ee.js";import{s as J}from"./ArcGISCachedService.17773de8.js";import{E as G,y as q,z as E}from"./SublayersOwner.3f74f597.js";import"./TilemapCache.3d73d785.js";import"./Version.3b70b955.js";import"./sublayerUtils.450cb3ff.js";const y=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let t=class extends g(G(m(_(S(J(q(T(b(w(O(R(U(N))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=d(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(W).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&f.fromJSON(e)}writeSublayers(e,r,s,i){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),l=[],c={writeSublayerStructure:!1,...i};p.forEach(n=>{const v=n.write({},c);l.push(v)}),l.some(n=>Object.keys(n).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>$(r).path):null}fetchTile(e,r,s,i={}){const{signal:p}=i,l=this.getTileUrl(e,r,s),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return h(l,c).then(n=>n.data)}async fetchImageBitmapTile(e,r,s,i={}){const{signal:p}=i,l=this.getTileUrl(e,r,s),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},n=await h(l,c);return createImageBitmap(n.data)}getTileUrl(e,r,s){const i=!this.tilemapCache&&this.supportsBlankTile,p=P({...this.parsedUrl.query,blankTile:!i&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl.path}/tile/${e}/${r}/${s}${p?"?"+p:""}`}_fetchService(e){return new Promise((r,s)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const i=j(this.parsedUrl.path);if(d(i)&&i.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");h(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,s)}).then(r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!L(this.url))return this._fetchServerVersion(this.url,e).then(s=>{this.read({currentVersion:s})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!B(e))return Promise.reject();const s=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return h(s,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(i=>{if(i.data&&i.data.currentVersion)return i.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let s=0,i=y.length;s<i;s++)if(r=y[s],r.toLowerCase().includes(e))return I("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,s=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||s?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};a([o({readOnly:!0})],t.prototype,"attributionDataUrl",null),a([o({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),a([o({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),a([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),a([o({type:Boolean})],t.prototype,"resampling",void 0),a([o()],t.prototype,"sourceJSON",void 0),a([o({type:f})],t.prototype,"spatialReference",void 0),a([M("spatialReference",["spatialReference","tileInfo"])],t.prototype,"readSpatialReference",null),a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),a([o({readOnly:!0})],t.prototype,"sublayers",void 0),a([D("sublayers",{layers:{type:[E]}})],t.prototype,"writeSublayers",null),a([o({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),a([o()],t.prototype,"tileServers",null),a([k("tileServers")],t.prototype,"castTileServers",null),a([o({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),a([o(A)],t.prototype,"url",void 0),t=a([C("esri.layers.TileLayer")],t),t.prototype.fetchTile.__isDefault__=!0;const X=t;export{X as default};
