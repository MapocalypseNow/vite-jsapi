import{b as u,S}from"./Utils.e28b12d1.js";import{f as y,_ as V,A as b}from"./MaterialKey.8a7fb55b.js";import"./vendor.2b982caa.js";import"./enums.0295eb81.js";import"./enums.2d9e6f64.js";import"./Texture.2e153252.js";import"./VertexElementDescriptor.1fdca6da.js";function p(e){var r;return e.type==="line-marker"?{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function f(e){return b(e)}function O(e,r,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return x(e,r,t);case"simple-marker":case"picture-marker":return g(e,r,t);case"simple-line":return K(e,r,t);case"text":return z(e,r,t);case"label":return d(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return{...p(e),type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function d(e,r,t){const a=e.toJSON(),l=y(u.LABEL,{...r,placement:a.labelPlacement});return{materialKey:t?f(l):l,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}function x(e,r,t){const a=y(u.FILL,r),l=t?f(a):a,s=e.clone(),n=s.outline,i=V(r.symbologyType);i||(s.outline=null);const c={materialKey:l,hash:s.hash(),...p(s)};if(i)return c;const m=[];if(m.push(c),n){const o=y(u.LINE,{...r,isOutline:!0}),h={materialKey:t?f(o):o,hash:n.hash(),...p(n)};m.push(h)}return{type:"composite-symbol",layers:m,hash:m.reduce((o,h)=>h.hash+o,"")}}function K(e,r,t){var m;const a=V(r.symbologyType)?S.DEFAULT:r.symbologyType,l=y(u.LINE,{...r,symbologyType:a}),s=t?f(l):l,n=e.clone(),i=n.marker;n.marker=null;const c=[];if(c.push({materialKey:s,hash:n.hash(),...p(n)}),i){const o=y(u.MARKER,r),h=t?f(o):o;i.color=(m=i.color)!=null?m:n.color,c.push({materialKey:h,hash:i.hash(),lineWidth:n.width,...p(i)})}return{type:"composite-symbol",layers:c,hash:c.reduce((o,h)=>h.hash+o,"")}}function g(e,r,t){const a=y(u.MARKER,r),l=t?f(a):a,s=p(e);return{materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:r.maxVVSize}}function z(e,r,t){const a=y(u.TEXT,r),l=t?f(a):a,s=p(e);return{materialKey:l,hash:e.hash(),...s,angle:e.angle,maxVVSize:r.maxVVSize}}export{O as createSymbolSchema};
