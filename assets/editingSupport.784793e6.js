import{b1 as I,ix as E,iy as S,g as i,a as h,cT as m,cN as R,eh as O,dg as $,t as w,iz as L}from"./vendor.2b982caa.js";var y;(function(e){e.GLTF_BINARY="3D_glb",e.GLTF_JSON="3D_gltf"})(y||(y={}));function T(e){return e&&e.applyEdits!=null}async function z(e,t,a,n={}){var r;let s,l;const o={edits:a,result:new Promise((d,u)=>{s=d,l=u})};e.emit("apply-edits",o);try{const{results:d,edits:u}=await U(e,t,a,n),c=A=>A.filter(v=>!v.error).map(I),p={edits:u,addedFeatures:c(d.addFeatureResults),updatedFeatures:c(d.updateFeatureResults),deletedFeatures:c(d.deleteFeatureResults),addedAttachments:c(d.addAttachmentResults),updatedAttachments:c(d.updateAttachmentResults),deletedAttachments:c(d.deleteAttachmentResults)};return(r=d.editedFeatureResults)!=null&&r.length&&(p.editedFeatures=d.editedFeatureResults),(p.addedFeatures.length||p.updatedFeatures.length||p.deletedFeatures.length||p.addedAttachments.length||p.updatedAttachments.length||p.deletedAttachments.length)&&(e.emit("edits",p),E(e)&&S.emit("edits",{layer:e,event:p})),s(p),d}catch(d){throw l(d),d}}async function U(e,t,a,n){if(await e.load(),!T(t))throw new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!e.editingEnabled)throw new i(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:l}=await G(e,a,n);return s.addFeatures.length||s.updateFeatures.length||s.deleteFeatures.length||s.addAttachments.length||s.updateAttachments.length||s.deleteAttachments.length?{edits:s,results:await t.applyEdits(s,l)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function G(e,t,a){const n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=h(e.infoFor3D);if(!t||!n&&!s)throw new i(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new i(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&s)throw new i(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&s)throw new i(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const o={...a};if(o.rollbackOnFailureEnabled!=null||e.capabilities.editing.supportsRollbackOnFailure||(o.rollbackOnFailureEnabled=!0),o.rollbackOnFailureEnabled===!1&&o.returnServiceEditsOption==="original-and-current-features")throw new i(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&o.returnServiceEditsInSourceSR)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(o.returnServiceEditsInSourceSR&&o.returnServiceEditsOption!=="original-and-current-features")throw new i(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&m.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&m.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&m.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new i(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(b),r.updateFeatures=r.updateFeatures.map(b),r.addAssets=[];const d=a&&a.globalIdUsed||l;return r.addFeatures.forEach(u=>k(u,e,d)),r.updateFeatures.forEach(u=>x(u,e,d)),r.deleteFeatures.forEach(u=>B(u,e,d)),r.addAttachments.forEach(u=>g(u,e)),r.updateAttachments.forEach(u=>g(u,e)),l&&await N(r,e),{edits:await D(r),options:o}}function f(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&h(e.geometry)){if(e.geometry.hasZ&&t.capabilities.data.supportsZ===!1)throw new i(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities.data.supportsM===!1)throw new i(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function k(e,t,a){f(e,t,a)}function B(e,t,a){f(e,t,a)}function x(e,t,a){if(f(e,t,a),"geometry"in e&&h(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new i(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function g(e,t){const{feature:a,attachment:n}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&!!n.data.name)&&!n.name)throw new i(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&n.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof n.data=="string"){const s=R(n.data);if(s&&!s.isBase64)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function D(e){const t=e.addFeatures,a=e.updateFeatures,n=t.concat(a).map(r=>r.geometry),s=await O(n),l=t.length,o=a.length;return s.slice(0,l).forEach((r,d)=>e.addFeatures[d].geometry=r),s.slice(l,l+o).forEach((r,d)=>e.updateFeatures[d].geometry=r),e}function b(e){const t=new $;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function N(e,t){if(w(t.infoFor3D))return;const{infoFor3D:a}=t;let n=!1;for(const o of a.editFormats)if(o===y.GLTF_BINARY){n=!0;break}const s=[];for(const o of e.addFeatures)s.push(F(o,e,t,n));for(const o of e.updateFeatures)s.push(F(o,e,t,n));const l=await Promise.allSettled(s);for(const o of l)if(o.status==="rejected")throw o.reason}async function F(e,t,a,n){if(w(e.geometry)||e.geometry.type!=="mesh")return;const s=e.geometry,l=a.globalIdField;if(h(a.parsedUrl)&&h(s.external)&&Array.isArray(s.external.source)&&s.external.source.length===1&&"source"in s.external.source[0]&&typeof s.external.source[0].source=="string"&&s.external.source[0].source.startsWith(a.parsedUrl.path))return;if(!n)throw new i(`${a.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");const o=await s.toBinaryGLTF(),r=await o.buffer(),d=`{${L()}}`,u=`${d}.glb`;t.addAssets.push({featureGlobalId:e.getAttribute(l),assetMapGlobalId:d,assetName:u,flags:0,data:r.data,mimeType:r.type,assetType:y.GLTF_BINARY,feature:e})}export{z as applyEdits};
