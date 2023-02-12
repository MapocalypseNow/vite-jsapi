import{m as o,s as p,_ as r,$ as a,a0 as m}from"./index.cdd966ee.js";import{a as n}from"./BitmapContainer.ce16eb4c.js";import{y as h,u as d}from"./LayerView.b86660cd.js";import{v as c}from"./ExportStrategy.c573b163.js";import{i as u}from"./RefreshableLayerView.d2794e1d.js";import"./WGLContainer.502f3b80.js";import"./enums.2d9e6f64.js";import"./pixelUtils.6e8821d6.js";import"./utils.ec501445.js";import"./Utils.19635f88.js";import"./enums.0295eb81.js";import"./Texture.07a8008f.js";import"./VertexElementDescriptor.1fdca6da.js";import"./MaterialKey.62f7ff4c.js";import"./VertexArrayObject.7c57eb61.js";import"./ProgramTemplate.f12547a6.js";import"./StyleDefinition.d56936e4.js";import"./config.82550349.js";import"./GeometryUtils.51c4032a.js";import"./earcut.afc1d357.js";import"./Bitmap.e783b63a.js";let t=class extends u(h(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImage(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const I=t;export{I as default};
