import{b3 as Et,en as v,a as U,a5 as G,fi as j,gI as Z,fa as tt,gJ as Rt,E as N,ab as m,gK as et,fh as W,_ as At,a0 as Nt,l as Ft,t as nt,b5 as Mt,fw as $}from"./index.cdd966ee.js";import{c as ot,v as xt,b as St,j as jt}from"./Util.7b7ff3cb.js";import{s as mt,d as it,_ as z,p as st,T as H,k as F,V as rt,R as S,N as ht}from"./sphere.9d65532d.js";import{q as at}from"./QueryEngineResult.6d073b54.js";import"./plane.02743e67.js";import{m as Bt}from"./edgeProcessing.39b38fa1.js";import"./mat3f64.6d32a1d7.js";import"./mat4f64.ff2a477c.js";import"./quatf64.4ae3e6f1.js";import"./quantizationUtils.78b8ca28.js";import"./WhereClause.1f4eddc7.js";import"./utils.81382ea2.js";import"./generateRendererUtils.aba7a4a2.js";import"./projectionSupport.627b4ce4.js";import"./json.879c9adc.js";import"./utils.9add79eb.js";import"./deduplicate.28ba8c18.js";import"./InterleavedLayout.82f34512.js";import"./BufferView.1a723d40.js";import"./types.44c7402c.js";import"./VertexAttribute.42396f25.js";import"./enums.2d9e6f64.js";import"./VertexElementDescriptor.1fdca6da.js";function pt(o){return o?{ray:it(o.ray),c0:o.c0,c1:o.c1}:{ray:it(),c0:0,c1:Number.MAX_VALUE}}new mt(()=>pt());function C(o,t){for(let e=0;e<X.NUM;e++){const n=o[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}var dt,d;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(dt||(dt={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(d||(d={}));d.FAR_BOTTOM_RIGHT,d.NEAR_BOTTOM_RIGHT,d.NEAR_BOTTOM_LEFT,d.FAR_BOTTOM_LEFT,d.NEAR_BOTTOM_LEFT,d.NEAR_BOTTOM_RIGHT,d.NEAR_TOP_RIGHT,d.NEAR_TOP_LEFT,d.FAR_BOTTOM_RIGHT,d.FAR_BOTTOM_LEFT,d.FAR_TOP_LEFT,d.FAR_TOP_RIGHT,d.NEAR_BOTTOM_RIGHT,d.FAR_BOTTOM_RIGHT,d.FAR_TOP_RIGHT,d.NEAR_TOP_RIGHT,d.FAR_BOTTOM_LEFT,d.NEAR_BOTTOM_LEFT,d.NEAR_TOP_LEFT,d.FAR_TOP_LEFT,d.FAR_TOP_LEFT,d.NEAR_TOP_LEFT,d.NEAR_TOP_RIGHT,d.FAR_TOP_RIGHT;var X,ct;(function(o){o[o.NUM=6]="NUM"})(X||(X={})),function(o){o[o.NUM=8]="NUM"}(ct||(ct={}));new mt(pt);class B{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new c,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),c.clearPool(),J[0]=null,M.prune(),x.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=c.acquire();for(let i=0;i<e;i++){const s=t[i];this._isDegenerate(s)?this._degenerateObjects.add(s):(n.init(this._root),this._add(s,n))}c.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=c.acquire();for(const i of t){const s=U(e)?e:z(this._objectToBoundingSphere(i),$t);P(s[3])?(n.init(this._root),this._remove(i,s,n)):this._degenerateObjects.delete(i)}c.release(n),this._shrink()}update(t,e){if(!P(e[3])&&this._isDegenerate(t))return;const n=vt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=st(t,e);this._forEachNode(this._root,s=>{if(!this._intersectsNode(i,s))return!1;const h=s.node;return h.terminals.forAll(r=>{this._intersectsObject(i,r)&&n(r)}),h.residents!==null&&h.residents.forAll(r=>{this._intersectsObject(i,r)&&n(r)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=st(t,e);this._forEachNode(this._root,h=>{if(!this._intersectsNodeWithOffset(s,h,i))return!1;const r=h.node;return r.terminals.forAll(a=>{this._intersectsObjectWithOffset(s,a,i)&&n(a)}),r.residents!==null&&r.residents.forAll(a=>{this._intersectsObjectWithOffset(s,a,i)&&n(a)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=()=>!0,s=1/0){let h=1/0,r=1/0,a=null;const u=q(t,e),_=l=>{if(--s,!i(l))return;const O=this._objectToBoundingSphere(l);if(!C(n,O))return;const E=A(t,e,F(O)),I=E-O[3],f=E+O[3];I<h&&(h=I,r=f,a=l)};return this._forEachNodeDepthOrdered(this._root,l=>{if(s<=0||!C(n,l.bounds)||(G(g,u,l.halfSize),j(g,g,l.bounds),A(t,e,g)>r))return!1;const O=l.node;return O.terminals.forAll(E=>_(E)),O.residents!==null&&O.residents.forAll(E=>_(E)),!0},t,e),a}forEachInDepthRange(t,e,n,i,s,h,r){let a=-1/0,u=1/0;const _={setRange:f=>{n===B.DepthOrder.FRONT_TO_BACK?(a=Math.max(a,f.near),u=Math.min(u,f.far)):(a=Math.max(a,-f.far),u=Math.min(u,-f.near))}};_.setRange(i);const l=A(e,n,t),O=q(e,n),E=q(e,-n),I=f=>{if(!r(f))return;const R=this._objectToBoundingSphere(f),L=F(R),Y=A(e,n,L)-l,gt=Y-R[3],bt=Y+R[3];gt>u||bt<a||!C(h,R)||s(f,_)};this._forEachNodeDepthOrdered(this._root,f=>{if(!C(h,f.bounds)||(G(g,O,f.halfSize),j(g,g,f.bounds),A(e,n,g)-l>u)||(G(g,E,f.halfSize),j(g,g,f.bounds),A(e,n,g)-l<a))return!1;const R=f.node;return R.terminals.forAll(L=>I(L)),R.residents!==null&&R.residents.forAll(L=>I(L)),!0},e,n)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize))}forEachNeighbor(t,e){const n=H(e),i=F(e),s=a=>{const u=this._objectToBoundingSphere(a),_=H(u),l=n+_;return!(Z(F(u),i)-l*l<=0)||t(a)};let h=!0;const r=a=>{h&&(h=s(a))};this._forEachNode(this._root,a=>{const u=H(a.bounds),_=n+u;if(Z(F(a.bounds),i)-_*_>0)return!1;const l=a.node;return l.terminals.forAll(r),h&&l.residents!==null&&l.residents.forAll(r),h}),h&&this.forEachDegenerateObject(r)}_intersectsNode(t,e){return w(e.bounds,2*-e.halfSize,p),w(e.bounds,2*e.halfSize,T),ot(t.origin,t.direction,p,T)}_intersectsNodeWithOffset(t,e,n){return w(e.bounds,2*-e.halfSize,p),w(e.bounds,2*e.halfSize,T),n.applyToMinMax(p,T),ot(t.origin,t.direction,p,T)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||rt(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||rt(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=c.acquire().init(t);const i=[n];for(;i.length!==0;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let s=0;s<n.node.children.length;s++)n.node.children[s]&&i.push(c.acquire().init(n).advance(s));c.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=B.DepthOrder.FRONT_TO_BACK){let s=c.acquire().init(t);const h=[s];for(Pt(n,i,_t);h.length!==0;){if(s=h.pop(),e(s)&&!s.isLeaf())for(let r=7;r>=0;--r){const a=_t[r];s.node.children[a]&&h.push(c.acquire().init(s).advance(a))}c.release(s)}}_remove(t,e,n){M.clear();const i=n.advanceTo(e,(s,h)=>{M.push(s.node),M.push(h)})?n.node.terminals:n.node.residents;if(i.removeUnordered(t),i.length===0)for(let s=M.length-2;s>=0;s-=2){const h=M.data[s],r=M.data[s+1];if(!this._purge(h,r))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new v({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=c.acquire().init(t);this._add(e.getItemAt(n),i),c.release(i)}}_grow(t,e){if(e!==0&&(lt(t,e,n=>this._objectToBoundingSphere(n),b),P(b[3])&&!this._fitsInsideTree(b)))if(this._nodeIsEmpty(this._root.node))z(b,this._root.bounds),this._root.halfSize=1.25*b[3];else{const n=this._rootBoundsForRootAsSubNode(b);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(b,n):this._growRootAsSubNode(n),c.release(n)}}_rebuildTree(t,e){tt(k,e.bounds),k[3]=e.halfSize,lt([t,k],2,i=>i,K);const n=c.acquire().init(this._root);this._root.initFrom(null,K,1.25*K[3]),this._forEachNode(n,i=>(this.add(i.node.terminals.data,i.node.terminals.length),i.node.residents!==null&&this.add(i.node.residents.data,i.node.residents.length),!0)),c.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,i=>(n=Math.max(n,i.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,h=this._root.halfSize;for(let r=0;r<3;r++){const a=s[r]-h-(n[r]-e),u=n[r]+e-(s[r]+h),_=Math.max(0,Math.ceil(a/(2*h))),l=Math.max(0,Math.ceil(u/(2*h)))+1,O=2**Math.ceil(Math.log(_+l)*Math.LOG2E);i=Math.max(i,O),y[r].min=_,y[r].max=l}for(let r=0;r<3;r++){let a=y[r].min,u=y[r].max;const _=(i-(a+u))/2;a+=Math.ceil(_),u+=Math.floor(_);const l=s[r]-h-a*h*2;V[r]=l+(u+a)*h}return V[3]=i*h*Ot,c.acquire().initFrom(null,V,i*h,0)}_growRootAsSubNode(t){const e=this._root.node;tt(b,this._root.bounds),b[3]=this._root.halfSize,this._root.init(t),t.advanceTo(b,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&t==null;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!P(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class c{constructor(){this.bounds=S(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=U(t)?t:c.createEmptyNode(),U(e)&&z(e,this.bounds),this.halfSize=n,this.depth=i,this}advance(t){let e=this.node.children[t];e||(e=c.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=Tt[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*Ot,this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new v({shrink:!0}),residents:new v({shrink:!0})}}static acquire(){return c._pool.acquire()}static release(t){c._pool.release(t)}static clearPool(){c._pool.prune()}}function It(o,t){o[0]=Math.min(o[0],t[0]-t[3]),o[1]=Math.min(o[1],t[1]-t[3]),o[2]=Math.min(o[2],t[2]-t[3])}function Lt(o,t){o[0]=Math.max(o[0],t[0]+t[3]),o[1]=Math.max(o[1],t[1]+t[3]),o[2]=Math.max(o[2],t[2]+t[3])}function w(o,t,e){e[0]=o[0]+t,e[1]=o[1]+t,e[2]=o[2]+t}function lt(o,t,e,n){if(t===1){const i=e(o[0]);z(i,n)}else{p[0]=1/0,p[1]=1/0,p[2]=1/0,T[0]=-1/0,T[1]=-1/0,T[2]=-1/0;for(let i=0;i<t;i++){const s=e(o[i]);P(s[3])&&(It(p,s),Lt(T,s))}Rt(n,p,T,.5),n[3]=Math.max(T[0]-p[0],T[1]-p[1],T[2]-p[2])/2}}function Pt(o,t,e){if(!x.length)for(let n=0;n<8;++n)x.push({index:0,distance:0});for(let n=0;n<8;++n){const i=Tt[n];x.data[n].index=n,x.data[n].distance=A(o,t,i)}x.sort((n,i)=>n.distance-i.distance);for(let n=0;n<8;++n)e[n]=x.data[n].index}function q(o,t){let e,n=1/0;for(let i=0;i<8;++i){const s=A(o,t,ut[i]);s<n&&(n=s,e=ut[i])}return e}function A(o,t,e){return t*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2])}function P(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}c._pool=new Et(c),function(o){var t;(t=o.DepthOrder||(o.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(B||(B={}));const Tt=[m(-1,-1,-1),m(1,-1,-1),m(-1,1,-1),m(1,1,-1),m(-1,-1,1),m(1,-1,1),m(-1,1,1),m(1,1,1)],ut=[m(-1,-1,-1),m(-1,-1,1),m(-1,1,-1),m(-1,1,1),m(1,-1,-1),m(1,-1,1),m(1,1,-1),m(1,1,1)],Ot=Math.sqrt(3),J=[null];function vt(o){return J[0]=o,J}const V=S(),g=N(),p=N(),T=N(),M=new v,$t=S(),b=S(),k=S(),K=S(),y=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],x=new v,_t=[0,0,0,0,0,0,0,0],ft=B,Ct=1e3;function wt(o,t,e){const n=S(),i=F(n);return et(i,i,o,.5),et(i,i,t,.5),n[3]=W(i,o),j(i,i,e),n}let Q=class{constructor(){this._idToComponent=new Map,this._components=new ft(o=>o.bounds),this._edges=new ft(o=>o.bounds),this._tmpLineSegment=xt(),this._tmpP1=N(),this._tmpP2=N(),this._tmpP3=N(),this.remoteClient=null}async fetchCandidates(o,t){await Promise.resolve(),Ft(t),await this._ensureEdgeLocations(o,t);const e=[];return this._edges.forEachNeighbor(n=>(this._addCandidates(o,n,e),e.length<Ct),o.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(o,t){const e=[];if(this._components.forEachNeighbor(s=>{if(nt(s.info)){const{id:h,uid:r}=s;e.push({id:h,uid:r})}return!0},o.bounds),!e.length)return;const n={components:e},i=await this.remoteClient.invoke("fetchAllEdgeLocations",n,Mt(t,{}));for(const s of i.components)this._setFetchEdgeLocations(s)}async add(o){const t=new D(o.id,o.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(o){const t=this._idToComponent.get(o.id);if(t){const e=[];this._edges.forEachNeighbor(n=>(n.component===t&&e.push(n),!0),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(o){const t=this._idToComponent.get(o.id);if(nt(t)||o.uid!==t.uid)return;const e=Bt.createView(o.locations),n=new Array(e.count),i=N(),s=N();for(let a=0;a<e.count;a++){e.position0.getVec(a,i),e.position1.getVec(a,s);const u=wt(i,s,o.origin),_=new yt(t,a,u);n[a]=_}this._edges.add(n);const{objectIds:h,origin:r}=o;t.info={locations:e,objectIds:h,origin:r}}_addCandidates(o,t,e){const{locations:n,origin:i,objectIds:s}=t.component.info,h=n.position0.getVec(t.index,this._tmpP1),r=n.position1.getVec(t.index,this._tmpP2);j(h,h,i),j(r,r,i);const a=s[n.componentIndex.get(t.index)];this._addEdgeCandidate(o,a,h,r,e),this._addVertexCandidate(o,a,h,e),this._addVertexCandidate(o,a,r,e)}_addEdgeCandidate(o,t,e,n,i){if(!(o.types&at.EDGE))return;const s=F(o.bounds),h=St(e,n,this._tmpLineSegment),r=jt(h,s,this._tmpP3);if(!ht(o.bounds,r))return null;i.push({type:"edge",objectId:t,target:$(r),distance:W(s,r),start:$(e),end:$(n)})}_addVertexCandidate(o,t,e,n){if(!(o.types&at.VERTEX))return;const i=F(o.bounds);if(!ht(o.bounds,e))return null;n.push({type:"vertex",objectId:t,target:$(e),distance:W(i,e)})}};Q=At([Nt("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],Q);const ae=Q;class D{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++D.uid}}D.uid=0;class yt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}export{ae as default};
