import{U as u}from"./index.cdd966ee.js";async function f(r,e){var t,y,i;let a=await o(r,e);a=a||{},a.layers=((t=a.layers)==null?void 0:t.filter(l))||[];const s={serviceJSON:a};if(((y=a.currentVersion)!=null?y:0)<10.5)return s;const n=await o(r+"/layers",e);return s.layersJSON={layers:((i=n==null?void 0:n.layers)==null?void 0:i.filter(l))||[],tables:(n==null?void 0:n.tables)||[]},s}function l(r){return!r.type||r.type==="Feature Layer"}async function o(r,e){return(await u(r,{responseType:"json",query:{f:"json",...e==null?void 0:e.customParameters,token:e==null?void 0:e.apiKey}})).data}export{o as a,f as r};
