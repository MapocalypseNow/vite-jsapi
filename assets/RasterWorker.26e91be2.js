import{a,cJ as n,k as c,gH as m}from"./index.cdd966ee.js";import{g as i,W as f,T as p,D as u,j as S}from"./pixelUtils.6e8821d6.js";import{S as d,T as h,p as y}from"./RasterSymbolizer.9696ff80.js";import{l as x,i as O}from"./utils.e4bf859d.js";import{M as N,T as J,$ as g}from"./rasterProjectionHelper.26f96287.js";import{d as b,m as k,f as w}from"./dataUtils.1b77fcea.js";import"./colorUtils.bb6424b7.js";class E{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=b(e,t.type);return Promise.resolve(a(s)&&s.toJSON())}async decode(t){const e=await d(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?n.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(a(e)&&e.toJSON())}async updateSymbolizer(t){var e;this.symbolizer=h.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=x(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:n.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>a(s)?i.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return a(e)?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(a(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=y(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=f(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((s,o)=>{e.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(l=>l?new i(l):null),s=p(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=u(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=S(t.destDimension,t.gcsGrid),r=c(k(r,t.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await w(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=n.fromJSON(t.projectedExtent),s=n.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new m({steps:t.datumTransformationSteps})),(t.includeGCSGrid||N(e.spatialReference,s.spatialReference,o))&&await J();const r=t.rasterTransform?O(t.rasterTransform):null;return g({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{E as default};
