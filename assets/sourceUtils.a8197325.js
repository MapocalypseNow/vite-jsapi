import{gd as p,ge as y,gc as w,eS as I,gf as b,bB as h,t as g,al as _}from"./index.cdd966ee.js";class v{constructor(){this.code=null,this.description=null}}class q{constructor(t){this.error=new v,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function f(e){return new q(e)}class P{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function j(e){return new P(e)}const a=new Set;function F(e,t,i,m=!1,u){var c;a.clear();for(const r in i){const n=e.get(r);if(!n)continue;const l=i[r],s=E(n,l);if(s!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:n,originalValue:l,sanitizedValue:s}}),a.add(n.name),n&&(m||n.editable)){const d=p(n,s);if(d)return f(y(d,n,s));t[n.name]=s}}for(const r of(c=e==null?void 0:e.requiredFields)!=null?c:[])if(!a.has(r.name))return f(`missing required field "${r.name}"`);return null}function E(e,t){let i=t;return typeof t=="string"&&w(e)?i=parseFloat(t):t!=null&&I(e)&&typeof t!="string"&&(i=String(t)),b(i)}let o;function G(e,t){if(!e||!h(t))return e;if("rings"in e||"paths"in e){if(g(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function S(){return g(o)&&(o=await _(()=>import("./geometryEngineJSON.3d6e7890.js"),["assets/geometryEngineJSON.3d6e7890.js","assets/geometryEngineBase.82b25ca5.js","assets/geometryEngineJSON.f9e9a36f.js","assets/json.879c9adc.js"])),o}async function T(e,t){!h(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await S()}export{f as a,j as f,G as g,F as m,T as w};
