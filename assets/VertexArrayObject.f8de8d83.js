import{s as V,r as x,d as X,a as C,i as Z,b as tt,c as et,t as w,e as it}from"./vendor.2b982caa.js";import{u as G,E as D,a as I}from"./Texture.2e153252.js";import{t as g,A as E,F as H,C as U,u as d,U as h,B as T,P as f,f as b,V as l,G as v,c as k,n as N,M as A,Y as L,L as J,D as Q}from"./enums.2d9e6f64.js";const m=V.getLogger("esri.views.webgl.BufferObject");function st(n){return et(n)}class S{constructor(t,e,i,s){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(g.BufferObject,this),this._glName=this._context.gl.createBuffer(),G(this._context.gl),s&&this.setData(s)}static createIndex(t,e,i){return new S(t,E.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new S(t,E.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){if(t.type!==x.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new S(t,E.UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=H.STREAM_READ,i){if(t.type!==x.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const s=new S(t,E.PIXEL_PACK_BUFFER,e);return i&&s.setSize(i),s}static createPixelUnpack(t,e=H.STREAM_DRAW,i){if(t.type!==x.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new S(t,E.PIXEL_UNPACK_BUFFER,e,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===E.ELEMENT_ARRAY_BUFFER?this._indexType===U.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===E.ELEMENT_ARRAY_BUFFER||this.bufferType===E.ARRAY_BUFFER}dispose(){var t;(t=this._context)!=null&&t.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(g.BufferObject,this),this._context=X(this._context)):this._glName&&m.warn("Leaked WebGL buffer object")}setSize(t,e=null){if(t<=0&&m.error("Buffer size needs to be positive!"),this.bufferType===E.ELEMENT_ARRAY_BUFFER&&C(e))switch(this._indexType=e,e){case U.UNSIGNED_SHORT:t*=2;break;case U.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===E.ELEMENT_ARRAY_BUFFER&&(Z(t)&&(e/=2,this._indexType=U.UNSIGNED_SHORT),tt(t)&&(e/=4,this._indexType=U.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;C(e)?s.bufferData(this.bufferType,e,this.usage):s.bufferData(this.bufferType,t,this.usage),G(s),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,s){if(!t)return;(e<0||e>=this._size)&&m.error("offset is out of range!"),i>=s&&m.error("end must be bigger than start!"),e+(s-i)>this._size&&m.error("An attempt to write beyond the end of the buffer!");const a=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const c=this._context.gl;if(this._context.type===x.WEBGL2)c.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,s-i);else{const r=i===0&&s===t.length?t:t.subarray(i,s);c.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,r)}G(c),this._isVAOAware&&this._context.bindVAO(a)}getSubData(t,e=0,i,s){if(this._context.type!==x.WEBGL2)return void m.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||s<0)return void m.error("Problem getting subdata: offset and length were less than zero!");const a=st(t)?t.BYTES_PER_ELEMENT:1;if(a*((i!=null?i:0)+(s!=null?s:0))>t.byteLength)return void m.error("Problem getting subdata: offset and length exceeded destination size!");e+a*(s!=null?s:0)>this.byteSize&&m.warn("Potential problem getting subdata: requested data exceeds buffer size!");const c=this._context.gl;this._context.bindBuffer(this,E.COPY_READ_BUFFER),c.getBufferSubData(E.COPY_READ_BUFFER,e,t,i,s),this._context.unbindBuffer(E.COPY_READ_BUFFER)}async getSubDataAsync(t,e=0,i,s){this._context.type===x.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(t,e,i,s)):m.error("Get buffer subdata is supported in WebGL2 only!")}}class P{constructor(t,e){this._context=t,this._desc=e,this.type="renderbuffer",this._context.instanceCounter.increment(g.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:s,height:a,internalFormat:c,multisampled:r}=e;if(r){if(this._context.type!==x.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,c,s,a)}else i.renderbufferStorage(i.RENDERBUFFER,c,s,a)}get descriptor(){return this._desc}get samples(){const t=this._desc.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const s=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):s.renderbufferStorage(s.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(g.Renderbuffer,this),this._context=X(this._context))}}function lt(n){const t=n.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"A numeric argument is out of range";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function ft(n,t){return n.vertexBuffers[t].size/rt(n.layout[t])}function rt(n){return n[0].stride}function nt(n,t,e,i,s=0){const a=n.gl,c=n.capabilities.instancing;n.bindBuffer(e);for(const r of i){const o=t.get(r.name);o===void 0&&console.error(`There is no location for vertex attribute '${r.name}' defined.`);const _=s*r.stride;if(r.count<=4)a.vertexAttribPointer(o,r.count,r.type,r.normalized,r.stride,r.offset+_),a.enableVertexAttribArray(o),r.divisor>0&&c&&c.vertexAttribDivisor(o,r.divisor);else if(r.count===9)for(let u=0;u<3;u++)a.vertexAttribPointer(o+u,3,r.type,r.normalized,r.stride,r.offset+12*u+_),a.enableVertexAttribArray(o+u),r.divisor>0&&c&&c.vertexAttribDivisor(o+u,r.divisor);else if(r.count===16)for(let u=0;u<4;u++)a.vertexAttribPointer(o+u,4,r.type,r.normalized,r.stride,r.offset+16*u+_),a.enableVertexAttribArray(o+u),r.divisor>0&&c&&c.vertexAttribDivisor(o+u,r.divisor);else console.error("Unsupported vertex attribute element count: "+r.count)}}function at(n,t,e,i){const s=n.gl,a=n.capabilities.instancing;n.bindBuffer(e);for(const c of i){const r=t.get(c.name);if(c.count<=4)s.disableVertexAttribArray(r),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(r,0);else if(c.count===9)for(let o=0;o<3;o++)s.disableVertexAttribArray(r+o),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(r+o,0);else if(c.count===16)for(let o=0;o<4;o++)s.disableVertexAttribArray(r+o),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(r+o,0);else console.error("Unsupported vertex attribute element count: "+c.count)}n.unbindBuffer(E.ARRAY_BUFFER)}function ct(n){switch(n){case f.ALPHA:case f.LUMINANCE:case f.RED:case f.RED_INTEGER:case h.R8:case h.R8I:case h.R8UI:case h.R8_SNORM:case T.STENCIL_INDEX8:return 1;case f.LUMINANCE_ALPHA:case f.RG:case f.RG_INTEGER:case h.RGBA4:case h.R16F:case h.R16I:case h.R16UI:case h.RG8:case h.RG8I:case h.RG8UI:case h.RG8_SNORM:case h.RGB565:case h.RGB5_A1:case T.DEPTH_COMPONENT16:return 2;case f.DEPTH_COMPONENT:case f.RGB:case f.RGB_INTEGER:case h.RGB8:case h.RGB8I:case h.RGB8UI:case h.RGB8_SNORM:case h.SRGB8:case T.DEPTH_COMPONENT24:return 3;case f.DEPTH_STENCIL:case f.RGBA:case f.RGBA_INTEGER:case h.RGBA8:case h.R32F:case h.R11F_G11F_B10F:case h.RG16F:case h.R32I:case h.R32UI:case h.RG16I:case h.RG16UI:case h.RGBA8I:case h.RGBA8UI:case h.RGBA8_SNORM:case h.SRGB8_ALPHA8:case h.RGB9_E5:case h.RGB10_A2UI:case h.RGB10_A2:case T.DEPTH_STENCIL:case T.DEPTH_COMPONENT32F:case T.DEPTH24_STENCIL8:return 4;case T.DEPTH32F_STENCIL8:return 5;case h.RGB16F:case h.RGB16I:case h.RGB16UI:return 6;case h.RG32F:case h.RG32I:case h.RG32UI:case h.RGBA16F:case h.RGBA16I:case h.RGBA16UI:return 8;case h.RGB32F:case h.RGB32I:case h.RGB32UI:return 12;case h.RGBA32F:case h.RGBA32I:case h.RGBA32UI:return 16;case d.COMPRESSED_RGB_S3TC_DXT1_EXT:case d.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case d.COMPRESSED_RGBA_S3TC_DXT3_EXT:case d.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case d.COMPRESSED_R11_EAC:case d.COMPRESSED_SIGNED_R11_EAC:case d.COMPRESSED_RGB8_ETC2:case d.COMPRESSED_SRGB8_ETC2:case d.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case d.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case d.COMPRESSED_RG11_EAC:case d.COMPRESSED_SIGNED_RG11_EAC:case d.COMPRESSED_RGBA8_ETC2_EAC:case d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function z(n){if(w(n))return 0;if("descriptor"in n)return n.glName?z(n.descriptor):0;const t=n.internalFormat||"pixelFormat"in n&&n.pixelFormat;if(!t)return 0;const e="hasMipmap"in n&&n.hasMipmap?1.3:1,i=n.width*n.height;return ct(t)*i*e}class B{constructor(t,e,i=null,s=null){var a;if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...e},t.instanceCounter.increment(g.FramebufferObject,this),C(i)){Array.isArray(i)||(i=[i]);for(let c=0;c<i.length;++c){const r=i[c],o=b.COLOR_ATTACHMENT0+c;let _;K(r)?(p(r)?(_=r.descriptor,this._colorAttachments.set(o,r)):(_=r,this._colorAttachments.set(o,new D(this._context,_))),M(_,this._desc)):($(r)?(_=r.descriptor,this._colorAttachments.set(o,r)):(_=r,this._colorAttachments.set(o,new P(this._context,_))),y(_,this._desc)),this._validateColorAttachmentPoint(o)}}if(C(s)){let c,r;if(K(s))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),p(s)?(r=s.descriptor,this._depthStencilTexture=s):(r=s,this._depthStencilTexture=new D(this._context,r)),M(r,this._desc);else{$(s)?(r=s.descriptor,c=s):(r=s,c=new P(this._context,r));const o=(a=this._desc.depthStencilTarget)!=null?a:l.DEPTH_STENCIL_RENDER_BUFFER;o===l.STENCIL_RENDER_BUFFER?this._stencilAttachment=c:o===l.DEPTH_RENDER_BUFFER||o===l.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=c:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=o,y(r,this._desc)}}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(g.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(b.COLOR_ATTACHMENT0);return t&&p(t)?t:null}get colorAttachment(){return this._colorAttachments.get(b.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){var t;return(t=this._desc.width)!=null?t:0}get height(){var t;return(t=this._desc.height)!=null?t:0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((t,[e,i])=>t+z(i),0)+z(this.depthStencilAttachment)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&p(e)?e:null}attachColorTexture(t,e=b.COLOR_ATTACHMENT0){!t||(this._validateColorAttachmentPoint(e),M(t.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t))}detachColorTexture(t=b.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(p(e)){const i=e;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),i}}setColorTextureTarget(t,e=b.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);p(i)&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencilTexture(t){if(w(t))return;const e=t.descriptor;e.pixelFormat!==f.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==v.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),M(e,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==l.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=l.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,k)),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,k)),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(w(t))return;const e=t.descriptor;if(e.internalFormat!==T.DEPTH_STENCIL&&e.internalFormat!==T.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),y(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=e.internalFormat===T.DEPTH_STENCIL?l.DEPTH_STENCIL_RENDER_BUFFER:l.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,s=this._desc.depthStencilTarget===l.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(N.FRAMEBUFFER,s,i.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===l.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(N.FRAMEBUFFER,i,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}detachAll(){this._colorAttachments.forEach((t,e)=>this._detachColorAttachment(e)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,e,i,s,a,c,r){(t<0||e<0||a<0||c<0)&&console.error("Offsets cannot be negative!"),(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!");const o=this._desc,_=r.descriptor;r.descriptor.target!==A.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),((o==null?void 0:o.width)==null||(o==null?void 0:o.height)==null||(_==null?void 0:_.width)==null||(_==null?void 0:_.height)==null||t+i>o.width||e+s>o.height||a+i>_.width||c+s>_.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,O=u.bindTexture(r,D.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(D.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(A.TEXTURE_2D,0,a,c,t,e,i,s),u.bindTexture(O,D.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,s,a,c,r){(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!"),r||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,s,a,c,r)}async readPixelsAsync(t,e,i,s,a,c,r){if(this._context.type!==x.WEBGL2)return I()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,i,s,a,c,r);const o=this._context.gl,_=S.createPixelPack(this._context,H.STREAM_READ,r.byteLength);this._context.bindBuffer(_),this._context.bindFramebuffer(this),o.readPixels(t,e,i,s,a,c,0),this._context.unbindBuffer(E.PIXEL_PACK_BUFFER),await _.getSubDataAsync(r),_.dispose()}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach(s=>{s&&s.resize(t,e)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach(s=>{s&&s.resize(t,e)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=N.FRAMEBUFFER){var u,O,W,Y;const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=this._context,s=e.createFramebuffer(),a=this._desc,c=(u=a.colorTarget)!=null?u:L.RENDER_BUFFER,r=(O=a.width)!=null?O:1,o=(W=a.height)!=null?W:1;if(e.bindFramebuffer(t,s),this._colorAttachments.size===0)if(c===L.TEXTURE||c===L.CUBEMAP)this._colorAttachments.set(b.COLOR_ATTACHMENT0,ht(i,a,this.descriptor.colorTarget===L.CUBEMAP?A.TEXTURE_CUBE_MAP:A.TEXTURE_2D));else{const R=new P(i,{internalFormat:h.RGBA4,width:r,height:o});this._colorAttachments.set(b.COLOR_ATTACHMENT0,R)}this._colorAttachments.forEach((R,j)=>{R&&(p(R)?this._framebufferTexture2D(R.glName,j,q(R),t):e.framebufferRenderbuffer(t,j,e.RENDERBUFFER,R.glName))});const _=(Y=a.depthStencilTarget)!=null?Y:l.NONE;switch(_){case l.DEPTH_RENDER_BUFFER:case l.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new P(i,{internalFormat:a.depthStencilTarget===l.DEPTH_RENDER_BUFFER?T.DEPTH_COMPONENT16:T.DEPTH_STENCIL,width:r,height:o}));const R=_===l.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(t,R,e.RENDERBUFFER,this._depthAttachment.glName);break}case l.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new P(i,{internalFormat:T.STENCIL_INDEX8,width:r,height:o})),e.framebufferRenderbuffer(t,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,this._stencilAttachment.glName);break;case l.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){i.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const R={target:A.TEXTURE_2D,pixelFormat:f.DEPTH_STENCIL,dataType:v.UNSIGNED_INT_24_8,samplingMode:J.NEAREST,wrapMode:Q.CLAMP_TO_EDGE,width:r,height:o};this._depthStencilTexture=new D(i,R)}this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,q(this._depthStencilTexture),t)}I()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=s,this._initialized=!0}_framebufferTexture2D(t,e=b.COLOR_ATTACHMENT0,i=A.TEXTURE_2D,s=N.FRAMEBUFFER,a=0){this._context.gl.framebufferTexture2D(s,e,i,t,a)}_detachColorAttachment(t){I()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const e=this._context.gl,i=this._colorAttachments.get(t);return p(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)):this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(N.FRAMEBUFFER,t,e.RENDERBUFFER,null)),this._colorAttachments.delete(t),i}_disposeColorAttachments(){this._colorAttachments.forEach((t,e)=>{this._detachColorAttachment(e),t.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=this._desc.depthStencilTarget===l.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(N.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(N.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(t){if(B._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const s=this._context.gl;B._MAX_COLOR_ATTACHMENTS=s.getParameter(i.MAX_COLOR_ATTACHMENTS)}else B._MAX_COLOR_ATTACHMENTS=1}const e=t-b.COLOR_ATTACHMENT0;e+1>B._MAX_COLOR_ATTACHMENTS&&V.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${B._MAX_COLOR_ATTACHMENTS} color attachments`)}}function p(n){return n!=null&&"type"in n&&n.type==="texture"}function $(n){return n!=null&&"type"in n&&n.type==="renderbuffer"}function K(n){return p(n)||n!=null&&"pixelFormat"in n}function ht(n,t,e){return new D(n,{target:e,pixelFormat:f.RGBA,dataType:v.UNSIGNED_BYTE,samplingMode:J.NEAREST,wrapMode:Q.CLAMP_TO_EDGE,width:t.width,height:t.height})}function M(n,t){n.target!==A.TEXTURE_2D&&n.target!==A.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),t.width!==void 0&&t.width>=0&&t.height!==void 0&&t.height>=0?t.width===n.width&&t.height===n.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=n.width,t.height=n.height)}function y(n,t){t.width!==void 0&&t.width>=0&&t.height!==void 0&&t.height>=0?t.width===n.width&&t.height===n.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=n.width,t.height=n.height)}function q(n){return n.descriptor.target===A.TEXTURE_CUBE_MAP?A.TEXTURE_CUBE_MAP_POSITIVE_X:A.TEXTURE_2D}B._MAX_COLOR_ATTACHMENTS=-1;const F=V.getLogger("esri.views.webgl.VertexArrayObject");class Et{constructor(t,e,i,s,a=null){this._context=t,this._locations=e,this._layout=i,this._buffers=s,this._indexBuffer=a,this._glName=null,this._initialized=!1,t.instanceCounter.increment(g.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((t,e)=>t+this._buffers[e].size,C(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){var e,i,s;if(!this._context)return void((this._glName||t&&Object.getOwnPropertyNames(this._buffers).length>0)&&F.warn("Leaked WebGL VAO"));if(this._glName){const a=(i=(e=this._context)==null?void 0:e.capabilities)==null?void 0:i.vao;a?(a.deleteVertexArray(this._glName),this._glName=null):F.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const a in this._buffers)(s=this._buffers[a])==null||s.dispose(),delete this._buffers[a];this._indexBuffer=it(this._indexBuffer)}this._context.instanceCounter.decrement(g.VertexArrayObject,this),this._context=X(this._context)}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||F.error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const a in t){const c=t[a];c||F.error("Vertex buffer is uninitialized!");const r=e[a];r||F.error("Vertex element descriptor is empty!"),nt(this._context,this._locations,c,r)}C(i)&&(this._context.capabilities.vao?s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||F.error("Vertex buffer dictionary is empty!");for(const i in t){const s=t[i];s||F.error("Vertex buffer is uninitialized!");const a=e[i];at(this._context,this._locations,s,a)}C(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}export{S as E,ct as _,Et as a,lt as i,ft as n,P as s,B as x};
