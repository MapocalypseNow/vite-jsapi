import{s as z,h as K,g as H,r as D,a as I,j as v,k as Y}from"./index.cdd966ee.js";import{M as x,L as T,D as U,t as F,G as O,P,U as b,u as $}from"./enums.2d9e6f64.js";const q=z.getLogger("esri.views.webgl.checkWebGLError");function j(n,e){switch(e){case n.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case n.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case n.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case n.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case n.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case n.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const W=!!K("enable-feature:webgl-debug");function Z(){return W}function ie(){return W}function R(n){if(Z()){const e=n.getError();if(e){const t=j(n,e),i=new Error().stack;q.error(new H("webgl-error","WebGL error occured",{message:t,stack:i}))}}}function M(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}const S={target:x.TEXTURE_2D,samplingMode:T.LINEAR,wrapMode:U.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},G=4;class u{constructor(e,t,i=null){this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(F.Texture,this),this._descriptor={...S,...t};for(const r in S)this._descriptor[r]===void 0&&(this._descriptor[r]=S[r]);if(e.type!==D.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),w(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===x.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(F.Texture,this))}release(){this.dispose()}resize(e,t){const i=this._descriptor;if(i.width!==e||i.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");i.width=e,i.height=t,this._descriptor.target===x.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=x.TEXTURE_CUBE_MAP_POSITIVE_X;t<=x.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){var p,g;if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),e===void 0&&(e=null);const r=this._descriptor,o=t!=null?t:r.target,s=w(o);e===null&&(r.width=r.width||G,r.height=r.height||G,s&&(r.depth=(p=r.depth)!=null?p:1));const h=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(u.TEXTURE_UNIT_FOR_UPDATES),u._validateTexture(this._context,r),this._configurePixelStorage(),R(i);const a=r.pixelFormat;let l=(g=r.internalFormat)!=null?g:this._deriveInternalFormat(a,r.dataType);if(L(e)){let m=e.width,_=e.height;const d=1;e instanceof HTMLVideoElement&&(m=e.videoWidth,_=e.videoHeight),r.width&&r.height,s&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,l,r.hasMipmap,m,_,d),this._texImage(o,0,l,m,_,d,e),R(i),r.hasMipmap&&this.generateMipmap(),r.width===void 0&&(r.width=m),r.height===void 0&&(r.height=_),s&&r.depth===void 0&&(r.depth=d)}else{const{width:m,height:_,depth:d}=r;if(m==null||_==null)throw new Error("Width and height must be specified!");if(s&&d==null)throw new Error("Depth must be specified!");if(r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,l,r.hasMipmap,m,_,d),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8),N(e)){const c=e.levels,E=X(o,m,_,d),f=Math.min(E-1,c.length-1);M(i)?i.texParameteri(r.target,i.TEXTURE_MAX_LEVEL,f):r.hasMipmap=r.hasMipmap&&E===c.length;const A=l;if(!Q(A))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((y,C,B,V)=>{const k=c[Math.min(y,c.length-1)];this._compressedTexImage(o,y,A,C,B,V,k)},f)}else I(e)?(this._texImage(o,0,l,m,_,d,e),R(i),r.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((c,E,f,A)=>{this._texImage(o,c,l,E,f,A,null),R(i)})}u._applySamplingMode(i,this._descriptor),u._applyWrapMode(i,this._descriptor),u._applyAnisotropicFilteringParameters(this._context,this._descriptor),R(i),this._context.bindTexture(h,u.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,i,r,o,s,h=0){var E;s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl,l=this._descriptor,{pixelFormat:p,dataType:g,target:m,isImmutable:_}=l,d=(E=l.internalFormat)!=null?E:this._deriveInternalFormat(p,g);if(_&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const c=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||i<0||r>l.width||o>l.height||t+r>l.width||i+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),h){if(!M(a))return void console.error("Webgl2 must be enabled to use dataRowOffset!");a.pixelStorei(a.UNPACK_SKIP_ROWS,h)}if(L(s)?M(a)?a.texSubImage2D(m,e,t,i,r,o,p,g,s):a.texSubImage2D(m,e,t,i,p,g,s):N(s)?a.compressedTexSubImage2D(m,e,t,i,r,o,d,s.levels[e]):a.texSubImage2D(m,e,t,i,r,o,p,g,s),h){if(!M(a))return void console.error("Webgl2 must be enabled to use dataRowOffset!");a.pixelStorei(a.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(c,u.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,i,r,o,s,h,a){var f;a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._context.gl;if(!M(l))throw new Error("3D textures are not supported in WebGL1");const p=this._descriptor,{pixelFormat:g,dataType:m,isImmutable:_,target:d}=p,c=(f=p.internalFormat)!=null?f:this._deriveInternalFormat(g,m);if(_&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");w(d)||console.warn("Attempting to set 3D texture data on a non-3D texture");const E=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(u.TEXTURE_UNIT_FOR_UPDATES),(t<0||i<0||r<0||o>p.width||s>p.height||h>p.depth||t+o>p.width||i+s>p.height||r+h>p.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),N(a))a=a.levels[e],l.compressedTexSubImage3D(d,e,t,i,r,o,s,h,c,a);else{const A=a;l.texSubImage3D(d,e,t,i,r,o,s,h,g,m,A)}this._context.bindTexture(E,u.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,u._validateTexture(this._context,e)}e.samplingMode===T.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=T.LINEAR_MIPMAP_NEAREST):e.samplingMode===T.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=T.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(u.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,u.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,u._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(u._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(u._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===D.WEBGL1)return e;switch(t){case O.FLOAT:switch(e){case P.RGBA:return b.RGBA32F;case P.RGB:return b.RGB32F;default:throw new Error("Unable to derive format")}case O.UNSIGNED_BYTE:switch(e){case P.RGBA:return b.RGBA8;case P.RGB:return b.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:i,preMultiplyAlpha:r}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,t,i,r,o,s){const h=this._context.gl;if(!M(h))throw new Error("Immutable textures are not supported in WebGL1");if(!J(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const a=i?X(e,r,o,s):1;if(w(e)){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");h.texStorage3D(e,a,t,r,o,s)}else h.texStorage2D(e,a,t,r,o);this._wasImmutablyAllocated=!0}_texImage(e,t,i,r,o,s,h){const a=this._context.gl;let l=null;const p=this._context.type===D.WEBGL2,g=w(e),{isImmutable:m,pixelFormat:_,dataType:d}=this._descriptor;if(p&&(l=a),p||!L(h))if(m){if(I(h)){const c=h;if(g){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,t,0,0,0,r,o,s,_,d,c)}else a.texSubImage2D(e,t,0,0,r,o,_,d,c)}}else{const c=Y(h);if(g){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.texImage3D(e,t,i,r,o,s,0,_,d,c)}else a.texImage2D(e,t,i,r,o,0,_,d,c)}else a.texImage2D(e,0,i,_,d,h)}_compressedTexImage(e,t,i,r,o,s,h){const a=this._context.gl;let l=null;const p=w(e),g=this._descriptor.isImmutable;if(p){if(this._context.type!==D.WEBGL2)throw new Error("3D textures are not supported in WebGL1");l=a}if(g){if(I(h))if(p){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,t,0,0,0,r,o,s,i,h)}else a.compressedTexSubImage2D(e,t,0,0,r,o,i,h)}else if(p){if(s==null)throw new Error("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,t,i,r,o,s,0,h)}else a.compressedTexImage2D(e,t,i,r,o,0,h)}_forEachMipmapLevel(e,t=1/0){let{width:i,height:r,depth:o,hasMipmap:s,target:h}=this._descriptor;const a=h===x.TEXTURE_3D;if(i==null||r==null||a&&o==null)throw new Error("Missing texture dimensions for mipmap calculation");for(let l=0;e(l,i,r,o),s&&(i!==1||r!==1||a&&o!==1)&&!(l>=t);++l)i=Math.max(1,i>>1),r=Math.max(1,r>>1),a&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const i=M(e.gl),r=t.width!=null&&v(t.width)&&t.height!=null&&v(t.height);i||!t.isImmutable&&!w(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),i||r||(typeof t.wrapMode=="number"?t.wrapMode!==U.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===U.CLAMP_TO_EDGE&&t.wrapMode.t===U.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let i=t.samplingMode,r=t.samplingMode;i===T.LINEAR_MIPMAP_NEAREST||i===T.LINEAR_MIPMAP_LINEAR?(i=T.LINEAR,t.hasMipmap||(r=T.LINEAR)):i!==T.NEAREST_MIPMAP_NEAREST&&i!==T.NEAREST_MIPMAP_LINEAR||(i=T.NEAREST,t.hasMipmap||(r=T.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,i),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(e,t){typeof t.wrapMode=="number"?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;!i||e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,(r=t.maxAnisotropy)!=null?r:1)}}function J(n){return n in b}function Q(n){return n in $}function N(n){return I(n)&&"type"in n&&n.type==="compressed"}function ee(n){return I(n)&&"byteLength"in n}function L(n){return I(n)&&!N(n)&&!ee(n)}function w(n){return n===x.TEXTURE_3D||n===x.TEXTURE_2D_ARRAY}function X(n,e,t,i=1){let r=Math.max(e,t);return n===x.TEXTURE_3D&&(r=Math.max(r,i)),Math.round(Math.log(r)/Math.LN2)+1}u.TEXTURE_UNIT_FOR_UPDATES=0;export{u as E,Z as a,ie as c,M as n,R as u};