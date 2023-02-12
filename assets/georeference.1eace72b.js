import{fa as ir,fl as sr,dr as lr,_ as A,$ as T,a0 as fr,cp as cr,E as _,ab as ur,fm as pr,fn as K,fo as W,fp as M,fq as w,fr as yr,fs as q,ft as gr,a7 as mr,a as z,fu as hr,fv as Ar,fw as B,s as Tr,fx as k,e1 as D,e0 as H,fy as $r,fg as Fr,fz as Pr,fA as dr,fB as Er,t as m,fC as C,fD as Q,fE as Mr,ci as vr,fF as xr,fG as Rr}from"./index.cdd966ee.js";import{e as X}from"./mat3f64.6d32a1d7.js";import{e as $,o as _r}from"./mat4f64.ff2a477c.js";import{v as S,y as wr,x as Cr}from"./quat.c8624365.js";import{e as I}from"./quatf64.4ae3e6f1.js";import{T as p,i as u}from"./BufferView.1a723d40.js";import{t as d,e as Or,r as F,o as rr}from"./vec33.c7ddb665.js";function E(r=Nr){return[r[0],r[1],r[2],r[3]]}function ct(r,t,e=E()){return ir(e,r),e[3]=t,e}function ut(r,t,e=E()){return S(v,r,Y(r)),S(J,t,Y(t)),wr(v,J,v),br(e,sr(Cr(e,v)))}function pt(r){return r}function Y(r){return lr(r[3])}function br(r,t){return r[3]=t,r}const Nr=[0,0,1,0],v=I(),J=I();E();var j;let g=j=class extends cr{constructor(r){super(r),this.origin=_(),this.translation=_(),this.rotation=E(),this.scale=ur(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return S(Z,this.rotation,Y(this.rotation)),pr(r,Z,this.translation,this.scale),r}get localMatrixInverse(){return K($(),this.localMatrix)}applyLocal(r,t){return W(t,r,this.localMatrix)}applyLocalInverse(r,t){return W(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),f=$();return w(t,this.origin,f,l),yr(f,f,this.localMatrix),d(o,n,f),q(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;gr(a,_r)?Or(o,n):d(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new mr({x:t,y:e,z:o,spatialReference:r})}equals(r){return z(r)&&this.geographic===r.geographic&&hr(this.origin,r.origin)&&Ar(this.localMatrix,r.localMatrix)}clone(){const r={origin:B(this.origin),translation:B(this.translation),rotation:E(this.rotation),scale:B(this.scale),geographic:this.geographic};return new j(r)}};A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),A([T({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),A([T({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),A([T()],g.prototype,"localMatrix",null),A([T()],g.prototype,"localMatrixInverse",null),g=j=A([fr("esri.geometry.support.MeshTransform")],g);const Z=I(),Lr=g;function O(r,t){var e;return r.isGeographic||r.isWebMercator&&((e=t==null?void 0:t.geographic)!=null?e:!0)}const b=Tr.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,o,n){return L(o)?(N(h.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(b.error("Cannot convert spatial reference to PCPF"),n)}function zr(r,t,e,o,n){return L(o)?(N(h.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(b.error("Cannot convert to spatial reference from PCPF"),n)}function Sr(r,t,e){return q(r,t,0,e,M(t),0,r.length/3),e}function Yr(r,t,e){return q(r,M(e),0,t,e,0,r.length/3),t}function jr(r,t,e){if(m(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return d(n,o,e),t}function Vr(r,t,e){if(m(r))return t;C(c,e);const o=u.fromTypedArray(r),n=u.fromTypedArray(t);return F(n,o,c),Q(c)||rr(n,n),t}function Gr(r,t,e){if(m(r))return t;C(c,e);const o=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(F(n,o,c),Q(c)||rr(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function qr(r,t,e,o,n){if(!L(o))return b.error("Cannot convert spatial reference to PCPF"),n;N(h.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Ir(r,t,e,o,n){if(!L(o))return b.error("Cannot convert to spatial reference from PCPF"),n;N(h.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function N(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(tr(n))for(let f=0;f<i;f++)o.getVec(f,x),t.getVec(f,y),w(l,x,R,l),k(c,R),r===h.FROM_PCPF&&D(c,c),H(y,y,c),a.setVec(f,y);else for(let f=0;f<i;f++){o.getVec(f,x),t.getVec(f,y),w(l,x,R,l),k(c,R);const P=$r(e.get(f,1));let s=Math.cos(P);r===h.TO_PCPF&&(s=1/s),c[0]*=s,c[1]*=s,c[2]*=s,c[3]*=s,c[4]*=s,c[5]*=s,r===h.FROM_PCPF&&D(c,c),H(y,y,c),Fr(y,y),a.setVec(f,y)}return a}function L(r){return tr(r)||Ur(r)}function tr(r){return r.isWGS84||Pr(r)||dr(r)||Er(r)}function Ur(r){return r.isWebMercator}var h;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const x=_(),y=_(),R=$(),c=X();function er(r,t,e){return O(t.spatialReference,e)?Hr(r,t,e):Dr(r,t,e)}function Wr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(m(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return er({position:jr(o,new Float64Array(o.length),i),normal:z(n)?Vr(n,new Float32Array(n.length),i):null,tangent:z(a)?Gr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function yt(r,t,e){var o;if(e!=null&&e.useTransform){const{position:n,normal:a,tangent:i}=r;return{vertexAttributes:{position:n,normal:a,tangent:i},transform:new Lr({origin:[t.x,t.y,(o=t.z)!=null?o:0],geographic:O(t.spatialReference,e)})}}return{vertexAttributes:er(r,t,e),transform:null}}function kr(r,t,e){return O(t.spatialReference,e)?nr(r,t,e):V(r,t,e)}function gt(r,t,e,o){if(m(t))return kr(r,e,o);const n=Wr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?V(n,e,o):O(e.spatialReference,o)?nr(n,e,o):V(n,e,o)}function Dr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:f,vertical:P}=U(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*f+a,o[s+1]=n[s+1]*f+i,o[s+2]=n[s+2]*P+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Hr(r,t,e){const o=t.spatialReference,n=or(t,e,G),a=new Float64Array(r.position.length),i=Jr(r.position,n,o,a),l=C(ar,n);return{position:i,normal:Zr(i,a,r.normal,l,o),tangent:Kr(i,a,r.tangent,l,o)}}function Jr(r,t,e,o){d(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return Yr(o,n,e)}function Zr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);return F(u.fromTypedArray(a),u.fromTypedArray(e),o),zr(a,r,t,n,a),a}function Kr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);F(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Ir(a,r,t,n,a),a}function V(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:f,vertical:P}=U(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/f,o[s+1]=(n[s+1]-i)/f,o[s+2]=(n[s+2]-l)/P;return{position:o,normal:r.normal,tangent:r.tangent}}function nr(r,t,e){const o=t.spatialReference;or(t,e,G);const n=K(tt,G),a=new Float64Array(r.position.length),i=Qr(r.position,o,n,a),l=C(ar,n);return{position:i,normal:Xr(r.normal,r.position,a,o,l),tangent:rt(r.tangent,r.position,a,o,l)}}function or(r,t,e){w(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=U(t?t.unit:null,r.spatialReference);return Mr(e,e,[o,o,n]),e}function Qr(r,t,e,o){const n=Sr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return d(l,a,e),i}function Xr(r,t,e,o,n){if(m(r))return null;const a=Br(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a);return F(i,i,n),a}function rt(r,t,e,o,n){if(m(r))return null;const a=qr(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return F(i,i,n),a}function U(r,t){if(m(r))return et;const e=t.isGeographic?1:vr(t),o=t.isGeographic?1:xr(t),n=Rr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const G=$(),tt=$(),ar=X(),et={horizontal:1,vertical:1};export{Ir as L,Sr as M,Yr as O,yt as _,qr as a,kr as b,E as c,Y as d,ct as e,Lr as f,pt as g,zr as h,gt as i,Br as j,Wr as k,O as r,ut as v,er as x};
