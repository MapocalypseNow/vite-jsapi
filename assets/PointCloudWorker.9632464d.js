import{t as O,a as d,h3 as x,aQ as A,fV as k,h4 as D}from"./vendor.2b982caa.js";import{S as F}from"./quat.4ffb42d8.js";import{g as R,f as U,c as V,I as z,e as B}from"./I3SBinaryReader.4004bcc6.js";import{r as J,n as S}from"./vec3f32.1121a836.js";import{a as N,b as T,d as _}from"./PointCloudUniqueValueRenderer.121b369e.js";import"./mat3f64.6d32a1d7.js";import"./quatf64.4ae3e6f1.js";import"./VertexAttribute.42396f25.js";function q(f,t,l,o){const{rendererJSON:u,isRGBRenderer:p}=f;let n=null,a=null;if(t&&p)n=t;else if(t&&u.type==="pointCloudUniqueValueRenderer"){a=N.fromJSON(u);const e=a.colorUniqueValueInfos;n=new Uint8Array(3*o);const s=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=(s?s(t[r]):t[r])+"";for(let i=0;i<e.length;i++)if(e[i].values.includes(c)){n[3*r]=e[i].color.r,n[3*r+1]=e[i].color.g,n[3*r+2]=e[i].color.b;break}}}else if(t&&u.type==="pointCloudStretchRenderer"){a=T.fromJSON(u);const e=a.stops;n=new Uint8Array(3*o);const s=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=s?s(t[r]):t[r],i=e.length-1;if(c<e[0].value)n[3*r]=e[0].color.r,n[3*r+1]=e[0].color.g,n[3*r+2]=e[0].color.b;else if(c>=e[i].value)n[3*r]=e[i].color.r,n[3*r+1]=e[i].color.g,n[3*r+2]=e[i].color.b;else for(let b=1;b<e.length;b++)if(c<e[b].value){const m=(c-e[b-1].value)/(e[b].value-e[b-1].value);n[3*r]=e[b].color.r*m+e[b-1].color.r*(1-m),n[3*r+1]=e[b].color.g*m+e[b-1].color.g*(1-m),n[3*r+2]=e[b].color.b*m+e[b-1].color.b*(1-m);break}}}else if(t&&u.type==="pointCloudClassBreaksRenderer"){a=_.fromJSON(u);const e=a.colorClassBreakInfos;n=new Uint8Array(3*o);const s=v(a.fieldTransformType);for(let r=0;r<o;r++){const c=s?s(t[r]):t[r];for(let i=0;i<e.length;i++)if(c>=e[i].minValue&&c<=e[i].maxValue){n[3*r]=e[i].color.r,n[3*r+1]=e[i].color.g,n[3*r+2]=e[i].color.b;break}}}else{n=new Uint8Array(3*o);for(let e=0;e<n.length;e++)n[e]=255}if(l&&a&&a.colorModulation){const e=a.colorModulation.minValue,s=a.colorModulation.maxValue,r=.3;for(let c=0;c<o;c++){const i=l[c],b=i>=s?1:i<=e?r:r+(1-r)*(i-e)/(s-e);n[3*c]=b*n[3*c],n[3*c+1]=b*n[3*c+1],n[3*c+2]=b*n[3*c+2]}}return n}function E(f,t){if(f.encoding==null||f.encoding===""){const l=R(t,f);if(O(l.vertexAttributes.position))return;const o=U(t,l.vertexAttributes.position),u=l.header.fields,p=[u.offsetX,u.offsetY,u.offsetZ],n=[u.scaleX,u.scaleY,u.scaleZ],a=o.length/3,e=new Float64Array(3*a);for(let s=0;s<a;s++)e[3*s]=o[3*s]*n[0]+p[0],e[3*s+1]=o[3*s+1]*n[1]+p[1],e[3*s+2]=o[3*s+2]*n[2]+p[2];return e}if(f.encoding==="lepcc-xyz")return V(t).result}function g(f,t,l){return d(f)&&f.attributeInfo.useElevation?P(t,l):d(f)?z(f.attributeInfo.storageInfo,f.buffer,l):null}function P(f,t){const l=new Float64Array(t);for(let o=0;o<t;o++)l[o]=f[3*o+2];return l}function X(f,t,l,o,u){const p=f.length/3;let n=0;for(let a=0;a<p;a++){let e=!0;for(let s=0;s<o.length&&e;s++){const{filterJSON:r}=o[s],c=u[s].values[a];switch(r.type){case"pointCloudValueFilter":{const i=r.mode==="exclude";r.values.includes(c)===i&&(e=!1);break}case"pointCloudBitfieldFilter":{const i=M(r.requiredSetBits),b=M(r.requiredClearBits);(c&i)===i&&(c&b)==0||(e=!1);break}case"pointCloudReturnFilter":{const i=15&c,b=c>>>4&15,m=b>1,C=i===1,y=i===b;let I=!1;for(const h of r.includedReturns)if(h==="last"&&y||h==="firstOfMany"&&C&&m||h==="lastOfMany"&&y&&m||h==="single"&&!m){I=!0;break}I||(e=!1);break}}}e&&(l[n]=a,f[3*n]=f[3*a],f[3*n+1]=f[3*a+1],f[3*n+2]=f[3*a+2],t[3*n]=t[3*a],t[3*n+1]=t[3*a+1],t[3*n+2]=t[3*a+2],n++)}return n}function v(f){return f==null||f==="none"?null:f==="low-four-bit"?t=>15&t:f==="high-four-bit"?t=>(240&t)>>4:f==="absolute-value"?t=>Math.abs(t):f==="modulo-ten"?t=>t%10:null}function M(f){let t=0;for(const l of f||[])t|=1<<l;return t}class Y{transform(t){const l=this._transform(t),o=[l.points.buffer,l.rgb.buffer];d(l.pointIdFilterMap)&&o.push(l.pointIdFilterMap.buffer);for(const u of l.attributes)"buffer"in u.values&&x(u.values.buffer)&&u.values.buffer!==l.rgb.buffer&&o.push(u.values.buffer);return Promise.resolve({result:l,transferList:o})}_transform(t){const l=E(t.schema,t.geometryBuffer);let o=l.length/3,u=null;const p=[],n=g(t.primaryAttributeData,l,o);d(t.primaryAttributeData)&&n&&p.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:n});const a=g(t.modulationAttributeData,l,o);d(t.modulationAttributeData)&&a&&p.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:a});let e=q(t.rendererInfo,n,a,o);if(t.filterInfo&&t.filterInfo.length>0&&d(t.filterAttributesData)){const r=t.filterAttributesData.map(c=>{const i=g(c,l,o),b={attributeInfo:c.attributeInfo,values:i};return p.push(b),b});u=new Uint32Array(o),o=X(l,e,u,t.filterInfo,r)}for(const r of t.userAttributesData){const c=g(r,l,o);p.push({attributeInfo:r.attributeInfo,values:c})}3*o<e.length&&(e=new Uint8Array(e.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(l,o,t.elevationOffset);const s=this._transformCoordinates(l,o,t.obb,A.fromJSON(t.inSR),A.fromJSON(t.outSR));return{obb:t.obb,points:s,rgb:e,attributes:p,pointIdFilterMap:u}}_transformCoordinates(t,l,o,u,p){if(!k(t,u,0,t,p,0,l))throw new Error("Can't reproject");const n=J(o.center[0],o.center[1],o.center[2]),a=S(),e=S();F(w,o.quaternion);const s=new Float32Array(3*l);for(let r=0;r<l;r++)a[0]=t[3*r]-n[0],a[1]=t[3*r+1]-n[1],a[2]=t[3*r+2]-n[2],D(e,a,w),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(e[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(e[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(e[2])),s[3*r]=a[0],s[3*r+1]=a[1],s[3*r+2]=a[2];return s}_applyElevationOffsetInPlace(t,l,o){if(o!==0)for(let u=0;u<l;u++)t[3*u+2]+=o}}const w=B();function $(){return new Y}export{$ as default};
