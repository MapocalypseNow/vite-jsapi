import{gM as C,el as X,gN as j,gO as G,gP as K,fw as z,E as p,fb as T,ff as _,fi as M,a5 as P,a4 as f,fc as E,gQ as N,fI as k,gR as L,fa as D,s as F,t as H,fh as J,fe as A,gS as U,fo as W,gL as tt,fg as et,gT as R,G as V,gI as st}from"./index.cdd966ee.js";import{n as it}from"./mat3f64.6d32a1d7.js";import{n as rt}from"./mat4f64.ff2a477c.js";import{n as nt}from"./quatf64.4ae3e6f1.js";class ot{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&C(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*x);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,x));e++)this._items.push(this._allocator())}}const x=1024;class o{constructor(e,s,i){this._itemByteSize=e,this._itemCreate=s,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(i/this._itemByteSize)}get(){this._itemsPtr===0&&C(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const s=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let i=0;i<this._itemsPerBuffer;++i)this._items.push(this._itemCreate(s,i*this._itemByteSize));this._buffers.push(s)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=m){return new o(16,j,e)}static createVec3f64(e=m){return new o(24,G,e)}static createVec4f64(e=m){return new o(32,K,e)}static createMat3f64(e=m){return new o(72,it,e)}static createMat4f64(e=m){return new o(128,rt,e)}static createQuatf64(e=m){return new o(32,nt,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const m=4*X.KILOBYTES;o.createVec2f64();const h=o.createVec3f64();o.createVec4f64();o.createMat3f64();const ct=o.createMat4f64();o.createQuatf64();var g;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(g||(g={}));function ut(t){return t?O(z(t.origin),z(t.direction)):O(p(),p())}function O(t,e){return{origin:t,direction:e}}function Ct(t,e){const s=ft.get();return s.origin=t,s.direction=e,s}function at(t,e,s){const i=T(t.direction,_(s,e,t.origin));return M(s,t.origin,P(s,t.direction,i)),s}const ft=new ot(()=>ut());function ht(t,e){const s=T(t,e)/(f(t)*f(e));return-E(s)}function S(){return N()}function Y(t,e=S()){return k(e,t)}function mt(t,e){return L(t[0],t[1],t[2],e)}function gt(t){return t}function _t(t){t[0]=t[1]=t[2]=t[3]=0}function lt(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function $(t){return t[3]}function pt(t){return t}function Pt(t,e,s,i){return L(t,e,s,i)}function Mt(t,e,s){return t!==s&&D(s,t),s[3]=t[3]+e,s}function $t(t,e,s){return F.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===s?s:Y(t,s)}function d(t,e,s){if(H(e))return!1;const{origin:i,direction:r}=e,n=dt;n[0]=i[0]-t[0],n[1]=i[1]-t[1],n[2]=i[2]-t[2];const c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(c===0)return!1;const u=2*(r[0]*n[0]+r[1]*n[1]+r[2]*n[2]),l=u*u-4*c*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-t[3]*t[3]);if(l<0)return!1;const b=Math.sqrt(l);let a=(-u-b)/(2*c);const w=(-u+b)/(2*c);return(a<0||w<a&&w>0)&&(a=w),!(a<0)&&(s&&(s[0]=i[0]+r[0]*a,s[1]=i[1]+r[1]*a,s[2]=i[2]+r[2]*a),!0)}const dt=p();function wt(t,e){return d(t,e,null)}function yt(t,e,s){if(d(t,e,s))return s;const i=Z(t,e,h.get());return M(s,e.origin,P(h.get(),e.direction,J(e.origin,i)/f(e.direction))),s}function Z(t,e,s){const i=h.get(),r=ct.get();A(i,e.origin,e.direction);const n=$(t);A(s,i,e.origin),P(s,s,1/f(s)*n);const c=v(t,e.origin),u=ht(e.origin,s);return U(r,u+c,i),W(s,s,r),s}function Bt(t,e,s){return d(t,e,s)?s:(at(e,t,s),q(t,s,s))}function q(t,e,s){const i=_(h.get(),e,t),r=P(h.get(),i,t[3]/f(i));return M(s,r,t)}function St(t,e){const s=_(h.get(),e,t),i=tt(s),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))}function v(t,e){const s=_(h.get(),e,t),i=f(s),r=$(t),n=r+Math.abs(r-i);return E(r/n)}const y=p();function I(t,e,s,i){const r=_(y,e,t);switch(s){case g.X:{const n=R(r,y)[2];return V(i,-Math.sin(n),Math.cos(n),0)}case g.Y:{const n=R(r,y),c=n[1],u=n[2],l=Math.sin(c);return V(i,-l*Math.cos(u),-l*Math.sin(u),Math.cos(c))}case g.Z:return et(i,r);default:return}}function Q(t,e){const s=_(B,e,t);return f(s)-t[3]}function bt(t,e,s,i){const r=Q(t,e),n=I(t,e,g.Z,B),c=P(B,n,s-r);return M(i,e,c)}function zt(t,e){const s=st(t,e),i=$(t);return s<=i*i}const B=p(),At=S();Object.freeze(Object.defineProperty({__proto__:null,create:S,copy:Y,fromCenterAndRadius:mt,wrap:gt,clear:_t,fromRadius:lt,getRadius:$,getCenter:pt,fromValues:Pt,elevate:Mt,setExtent:$t,intersectRay:d,intersectsRay:wt,intersectRayClosestSilhouette:yt,closestPointOnSilhouette:Z,closestPoint:Bt,projectPoint:q,distanceToSilhouette:St,angleToSilhouette:v,axisAt:I,altitudeAt:Q,setAltitudeAt:bt,containsPoint:zt,tmpSphere:At},Symbol.toStringTag,{value:"Module"}));export{zt as N,S as R,$ as T,wt as V,Y as _,h as c,ut as d,pt as k,Ct as p,ot as s};
