import{kW as a,a3 as m,a5 as l,b5 as h}from"./vendor.2b982caa.js";import{n as p}from"./BitmapTileContainer.10d7dfad.js";import{o as d}from"./BaseTileRenderer.6eccaa7f.js";import"./Bitmap.89365389.js";import"./utils.8743754b.js";import"./Utils.e28b12d1.js";import"./enums.0295eb81.js";import"./enums.2d9e6f64.js";import"./Texture.2e153252.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.8a7fb55b.js";import"./TileContainer.cb6214a8.js";import"./WGLContainer.348191c8.js";import"./pixelUtils.ae98cb91.js";import"./VertexArrayObject.f8de8d83.js";import"./ProgramTemplate.71c3140b.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new p(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:r}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=h(r),this.tiles.forEach(n=>{const e=n.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,n.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:r,maxDensity:n}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=s&&s.matrix||null,e.minDensity=r,e.maxDensity=n,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const E=o;export{E as default};
