import{Q as x,g as c,a3 as _,a4 as p,a5 as b,gK as L,a as h,t as g,e6 as C,s as a,bb as E,E as F,U as O,cr as N,aq as q,dt as P,ba as k,eS as j,aQ as W,gt as v}from"./vendor.2b982caa.js";let w=class extends x.EventedAccessor{get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}};_([p({readOnly:!0})],w.prototype,"connectionError",null),w=_([b("esri.layers.support.StreamConnection")],w);const D=w;var f;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(f||(f={}));let y=class extends D{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._config=e,this._featureZScaler=L(t,o,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){h(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(g(this._websocket))return"disconnected";switch(this._websocket.readyState){case f.CONNECTING:case f.OPEN:return"connected";case f.CLOSING:case f.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const o=C(e,this._config.customParameters);this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const s=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(a.getLogger(this.declaredClass).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${s}s`,o)),await E(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){return new Promise((t,r)=>{const o=new WebSocket(e);o.onopen=()=>{if(o.onopen=null,this.destroyed)return o.onclose=null,void o.close();o.onclose=s=>this._onClose(s),o.onerror=s=>this._onError(s),o.onmessage=s=>this._onMessage(s),t(o)},o.onclose=s=>{o.onopen=o.onclose=null,r(s)}})}async _handshake(e=1e4){const t=this._websocket;if(g(t))return;const r=F(),o=t.onmessage,{filter:s,outFields:n,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=u=>{var i;let d=null;try{d=JSON.parse(u.data)}catch{}d&&typeof d=="object"||(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",u.data)),r.reject(),this.destroy()),((i=d.spatialReference)==null?void 0:i.wkid)!==(l==null?void 0:l.wkid)&&(a.getLogger(this.declaredClass).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,u.data)),r.reject(),this.destroy()),d.format!=="json"&&(a.getLogger(this.declaredClass).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",u.data)),r.reject(),this.destroy()),s&&d.filter!==s&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),n&&d.outFields!==n&&a.getLogger(this.declaredClass).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=o,r.resolve()},t.send(JSON.stringify({filter:s,outFields:n,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){try{const t=JSON.parse(e.data);if(t.type!=="featureResult")throw new c("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const r of t.features)h(this._featureZScaler)&&this._featureZScaler(r.geometry),this.onFeature(r)}catch(t){return a.getLogger(this.declaredClass).error(new c("websocket-connection","Failed to parse message",t)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),a.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&a.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};_([p()],y.prototype,"connectionStatus",null),_([p()],y.prototype,"errorString",void 0),y=_([b("esri.layers.graphics.sources.connections.WebSocketConnection")],y);const T=1e4,I={maxQueryDepth:5,maxRecordCountFactor:3};let m=class extends y{constructor(e){super({...I,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),h(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=O(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,n=this._inferWebSocketBaseUrl(o);return C(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this.declaredClass).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(g(r)||g(e)&&g(t))return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let s=!1;const n=F(),l=()=>{s||(this.destroyed||this._websocket!==r||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},u=d=>{const i=JSON.parse(d.data);i.filter&&(i.error&&(a.getLogger(this.declaredClass).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),r.onmessage=this._onMessage.bind(this),s=!0,n.resolve())};return r.onmessage=u,r.send(o),setTimeout(l,T),n.promise}_serializeFilter(e,t){const r={};if(g(e)&&g(t))return r;if(h(e)&&e.geometry)try{const o=N(e.geometry);if(o.type!=="extent")throw new c(`Expected extent but found type ${o.type}`);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(o){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return h(e)&&e.where&&e.where!=="1 = 1"&&(r.where=e.where),h(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return a.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:s}=this._relatedFeatures.get(r);for(const n in o)e.attributes[n]=o[n];return s&&(e.geometry=s),e.geometry||e.centroid||a.getLogger(this.declaredClass).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const n of s.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this.declaredClass).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await q(()=>import("./vendor.2b982caa.js").then(function(R){return R.ly}),[])).default({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,n=r.query.supportsCentroid,l=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,d=o?u*l:u,i=new P;if(i.outFields=k(this._config.outFields,["*"]),i.where=k(j(this._config.filter,"where"),"1=1"),i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=W.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),o&&(i.maxRecordCountFactor=l),s)return i.num=d,t.destroy(),this._queryPages(e,i);const S=await v(e,i,this._config.sourceSpatialReference);return t.destroy(),S.data}async _queryPages(e,t,r=[],o=0){t.start=h(t.num)?o*t.num:null;const{data:s}=await v(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<this._config.maxQueryDepth?(s.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,o+1)):(r.forEach(n=>s.features.push(n)),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const n=s.attributes[o];t.set(n,s)}this._relatedFeatures=t}};m=_([b("esri.layers.graphics.sources.connections.GeoEventConnection")],m);const $=m;function A(e,t,r,o,s,n,l,u){const d=e.path.indexOf("wss://")===0||e.path.indexOf("ws://")===0,i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:s,maxReconnectionAttempts:n,maxReconnectionInterval:l,customParameters:u};return d?new y(i):new $(i)}export{A as createConnection};
