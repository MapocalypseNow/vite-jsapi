import{_ as E,$ as j,co as ot,a0 as at,cp as ht,g as ct,a as P,t as N,aY as ft,s as W,k as Y}from"./index.f1f1f1c7.js";class J{constructor(e=null,i=null,l=null){this.minValue=e,this.maxValue=i,this.noDataValue=l}}var L;let G=L=class extends ht{constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.statistics=null}static createEmptyBand(t,e){return new(L.getPixelArrayConstructor(t))(e)}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}getPlaneCount(){var t;return(t=this.pixels)==null?void 0:t.length}addData(t){var e;if(!t.pixels||t.pixels.length!==this.width*this.height)throw new ct("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push((e=t.statistics)!=null?e:new J)}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){if(!this.pixels)return;this.statistics=this.pixels.map(i=>this._calculateBandStatistics(i,this.mask));const t=this.mask;let e=0;if(P(t))for(let i=0;i<t.length;i++)t[i]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||t==="f64"||t==="f32"||!this.pixels)return;let e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}const[i,l]=e,a=this.pixels,n=this.width*this.height,s=a.length;let o,h,f;const r=[];for(let u=0;u<s;u++){f=L.createEmptyBand(t,n),o=a[u];for(let g=0;g<n;g++)h=o[g],f[g]=h>l?l:h<i?i:h;r.push(f)}this.pixels=r,this.pixelType=t}extractBands(t){const{pixels:e,statistics:i}=this;if(N(t)||t.length===0||!e||e.length===0)return this;const l=e.length,a=t.some(s=>s>=e.length),n=l===t.length&&!t.some((s,o)=>s!==o);return a||n?this:new L({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map(s=>e[s]),statistics:i&&t.map(s=>i[s])})}clone(){const t=new L({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let e;P(this.mask)&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0));const i=L.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const l=!!this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=l?this.pixels[e].slice(0,this.pixels[e].length):new i(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=ft(this.statistics[e]);return t}_fillFrom8Bit(t){const{mask:e,maskIsAlpha:i,pixels:l}=this;if(!t||!l||!l.length)return void W.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let a,n,s,o;a=n=s=l[0],l.length>=3?(n=l[1],s=l[2]):l.length===2&&(n=l[1]);const h=new Uint32Array(t),f=this.width*this.height;if(a.length===f)if(P(e)&&e.length===f)if(i)for(o=0;o<f;o++)e[o]&&(h[o]=e[o]<<24|s[o]<<16|n[o]<<8|a[o]);else for(o=0;o<f;o++)e[o]&&(h[o]=255<<24|s[o]<<16|n[o]<<8|a[o]);else for(o=0;o<f;o++)h[o]=255<<24|s[o]<<16|n[o]<<8|a[o];else W.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:e,mask:i,statistics:l}=this;if(!t||!e||!e.length)return void W.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const a=this.pixelType;let n=1,s=0,o=1;if(l&&l.length>0){for(const p of l)if(p.minValue!=null&&(s=Math.min(s,p.minValue)),p.maxValue!=null&&p.minValue!=null){const d=p.maxValue-p.minValue;o=Math.max(o,d)}n=255/o}else{let p=255;a==="s8"?(s=-128,p=127):a==="u16"?p=65535:a==="s16"?(s=-32768,p=32767):a==="u32"?p=4294967295:a==="s32"?(s=-2147483648,p=2147483647):a==="f32"?(s=-34e38,p=34e38):a==="f64"&&(s=-Number.MAX_VALUE,p=Number.MAX_VALUE),n=255/(p-s)}const h=new Uint32Array(t),f=this.width*this.height;let r,u,g,c,x;if(r=u=g=e[0],r.length!==f)return W.getLogger(this.declaredClass).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(u=e[1],e.length>=3&&(g=e[2]),P(i)&&i.length===f)for(c=0;c<f;c++)i[c]&&(h[c]=255<<24|(g[c]-s)*n<<16|(u[c]-s)*n<<8|(r[c]-s)*n);else for(c=0;c<f;c++)h[c]=255<<24|(g[c]-s)*n<<16|(u[c]-s)*n<<8|(r[c]-s)*n;else if(P(i)&&i.length===f)for(c=0;c<f;c++)x=(r[c]-s)*n,i[c]&&(h[c]=255<<24|x<<16|x<<8|x);else for(c=0;c<f;c++)x=(r[c]-s)*n,h[c]=255<<24|x<<16|x<<8|x}_fillFrom32Bit(t){const{pixels:e,mask:i}=this;if(!t||!e||!e.length)return W.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let l,a,n,s;l=a=n=e[0],e.length>=3?(a=e[1],n=e[2]):e.length===2&&(a=e[1]);const o=this.width*this.height;if(l.length!==o)return W.getLogger(this.declaredClass).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(P(i)&&i.length===o)for(s=0;s<o;s++)t[h++]=l[s],t[h++]=a[s],t[h++]=n[s],t[h++]=1&i[s];else for(s=0;s<o;s++)t[h++]=l[s],t[h++]=a[s],t[h++]=n[s],t[h++]=1}_calculateBandStatistics(t,e){let i=1/0,l=-1/0;const a=t.length;let n,s=0;if(P(e))for(n=0;n<a;n++)e[n]&&(s=t[n],i=s<i?s:i,l=s>l?s:l);else for(n=0;n<a;n++)s=t[n],i=s<i?s:i,l=s>l?s:l;return new J(i,l)}};E([j({json:{write:!0}})],G.prototype,"width",void 0),E([j({json:{write:!0}})],G.prototype,"height",void 0),E([j({json:{write:!0}})],G.prototype,"pixelType",void 0),E([ot("pixelType")],G.prototype,"castPixelType",null),E([j({json:{write:!0}})],G.prototype,"validPixelCount",void 0),E([j({json:{write:!0}})],G.prototype,"mask",void 0),E([j({json:{write:!0}})],G.prototype,"maskIsAlpha",void 0),E([j({json:{write:!0}})],G.prototype,"pixels",void 0),E([j({json:{write:!0}})],G.prototype,"statistics",void 0),G=L=E([at("esri.layers.support.PixelBlock")],G);const S=G;var K,Q;function _(t){return P(t)&&t.declaredClass==="esri.layers.support.PixelBlock"&&t.pixels&&t.pixels.length>0}function wt(t,e){if(!(e!=null&&e.length)||!_(t))return t;const i=t.pixels.length;return e&&e.some(l=>l>=i)||i===1&&e.length===1&&e[0]===0?t:i!==e.length||e.some((l,a)=>l!==a)?new S({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map(l=>t.pixels[l]),statistics:t.statistics&&e.map(l=>t.statistics[l])}):t}function kt(t){if(!(t!=null&&t.length)||t.some(r=>!_(r)))return null;if(t.length===1)return P(t[0])?t[0].clone():null;const e=t,{width:i,height:l,pixelType:a}=e[0];if(e.some(r=>r.width!==i||r.height!==l))return null;const n=e.map(({mask:r})=>r).filter(r=>r!=null);let s=null;n.length&&(s=new Uint8Array(i*l),s.set(n[0]),n.length>1&&st(n.slice(1),s));const o=[];e.forEach(({pixels:r})=>o.push(...r));const h=e.map(({statistics:r})=>r).filter(r=>r==null?void 0:r.length),f=[];return h.forEach(r=>f.push(...r)),new S({pixelType:a,width:i,height:l,mask:s,pixels:o,statistics:f.length?f:null})}function At(t){if(!t)return;const e=t.colormap;if(!e||e.length===0)return;const i=e.sort((u,g)=>u[0]-g[0]);let l=0;i[0][0]<0&&(l=i[0][0]);const a=Math.max(256,i[i.length-1][0]-l+1),n=new Uint8Array(4*a),s=[];let o,h=0,f=0;const r=i[0].length===5;if(a>65536)return i.forEach(u=>{s[u[0]-l]=r?u.slice(1):u.slice(1).concat([255])}),{indexed2DColormap:s,offset:l,alphaSpecified:r};if(t.fillUnspecified)for(o=i[f],h=o[0]-l;h<a;h++)n[4*h]=o[1],n[4*h+1]=o[2],n[4*h+2]=o[3],n[4*h+3]=r?o[4]:255,h===o[0]-l&&(o=f===i.length-1?o:i[++f]);else for(h=0;h<i.length;h++)o=i[h],f=4*(o[0]-l),n[f]=o[1],n[f+1]=o[2],n[f+2]=o[3],n[f+3]=r?o[4]:255;return{indexedColormap:n,offset:l,alphaSpecified:r}}function Mt(t,e){if(!_(t)||!e||!e.indexedColormap&&!e.indexed2DColormap)return t;const i=t.clone(),l=i.pixels;let a=i.mask;const n=i.width*i.height;if(l.length!==1)return t;const{indexedColormap:s,indexed2DColormap:o,offset:h,alphaSpecified:f}=e;let r=0;const u=l[0],g=new Uint8Array(u.length),c=new Uint8Array(u.length),x=new Uint8Array(u.length);let p,d=0;if(s){const y=s.length-1;if(P(a))for(r=0;r<n;r++)a[r]&&(d=4*(u[r]-h),d<h||d>y?a[r]=0:(g[r]=s[d],c[r]=s[d+1],x[r]=s[d+2],a[r]=s[d+3]));else{for(a=new Uint8Array(n),r=0;r<n;r++)d=4*(u[r]-h),d<h||d>y?a[r]=0:(g[r]=s[d],c[r]=s[d+1],x[r]=s[d+2],a[r]=s[d+3]);i.mask=a}}else if(o)if(P(a))for(r=0;r<n;r++)a[r]&&(p=o[u[r]],g[r]=p[0],c[r]=p[1],x[r]=p[2],a[r]=p[3]);else{for(a=new Uint8Array(n),r=0;r<n;r++)p=o[u[r]],g[r]=p[0],c[r]=p[1],x[r]=p[2],a[r]=p[3];i.mask=a}return i.pixels=[g,c,x],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function bt(t,e){if(!_(t))return null;const{pixels:i,mask:l}=t,a=i.length;let n=e.lut;const{offset:s}=e;n&&n[0].length===1&&(n=i.map(()=>n));const o=[],h=e.outputPixelType||"u8";for(let r=0;r<a;r++){const u=it(i[r],l,n[r],s||0,h);o.push(u)}const f=new S({width:t.width,height:t.height,pixels:o,mask:l,pixelType:h});return f.updateStatistics(),f}function it(t,e,i,l,a){const n=t.length,s=S.createEmptyBand(a,n);if(e)for(let o=0;o<n;o++)e[o]&&(s[o]=i[t[o]-l]);else for(let o=0;o<n;o++)s[o]=i[t[o]-l];return s}function Tt(t,e){if(!_(t))return null;const i=t.clone(),{pixels:l}=i,a=i.width*i.height,n=e.length,s=Math.floor(n/2),o=e[Math.floor(s)],h=l[0];let f,r,u,g,c,x,p=!1;const d=new Uint8Array(a),y=new Uint8Array(a),m=new Uint8Array(a);let k=i.mask;const w=e[0].mappedColor.length===4;for(k||(k=new Uint8Array(a),k.fill(w?255:1),i.mask=k),c=0;c<a;c++)if(k[c]){for(f=h[c],p=!1,x=s,r=o,u=0,g=n-1;g-u>1;){if(f===r.value){p=!0;break}f>r.value?u=x:g=x,x=Math.floor((u+g)/2),r=e[Math.floor(x)]}p||(f===e[u].value?(r=e[u],p=!0):f===e[g].value?(r=e[g],p=!0):f<e[u].value?(p=!1,r=null):f>e[u].value&&(f<e[g].value?(r=e[u],p=!0):g===n-1?(p=!1,r=null):(r=e[g],p=!0))),p?(d[c]=r.mappedColor[0],y[c]=r.mappedColor[1],m[c]=r.mappedColor[2],k[c]=r.mappedColor[3]):d[c]=y[c]=m[c]=k[c]=0}return i.pixels=[d,y,m],i.mask=k,i.pixelType="u8",i.maskIsAlpha=w,i}function Bt(t,e){if(!_(t))return null;const{width:i,height:l}=t,{inputRanges:a,outputValues:n,outputPixelType:s,noDataRanges:o,allowUnmatched:h}=e,f=t.pixels[0],r=S.createEmptyBand(s,f.length);h&&r.set(f);const u=t.mask,g=a.length/2;for(let x=0;x<l;x++)for(let p=0;p<i;p++){const d=x*i+p;if(!u||u[d]){const y=f[d];for(let m=g-1;m>=0;m--)if(y>=a[2*m]&&y<=a[2*m+1]){r[d]=n[m];break}}}let c=u;if(o!=null&&o.length){c=new Uint8Array(i*l),u&&c.set(u);for(let x=0;x<l;x++)for(let p=0;p<i;p++){const d=x*i+p;if(!u||u[d]){const y=f[d];for(let m=0;m<g;m+=2)if(y>=o[m]&&y<=o[m+1]){r[d]=0,c[d]=0;break}}}}return new S({width:i,height:l,pixelType:s,pixels:[r],mask:c})}function Z(t,e,i,l){const a=i!=null&&i.length>=2?new Set(i):null,n=(i==null?void 0:i.length)===1?i[0]:null,s=!!(e!=null&&e.length);for(let o=0;o<t.length;o++)if(l[o]){const h=t[o];if(s){let f=!1;for(let r=0;r<e.length;r+=2)if(h>=e[r]&&h<=e[r+1]){f=!0;break}f||(l[o]=0)}l[o]&&(h===n||(a==null?void 0:a.has(h)))&&(l[o]=0)}}function tt(t,e){const i=t[0].length;for(let l=0;l<i;l++)if(e[l]){let a=!1;for(let n=0;n<t.length;n++)if(t[n][l]){a=!0;break}a||(e[l]=0)}}function st(t,e){const i=t[0].length;for(let l=0;l<i;l++)if(e[l]){let a=!1;for(let n=0;n<t.length;n++)if(t[n][l]===0){a=!0;break}a&&(e[l]=0)}}function Ut(t,e){if(!_(t))return null;const{width:i,height:l,pixels:a}=t,n=i*l,s=new Uint8Array(n);t.mask?s.set(t.mask):s.fill(255);const o=a.length,{includedRanges:h,noDataValues:f,outputPixelType:r,matchAll:u,lookup:g}=e;if(g){const c=[];for(let x=0;x<o;x++){const p=it(a[x],s,g.lut,g.offset||0,"u8");c.push(p)}c.length===1?s.set(c[0]):u?tt(c,s):st(c,s)}else if(u){const c=[];for(let x=0;x<o;x++){const p=new Uint8Array(n);p.set(s),Z(a[x],h,f,p),c.push(p)}c.length===1?s.set(c[0]):tt(c,s)}else for(let c=0;c<o;c++)Z(a[c],h,f,s);return new S({width:i,height:l,pixelType:r,pixels:a,mask:s})}function vt(t,e,i){if(t!=="u8"&&t!=="s8"&&t!=="u16"&&t!=="s16")return null;const l=t.includes("16")?65536:256,a=t.includes("s")?-l/2:0,n=S.createEmptyBand(t,l);for(let s=0;s<e.length;s++){const o=i[s],h=Math.ceil(e[2*s]-a),f=Math.floor(e[2*s+1]-a);for(let r=h;r<=f;r++)n[r]=o}return{lut:n,offset:a}}function Ct(t,e,i){if(t!=="u8"&&t!=="s8"&&t!=="u16"&&t!=="s16")return null;const l=t.includes("16")?65536:256,a=t.includes("s")?-l/2:0,n=new Uint8Array(l);if(e)for(let s=0;s<e.length;s++){const o=Math.ceil(e[2*s]-a),h=Math.floor(e[2*s+1]-a);for(let f=o;f<=h;f++)n[f]=255}if(i)for(let s=0;s<i.length;s++)n[i[s]-a]=0;return{lut:n,offset:a}}function ut(t,e,i,l,a,n,s,o){return{xmin:a<=i*t?0:a<i*t+t?a-i*t:t,ymin:n<=l*e?0:n<l*e+e?n-l*e:e,xmax:a+s<=i*t?0:a+s<i*t+t?a+s-i*t:t,ymax:n+o<=l*e?0:n+o<l*e+e?n+o-l*e:e}}function Pt(t,e){if(!t||t.length===0)return null;const i=t.find(x=>x.pixelBlock);if(!i||N(i.pixelBlock))return null;const l=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,a=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,n=.01*Math.min(l,a),s=t.sort((x,p)=>Math.abs(x.extent.ymax-p.extent.ymax)>n?p.extent.ymax-x.extent.ymax:Math.abs(x.extent.xmin-p.extent.xmin)>n?x.extent.xmin-p.extent.xmin:0),o=Math.min.apply(null,s.map(x=>x.extent.xmin)),h=Math.min.apply(null,s.map(x=>x.extent.ymin)),f=Math.max.apply(null,s.map(x=>x.extent.xmax)),r=Math.max.apply(null,s.map(x=>x.extent.ymax)),u={x:Math.round((e.xmin-o)/l),y:Math.round((r-e.ymax)/a)},g={width:Math.round((f-o)/l),height:Math.round((r-h)/a)},c={width:Math.round((e.xmax-e.xmin)/l),height:Math.round((e.ymax-e.ymin)/a)};return Math.round(g.width/i.pixelBlock.width)*Math.round(g.height/i.pixelBlock.height)!==s.length||u.x<0||u.y<0||g.width<c.width||g.height<c.height?null:{extent:e,pixelBlock:pt(s.map(x=>x.pixelBlock),g,{clipOffset:u,clipSize:c})}}function q(t,e,i,l,a,n){var p;const{width:s,height:o}=i.block,{x:h,y:f}=i.offset,{width:r,height:u}=i.mosaic,g=ut(s,o,l,a,h,f,r,u);let c=0,x=0;if(n){const d=n.hasGCSSShiftTransform?360:(p=n.halfWorldWidth)!=null?p:0,y=s*n.resolutionX,m=n.startX+l*y,k=m+y;m<d&&k>d?x=n.rightPadding:m>=d&&(c=n.leftMargin-n.rightPadding,x=0)}if(g.xmax-=x,typeof e!="number")for(let d=g.ymin;d<g.ymax;d++){const y=(a*o+d-f)*r+(l*s-h)+c,m=d*s;for(let k=g.xmin;k<g.xmax;k++)t[y+k]=e[m+k]}else for(let d=g.ymin;d<g.ymax;d++){const y=(a*o+d-f)*r+(l*s-h)+c;for(let m=g.xmin;m<g.xmax;m++)t[y+m]=e}}function pt(t,e,i={}){const{clipOffset:l,clipSize:a,alignmentInfo:n,blockWidths:s}=i;if(s)return xt(t,e,{blockWidths:s});const o=t.find(M=>_(M));if(N(o))return null;const h=a?a.width:e.width,f=a?a.height:e.height,r=o.width,u=o.height,g=e.width/r,c=e.height/u,x={offset:l||{x:0,y:0},mosaic:a||e,block:{width:r,height:u}},p=o.pixelType,d=S.getPixelArrayConstructor(p),y=o.pixels.length,m=[];let k,w;for(let M=0;M<y;M++){w=new d(h*f);for(let T=0;T<c;T++)for(let A=0;A<g;A++){const B=t[T*g+A];_(B)&&(k=B.pixels[M],q(w,k,x,A,T,n))}m.push(w)}let U;if(t.some(M=>N(M)||P(M.mask)&&M.mask.length>0)){U=new Uint8Array(h*f);for(let M=0;M<c;M++)for(let T=0;T<g;T++){const A=t[M*g+T],B=P(A)?A.mask:null;P(B)?q(U,B,x,T,M,n):q(U,A?1:0,x,T,M,n)}}const v=new S({width:h,height:f,pixels:m,pixelType:p,mask:U});return v.updateStatistics(),v}function xt(t,e,i){const l=t.find(c=>P(c));if(N(l))return null;const a=t.some(c=>!P(c)||!!c.mask),{width:n,height:s}=e,o=a?new Uint8Array(n*s):null,{blockWidths:h}=i,f=[],r=l.getPlaneCount(),u=S.getPixelArrayConstructor(l.pixelType);if(a)for(let c=0,x=0;c<t.length;x+=h[c],c++){const p=t[c];if(!_(p))continue;const d=Y(p.mask);for(let y=0;y<s;y++)for(let m=0;m<h[c];m++)o[y*n+m+x]=d==null?255:d[y*p.width+m]}for(let c=0;c<r;c++){const x=new u(n*s);for(let p=0,d=0;p<t.length;d+=h[p],p++){const y=t[p];if(!_(y))continue;const m=y.pixels[c];if(m!=null)for(let k=0;k<s;k++)for(let w=0;w<h[p];w++)x[k*n+w+d]=m[k*y.width+w]}f.push(x)}const g=new S({width:n,height:s,mask:o,pixels:f,pixelType:l.pixelType});return g.updateStatistics(),g}function St(t,e,i){if(!_(t))return null;const{width:l,height:a}=t,n=e.x,s=e.y,o=i.width+n,h=i.height+s;if(n<0||s<0||o>l||h>a||n===0&&s===0&&o===l&&h===a)return t;t.mask||(t.mask=new Uint8Array(l*a));const f=t.mask;for(let r=0;r<a;r++){const u=r*l;for(let g=0;g<l;g++)f[u+g]=r<s||r>=h||g<n||g>=o?0:1}return t.updateStatistics(),t}function gt(t){if(!_(t))return null;const e=t.clone(),{width:i,height:l,pixels:a}=t,n=a[0],s=e.pixels[0],o=Y(t.mask);for(let h=2;h<l-1;h++){const f=new Map;for(let u=h-2;u<h+2;u++)for(let g=0;g<4;g++){const c=u*i+g;D(f,n[c],o?o[c]:1)}s[h*i]=et(f),s[h*i+1]=s[h*i+2]=s[h*i];let r=3;for(;r<i-1;r++){let u=(h-2)*i+r+1;D(f,n[u],o?o[u]:1),u=(h-1)*i+r+1,D(f,n[u],o?o[u]:1),u=h*i+r+1,D(f,n[u],o?o[u]:1),u=(h+1)*i+r+1,D(f,n[u],o?o[u]:1),u=(h-2)*i+r-3,z(f,n[u],o?o[u]:1),u=(h-1)*i+r-3,z(f,n[u],o?o[u]:1),u=h*i+r-3,z(f,n[u],o?o[u]:1),u=(h+1)*i+r-3,z(f,n[u],o?o[u]:1),s[h*i+r]=et(f)}s[h*i+r+1]=s[h*i+r]}for(let h=0;h<i;h++)s[h]=s[i+h]=s[2*i+h],s[(l-1)*i+h]=s[(l-2)*i+h];return e.updateStatistics(),e}function et(t){if(t.size===0)return 0;let e=0,i=-1,l=0;const a=t.keys();let n=a.next();for(;!n.done;)l=t.get(n.value),l>e&&(i=n.value,e=l),n=a.next();return i}function z(t,e,i){if(i===0)return;const l=t.get(e);l===1?t.delete(e):t.set(e,l-1)}function D(t,e,i){i!==0&&t.set(e,t.has(e)?t.get(e)+1:1)}function dt(t,e,i){let{x:l,y:a}=e;const{width:n,height:s}=i;if(l===0&&a===0&&s===t.height&&n===t.width)return t;const{width:o,height:h}=t,f=Math.max(0,a),r=Math.max(0,l),u=Math.min(l+n,o),g=Math.min(a+s,h);if(u<0||g<0||!_(t))return null;l=Math.max(0,-l),a=Math.max(0,-a);const{pixels:c}=t,x=n*s,p=c.length,d=[];for(let w=0;w<p;w++){const U=c[w],v=S.createEmptyBand(t.pixelType,x);for(let M=f;M<g;M++){const T=M*o;let A=(M+a-f)*n+l;for(let B=r;B<u;B++)v[A++]=U[T+B]}d.push(v)}const y=new Uint8Array(x),m=Y(t.mask);for(let w=f;w<g;w++){const U=w*o;let v=(w+a-f)*n+l;for(let M=r;M<u;M++)y[v++]=m?m[U+M]:1}const k=new S({width:i.width,height:i.height,pixelType:t.pixelType,pixels:d,mask:y});return k.updateStatistics(),k}function mt(t,e=!0){if(!_(t))return null;const{pixels:i,width:l,height:a,mask:n,pixelType:s}=t,o=[],h=Math.round(l/2),f=Math.round(a/2),r=a-1,u=l-1;for(let c=0;c<i.length;c++){const x=i[c],p=S.createEmptyBand(s,h*f);let d=0;for(let y=0;y<a;y+=2)for(let m=0;m<l;m+=2){const k=x[y*l+m];if(e){const w=m===u?k:x[y*l+m+1],U=y===r?k:x[y*l+m+l],v=m===u?U:y===r?w:x[y*l+m+l+1];p[d++]=(k+w+U+v)/4}else p[d++]=k}o.push(p)}let g=null;if(P(n)){g=new Uint8Array(h*f);let c=0;for(let x=0;x<a;x+=2)for(let p=0;p<l;p+=2){const d=n[x*l+p];if(e){const y=p===u?d:n[x*l+p+1],m=x===r?d:n[x*l+p+l],k=p===u?m:x===r?y:n[x*l+p+l+1];g[c++]=d*y*m*k?1:0}else g[c++]=d}}return new S({width:h,height:f,pixelType:s,pixels:o,mask:g})}function _t(t,e,i){if(!_(t))return null;const{width:l,height:a}=e;let{width:n,height:s}=t;const o=new Map,h={x:0,y:0},f=i==null?1:1+i;let r=t;for(let u=0;u<f;u++){const g=Math.ceil(n/l),c=Math.ceil(s/a);for(let x=0;x<c;x++){h.y=x*a;for(let p=0;p<g;p++){h.x=p*l;const d=dt(r,h,e);o.set(`${u}/${x}/${p}`,d)}}u<f-1&&(r=mt(r)),n=Math.round(n/2),s=Math.round(s/2)}return o}function lt(t,e,i,l,a=.5){const{width:n,height:s}=t,{width:o,height:h}=e,f=l.cols,r=l.rows,u=Math.ceil(o/f-.1/f),g=Math.ceil(h/r-.1/r);let c,x,p,d,y,m,k;const w=u*f,U=w*g*r,v=new Float32Array(U),M=new Float32Array(U),T=new Uint32Array(U),A=new Uint32Array(U);let B,V,F=0;for(let I=0;I<g;I++)for(let R=0;R<u;R++){c=12*(I*u+R),x=i[c],p=i[c+1],d=i[c+2],y=i[c+3],m=i[c+4],k=i[c+5];for(let C=0;C<r;C++){F=(I*r+C)*w+R*f,V=(C+.5)/r;for(let b=0;b<C;b++)B=(b+.5)/f,v[F+b]=(x*B+p*V+d)*n-a,M[F+b]=(y*B+m*V+k)*s-a,T[F+b]=Math.round(v[F+b]),A[F+b]=Math.round(M[F+b])}c+=6,x=i[c],p=i[c+1],d=i[c+2],y=i[c+3],m=i[c+4],k=i[c+5];for(let C=0;C<r;C++){F=(I*r+C)*w+R*f,V=(C+.5)/r;for(let b=C;b<f;b++)B=(b+.5)/f,v[F+b]=(x*B+p*V+d)*n-a,M[F+b]=(y*B+m*V+k)*s-a,T[F+b]=Math.round(v[F+b]),A[F+b]=Math.round(M[F+b])}}return{offsets_x:v,offsets_y:M,offsets_xi:T,offsets_yi:A,gridWidth:w}}function Ft(t,e){const{coefficients:i,spacing:l}=e,{offsets_x:a,offsets_y:n,gridWidth:s}=lt(t,t,i,{rows:l[0],cols:l[1]},.5),{width:o,height:h}=t,f=new Float32Array(o*h),r=180/Math.PI;for(let u=0;u<h;u++)for(let g=0;g<o;g++){const c=u*s+g,x=u===0?c:c-s,p=u===h-1?c:c+s,d=a[x]-a[p],y=n[p]-n[x];if(isNaN(d)||isNaN(y))f[u*o+g]=90;else{let m=Math.atan2(y,d)*r;m=(360+m)%360,f[u*o+g]=m}}return f}function It(t,e,i,l,a="nearest"){if(!_(t))return null;a==="majority"&&(t=gt(t));const{pixels:n,mask:s,pixelType:o}=t,h=t.width,f=t.height,r=S.getPixelArrayConstructor(o),u=n.length,{width:g,height:c}=e;let x=!1;for(let A=0;A<i.length;A+=3)i[A]===-1&&i[A+1]===-1&&i[A+2]===-1&&(x=!0);const{offsets_x:p,offsets_y:d,offsets_xi:y,offsets_yi:m,gridWidth:k}=lt({width:h,height:f},e,i,l,a==="majority"?0:.5);let w;const U=(A,B,V)=>{const F=A instanceof Float32Array||A instanceof Float64Array?0:.5;for(let I=0;I<c;I++){w=I*k;for(let R=0;R<g;R++){if(p[w]<0||d[w]<0)A[I*g+R]=0;else if(V)A[I*g+R]=B[y[w]+m[w]*h];else{const C=Math.floor(p[w]),b=Math.floor(d[w]),O=Math.ceil(p[w]),$=Math.ceil(d[w]),X=p[w]-C,H=d[w]-b;if(!s||s[C+b*h]&&s[C+b*h]&&s[C+$*h]&&s[O+$*h]){const nt=(1-X)*B[C+b*h]+X*B[O+b*h],rt=(1-X)*B[C+$*h]+X*B[O+$*h];A[I*g+R]=(1-H)*nt+H*rt+F}else A[I*g+R]=B[y[w]+m[w]*h]}w++}}},v=[];let M;for(let A=0;A<u;A++)M=new r(g*c),U(M,n[A],a==="nearest"||a==="majority"),v.push(M);const T=new S({width:g,height:c,pixelType:o,pixels:v});if(P(s))T.mask=new Uint8Array(g*c),U(T.mask,s,!0);else if(x){T.mask=new Uint8Array(g*c);for(let A=0;A<g*c;A++)T.mask[A]=p[A]<0||d[A]<0?0:1}return T.updateStatistics(),T}(function(t){t[t.matchAny=0]="matchAny",t[t.matchAll=1]="matchAll"})(K||(K={})),function(t){t[t.bestMatch=0]="bestMatch",t[t.fail=1]="fail"}(Q||(Q={}));export{Pt as A,It as D,pt as T,_t as W,At as a,St as b,bt as c,Mt as f,S as g,kt as h,K as i,Ft as j,Ct as k,Q as o,Tt as p,_ as r,wt as s,vt as w,Bt as x,Ut as y};