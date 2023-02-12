import{a as Eo}from"./devEnvironmentUtils.d8d0484c.js";import{t as k,a as p,kB as Io,kC as No,kD as tr,F as ot,aW as kr,en as wi,E as I,ab as Xe,fw as Dt,gJ as cr,gI as Do,gk as Fo,ff as Se,a4 as vr,fe as Ai,G as K,fi as Ae,a5 as Je,s as gr,g as xr,z as Me,cb as Vt,af as Wt,gR as jt,al as wt,ck as zo,b2 as Vo,j as Bt,N as Bo,jk as Wr,cm as Go,gC as ct,kE as dt,l as jr,kF as Uo,v as Ho,w as ko,fk as qr,gj as At,eI as Wo,eh as Fe,hD as jo,kg as qo,dJ as Xo,kG as Ko,kH as Yo,fg as Tr,V as Jo,f as Zo,gD as Xr,kI as Ci,h as Mi,e as Kr,k as bt,kJ as br,fo as _t,kK as dr,kL as Qo,_ as x,fj as ie,gQ as qt,fh as ea,r as ta,kM as ur,fa as ra,fb as ia,e0 as oa,kN as aa,cF as Oi,U as na,aM as Pi,ki as Yr,kO as $i,jq as Gt,ep as sa,fC as Jr,fn as la,kh as Zr}from"./index.cdd966ee.js";import{e as Xt}from"./mat3f64.6d32a1d7.js";import{e as _r,o as Ri}from"./mat4f64.ff2a477c.js";import{c as hr,x as Ze,u as Li,i as Qe,L as ca,O as Qr,E as da}from"./BufferView.1a723d40.js";import{t as ua,r as ha,f as ei,e as ma}from"./vec33.c7ddb665.js";import{u as ti,n as pa,m as fa,a as va,o as qe,r as Be,b as ga,c as xa,d as ri,e as Ta,t as ba,i as _a,f as Sa,g as ya}from"./DefaultMaterial_COLOR_GAMMA.b044e227.js";import{r as Ei}from"./Version.3b70b955.js";import{t as Ii}from"./requestImageUtils.90225bc2.js";import{a as Ft,c as rr,O as mr,b as Oe,o as wa,r as Aa,C as W,W as Sr,_ as yr,d as rt,n as Pe,e as Ct,f as Ca,A as Ma,h as Oa,l as Pa,g as $a,i as Ra,S as La}from"./OrderIndependentTransparency.4d1575c0.js";import{e as oe,v as Ea}from"./Util.7b7ff3cb.js";import{s as Ni,R as Di}from"./sphere.9d65532d.js";import{O as h}from"./VertexAttribute.42396f25.js";import{u as _e,P as Ve,L as Ue,C as ce,F as Ia,D as Ke,M as ii,G as oi,Y as Na,V as Da,E as ft,I as $e,O as ne}from"./enums.2d9e6f64.js";import{E as Ce,n as Fa,a as za}from"./Texture.07a8008f.js";import{_ as Va,a as Ba,E as Ga,x as Ua,n as Ha}from"./VertexArrayObject.7c57eb61.js";import{t as de}from"./VertexElementDescriptor.1fdca6da.js";import{T as Fi}from"./InterleavedLayout.82f34512.js";import{r as ka,n as Wa}from"./vec3f32.1121a836.js";import{S as ja}from"./quat.c8624365.js";import{e as qa}from"./quatf64.4ae3e6f1.js";import{r as be}from"./symbolColorUtils.d4a32adc.js";function ut(t){if(k(t))return null;const e=p(t.offset)?t.offset:Io,r=p(t.rotation)?t.rotation:0,i=p(t.scale)?t.scale:No,o=tr(1,0,0,0,1,0,e[0],e[1],1),a=tr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=tr(i[0],0,0,0,i[1],0,0,0,1),l=ot();return kr(l,a,n),kr(l,o,l),l}class Xa{constructor(e,r,i,o,a){this.name=e,this.stageResources=r,this.lodThreshold=i,this.pivotOffset=o,this.numberOfVertices=a}}class wr{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this.center=I(),this._children=void 0,oe(e.length>=1),oe(i.length%this._numIndexPerPrimitive==0),oe(i.length>=e.length*this._numIndexPerPrimitive),oe(o.size===3||o.size===4);const{data:a,size:n}=o,l=e.length;let d=n*i[this._numIndexPerPrimitive*e[0]];ze.clear(),ze.push(d),this.bbMin=Xe(a[d],a[d+1],a[d+2]),this.bbMax=Dt(this.bbMin);for(let u=0;u<l;++u){const m=this._numIndexPerPrimitive*e[u];for(let f=0;f<this._numIndexPerPrimitive;++f){d=n*i[m+f],ze.push(d);let b=a[d];this.bbMin[0]=Math.min(b,this.bbMin[0]),this.bbMax[0]=Math.max(b,this.bbMax[0]),b=a[d+1],this.bbMin[1]=Math.min(b,this.bbMin[1]),this.bbMax[1]=Math.max(b,this.bbMax[1]),b=a[d+2],this.bbMin[2]=Math.min(b,this.bbMin[2]),this.bbMax[2]=Math.max(b,this.bbMax[2])}}cr(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let u=0;u<ze.length;++u){d=ze.getItemAt(u);const m=a[d]-this.center[0],f=a[d+1]-this.center[1],b=a[d+2]-this.center[2],A=m*m+f*f+b*b;if(A<=c)continue;const $=Math.sqrt(A),g=.5*($-this.radius);this.radius=this.radius+g,c=this.radius*this.radius;const S=g/$;this.center[0]+=m*S,this.center[1]+=f*S,this.center[2]+=b*S}ze.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Do(this.bbMin,this.bbMax)>1){const e=cr(I(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let c=0;c<8;++c)o[c]=0;const{data:a,size:n}=this.position;for(let c=0;c<r;++c){let u=0;const m=this._numIndexPerPrimitive*this.primitiveIndices[c];let f=n*this.indices[m],b=a[f],A=a[f+1],$=a[f+2];for(let g=1;g<this._numIndexPerPrimitive;++g){f=n*this.indices[m+g];const S=a[f],v=a[f+1],P=a[f+2];S<b&&(b=S),v<A&&(A=v),P<$&&($=P)}b<e[0]&&(u|=1),A<e[1]&&(u|=2),$<e[2]&&(u|=4),i[c]=u,++o[u]}let l=0;for(let c=0;c<8;++c)o[c]>0&&++l;if(l<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=o[c]>0?new Uint32Array(o[c]):void 0;for(let c=0;c<8;++c)o[c]=0;for(let c=0;c<r;++c){const u=i[c];d[u][o[u]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)d[c]!==void 0&&(this._children[c]=new wr(d[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){ze.prune()}}const ze=new wi({deallocator:null});class Ar{constructor(){this.id=Fo()}unload(){}}var St;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(St||(St={}));function Ka(t){return t?{p0:Dt(t.p0),p1:Dt(t.p1),p2:Dt(t.p2)}:{p0:I(),p1:I(),p2:I()}}function Ya(t,e,r){return Se(ir,e,t),Se(ai,r,t),vr(Ai(ir,ir,ai))/2}new Ni(Ea);new Ni(()=>Ka());const ir=I(),ai=I();function Ja(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;K(r,0,0,0),K(ye,0,0,0);let a=0,n=0;for(let l=0;l<e.length-2;l+=3){const d=e[l+0]*i,c=e[l+1]*i,u=e[l+2]*i;K(pe,o[d+0],o[d+1],o[d+2]),K($t,o[c+0],o[c+1],o[c+2]),K(Rt,o[u+0],o[u+1],o[u+2]);const m=Ya(pe,$t,Rt);m?(Ae(pe,pe,$t),Ae(pe,pe,Rt),Je(pe,pe,1/3*m),Ae(r,r,pe),a+=m):(Ae(ye,ye,pe),Ae(ye,ye,$t),Ae(ye,ye,Rt),n+=3)}return(n!==0||a!==0)&&(a!==0?(Je(r,r,1/a),!0):n!==0&&(Je(r,ye,1/n),!0))}function Za(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;K(r,0,0,0);let a=-1,n=0;for(let l=0;l<e.length;l++){const d=e[l]*i;a!==d&&(r[0]+=o[d+0],r[1]+=o[d+1],r[2]+=o[d+2],n++),a=d}return n>1&&Je(r,r,1/n),n>0}const pe=I(),$t=I(),Rt=I(),ye=I();class Kt extends Ar{constructor(e,r=[],i=Ft.Triangle,o=null,a=-1){super(),this._primitiveType=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=a,this.type=St.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,l]of e)l&&this._vertexAttributes.set(n,{...l});if(r==null||r.length===0){const n=Qa(this._vertexAttributes),l=ti(n);this.edgeIndicesLength=this.edgeIndicesLength<0?n:this.edgeIndicesLength;for(const d of this._vertexAttributes.keys())this._indices.set(d,l)}else for(const[n,l]of r)l&&(this._indices.set(n,pa(l)),n===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new Kt([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:r,_indices:i}=e;return this._vertexAttributes.forEach((o,a)=>r.set(a,o)),this._indices.forEach((o,a)=>i.set(a,o)),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r.data=Array.from(r.data),r.exclusive=!0),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return k(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===Ft.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return Ja(i,r,e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return Za(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION);if(!e||e.length===0)return null;const r=this.primitiveType===Ft.Triangle?3:1;oe(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=ti(e.length/r),o=this.vertexAttributes.get(h.POSITION);return o?new wr(i,r,e,o):null}}function Qa(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}class Cr{}function s(t,...e){let r="";for(let i=0;i<e.length;i++)r+=t[i]+e[i];return r+=t[t.length-1],r}(function(t){function e(i){return Math.round(i).toString()}function r(i){return i.toPrecision(8)}t.int=e,t.float=r})(s||(s={}));function Mr(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var z;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(z||(z={}));class Y{constructor(e,r,i,o,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[z.Pass]:null,[z.Draw]:null},p(i)&&p(o)&&(this.bind[i]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class Q extends Y{constructor(e,r){super(e,"vec4",z.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}}const zi=gr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Vi{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){zi.error("Trying to include shader module multiple times with different sets of options.");const o=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&o.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&o.add(a);o.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}}class Mt extends Vi{constructor(){super(...arguments),this.vertex=new ni,this.fragment=new ni,this.attributes=new rn,this.varyings=new on,this.extensions=new it,this.constants=new G}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),d=e==="vertex"?nn:an,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${c.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${l.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const l=n.bind[e];p(l)&&i.set(n.name,l)}),this.fragment.uniforms.entries.forEach(n=>{const l=n.bind[e];p(l)&&i.set(n.name,l)});const o=Array.from(i.values()),a=o.length;return(n,l,d)=>{for(let c=0;c<a;++c)o[c](r,n,l,d)}}}class en{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(k(e))zi.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new xr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>p(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class tn{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ni extends Vi{constructor(){super(...arguments),this.uniforms=new en,this.code=new tn,this.constants=new G}get builder(){return this}}class rn{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class on{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class it{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?it.ALLOWLIST_VERTEX:it.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}it.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],it.ALLOWLIST_VERTEX=[];class G{constructor(){this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=G._numberToFloatStr(i);break;case"int":o=G._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${G._numberToFloatStr(i[0])},                            ${G._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${G._numberToFloatStr(i[0])},                            ${G._numberToFloatStr(i[1])},                            ${G._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${G._numberToFloatStr(i[0])},                            ${G._numberToFloatStr(i[1])},                            ${G._numberToFloatStr(i[2])},                            ${G._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])},                             ${G._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${G._numberToIntStr(i[0])},                             ${G._numberToIntStr(i[1])},                             ${G._numberToIntStr(i[2])},                             ${G._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>G._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const an=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,nn=`precision highp float;
precision highp sampler2D;`,Or="Size",Yt="InvSize";function et(t,e,r=!1,i=0){if(t.hasWebGL2Context){const o=s`vec2(textureSize(${e}, ${s.int(i)}))`;return r?"(1.0 / "+o+")":o}return r?e+Yt:e+Or}function sn(t,e,r,i=null,o=0){if(t.hasWebGL2Context)return s`texelFetch(${e}, ivec2(${r}), ${s.int(o)})`;let a=s`texture2D(${e}, ${r} * `;return a+=i?s`(${i}))`:s`${e+Yt})`,a}class le extends Y{constructor(e,r){super(e,"vec2",z.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}}var j;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(j||(j={}));class re extends Y{constructor(e,r){super(e,"sampler2D",z.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}}function He(t,e,r=j.None){const i=[new re(t,e)];if(r&j.Size){const o=t+Or;i.push(new le(o,(a,n)=>{const l=e(a,n);return p(l)?Me(si,l.descriptor.width,l.descriptor.height):Vt}))}if(r&j.InvSize){const o=t+Yt;i.push(new le(o,(a,n)=>{const l=e(a,n);return p(l)?Me(si,1/l.descriptor.width,1/l.descriptor.height):Vt}))}return i}const si=Wt();class Bi extends Cr{constructor(){super(...arguments),this.color=jt(1,1,1,1)}}function ln(){const t=new Mt;return t.include(Mr),t.fragment.uniforms.add([new re("tex",e=>e.texture),new Q("uColor",e=>e.color)]),t.fragment.code.add(s`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Bi,build:ln},Symbol.toStringTag,{value:"Module"}));function cn(){if(k(or)){const t=e=>zo(`esri/libs/basisu/${e}`);or=wt(()=>import("./basis_transcoder.229eaac8.js"),["assets/basis_transcoder.229eaac8.js","assets/_commonjsHelpers.773c2c82.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return or}let or;var Ge;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Ge||(Ge={}));let ue=null,Lt=null;async function Gi(){return k(Lt)&&(Lt=cn(),ue=await Lt),Lt}function dn(t,e){if(k(ue))return t.byteLength;const r=new ue.BasisFile(new Uint8Array(t)),i=Hi(r)?Ui(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function un(t,e){if(k(ue))return t.byteLength;const r=new ue.KTX2File(new Uint8Array(t)),i=ki(r)?Ui(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Ui(t,e,r,i,o){const a=Va(e?_e.COMPRESSED_RGBA8_ETC2_EAC:_e.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function Hi(t){return t.getNumImages()>=1&&!t.isUASTC()}function ki(t){return t.getFaces()>=1&&t.isETC1S()}async function hn(t,e,r){k(ue)&&(ue=await Gi());const i=new ue.BasisFile(new Uint8Array(r));if(!Hi(i))return null;i.startTranscoding();const o=Wi(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>i.transcodeImage(l,0,a,n,0,0));return i.close(),i.delete(),o}async function mn(t,e,r){k(ue)&&(ue=await Gi());const i=new ue.KTX2File(new Uint8Array(r));if(!ki(i))return null;i.startTranscoding();const o=Wi(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>i.transcodeImage(l,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function Wi(t,e,r,i,o,a,n,l){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,m]=d?i?[Ge.ETC2_RGBA,_e.COMPRESSED_RGBA8_ETC2_EAC]:[Ge.ETC1_RGB,_e.COMPRESSED_RGB8_ETC2]:c?i?[Ge.BC3_RGBA,_e.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ge.BC1_RGB,_e.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ge.RGBA32,Ve.RGBA],f=e.hasMipmap?r:Math.min(1,r),b=[];for(let S=0;S<f;S++)b.push(new Uint8Array(n(S,u))),l(S,u,b[S]);const A=b.length>1,$=A?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,g={...e,samplingMode:$,hasMipmap:A,internalFormat:m,width:o,height:a};return new Ce(t,g,{type:"compressed",levels:b})}const ht=gr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),pn=542327876,fn=131072,vn=4;function Pr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function gn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const xn=Pr("DXT1"),Tn=Pr("DXT3"),bn=Pr("DXT5"),_n=31,Sn=0,yn=1,wn=2,An=3,Cn=4,Mn=7,On=20,Pn=21;function $n(t,e,r){var l;const{textureData:i,internalFormat:o,width:a,height:n}=Vo(Rn(r,(l=e.hasMipmap)!=null?l:!1));return e.samplingMode=i.levels.length>1?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=a,e.height=n,new Ce(t,e,i)}function Rn(t,e){const r=new Int32Array(t,0,_n);if(r[Sn]!==pn)return ht.error("Invalid magic number in DDS header"),null;if(!(r[On]&vn))return ht.error("Unsupported format, must contain a FourCC code"),null;const i=r[Pn];let o,a;switch(i){case xn:o=8,a=_e.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Tn:o=16,a=_e.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case bn:o=16,a=_e.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ht.error("Unsupported FourCC code:",gn(i)),null}let n=1,l=r[Cn],d=r[An];(3&l)==0&&(3&d)==0||(ht.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const c=l,u=d;let m,f;r[wn]&fn&&e!==!1&&(n=Math.max(1,r[Mn])),n===1||Bt(l)&&Bt(d)||(ht.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let b=r[yn]+4;const A=[];for(let $=0;$<n;++$)f=(l+3>>2)*(d+3>>2)*o,m=new Uint8Array(t,b,f),A.push(m),b+=f,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:A},internalFormat:a,width:c,height:u}}const Ot=new Map([[h.POSITION,0],[h.NORMAL,1],[h.UV0,2],[h.COLOR,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[h.MODEL,8],[h.MODELNORMAL,12],[h.MODELORIGINHI,11],[h.MODELORIGINLO,15]]);new de(h.POSITION,3,ce.FLOAT,0,12);new de(h.POSITION,3,ce.FLOAT,0,20),new de(h.UV0,2,ce.FLOAT,12,20);new de(h.POSITION,3,ce.FLOAT,0,32),new de(h.NORMAL,3,ce.FLOAT,12,32),new de(h.UV0,2,ce.FLOAT,24,32);new de(h.POSITION,3,ce.FLOAT,0,16),new de(h.COLOR,4,ce.UNSIGNED_BYTE,12,16);const Ln=[new de(h.POSITION,2,ce.FLOAT,0,8)],En=[new de(h.POSITION,2,ce.FLOAT,0,16),new de(h.UV0,2,ce.FLOAT,8,16)];class In extends Ba{}function Nn(t,e=Ln,r=Ot,i=-1,o=1){let a=null;return e===En?a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):a=new Float32Array([i,i,o,i,i,o,o,o]),new In(t,r,{geometry:e},{geometry:Ga.createVertex(t,Ia.STATIC_DRAW,a)})}class ee extends Ar{constructor(e,r){super(),this._data=e,this.type=St.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Bo,this._passParameters=new Bi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ke.REPEAT,t:Ke.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||rr.STRETCH,this.estimatedTexMemRequired=ee._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;k(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Wr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Go(e.src)||Wr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(k(e))return 0;if(ct(e)||dt(e))return r.encoding===ee.KTX2_ENCODING?un(e,r.mipmap):r.encoding===ee.BASIS_ENCODING?dn(e,r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ee._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:ii.TEXTURE_2D,pixelFormat:Ve.RGBA,dataType:oi.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Ue.LINEAR_MIPMAP_LINEAR:Ue.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(p(this._glTexture))return this._glTexture;if(p(this._loadingPromise))return this._loadingPromise;const i=this._data;return k(i)?(this._glTexture=new Ce(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(ct(i)||dt(i))&&this.params.encoding===ee.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,i)):(ct(i)||dt(i))&&this.params.encoding===ee.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,i)):(ct(i)||dt(i))&&this.params.encoding===ee.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,i)):dt(i)?this._loadFromPixelData(e,i):ct(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this._data instanceof HTMLVideoElement)||k(this._glTexture)||this._data.readyState<vt.HAVE_CURRENT_DATA||i===this._data.currentTime)return i;if(p(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,r,o,a,n,this._glTexture)}else{const{videoWidth:o,videoHeight:a}=this._data,{width:n,height:l}=this._glTexture.descriptor;o!==n||a!==l?this._glTexture.updateData(0,0,0,Math.min(o,n),Math.min(a,l),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=$n(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>mn(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>hn(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){oe(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?Ve.LUMINANCE:this.params.components===3?Ve.RGB:Ve.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new Ce(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async o=>{const a=await Ii(i,{signal:o});return jr(o),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async o=>{const a=await Uo(i,i.src,!1,o);return jr(o),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=vt.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(o=>new Promise((a,n)=>{const l=()=>{i.removeEventListener("loadeddata",d),i.removeEventListener("error",c),Wo(u)},d=()=>{i.readyState>=vt.HAVE_CURRENT_DATA&&(l(),a(this._loadFromImage(e,i,r)))},c=m=>{l(),n(m||new xr("Failed to load video"))};i.addEventListener("loadeddata",d),i.addEventListener("error",c);const u=Ho(o,()=>c(ko()))}))}_loadFromImage(e,r,i){const o=ee._getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?Ve.RGB:Ve.RGBA,!this._requiresPowerOfTwo(e,a)||Bt(o.width)&&Bt(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new Ce(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,o,a,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}_requiresPowerOfTwo(e,r){const i=Ke.CLAMP_TO_EDGE,o=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return!Fa(e.gl)&&(r.hasMipmap||!o)}_makePowerOfTwoTexture(e,r,i,o,a){const{width:n,height:l}=i,d=qr(n),c=qr(l);let u;switch(o.width=d,o.height=c,this.params.powerOfTwoResizeMode){case rr.PAD:o.textureCoordinateScaleFactor=[n/d,l/c],u=new Ce(e,o),u.updateData(0,0,0,n,l,r);break;case rr.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,o,a());break;default:At(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,o){const a=new Ce(e,i),n=new Ua(e,{colorTarget:Na.TEXTURE,depthStencilTarget:Da.NONE},a),l=new Ce(e,{target:ii.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:oi.UNSIGNED_BYTE,wrapMode:Ke.CLAMP_TO_EDGE,samplingMode:Ue.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),d=Nn(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,o,n,d,l,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:l,framebuffer:n}:(d.dispose(!0),l.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,r,i,o,a,n){this._passParameters.texture=a,e.bindFramebuffer(i);const l=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(o),e.drawArrays(ft.TRIANGLE_STRIP,0,Ha(o,"geometry")),e.bindFramebuffer(null),e.setViewport(l.x,l.y,l.width,l.height),this._passParameters.texture=null}unload(){if(p(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(p(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),p(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var vt;ee.DDS_ENCODING="image/vnd-ms.dds",ee.KTX2_ENCODING="image/ktx2",ee.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(vt||(vt={}));var C;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExludeHighlight=5]="ShadowExludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(C||(C={}));function Dn(t){const e=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function Jt(t,e){e.normalType===X.Attribute&&(t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`)),e.normalType===X.CompressedAttribute&&(t.include(Dn),t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===X.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var X;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(X||(X={}));function Fn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case te.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case te.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case te.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:At(e.doubleSidedMode);case te.COUNT:}}var te;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(te||(te={}));var J;function tt(t,e){switch(e.textureCoordinateType){case J.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case J.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case J.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:At(e.textureCoordinateType);case J.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case J.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(J||(J={}));function zn(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ji(t,e){switch(t.include(tt,e),t.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case J.Default:case J.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case J.Atlas:return t.include(zn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:At(e.textureCoordinateType);case J.None:case J.COUNT:return}}class he extends Y{constructor(e,r){super(e,"vec3",z.Draw,(i,o,a,n)=>i.setUniform3fv(e,r(o,a,n)))}}class q extends Y{constructor(e,r){super(e,"vec3",z.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}}class pr extends Y{constructor(e,r){super(e,"vec2",z.Draw,(i,o,a,n)=>i.setUniform2fv(e,r(o,a,n)))}}class qi extends Y{constructor(e,r){super(e,"sampler2D",z.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}}function zt(t,e,r=j.None){const i=[new qi(t,e)];if(r&j.Size){const o=t+Or;i.push(new pr(o,(a,n)=>{const l=e(a,n);return p(l)?Me(li,l.descriptor.width,l.descriptor.height):Vt}))}if(r&j.InvSize){const o=t+Yt;i.push(new pr(o,(a,n)=>{const l=e(a,n);return p(l)?Me(li,1/l.descriptor.width,1/l.descriptor.height):Vt}))}return i}const li=Wt();class Vn{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,r),this._technique),this._technique}ensureResources(e){return mr.LOADED}}class Bn extends Vn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Fe(this._texture),this._textureNormal=Fe(this._textureNormal),this._textureEmissive=Fe(this._textureEmissive),this._textureOcclusion=Fe(this._textureOcclusion),this._textureMetallicRoughness=Fe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?mr.LOADED:mr.LOADING}get textureBindParameters(){return new Gn(p(this._texture)?this._texture.glTexture:null,p(this._textureNormal)?this._textureNormal.glTexture:null,p(this._textureEmissive)?this._textureEmissive.glTexture:null,p(this._textureOcclusion)?this._textureOcclusion.glTexture:null,p(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(k(this._texture)||e!==this._texture.id)&&(this._texture=Fe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(k(e))return void r(null);const i=this._textureRepository.acquire(e);if(jo(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Fe(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}}class Gn extends Cr{constructor(e=null,r=null,i=null,o=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=o,this.textureMetallicRoughness=a}}ka(0,.6,.2);var D;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(D||(D={}));function Xi(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===D.Normal&&i&&t.include(ji,e),e.pbrMode!==D.Schematic)if(e.pbrMode!==D.Disabled){if(e.pbrMode===D.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const o=e.supportsTextureAtlas?e.hasWebGL2Context?j.None:j.Size:j.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===z.Pass?He("texMetallicRoughness",n=>n.textureMetallicRoughness,o):zt("texMetallicRoughness",n=>n.textureMetallicRoughness,o)),r.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===z.Pass?He("texEmission",n=>n.textureEmissive,o):zt("texEmission",n=>n.textureEmissive,o)),r.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===z.Pass?He("texOcclusion",n=>n.textureOcclusion,o):zt("texOcclusion",n=>n.textureOcclusion,o)),r.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===z.Pass?[new q("emissionFactor",n=>n.emissiveFactor),new q("mrrFactors",n=>n.mrrFactors)]:[new he("emissionFactor",n=>n.emissiveFactor),new he("mrrFactors",n=>n.mrrFactors)]),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?s`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?s`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?s`
                vtc.size = ${et(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:s`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?s`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${et(e,"texEmission")};
                applyEmission(vtc);`:s`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?s`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${et(e,"texOcclusion")};
                applyOcclusion(vtc);`:s`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Un(t){return Math.abs(t*t*t)}function Hn(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return mt.scale=Math.min(i.divisor/(e-i.offset),1),mt.factor=Un(t),mt.minPixelSize=i.minPixelSize,mt.paddingPixels=o,mt}function kn(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Wn(t,e){return Math.max(qo(t*e.scale,t,e.factor),kn(t,e))}function jn(t,e,r,i){return Wn(t,Hn(e,r,i))}const mt={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function qn(t){return!!p(t)&&!t.visible}const Et=Xo();function Xn(t,e,r,i,o,a,n){if(!qn(e))if(t.boundingInfo){oe(t.primitiveType===Ft.Triangle);const l=r.tolerance;Ki(t.boundingInfo,i,o,l,a,n)}else{const l=t.indices.get(h.POSITION),d=t.vertexAttributes.get(h.POSITION);Ji(i,o,0,l.length/3,l,d,void 0,a,n)}}const Kn=I();function Ki(t,e,r,i,o,a){if(k(t))return;const n=Jn(e,r,Kn);if(Ko(Et,t.getBBMin()),Yo(Et,t.getBBMax()),p(o)&&o.applyToAabb(Et),Zn(Et,e,n,i)){const{primitiveIndices:l,indices:d,position:c}=t,u=l?l.length:d.length/3;if(u>os){const m=t.getChildren();if(m!==void 0){for(let f=0;f<8;++f)m[f]!==void 0&&Ki(m[f],e,r,i,o,a);return}}Ji(e,r,0,u,d,c,l,o,a)}}const Yi=I();function Ji(t,e,r,i,o,a,n,l,d){if(n)return Yn(t,e,r,i,o,a,n,l,d);const c=a.data,u=a.stride||a.size,m=t[0],f=t[1],b=t[2],A=e[0]-m,$=e[1]-f,g=e[2]-b;for(let S=r,v=3*r;S<i;++S){let P=u*o[v++],L=c[P++],V=c[P++],M=c[P];P=u*o[v++];let O=c[P++],N=c[P++],y=c[P];P=u*o[v++];let _=c[P++],E=c[P++],R=c[P];p(l)&&([L,V,M]=l.applyToVertex(L,V,M,S),[O,N,y]=l.applyToVertex(O,N,y,S),[_,E,R]=l.applyToVertex(_,E,R,S));const F=O-L,B=N-V,U=y-M,H=_-L,fe=E-V,ve=R-M,Le=$*ve-fe*g,at=g*H-ve*A,nt=A*fe-H*$,se=F*Le+B*at+U*nt;if(Math.abs(se)<=Number.EPSILON)continue;const ae=m-L,Ee=f-V,Ie=b-M,me=ae*Le+Ee*at+Ie*nt;if(se>0){if(me<0||me>se)continue}else if(me>0||me<se)continue;const ge=Ee*U-B*Ie,st=Ie*F-U*ae,lt=ae*B-F*Ee,Ne=A*ge+$*st+g*lt;if(se>0){if(Ne<0||me+Ne>se)continue}else if(Ne>0||me+Ne<se)continue;const De=(H*ge+fe*st+ve*lt)/se;De>=0&&d(De,Zi(F,B,U,H,fe,ve,Yi),S,!1)}}function Yn(t,e,r,i,o,a,n,l,d){const c=a.data,u=a.stride||a.size,m=t[0],f=t[1],b=t[2],A=e[0]-m,$=e[1]-f,g=e[2]-b;for(let S=r;S<i;++S){const v=n[S];let P=3*v,L=u*o[P++],V=c[L++],M=c[L++],O=c[L];L=u*o[P++];let N=c[L++],y=c[L++],_=c[L];L=u*o[P];let E=c[L++],R=c[L++],F=c[L];p(l)&&([V,M,O]=l.applyToVertex(V,M,O,S),[N,y,_]=l.applyToVertex(N,y,_,S),[E,R,F]=l.applyToVertex(E,R,F,S));const B=N-V,U=y-M,H=_-O,fe=E-V,ve=R-M,Le=F-O,at=$*Le-ve*g,nt=g*fe-Le*A,se=A*ve-fe*$,ae=B*at+U*nt+H*se;if(Math.abs(ae)<=Number.EPSILON)continue;const Ee=m-V,Ie=f-M,me=b-O,ge=Ee*at+Ie*nt+me*se;if(ae>0){if(ge<0||ge>ae)continue}else if(ge>0||ge<ae)continue;const st=Ie*H-U*me,lt=me*B-H*Ee,Ne=Ee*U-B*Ie,De=A*st+$*lt+g*Ne;if(ae>0){if(De<0||ge+De>ae)continue}else if(De>0||ge+De<ae)continue;const Hr=(fe*st+ve*lt+Le*Ne)/ae;Hr>=0&&d(Hr,Zi(B,U,H,fe,ve,Le,Yi),v,!1)}}const ci=I(),di=I();function Zi(t,e,r,i,o,a,n){return K(ci,t,e,r),K(di,i,o,a),Ai(n,ci,di),Tr(n,n),n}function Jn(t,e,r){return K(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Zn(t,e,r,i){return Qn(t,e,r,i,1/0)}function Qn(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let l=Math.min(a,n),d=Math.max(a,n);const c=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(c,u)),d<0||(l=Math.max(l,Math.min(c,u)),l>d))return!1;const m=(t[2]-i-e[2])*r[2],f=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(m,f)),!(d<0)&&(l=Math.max(l,Math.min(m,f)),!(l>d)&&l<o)}function es(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;p(o)&&(a=jn(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Jo(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Qi(t,e){const r=e?Qi(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=rs(o)),o==null&&i in r||(r[i]=o)}return r}function ts(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?t[i]===null?(t[i]=o.slice(),r=!0):Zo(t[i],o)&&(r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}function rs(t){const e=[];return t.forEach(r=>e.push(r)),e}const is={multiply:1,ignore:2,replace:3,tint:4},os=1e3;class as extends Ar{constructor(e,r){super(),this.type=St.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Ot,this._parameters=Qi(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ts(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){p(this.repository)&&this.repository.materialChanged(this)}}var fr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(fr||(fr={}));var Ye;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Ye||(Ye={}));class ns{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=I(),this._mbs=Di(),this._obb={center:I(),halfSize:Wa(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const o=e,a=r,n=i+this.componentLocalOriginLength,l=this._totalOffset/Math.sqrt(o*o+a*a+n*n);return this._tmpVertex[0]=e+o*l,this._tmpVertex[1]=r+a*l,this._tmpVertex[2]=i+n*l,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],n=e[4],l=e[5]+this.componentLocalOriginLength,d=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),u=o*l<0?0:Math.min(Math.abs(o),Math.abs(l)),m=Math.sqrt(d*d+c*c+u*u);if(m<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=o<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=l>0?this._totalOffset:0,e;const f=Math.max(Math.abs(r),Math.abs(a)),b=Math.max(Math.abs(i),Math.abs(n)),A=Math.max(Math.abs(o),Math.abs(l)),$=Math.sqrt(f*f+b*b+A*A),g=this._totalOffset/$,S=this._totalOffset/m;return e[0]+=r*(r>0?g:S),e[1]+=i*(i>0?g:S),e[2]+=o*(o>0?g:S),e[3]+=a*(a<0?g:S),e[4]+=n*(n<0?g:S),e[5]+=l*(l<0?g:S),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,Xr(this._obb.halfSize,e.halfSize,e.quaternion),Ae(this._obb.halfSize,this._obb.halfSize,e.center);const o=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*o,this._obb.halfSize[1]+=this._obb.halfSize[1]*o,this._obb.halfSize[2]+=this._obb.halfSize[2]*o,Se(this._obb.halfSize,this._obb.halfSize,e.center),ja(hi,e.quaternion),Xr(this._obb.halfSize,this._obb.halfSize,hi),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class ss{constructor(e=0){this.offset=e,this.sphere=Di(),this.tmpVertex=I()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*r+o[8]*i+o[12],n=o[1]*e+o[5]*r+o[9]*i+o[13],l=o[2]*e+o[6]*r+o[10]*i+o[14];const d=this.offset/Math.sqrt(a*a+n*n+l*l);a+=a*d,n+=n*d,l+=l*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*n+c[8]*l+c[12],this.tmpVertex[1]=c[1]*a+c[5]*n+c[9]*l+c[13],this.tmpVertex[2]=c[2]*a+c[6]*n+c[10]*l+c[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const ui=new ss;function ls(t){return p(t)?(ui.offset=t,ui):null}new ns;const hi=qa();function cs(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let l=0;l<n;++l){const d=2*t[l];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function eo(t,e,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(i*=n,o==null||o===1)for(let d=0;d<l;++d){const c=3*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}else for(let d=0;d<l;++d){const c=3*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}}function ds(t,e,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(i*=n,o===1)for(let d=0;d<l;++d){const c=4*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}else for(let d=0;d<l;++d){const c=4*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}}function us(t,e,r,i,o,a=1){if(!r)return void eo(t,e,i,o,a);const n=i.typedBuffer,l=i.typedBufferStride,d=t.length,c=r[0],u=r[1],m=r[2],f=r[4],b=r[5],A=r[6],$=r[8],g=r[9],S=r[10],v=r[12],P=r[13],L=r[14];o*=l;let V=0,M=0,O=0;const N=to(r)?y=>{V=e[y]+v,M=e[y+1]+P,O=e[y+2]+L}:y=>{const _=e[y],E=e[y+1],R=e[y+2];V=c*_+f*E+$*R+v,M=u*_+b*E+g*R+P,O=m*_+A*E+S*R+L};if(a===1)for(let y=0;y<d;++y)N(3*t[y]),n[o]=V,n[o+1]=M,n[o+2]=O,o+=l;else for(let y=0;y<d;++y){N(3*t[y]);for(let _=0;_<a;++_)n[o]=V,n[o+1]=M,n[o+2]=O,o+=l}}function hs(t,e,r,i,o,a=1){if(!r)return void eo(t,e,i,o,a);const n=r,l=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=n[0],m=n[1],f=n[2],b=n[4],A=n[5],$=n[6],g=n[8],S=n[9],v=n[10],P=!Ci(n),L=1e-6,V=1-L;o*=d;let M=0,O=0,N=0;const y=to(n)?_=>{M=e[_],O=e[_+1],N=e[_+2]}:_=>{const E=e[_],R=e[_+1],F=e[_+2];M=u*E+b*R+g*F,O=m*E+A*R+S*F,N=f*E+$*R+v*F};if(a===1)if(P)for(let _=0;_<c;++_){y(3*t[_]);const E=M*M+O*O+N*N;if(E<V&&E>L){const R=1/Math.sqrt(E);l[o]=M*R,l[o+1]=O*R,l[o+2]=N*R}else l[o]=M,l[o+1]=O,l[o+2]=N;o+=d}else for(let _=0;_<c;++_)y(3*t[_]),l[o]=M,l[o+1]=O,l[o+2]=N,o+=d;else for(let _=0;_<c;++_){if(y(3*t[_]),P){const E=M*M+O*O+N*N;if(E<V&&E>L){const R=1/Math.sqrt(E);M*=R,O*=R,N*=R}}for(let E=0;E<a;++E)l[o]=M,l[o+1]=O,l[o+2]=N,o+=d}}function ms(t,e,r,i,o,a=1){if(!r)return void ds(t,e,i,o,a);const n=r,l=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=n[0],m=n[1],f=n[2],b=n[4],A=n[5],$=n[6],g=n[8],S=n[9],v=n[10],P=!Ci(n),L=1e-6,V=1-L;if(o*=d,a===1)for(let M=0;M<c;++M){const O=4*t[M],N=e[O],y=e[O+1],_=e[O+2],E=e[O+3];let R=u*N+b*y+g*_,F=m*N+A*y+S*_,B=f*N+$*y+v*_;if(P){const U=R*R+F*F+B*B;if(U<V&&U>L){const H=1/Math.sqrt(U);R*=H,F*=H,B*=H}}l[o]=R,l[o+1]=F,l[o+2]=B,l[o+3]=E,o+=d}else for(let M=0;M<c;++M){const O=4*t[M],N=e[O],y=e[O+1],_=e[O+2],E=e[O+3];let R=u*N+b*y+g*_,F=m*N+A*y+S*_,B=f*N+$*y+v*_;if(P){const U=R*R+F*F+B*B;if(U<V&&U>L){const H=1/Math.sqrt(U);R*=H,F*=H,B*=H}}for(let U=0;U<a;++U)l[o]=R,l[o+1]=F,l[o+2]=B,l[o+3]=E,o+=d}}function mi(t,e,r,i,o,a=1){const n=i.typedBuffer,l=i.typedBufferStride,d=t.length;if(o*=l,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let c=0;c<d;++c){const u=3*t[c];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=l}else for(let c=0;c<d;++c){const u=4*t[c];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=l}else{if(r===4){for(let c=0;c<d;++c){const u=4*t[c];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=l}return}for(let c=0;c<d;++c){const u=3*t[c];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=l}}else{n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3];const c=new Uint32Array(i.typedBuffer.buffer,i.start),u=l/4,m=c[o/=4];o+=u;const f=d*a;for(let b=1;b<f;++b)c[o]=m,o+=u}}function ps(t,e,r,i,o=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,o===1)for(let l=0;l<r;++l)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let l=0;l<r;++l)for(let d=0;d<o;++d)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function fs(t,e,r,i,o,a){for(const n of e.fieldNames){const l=t.vertexAttributes.get(n),d=t.indices.get(n);if(l&&d)switch(n){case h.POSITION:{oe(l.size===3);const c=o.getField(n,Qe);c&&us(d,l.data,r,c,a);break}case h.NORMAL:{oe(l.size===3);const c=o.getField(n,Qe);c&&hs(d,l.data,i,c,a);break}case h.UV0:{oe(l.size===2);const c=o.getField(n,Li);c&&cs(d,l.data,c,a);break}case h.COLOR:{oe(l.size===3||l.size===4);const c=o.getField(n,Ze);c&&mi(d,l.data,l.size,c,a);break}case h.SYMBOLCOLOR:{oe(l.size===3||l.size===4);const c=o.getField(n,Ze);c&&mi(d,l.data,l.size,c,a);break}case h.TANGENT:{oe(l.size===4);const c=o.getField(n,hr);c&&ms(d,l.data,i,c,a);break}}else if(n===h.OBJECTANDLAYERIDCOLOR&&p(t.objectAndLayerIdColor)&&t.objectAndLayerIdColor.length===4){const c=t.indices.get(h.POSITION);if(c){const u=c.length,m=o.getField(n,Ze);ps(t.objectAndLayerIdColor,m,u,a)}}}}function to(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[8]===0&&t[9]===0&&t[10]===1}function $r(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function ro({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function vs(t){return!!Mi("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}class io extends Y{constructor(e,r){super(e,"mat3",z.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}}class Re extends Y{constructor(e,r){super(e,"mat3",z.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}}class ke extends Y{constructor(e,r){super(e,"mat4",z.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}}function oo(t,e){t.include($r);const r=t.vertex;r.include(ro,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new q("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new q("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new Re("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new ke("transformProjFromView",i=>i.transformProjFromView),new io("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new he("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new he("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new q("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class gs extends Cr{constructor(){super(...arguments),this.transformWorldFromViewTH=I(),this.transformWorldFromViewTL=I(),this.transformViewFromCameraRelativeRS=Xt(),this.transformProjFromView=_r()}}function ao(t,e){e.normalType===X.Attribute||e.normalType===X.CompressedAttribute?(t.include(Jt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new io("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Re("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===X.Ground?(t.include(oo,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(s`void forwardNormal() {}`)}class xs extends gs{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Xt()}}const Ts=.1,Rr=.001;class Zt{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Lr{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Kr(this._program),this._pipeline=this._configuration=null}reload(e){Kr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return ft.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}}class Er{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new wi({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(z.Pass,this),this.bindDraw=r.generateBind(z.Draw,this),this._fragmentUniforms=za()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(k(r)||r.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),p(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}$e.LESS;$e.ALWAYS;const bs={mask:255},_s={function:{func:$e.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.ZERO}},Ss={function:{func:$e.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:ne.KEEP,zFail:ne.KEEP,zPass:ne.REPLACE}};$e.EQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;$e.NOTEQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,ne.KEEP,ne.KEEP,ne.KEEP;function pi(t){t.varyings.add("linearDepth","float")}function no(t){t.vertex.uniforms.add(new le("nearFar",(e,r)=>r.camera.nearFar))}function so(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function lo(t,e){const{vertex:r}=t;switch(e.output){case C.Color:if(e.receiveShadows)return pi(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case C.Depth:case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:return t.include(oo,e),pi(t),no(t),so(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function co(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function We(t,e){ys(t,e,[new he("slicePlaneOrigin",(r,i)=>ws(e,r,i)),new he("slicePlaneBasis1",(r,i)=>{var o;return fi(e,r,i,(o=bt(i.slicePlane))==null?void 0:o.basis1)}),new he("slicePlaneBasis2",(r,i)=>{var o;return fi(e,r,i,(o=bt(i.slicePlane))==null?void 0:o.basis2)})])}function ys(t,e,r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function uo(t,e,r){return t.instancedDoublePrecision?K(As,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function ho(t,e){return p(t)?Se(Ut,e.origin,t):e.origin}function mo(t,e,r){return t.hasSliceTranslatedView?p(e)?dr(Cs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function ws(t,e,r){if(k(r.slicePlane))return br;const i=uo(t,e,r),o=ho(i,r.slicePlane),a=mo(t,i,r);return p(a)?_t(Ut,o,a):o}function fi(t,e,r,i){if(k(i)||k(r.slicePlane))return br;const o=uo(t,e,r),a=ho(o,r.slicePlane),n=mo(t,o,r);return p(n)?(Ae(pt,i,a),_t(Ut,a,n),_t(pt,pt,n),Se(pt,pt,Ut)):i}const As=I(),Ut=I(),pt=I(),Cs=_r();function gt(t,e){if(so(t),e.hasModelTransformation)return t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}class Ms extends Y{constructor(e,r){super(e,"mat4",z.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}}function yt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",br):t.uniforms.add(new he("cameraPosition",(r,i)=>K(po,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function xt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new ke("proj",(i,o)=>o.camera.projectionMatrix),new Ms("view",(i,o)=>dr(vi,o.camera.viewMatrix,i.origin)),new he("localOrigin",i=>i.origin)]);const r=i=>K(po,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new ke("proj",(i,o)=>o.camera.projectionMatrix),new ke("view",(i,o)=>dr(vi,o.camera.viewMatrix,r(o))),new q("localOrigin",(i,o)=>r(o))])}const vi=Qo(),po=I();function Os(t){t.uniforms.add(new ke("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}class fo{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function T(t={}){return(e,r)=>{var i,o;if(e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const a=e._parameterNames.length-1,n=t.count||2,l=Math.ceil(Math.log2(n)),d=(o=e._parameterBits)!=null?o:[0];let c=0;for(;d[c]+l>16;)c++,c>=d.length&&d.push(0);e._parameterBits=d;const u=d[c],m=(1<<l)-1<<u;d[c]+=l,Object.defineProperty(e,r,{get(){return this[a]},set(f){if(this[a]!==f&&(this[a]=f,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~m|+f<<u&m,typeof f!="number"&&typeof f!="boolean"))throw"Configuration value for "+r+" must be boolean or number, got "+typeof f}})}}}class Ps extends fo{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function vo(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(h.MODELORIGINHI,"vec3"),t.attributes.add(h.MODELORIGINLO,"vec3"),t.attributes.add(h.MODEL,"mat3"),t.attributes.add(h.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(ro,e),r.uniforms.add(new he("viewOriginHi",(i,o)=>wa(K(It,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),It))),r.uniforms.add(new he("viewOriginLo",(i,o)=>Aa(K(It,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),It)))),r.code.add(s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===C.Normal&&(Os(r),r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}x([T()],Ps.prototype,"instancedDoublePrecision",void 0);const It=I();function $s(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(be.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(be.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(be.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(be.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class go extends Y{constructor(e,r){super(e,"int",z.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}}function xo(t,e){e.hasSymbolColors?(t.include($s),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new go("colorMixMode",r=>is[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function To(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Rs(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Ls(t){t.uniforms.add(new Q("screenSizePerspectiveAlignment",e=>Es(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Es(t){return ie(Is,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Is=qt();function bo(t,e){const r=t.vertex;e.hasVerticalOffset?(Ds(r),e.hasScreenSizePerspective&&(t.include(Rs),Ls(r),yt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ns=qt();function Ds(t){t.uniforms.add(new Q("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return ie(Ns,a*l,n,i,o)}))}function Fs(t,e){const r=e.output===C.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(h.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?i?s`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`gl_FragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Ir(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function zs(t,e){switch(t.fragment.include(Ir),e.output){case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case C.Depth:t.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const Vs=jt(1,1,0,1),Bs=jt(1,0,1,1);function Gs(t,e){t.fragment.uniforms.add(He("depthTex",(r,i)=>i.highlightDepthTexture,e.hasWebGL2Context?j.None:j.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",Vs).add("unoccludedHighlightFlag","vec4",Bs),t.fragment.code.add(s`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${sn(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}class Us extends Y{constructor(e,r,i){super(e,"vec4",z.Pass,(o,a,n)=>o.setUniform4fv(e,r(a,n)),i)}}class Hs extends Y{constructor(e,r,i){super(e,"float",z.Pass,(o,a,n)=>o.setUniform1fv(e,r(a,n)),i)}}const ar=8;function Tt(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(h.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new q("vvSizeMinSize",i=>i.vvSizeMinSize)),r.uniforms.add(new q("vvSizeMaxSize",i=>i.vvSizeMaxSize)),r.uniforms.add(new q("vvSizeOffset",i=>i.vvSizeOffset)),r.uniforms.add(new q("vvSizeFactor",i=>i.vvSizeFactor)),r.uniforms.add(new Re("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new q("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",ar),e.hasVvInstancing&&r.uniforms.add([new Hs("vvColorValues",i=>i.vvColorValues,ar),new Us("vvColorColors",i=>i.vvColorColors,ar)]),r.code.add(s`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function ks(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Rr)}) { discard; } }
  `)}class Z extends Y{constructor(e,r){super(e,"float",z.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}}function je(t,e){Ws(t,e,new Z("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Ws(t,e,r){const i=t.fragment;switch(e.alphaDiscardMode!==W.Mask&&e.alphaDiscardMode!==W.MaskBlend||i.uniforms.add(r),e.alphaDiscardMode){case W.Blend:return t.include(ks);case W.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case W.Mask:i.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case W.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function _o(t,e){const{vertex:r,fragment:i}=t,o=e.hasModelTransformation;o&&r.uniforms.add(new ke("model",n=>p(n.modelTransformation)?n.modelTransformation:Ri));const a=e.hasColorTexture&&e.alphaDiscardMode!==W.Opaque;switch(e.output){case C.Depth:case C.Shadow:case C.ShadowHighlight:case C.ShadowExludeHighlight:case C.ObjectAndLayerIdColor:xt(r,e),t.include(gt,e),t.include(tt,e),t.include(Tt,e),t.include(zs,e),t.include(We,e),t.include(Fs,e),no(t),t.varyings.add("depth","float"),a&&i.uniforms.add(new re("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(je,e),i.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===C.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case C.Normal:xt(r,e),t.include(gt,e),t.include(Jt,e),t.include(ao,e),t.include(tt,e),t.include(Tt,e),a&&i.uniforms.add(new re("tex",n=>n.texture)),t.varyings.add("vPositionView","vec3"),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===X.Attribute?s`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(We,e),t.include(je,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===X.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case C.Highlight:xt(r,e),t.include(gt,e),t.include(tt,e),t.include(Tt,e),a&&i.uniforms.add(new re("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(We,e),t.include(je,e),t.include(Gs,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function js(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===te.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.textureCoordinateType!==J.None){t.include(ji,e);const i=e.supportsTextureAtlas?e.hasWebGL2Context?j.None:j.Size:j.None;r.uniforms.add(e.pbrTextureBindType===z.Pass?He("normalTexture",o=>o.textureNormal,i):zt("normalTexture",o=>o.textureNormal,i)),r.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?s`vtc.size = ${et(e,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Nr(t){t.include(Ir),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}const nr=4;function qs(){const t=new Mt,e=t.fragment;t.include(Mr);const r=(nr+1)/2,i=1/(2*r*r);return e.include(Nr),e.uniforms.add([new re("depthMap",o=>o.depthTexture),new qi("tex",o=>o.colorTexture),new pr("blurSize",o=>o.blurSize),new Z("projScale",(o,a)=>{const n=ea(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale}),new le("nearFar",(o,a)=>a.camera.nearFar)]),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(nr)}; r <= ${s.int(nr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const Xs=Object.freeze(Object.defineProperty({__proto__:null,build:qs},Symbol.toStringTag,{value:"Module"}));class Dr extends Lr{initializeProgram(e){return new Er(e.rctx,Dr.shader.get().build(),Ot)}initializePipeline(){return Sr({colorWrite:yr})}}Dr.shader=new Zt(Xs,()=>wt(()=>import("./SSAOBlur.glsl.67b6fdb6.js"),["assets/SSAOBlur.glsl.67b6fdb6.js","assets/index.cdd966ee.js","assets/index.279f609b.css","assets/VertexAttribute.42396f25.js","assets/devEnvironmentUtils.d8d0484c.js","assets/mat3f64.6d32a1d7.js","assets/mat4f64.ff2a477c.js","assets/BufferView.1a723d40.js","assets/vec33.c7ddb665.js","assets/DefaultMaterial_COLOR_GAMMA.b044e227.js","assets/types.44c7402c.js","assets/enums.2d9e6f64.js","assets/Version.3b70b955.js","assets/quat.c8624365.js","assets/quatf64.4ae3e6f1.js","assets/requestImageUtils.90225bc2.js","assets/OrderIndependentTransparency.4d1575c0.js","assets/Util.7b7ff3cb.js","assets/sphere.9d65532d.js","assets/Texture.07a8008f.js","assets/VertexArrayObject.7c57eb61.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.82f34512.js","assets/vec3f32.1121a836.js","assets/symbolColorUtils.d4a32adc.js"]));function Ks(t){t.fragment.uniforms.add(new Q("projInfo",(e,r)=>Ys(r))),t.fragment.uniforms.add(new le("zScale",(e,r)=>So(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Ys(t){const e=t.camera.projectionMatrix;return e[11]===0?ie(gi,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):ie(gi,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const gi=qt();function So(t){return t.camera.projectionMatrix[11]===0?Me(xi,0,1):Me(xi,1,0)}const xi=Wt(),Ti=16,Js=.5;function Zs(){const t=new Mt,e=t.fragment;return t.include(Mr),e.include(Nr),t.include(Ks),e.uniforms.add(new Z("radius",(r,i)=>bi(i))),e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new le("nearFar",(r,i)=>i.camera.nearFar),new re("normalMap",r=>r.normalTexture),new re("depthMap",r=>r.depthTexture),new le("zScale",(r,i)=>So(i)),new Z("projScale",r=>r.projScale),new re("rnm",r=>r.noiseTexture),new le("rnmScale",(r,i)=>Me(_i,i.camera.fullWidth/bt(r.noiseTexture).descriptor.width,i.camera.fullHeight/bt(r.noiseTexture).descriptor.height)),new Z("intensity",(r,i)=>4*Js/bi(i)**6),new le("screenSize",(r,i)=>Me(_i,i.camera.fullWidth,i.camera.fullHeight))]),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(Ti)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(Ti)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function bi(t){return Math.max(10,20*t.camera.computeRenderPixelSizeAtDist(Math.abs(4*t.camera.relativeElevation)))}const _i=Wt(),Qs=Object.freeze(Object.defineProperty({__proto__:null,build:Zs},Symbol.toStringTag,{value:"Module"}));class Fr extends Lr{initializeProgram(e){return new Er(e.rctx,Fr.shader.get().build(),Ot)}initializePipeline(){return Sr({colorWrite:yr})}}Fr.shader=new Zt(Qs,()=>wt(()=>import("./SSAO.glsl.3860fd9f.js"),["assets/SSAO.glsl.3860fd9f.js","assets/index.cdd966ee.js","assets/index.279f609b.css","assets/VertexAttribute.42396f25.js","assets/devEnvironmentUtils.d8d0484c.js","assets/mat3f64.6d32a1d7.js","assets/mat4f64.ff2a477c.js","assets/BufferView.1a723d40.js","assets/vec33.c7ddb665.js","assets/DefaultMaterial_COLOR_GAMMA.b044e227.js","assets/types.44c7402c.js","assets/enums.2d9e6f64.js","assets/Version.3b70b955.js","assets/quat.c8624365.js","assets/quatf64.4ae3e6f1.js","assets/requestImageUtils.90225bc2.js","assets/OrderIndependentTransparency.4d1575c0.js","assets/Util.7b7ff3cb.js","assets/sphere.9d65532d.js","assets/Texture.07a8008f.js","assets/VertexArrayObject.7c57eb61.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.82f34512.js","assets/vec3f32.1121a836.js","assets/symbolColorUtils.d4a32adc.js"]));const el=2;function zr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(He("ssaoTex",(i,o)=>o.ssaoHelper.colorTexture,e.hasWebGL2Context?j.None:j.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/el),r.code.add(s`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${et(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function tl(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new q("lightingAmbientSH0",(o,a)=>K(Si,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new Q("lightingAmbientSH_R",(o,a)=>ie(xe,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new Q("lightingAmbientSH_G",(o,a)=>ie(xe,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new Q("lightingAmbientSH_B",(o,a)=>ie(xe,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add([new q("lightingAmbientSH0",(o,a)=>K(Si,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new Q("lightingAmbientSH_R1",(o,a)=>ie(xe,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new Q("lightingAmbientSH_G1",(o,a)=>ie(xe,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new Q("lightingAmbientSH_B1",(o,a)=>ie(xe,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new Q("lightingAmbientSH_R2",(o,a)=>ie(xe,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new Q("lightingAmbientSH_G2",(o,a)=>ie(xe,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new Q("lightingAmbientSH_B2",(o,a)=>ie(xe,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==D.Normal&&e.pbrMode!==D.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Si=I(),xe=qt();function Vr(t){t.uniforms.add(new q("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function Qt(t){t.uniforms.add(new q("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function rl(t,e){e.useLegacyTerrainShading?t.uniforms.add(new Z("lightingFixedFactor",(r,i)=>i.lighting.noonFactor*(1-i.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function il(t,e){const r=t.fragment;Vr(r),Qt(r),rl(r,e),r.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function ol(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function yo(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Br(t,e){const r=t.fragment.code;t.include(yo),e.pbrMode===D.Water||e.pbrMode===D.WaterOnIntegratedMesh?(r.add(s`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==D.Normal&&e.pbrMode!==D.Schematic||(t.include(ol),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class al extends Y{constructor(e,r){super(e,"bool",z.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}}const nl=.4;function Gr(t){t.constants.add("ambientBoostFactor","float",nl)}function Ur(t){t.uniforms.add(new Z("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function wo(t,e){const r=t.fragment;switch(t.include(zr,e),e.pbrMode!==D.Disabled&&t.include(Br,e),t.include(tl,e),t.include(yo),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===D.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Gr(r),Ur(r),Vr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Qt(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case D.Disabled:case D.WaterOnIntegratedMesh:case D.Water:t.include(il,e),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case D.Normal:case D.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new al("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new Z("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new Z("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)]),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===D.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:At(e.pbrMode);case D.COUNT:}}function Ht(t,e){e.hasMultipassTerrain&&(t.fragment.include(Nr),t.fragment.uniforms.add(new re("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new le("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new le("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class sl extends Y{constructor(e,r,i){super(e,"mat4",z.Draw,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}class ll extends Y{constructor(e,r,i){super(e,"mat4",z.Pass,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}function Ao(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new ll("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Mo(t,e))}function Co(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new sl("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Mo(t,e))}function Mo(t,e){const r=t.fragment;r.include(Ir),r.uniforms.add([...He("shadowMapTex",(i,o)=>o.shadowMap.depthTexture,e.hasWebGL2Context?j.None:j.Size),new go("numCascades",(i,o)=>o.shadowMap.numCascades),new Q("cascadeDistances",(i,o)=>o.shadowMap.cascadeDistances)]),r.code.add(s`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${et(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function cl(t){t.vertex.uniforms.add(new Re("colorTextureTransformMatrix",e=>p(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:ot())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function dl(t){t.vertex.uniforms.add(new Re("normalTextureTransformMatrix",e=>p(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:ot())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ul(t){t.vertex.uniforms.add(new Re("emissiveTextureTransformMatrix",e=>p(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:ot())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function hl(t){t.vertex.uniforms.add(new Re("occlusionTextureTransformMatrix",e=>p(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:ot())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ml(t){t.vertex.uniforms.add(new Re("metallicRoughnessTextureTransformMatrix",e=>p(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:ot())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function pl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function kt(t){t.include(pl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(be.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(be.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(be.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(be.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function fl(t){const e=new Mt,{vertex:r,fragment:i,varyings:o}=e;return xt(r,t),e.include($r),o.add("vpos","vec3"),e.include(Tt,t),e.include(vo,t),e.include(bo,t),t.hasColorTextureTransform&&e.include(cl),t.output!==C.Color&&t.output!==C.Alpha||(t.hasNormalTextureTransform&&e.include(dl),t.hasEmissionTextureTransform&&e.include(ul),t.hasOcclusionTextureTransform&&e.include(hl),t.hasMetallicRoughnessTextureTransform&&e.include(ml),yt(r,t),e.include(Jt,t),e.include(gt,t),t.normalType===X.Attribute&&t.offsetBackfaces&&e.include(co),e.include(js,t),e.include(ao,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("localvpos","vec3"),e.include(tt,t),e.include(lo,t),e.include(xo,t),e.include(To,t),r.uniforms.add(new Q("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),t.hasMultipassTerrain&&o.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new ke("model",a=>p(a.modelTransformation)?a.modelTransformation:Ri)),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Rr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===X.Attribute?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===X.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)),t.output===C.Alpha&&(e.include(We,t),e.include(je,t),e.include(Ht,t),i.uniforms.add([new Z("opacity",a=>a.opacity),new Z("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new re("tex",a=>a.texture)),i.include(kt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===C.Color&&(e.include(We,t),e.include(wo,t),e.include(zr,t),e.include(je,t),e.include(t.instancedDoublePrecision?Ao:Co,t),e.include(Ht,t),yt(i,t),i.uniforms.add([r.uniforms.get("localOrigin"),new q("ambient",a=>a.ambient),new q("diffuse",a=>a.diffuse),new Z("opacity",a=>a.opacity),new Z("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new re("tex",a=>a.texture)),e.include(Xi,t),e.include(Br,t),i.include(kt),e.include(Fn,t),Gr(i),Ur(i),Qt(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===X.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(localvpos);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===D.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===rt.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(_o,t),e}const vl=Object.freeze(Object.defineProperty({__proto__:null,build:fl},Symbol.toStringTag,{value:"Module"}));class gl extends xs{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Xe(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Pe.Back,this.emissiveFactor=Xe(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Xe(.2,.2,.2),this.diffuse=Xe(.8,.8,.8),this.externalColor=jt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=I(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Xt(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ct.Less,this.textureAlphaMode=W.Blend,this.textureAlphaCutoff=Ts,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=fr.Occlude}}class Pt extends Lr{initializeConfiguration(e,r){r.hasWebGL2Context=e.rctx.type===ta.WEBGL2,r.spherical=e.viewingMode===ur.Global,r.doublePrecisionRequiresObfuscation=vs(e.rctx),r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?J.Default:J.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Pt.shader)}_initializeProgram(e,r){return new Er(e.rctx,r.get().build(this.configuration),Ot)}_convertDepthTestFunction(e){return e===Ct.Lequal?$e.LEQUAL:$e.LESS}_makePipeline(e,r){const i=this.configuration,o=e===rt.NONE,a=e===rt.FrontFace;return Sr({blending:i.output!==C.Color&&i.output!==C.Alpha||!i.transparent?null:o?Ca:Ma(e),culling:xl(i)&&Oa(i.cullFace),depthTest:{func:Pa(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:o||a?i.writeDepth&&$a:null,colorWrite:yr,stencilWrite:i.hasOccludees?bs:null,stencilTest:i.hasOccludees?r?Ss:_s:null,polygonOffset:o||a?null:Ra(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function xl(t){return t.cullFace!==Pe.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Pt.shader=new Zt(vl,()=>wt(()=>import("./DefaultMaterial.glsl.9075a6ee.js"),["assets/DefaultMaterial.glsl.9075a6ee.js","assets/mat4f64.ff2a477c.js","assets/mat3f64.6d32a1d7.js","assets/vec3f32.1121a836.js","assets/index.cdd966ee.js","assets/index.279f609b.css","assets/VertexAttribute.42396f25.js","assets/symbolColorUtils.d4a32adc.js","assets/OrderIndependentTransparency.4d1575c0.js","assets/enums.2d9e6f64.js","assets/VertexArrayObject.7c57eb61.js","assets/Texture.07a8008f.js","assets/devEnvironmentUtils.d8d0484c.js","assets/BufferView.1a723d40.js","assets/vec33.c7ddb665.js","assets/DefaultMaterial_COLOR_GAMMA.b044e227.js","assets/types.44c7402c.js","assets/Version.3b70b955.js","assets/quat.c8624365.js","assets/quatf64.4ae3e6f1.js","assets/requestImageUtils.90225bc2.js","assets/Util.7b7ff3cb.js","assets/sphere.9d65532d.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.82f34512.js"]));class we extends fo{constructor(){super(...arguments),this.hasWebGL2Context=!1}}x([T({constValue:!0})],we.prototype,"hasSliceHighlight",void 0),x([T({constValue:!1})],we.prototype,"hasSliceInVertexProgram",void 0),x([T({constValue:!1})],we.prototype,"instancedDoublePrecision",void 0),x([T({constValue:!1})],we.prototype,"useLegacyTerrainShading",void 0),x([T({constValue:!1})],we.prototype,"hasModelTransformation",void 0),x([T({constValue:z.Pass})],we.prototype,"pbrTextureBindType",void 0),x([T()],we.prototype,"hasWebGL2Context",void 0);class w extends we{constructor(){super(...arguments),this.output=C.Color,this.alphaDiscardMode=W.Opaque,this.doubleSidedMode=te.None,this.pbrMode=D.Disabled,this.cullFace=Pe.None,this.transparencyPassType=rt.NONE,this.normalType=X.Attribute,this.textureCoordinateType=J.None,this.customDepthTest=Ct.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}x([T({count:C.COUNT})],w.prototype,"output",void 0),x([T({count:W.COUNT})],w.prototype,"alphaDiscardMode",void 0),x([T({count:te.COUNT})],w.prototype,"doubleSidedMode",void 0),x([T({count:D.COUNT})],w.prototype,"pbrMode",void 0),x([T({count:Pe.COUNT})],w.prototype,"cullFace",void 0),x([T({count:rt.COUNT})],w.prototype,"transparencyPassType",void 0),x([T({count:X.COUNT})],w.prototype,"normalType",void 0),x([T({count:J.COUNT})],w.prototype,"textureCoordinateType",void 0),x([T({count:Ct.COUNT})],w.prototype,"customDepthTest",void 0),x([T()],w.prototype,"spherical",void 0),x([T()],w.prototype,"hasVertexColors",void 0),x([T()],w.prototype,"hasSymbolColors",void 0),x([T()],w.prototype,"hasVerticalOffset",void 0),x([T()],w.prototype,"hasSlicePlane",void 0),x([T()],w.prototype,"hasSliceHighlight",void 0),x([T()],w.prototype,"hasColorTexture",void 0),x([T()],w.prototype,"hasMetallicRoughnessTexture",void 0),x([T()],w.prototype,"hasEmissionTexture",void 0),x([T()],w.prototype,"hasOcclusionTexture",void 0),x([T()],w.prototype,"hasNormalTexture",void 0),x([T()],w.prototype,"hasScreenSizePerspective",void 0),x([T()],w.prototype,"hasVertexTangents",void 0),x([T()],w.prototype,"hasOccludees",void 0),x([T()],w.prototype,"hasMultipassTerrain",void 0),x([T()],w.prototype,"hasModelTransformation",void 0),x([T()],w.prototype,"offsetBackfaces",void 0),x([T()],w.prototype,"vvSize",void 0),x([T()],w.prototype,"vvColor",void 0),x([T()],w.prototype,"receiveShadows",void 0),x([T()],w.prototype,"receiveAmbientOcclusion",void 0),x([T()],w.prototype,"textureAlphaPremultiplied",void 0),x([T()],w.prototype,"instanced",void 0),x([T()],w.prototype,"instancedColor",void 0),x([T()],w.prototype,"objectAndLayerIdColorInstanced",void 0),x([T()],w.prototype,"instancedDoublePrecision",void 0),x([T()],w.prototype,"doublePrecisionRequiresObfuscation",void 0),x([T()],w.prototype,"writeDepth",void 0),x([T()],w.prototype,"transparent",void 0),x([T()],w.prototype,"enableOffset",void 0),x([T()],w.prototype,"cullAboveGround",void 0),x([T()],w.prototype,"snowCover",void 0),x([T()],w.prototype,"hasColorTextureTransform",void 0),x([T()],w.prototype,"hasEmissionTextureTransform",void 0),x([T()],w.prototype,"hasNormalTextureTransform",void 0),x([T()],w.prototype,"hasOcclusionTextureTransform",void 0),x([T()],w.prototype,"hasMetallicRoughnessTextureTransform",void 0),x([T({constValue:!0})],w.prototype,"hasVvInstancing",void 0),x([T({constValue:!1})],w.prototype,"useCustomDTRExponentForWater",void 0),x([T({constValue:!1})],w.prototype,"supportsTextureAtlas",void 0),x([T({constValue:!0})],w.prototype,"useFillLights",void 0);function Tl(t){const e=new Mt,{vertex:r,fragment:i,varyings:o}=e;return xt(r,t),e.include($r),o.add("vpos","vec3"),e.include(Tt,t),e.include(vo,t),e.include(bo,t),t.output!==C.Color&&t.output!==C.Alpha||(yt(e.vertex,t),e.include(Jt,t),e.include(gt,t),t.offsetBackfaces&&e.include(co),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),t.hasMultipassTerrain&&o.add("depth","float"),e.include(tt,t),e.include(lo,t),e.include(xo,t),e.include(To,t),r.uniforms.add(new Q("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Rr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===C.Alpha&&(e.include(We,t),e.include(je,t),e.include(Ht,t),i.uniforms.add([new Z("opacity",a=>a.opacity),new Z("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new re("tex",a=>a.texture)),i.include(kt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===C.Color&&(e.include(We,t),e.include(wo,t),e.include(zr,t),e.include(je,t),e.include(t.instancedDoublePrecision?Ao:Co,t),e.include(Ht,t),yt(e.fragment,t),Vr(i),Gr(i),Ur(i),i.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new q("ambient",a=>a.ambient),new q("diffuse",a=>a.diffuse),new Z("opacity",a=>a.opacity),new Z("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new re("tex",a=>a.texture)),e.include(Xi,t),e.include(Br,t),i.include(kt),e.extensions.add("GL_OES_standard_derivatives"),Qt(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===D.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===D.Normal||t.pbrMode===D.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===rt.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:s``}
      }
    `)),e.include(_o,t),e}const bl=Object.freeze(Object.defineProperty({__proto__:null,build:Tl},Symbol.toStringTag,{value:"Module"}));class er extends Pt{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=X.Attribute,r.doubleSidedMode=te.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,er.shader)}}er.shader=new Zt(bl,()=>wt(()=>import("./RealisticTree.glsl.6946dc2b.js"),["assets/RealisticTree.glsl.6946dc2b.js","assets/mat3f64.6d32a1d7.js","assets/mat4f64.ff2a477c.js","assets/vec3f32.1121a836.js","assets/index.cdd966ee.js","assets/index.279f609b.css","assets/VertexAttribute.42396f25.js","assets/symbolColorUtils.d4a32adc.js","assets/OrderIndependentTransparency.4d1575c0.js","assets/enums.2d9e6f64.js","assets/VertexArrayObject.7c57eb61.js","assets/Texture.07a8008f.js","assets/devEnvironmentUtils.d8d0484c.js","assets/BufferView.1a723d40.js","assets/vec33.c7ddb665.js","assets/DefaultMaterial_COLOR_GAMMA.b044e227.js","assets/types.44c7402c.js","assets/Version.3b70b955.js","assets/quat.c8624365.js","assets/quatf64.4ae3e6f1.js","assets/requestImageUtils.90225bc2.js","assets/Util.7b7ff3cb.js","assets/sphere.9d65532d.js","assets/VertexElementDescriptor.1fdca6da.js","assets/InterleavedLayout.82f34512.js"]));class Oo extends as{constructor(e){super(e,yl),this.supportsEdges=!0,this._configuration=new w,this._vertexBufferLayout=Al(this.parameters),this._instanceBufferLayout=e.instanced?Cl(this.parameters):null}isVisibleForOutput(e){return e!==C.Shadow&&e!==C.ShadowExludeHighlight&&e!==C.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:i,hasSymbolColors:o,vvColorEnabled:a}=e,n=p(r)&&r.includes("color"),l=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(n||a||o)?!!l||d:i?l?c:d:n||a||o?!!l||d:l?c:d}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=p(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=p(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normals==="screenDerivative"?X.ScreenDerivative:X.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,p(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Pe.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=p(this.parameters.modelTransformation),e!==C.Color&&e!==C.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=te.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?te.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?te.WindingOrder:te.None,this._configuration.instancedColor=p(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?D.Schematic:D.Normal:D.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<La,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return p(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,i,o,a,n,l){if(p(this.parameters.verticalOffset)){const d=o.camera;K(lr,i[12],i[13],i[14]);let c=null;switch(o.viewingMode){case ur.Global:c=Tr(yi,lr);break;case ur.Local:c=ra(yi,Pl)}let u=0;const m=Se($l,lr,d.eye),f=vr(m),b=Je(m,m,1/f);let A=null;this.parameters.screenSizePerspective&&(A=ia(c,b)),u+=es(d,f,this.parameters.verticalOffset,A,this.parameters.screenSizePerspective),Je(c,c,u),oa(sr,c,o.transform.inverseRotation),a=Se(Ml,a,sr),n=Se(Ol,n,sr)}Xn(e,r,o,a,n,ls(o.verticalOffset),l)}requiresSlot(e,r){return r===C.Color||r===C.Alpha||r===C.Depth||r===C.Normal||r===C.Shadow||r===C.ShadowHighlight||r===C.ShadowExludeHighlight||r===C.Highlight||r===C.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?Ye.TRANSPARENT_MATERIAL:Ye.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ye.OPAQUE_MATERIAL)||e===Ye.DRAPED_MATERIAL||r===C.ObjectAndLayerIdColor:!1}createGLMaterial(e){return new _l(e)}createBufferWriter(){return new wl(this._vertexBufferLayout,this._instanceBufferLayout)}}class _l extends Bn{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return K(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?er:Pt,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==C.Color&&this._output!==C.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class Sl extends gl{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const yl=new Sl;class wl{constructor(e,r){this.vertexBufferLayout=e,this.instanceBufferLayout=r}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,i,o,a){fs(i,this.vertexBufferLayout,e,r,o,a)}}function Al(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,r=Fi().vec3f(h.POSITION).vec3f(h.NORMAL);return t.hasVertexTangents&&r.vec4f(h.TANGENT),e&&r.vec2f(h.UV0),t.hasVertexColors&&r.vec4u8(h.COLOR),t.hasSymbolColors&&r.vec4u8(h.SYMBOLCOLOR),Mi("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(h.OBJECTANDLAYERIDCOLOR),r}function Cl(t){let e=Fi();return e=t.instancedDoublePrecision?e.vec3f(h.MODELORIGINHI).vec3f(h.MODELORIGINLO).mat3f(h.MODEL).mat3f(h.MODELNORMAL):e.mat4f(h.MODEL).mat4f(h.MODELNORMAL),p(t.instanced)&&t.instanced.includes("color")&&(e=e.vec4f(h.INSTANCECOLOR)),p(t.instanced)&&t.instanced.includes("featureAttribute")&&(e=e.vec4f(h.INSTANCEFEATUREATTRIBUTE)),p(t.instanced)&&t.instanced.includes("objectAndLayerIdColor")&&(e=e.vec4u8(h.OBJECTANDLAYERIDCOLOR_INSTANCED)),e}const Ml=I(),Ol=I(),Pl=Xe(0,0,1),yi=I(),sr=I(),lr=I(),$l=I(),Te=gr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Rl(t,e){const r=await Ll(t,e),i=await Fl(r.textureDefinitions,e);let o=0;for(const a in i)if(i.hasOwnProperty(a)){const n=i[a];o+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:i,size:o+aa(r)}}async function Ll(t,e){const r=p(e)&&e.streamDataRequester;if(r)return El(t,r,e);const i=await Oi(na(t,bt(e)));if(i.ok===!0)return i.value.data;Pi(i.error),Po(i.error)}async function El(t,e,r){const i=await Oi(e.request(t,"json",r));if(i.ok===!0)return i.value;Pi(i.error),Po(i.error.details.url)}function Po(t){throw new xr("",`Request for object resource failed: ${t}`)}function Il(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(Te.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(Te.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),i=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(Te.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),i=!1)):(Te.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),i=!1)}}else Te.warn("Indexed geometries must specify faces"),i=!1;break}default:Te.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(Te.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(Te.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Nl(t,e){const r=[],i=[],o=[],a=[],n=t.resource,l=Ei.parse(n.version||"1.0","wosr");Vl.validate(l);const d=n.model.name,c=n.model.geometries,u=n.materialDefinitions,m=t.textures;let f=0;const b=new Map;for(let A=0;A<c.length;A++){const $=c[A];if(!Il($))continue;const g=zl($),S=$.params.vertexAttributes,v=[];for(const y in S){const _=S[y],E=_.values;v.push([y,{data:E,size:_.valuesPerElement,exclusive:!0}])}const P=[];if($.params.topology!=="PerAttributeArray"){const y=$.params.faces;for(const _ in y)P.push([_,y[_].values])}const L=m&&m[g.texture];if(L&&!b.has(g.texture)){const{image:y,params:_}=L,E=new ee(y,_);a.push(E),b.set(g.texture,E)}const V=b.get(g.texture),M=V?V.id:void 0;let O=o[g.material]?o[g.material][g.texture]:null;if(!O){const y=u[g.material.substring(g.material.lastIndexOf("/")+1)].params;y.transparency===1&&(y.transparency=0);const _=L&&L.alphaChannelUsage,E=y.transparency>0||_==="transparency"||_==="maskAndTransparency",R=L?$o(L.alphaChannelUsage):void 0,F={ambient:Yr(y.diffuse),diffuse:Yr(y.diffuse),opacity:1-(y.transparency||0),transparent:E,textureAlphaMode:R,textureAlphaCutoff:.33,textureId:M,initTextureTransparent:!0,doubleSided:!0,cullFace:Pe.None,colorMixMode:y.externalColorMixMode||"tint",textureAlphaPremultiplied:!!L&&!!L.params.preMultiplyAlpha};p(e)&&e.materialParamsMixin&&Object.assign(F,e.materialParamsMixin),O=new Oo(F),o[g.material]||(o[g.material]={}),o[g.material][g.texture]=O}i.push(O);const N=new Kt(v,P);f+=P.position?P.position.length:0,r.push(N)}return{engineResources:[{name:d,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:Dl(r)}}function Dl(t){const e=$i();return t.forEach(r=>{const i=r.boundingInfo;p(i)&&(Gt(e,i.getBBMin()),Gt(e,i.getBBMax()))}),e}async function Fl(t,e){const r=[];for(const a in t){const n=t[a],l=n.images[0].data;if(!l){Te.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+l,c="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:Ke.REPEAT,t:Ke.REPEAT},preMultiplyAlpha:$o(u)!==W.Opaque},f=p(e)&&e.disableTextures?Promise.resolve(null):Ii(d,e);r.push(f.then(b=>({refId:c,image:b,params:m,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function $o(t){switch(t){case"mask":return W.Mask;case"maskAndTransparency":return W.MaskBlend;case"none":return W.Opaque;default:return W.Blend}}function zl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Vl=new Ei(1,2,"wosr");async function Bl(t,e){const r=Ro(Eo(t));if(r.fileType==="wosr"){const u=await(e.cache?e.cache.loadWOSR(r.url,e):Rl(r.url,e)),{engineResources:m,referenceBoundingBox:f}=Nl(u,e);return{lods:m,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,e.usePBR):fa(new va(e.streamDataRequester),r.url,e,e.usePBR)),o=sa(i.model.meta,"ESRI_proxyEllipsoid"),a=i.meta.isEsriSymbolResource&&p(o)&&i.meta.uri.includes("/RealisticTrees/");a&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,kl(i,o));const n=i.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:a,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...e.materialParamsMixin,treeRendering:a},{engineResources:d,referenceBoundingBox:c}=Lo(i,n,l,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:c,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function Ro(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Lo(t,e,r,i){const o=t.model,a=new Array,n=new Map,l=new Map,d=o.lods.length,c=$i();return o.lods.forEach((u,m)=>{const f=i.skipHighLods===!0&&(d>1&&m===0||d>3&&m===1)||i.skipHighLods===!1&&i.singleLodIndex!=null&&m!==i.singleLodIndex;if(f&&m!==0)return;const b=new Array;let A=0;if(u.parts.forEach(g=>{const{geometry:S,vertexCount:v}=Gl(g);b.push(S),A+=v;const P=S.boundingInfo;p(P)&&m===0&&(Gt(c,P.getBBMin()),Gt(c,P.getBBMax()))}),f)return;const $=new Xa(u.name,{textures:new Array,materials:new Array,geometries:b},u.lodThreshold,[0,0,0],A);a.push($),u.parts.forEach(g=>{const S=g.material+(g.attributes.normal?"_normal":"")+(g.attributes.color?"_color":"")+(g.attributes.texCoord0?"_texCoord0":"")+(g.attributes.tangent?"_tangent":""),v=o.materials.get(g.material),P=p(g.attributes.texCoord0),L=p(g.attributes.normal);if(k(v))return;const V=Ul(v.alphaMode);if(!n.has(S)){if(P){const F=(B,U=!1)=>{if(p(B)&&!l.has(B)){const H=o.textures.get(B);p(H)&&l.set(B,new ee(H.data,U?{...H.parameters,preMultiplyAlpha:U}:H.parameters))}};F(v.textureColor,V!==W.Opaque),F(v.textureNormal),F(v.textureOcclusion),F(v.textureEmissive),F(v.textureMetallicRoughness)}const M=v.color[0]**(1/qe),O=v.color[1]**(1/qe),N=v.color[2]**(1/qe),y=v.emissiveFactor[0]**(1/qe),_=v.emissiveFactor[1]**(1/qe),E=v.emissiveFactor[2]**(1/qe),R=p(v.textureColor)&&P?l.get(v.textureColor):null;n.set(S,new Oo({...e,transparent:V===W.Blend,customDepthTest:Ct.Lequal,textureAlphaMode:V,textureAlphaCutoff:v.alphaCutoff,diffuse:[M,O,N],ambient:[M,O,N],opacity:v.opacity,doubleSided:v.doubleSided,doubleSidedType:"winding-order",cullFace:v.doubleSided?Pe.None:Pe.Back,hasVertexColors:!!g.attributes.color,hasVertexTangents:!!g.attributes.tangent,normals:L?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:p(R)?R.id:void 0,colorMixMode:v.colorMixMode,normalTextureId:p(v.textureNormal)&&P?l.get(v.textureNormal).id:void 0,textureAlphaPremultiplied:p(R)&&!!R.params.preMultiplyAlpha,occlusionTextureId:p(v.textureOcclusion)&&P?l.get(v.textureOcclusion).id:void 0,emissiveTextureId:p(v.textureEmissive)&&P?l.get(v.textureEmissive).id:void 0,metallicRoughnessTextureId:p(v.textureMetallicRoughness)&&P?l.get(v.textureMetallicRoughness).id:void 0,emissiveFactor:[y,_,E],mrrFactors:[v.metallicFactor,v.roughnessFactor,e.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:ut(v.colorTextureTransform),normalTextureTransformMatrix:ut(v.normalTextureTransform),occlusionTextureTransformMatrix:ut(v.occlusionTextureTransform),emissiveTextureTransformMatrix:ut(v.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:ut(v.metallicRoughnessTextureTransform),...r}))}if($.stageResources.materials.push(n.get(S)),P){const M=O=>{p(O)&&$.stageResources.textures.push(l.get(O))};M(v.textureColor),M(v.textureNormal),M(v.textureOcclusion),M(v.textureEmissive),M(v.textureMetallicRoughness)}})}),{engineResources:a,referenceBoundingBox:c}}function Gl(t){const e=Hl(t.indices||t.attributes.position.count,t.primitiveType),r=t.attributes.position.count,i=Be(Qe,r);ua(i,t.attributes.position,t.transform);const o=[[h.POSITION,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]],a=[[h.POSITION,e]];if(p(t.attributes.normal)){const n=Be(Qe,r);Jr(Nt,t.transform),ha(n,t.attributes.normal,Nt),o.push([h.NORMAL,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.NORMAL,e])}if(p(t.attributes.tangent)){const n=Be(hr,r);Jr(Nt,t.transform),ga(n,t.attributes.tangent,Nt),o.push([h.TANGENT,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.TANGENT,e])}if(p(t.attributes.texCoord0)){const n=Be(Li,r);xa(n,t.attributes.texCoord0),o.push([h.UV0,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.UV0,e])}if(p(t.attributes.color)){const n=Be(Ze,r);if(t.attributes.color.elementCount===4)t.attributes.color instanceof hr?ri(n,t.attributes.color,255):t.attributes.color instanceof Ze?Ta(n,t.attributes.color):t.attributes.color instanceof ca&&ri(n,t.attributes.color,1/256);else{ba(n,255,255,255,255);const l=new Qr(n.buffer,0,4);t.attributes.color instanceof Qe?ei(l,t.attributes.color,255):t.attributes.color instanceof Qr?ma(l,t.attributes.color):t.attributes.color instanceof da&&ei(l,t.attributes.color,1/256)}o.push([h.COLOR,{data:n.typedBuffer,size:n.elementCount,exclusive:!0}]),a.push([h.COLOR,e])}return{geometry:new Kt(o,a),vertexCount:r}}const Nt=Xt();function Ul(t){switch(t){case"BLEND":return W.Blend;case"MASK":return W.Mask;case"OPAQUE":case null:case void 0:return W.Opaque}}function Hl(t,e){switch(e){case ft.TRIANGLES:return ya(t);case ft.TRIANGLE_STRIP:return Sa(t);case ft.TRIANGLE_FAN:return _a(t)}}function kl(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];for(const o of i.parts){const a=o.attributes.normal;if(k(a))return;const n=o.attributes.position,l=n.count,d=I(),c=I(),u=I(),m=Be(Ze,l),f=Be(Qe,l),b=la(_r(),o.transform);for(let A=0;A<l;A++){n.getVec(A,c),a.getVec(A,d),_t(c,c,o.transform),Se(u,c,e.center),Zr(u,u,e.radius);const $=u[2],g=vr(u),S=Math.min(.45+.55*g*g,1);Zr(u,u,e.radius),b!==null&&_t(u,u,b),Tr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&cr(u,u,d,$>-1?.2:Math.min(-4*$-3.8,1)),f.setVec(A,u),m.set(A,0,255*S),m.set(A,1,255*S),m.set(A,2,255*S),m.set(A,3,255)}o.attributes.normal=f,o.attributes.color=m}}}var mc=Object.freeze(Object.defineProperty({__proto__:null,fetch:Bl,gltfToEngineResources:Lo,parseUrl:Ro},Symbol.toStringTag,{value:"Module"}));export{Tl as I,fl as Q,qs as c,Zs as d,mc as o};
