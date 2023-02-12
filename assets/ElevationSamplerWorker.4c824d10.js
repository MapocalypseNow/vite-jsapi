import{a as l,h}from"./index.f1f1f1c7.js";import{h as m}from"./PooledRBush.70da5f62.js";import{k as u}from"./georeference.c801a3eb.js";import"./mat3f64.6d32a1d7.js";import"./mat4f64.ff2a477c.js";import"./quat.91cc4bc3.js";import"./quatf64.4ae3e6f1.js";import"./BufferView.eeb3a82a.js";import"./vec33.84391a80.js";class M{async createIndex(t,r){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m;const a=this._createMeshData(t),n=l(r)?await r.invoke("createIndexThread",a,{transferList:e}):this.createIndexThread(a).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(t){const r=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,r,t.components.map(a=>new Uint32Array(a))):this._createIndexAllThread(e,r)}_createIndexAllThread(t,r){const e=new Array(r.length/9);let a=0;for(let n=0;n<r.length;n+=9)e[a++]=c(r,n+0,n+3,n+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,r,e){let a=0;for(const s of e)a+=s.length/3;const n=new Array(a);let p=0;for(const s of e)for(let i=0;i<s.length;i+=3)n[p++]=c(r,3*s[i+0],3*s[i+1],3*s[i+2]);return t.load(n),{result:t.toJSON()}}_createMeshData(t){const r=(t.transform?u({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:r}:{position:r,components:t.components.map(e=>e.faces)}}_createPooledRBush(){return new m(9,h("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function c(o,t,r,e){return{minX:Math.min(o[t+0],o[r+0],o[e+0]),maxX:Math.max(o[t+0],o[r+0],o[e+0]),minY:Math.min(o[t+1],o[r+1],o[e+1]),maxY:Math.max(o[t+1],o[r+1],o[e+1]),p0:[o[t+0],o[t+1],o[t+2]],p1:[o[r+0],o[r+1],o[r+2]],p2:[o[e+0],o[e+1],o[e+2]]}}export{M as default};