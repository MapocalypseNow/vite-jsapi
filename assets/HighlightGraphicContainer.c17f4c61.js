import{_ as s,a0 as o}from"./index.cdd966ee.js";import{I as a}from"./Utils.19635f88.js";import{t as d}from"./BaseGraphicContainer.4b91077d.js";import{_ as h}from"./enums.2d9e6f64.js";let e=class extends d{doRender(r){r.drawPhase===a.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.update(),!this.children.some(n=>n.hasData))return;this.attributeView.bindTextures(r.context),super.renderChildren(r);const{painter:i}=r,t=i.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};e=s([o("esri.views.2d.layers.support.HighlightGraphicContainer")],e);const u=e;export{u as n};
