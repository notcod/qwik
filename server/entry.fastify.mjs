import ve from"fastify";import{join as oe}from"node:path";import{fileURLToPath as Ae}from"node:url";import{s as _e,r as ke}from"./assets/entry.ssr-82d3bc3f.mjs";import{getNotFound as De}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Pe}from"./@qwik-city-static-paths.js";import{createReadStream as Ce}from"fs";import{join as O,basename as Oe,extname as Me}from"path";import{fileURLToPath as We}from"url";import{Http2ServerRequest as He}from"http2";import{TextEncoderStream as $e,TextDecoderStream as Ne,WritableStream as Le,ReadableStream as je}from"stream/web";import{fetch as Fe,Headers as Ie,Request as Ue,Response as ze,FormData as Qe}from"undici";import Ge from"crypto";import{_ as Be,a as Je,v as Ke,q as Xe}from"./assets/@qwik-city-plan-3cb33df5.mjs";import X from"@fastify/static";import Ye from"fastify-plugin";var ce=class extends Error{constructor(e,t){super(t),this.status=e}};function Ve(e,t){let r="Server Error";return t!=null&&(typeof t.message=="string"?r=t.message:r=String(t)),"<html>"+le(e,r)+"</html>"}function le(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=Ee(t):t="";const r=typeof t=="string"?"600px":"300px",n=e>=500?et:Ze;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${n}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${r}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${n}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${n}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var qe=/[&<>]/g,Ee=e=>e.replace(qe,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),Ze="#006ce9",et="#713fc2",tt={lax:"Lax",none:"None",strict:"Strict"},rt={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},nt=(e,t,r)=>{const n=[`${e}=${t}`];typeof r.domain=="string"&&n.push(`Domain=${r.domain}`),typeof r.maxAge=="number"?n.push(`Max-Age=${r.maxAge}`):Array.isArray(r.maxAge)?n.push(`Max-Age=${r.maxAge[0]*rt[r.maxAge[1]]}`):typeof r.expires=="number"||typeof r.expires=="string"?n.push(`Expires=${r.expires}`):r.expires instanceof Date&&n.push(`Expires=${r.expires.toUTCString()}`),r.httpOnly&&n.push("HttpOnly"),typeof r.path=="string"&&n.push(`Path=${r.path}`);const i=it(r.sameSite);return i&&n.push(`SameSite=${i}`),r.secure&&n.push("Secure"),n.join("; ")};function Y(e){try{return decodeURIComponent(e)}catch{return e}}var at=e=>{const t={};if(typeof e=="string"&&e!==""){const r=e.split(";");for(const n of r){const i=n.indexOf("=");i!==-1&&(t[Y(n.slice(0,i).trim())]=Y(n.slice(i+1).trim()))}}return t};function it(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return tt[e]}var k=Symbol("request-cookies"),B=Symbol("response-cookies"),x=Symbol("live-cookies"),fe,ue,st=class{constructor(e){this[fe]={},this[ue]={},this[k]=at(e),this[x]={...this[k]}}get(e,t=!0){const r=this[t?x:k][e];return r?{value:r,json(){return JSON.parse(r)},number(){return Number(r)}}:null}getAll(e=!0){return Object.keys(this[e?x:k]).reduce((t,r)=>(t[r]=this.get(r),t),{})}has(e,t=!0){return!!this[t?x:k][e]}set(e,t,r={}){this[x][e]=typeof t=="string"?t:JSON.stringify(t);const n=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[B][e]=nt(e,n,r)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[x][e]=null}headers(){return Object.values(this[B])}};fe=B,ue=x;var J=class{},M=class extends J{},V=new WeakMap,q="qaction",ot="qfunc";function ct(e){const{url:t,params:r,request:n,status:i,locale:a}=e,o={};n.headers.forEach((y,w)=>o[w]=y);const s=e.sharedMap.get(L),l=e.sharedMap.get(we),c=e.sharedMap.get(ye),f=e.sharedMap.get(vt),d=e.request.headers,u=new URL(t.pathname+t.search,t),m=d.get("X-Forwarded-Host"),p=d.get("X-Forwarded-Proto");return m&&(u.port="",u.host=m),p&&(u.protocol=p),{url:u.href,requestHeaders:o,locale:a(),nonce:f,containerAttributes:{"q:route":c},qwikcity:{routeName:c,ev:e,params:{...r},loadedRoute:_t(e),response:{status:i(),loaders:j(e),action:s,formData:l}}}}var lt=(e,t,r,n,i)=>{const a=[],o=[],s=[],l=!!(t&&pt(t[2]));if(e&&E(a,o,s,e,l,r),t){const c=t[0];n&&(r==="POST"||r==="PUT"||r==="PATCH"||r==="DELETE")&&s.unshift(gt),l&&(r==="POST"&&s.push(dt),s.push(mt),s.push(bt)),s.push(wt),E(a,o,s,t[2],l,r),l&&(s.push(f=>{f.sharedMap.set(ye,c)}),s.push(ft(a,o)),s.push(i))}return s},E=(e,t,r,n,i,a)=>{for(const o of n){typeof o.onRequest=="function"?r.push(o.onRequest):Array.isArray(o.onRequest)&&r.push(...o.onRequest);let s;switch(a){case"GET":{s=o.onGet;break}case"POST":{s=o.onPost;break}case"PUT":{s=o.onPut;break}case"PATCH":{s=o.onPatch;break}case"DELETE":{s=o.onDelete;break}case"OPTIONS":{s=o.onOptions;break}case"HEAD":{s=o.onHead;break}}if(typeof s=="function"?r.push(s):Array.isArray(s)&&r.push(...s),i){const l=Object.values(o).filter(f=>Z(f,"server_loader"));e.push(...l);const c=Object.values(o).filter(f=>Z(f,"server_action"));t.push(...c)}}},Z=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function ft(e,t){return async r=>{if(r.headersSent){r.exit();return}const{method:n}=r,i=j(r),a=F(r)==="dev",o=r[N];if(a&&n==="GET"&&r.query.has(q)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),n==="POST"){const s=r.query.get(q);if(s){const l=globalThis._qwikActionsMap,c=t.find(f=>f.__id===s)??(l==null?void 0:l.get(s));if(c){r.sharedMap.set(L,s);const f=await r.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const d=await ee(r,c.__validators,f,a);if(!d.success)i[s]=r.fail(d.status??500,d.error);else{const u=a?await H(r,c.__qrl.getSymbol().split("_",1)[0],()=>c.__qrl.call(r,d.data,r)):await c.__qrl.call(r,d.data,r);a&&W(o,u,c.__qrl),i[s]=u}}}}e.length>0&&await Promise.all(e.map(s=>{const l=s.__id;return i[l]=ee(r,s.__validators,void 0,a).then(c=>c.success?a?H(r,s.__qrl.getSymbol().split("_",1)[0],()=>s.__qrl.call(r,r)):s.__qrl.call(r,r):r.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?i[l]=c():(a&&W(o,c,s.__qrl),i[l]=c),c))}))}}async function ee(e,t,r,n){let i={success:!0,data:r};if(t)for(const a of t)if(n?i=await H(e,"validator$",()=>a.validate(e,r)):i=await a.validate(e,r),i.success)r=i.data;else return i;return i}function ut(e){return e&&typeof e=="object"&&Symbol.asyncIterator in e}async function dt(e){const t=e.query.get(ot);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const r=F(e)==="dev",n=e[N],i=await e.parseBody();if(Array.isArray(i)){const[a,...o]=i;if(ht(a)&&a.getHash()===t){let s;try{r?s=await H(e,`server_${a.getSymbol()}`,()=>a.apply(e,o)):s=await a.apply(e,o)}catch(l){e.headers.set("Content-Type","application/qwik-json"),e.send(500,await n._serializeData(l,!0));return}if(ut(s)){e.headers.set("Content-Type","text/qwik-json-stream");const c=e.getWritableStream().getWriter();for await(const f of s){r&&W(n,f,a);const d=await n._serializeData(f,!0);if(e.signal.aborted)break;await c.write($.encode(`${d}
`))}c.close()}else{W(n,s,a),e.headers.set("Content-Type","application/qwik-json");const l=await n._serializeData(s,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function mt(e){const t=K(e),{basePathname:r,pathname:n,url:i,sharedMap:a}=e;if(!a.has(D)&&n!==r&&!n.endsWith(".html")){if(t){if(!n.endsWith("/"))throw e.redirect(302,n+"/"+i.search)}else if(n.endsWith("/"))throw e.redirect(302,n.slice(0,n.length-1)+i.search)}}function W(e,t,r){try{e._verifySerializable(t,void 0)}catch(n){throw n instanceof Error&&r.dev&&(n.loc=r.dev),n}}var ht=e=>typeof e=="function"&&typeof e.getSymbol=="function";function pt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function de(e,t){return e.pathname.endsWith(v)?e.pathname.slice(0,-v.length+(t?1:0))+e.search:e.pathname}var $=new TextEncoder;function gt(e){if(Tt(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const r=e.request.headers.get("origin"),n=e.url.origin;if(r!==n)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${r}" does not match the server origin "${n}".`)}}function yt(e){return async t=>{if(t.headersSent||t.sharedMap.has(D))return;t.request.headers.forEach((d,u)=>d);const n=t.headers;n.has("Content-Type")||n.set("Content-Type","text/html; charset=utf-8");const i=K(t),{readable:a,writable:o}=new TextEncoderStream,s=t.getWritableStream(),l=a.pipeTo(s,{preventClose:!0}),c=o.getWriter(),f=t.status();try{const d=F(t)==="static",u=ct(t),m=await e({base:t.basePathname+"build/",stream:c,serverData:u,containerAttributes:{"q:render":d?"static":"",...u.containerAttributes}}),p={loaders:j(t),action:t.sharedMap.get(L),status:f!==200?f:200,href:de(t.url,i)};typeof m.html=="string"&&await c.write(m.html),t.sharedMap.set("qData",p)}finally{await c.ready,await c.close(),await l}await s.close()}}async function wt(e){if(e.sharedMap.has(D)){try{await e.next()}catch(a){if(!(a instanceof M))throw a}if(e.headersSent)return;const r=e.status(),n=e.headers.get("Location");if(r>=301&&r<=308&&n){const a=St(n);if(a){e.headers.set("Location",a),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function bt(e){if(e.sharedMap.has(D)){if(await e.next(),e.headersSent||e.exited)return;const r=e.status(),n=e.headers.get("Location"),i=K(e);e.request.headers.forEach((c,f)=>c),e.headers.set("Content-Type","application/json; charset=utf-8");const a={loaders:j(e),action:e.sharedMap.get(L),status:r!==200?r:200,href:de(e.url,i),redirect:n??void 0},o=e.getWritableStream().getWriter(),l=await e[N]._serializeData(a,!0);o.write($.encode(l)),e.sharedMap.set("qData",a),o.close()}}function St(e){if(e.startsWith("/")){const t=v,r=new URL(e,"http://localhost");return(r.pathname.endsWith("/")?r.pathname.slice(0,-1):r.pathname)+(t.startsWith("/")?"":"/")+t+r.search}else return}function te(){return typeof performance<"u"?performance.now():0}async function H(e,t,r){const n=te();try{return await r()}finally{const i=te()-n;let a=e.sharedMap.get("@serverTiming");a||e.sharedMap.set("@serverTiming",a=[]),a.push([t,i])}}function Tt(e,...t){var r;const n=((r=e.get("content-type"))==null?void 0:r.split(/;,/,1)[0].trim())??"";return t.includes(n)}function Rt(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var xt=e=>e&&typeof e.then=="function",me=Symbol("RequestEvLoaders"),he=Symbol("RequestEvMode"),pe=Symbol("RequestEvRoute"),N=Symbol("RequestEvQwikSerializer"),ge=Symbol("RequestEvTrailingSlash"),ye="@routeName",L="@actionId",we="@actionFormData",vt="@nonce";function At(e,t,r,n,i,a,o,s){const{request:l,platform:c,env:f}=e,d=new Map,u=new st(l.headers.get("cookie")),m=new Headers,p=new URL(l.url);p.pathname.endsWith(v)&&(p.pathname=p.pathname.slice(0,-be),i&&!p.pathname.endsWith("/")&&(p.pathname+="/"),d.set(D,!0)),d.set("@manifest",n);let y=-1,w=null,b,A=e.locale,S=200;const xe=async()=>{for(y++;y<r.length;){const h=r[y],g=h(R);xt(g)&&await g,y++}},_=()=>{if(w!==null)throw new Error("Response already sent")},P=(h,g)=>{if(_(),typeof h=="number"){S=h;const C=R.getWritableStream().getWriter();C.write(typeof g=="string"?$.encode(g):g),C.close()}else if(S=h.status,h.headers.forEach((T,C)=>{m.append(C,T)}),h.body){const T=R.getWritableStream();h.body.pipeTo(T)}else{if(S>=300&&S<400)return new M;R.getWritableStream().getWriter().close()}return I()},I=()=>(y=re,new J),U={},R={[me]:U,[he]:e.mode,[ge]:i,[pe]:t,[N]:o,cookie:u,headers:m,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[1])??{},pathname:p.pathname,platform:c,query:p.searchParams,request:l,url:p,basePathname:a,sharedMap:d,get headersSent(){return w!==null},get exited(){return y>=re},get clientConn(){return e.getClientConn()},next:xe,exit:I,cacheControl:(h,g="Cache-Control")=>{_(),m.set(g,Rt(h))},resolveValue:async h=>{const g=h.__id;if(h.__brand==="server_loader"&&!(g in U))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return U[g]},status:h=>typeof h=="number"?(_(),S=h,h):S,locale:h=>(typeof h=="string"&&(A=h),A||""),error:(h,g)=>(S=h,m.delete("Cache-Control"),new ce(h,g)),redirect:(h,g)=>{if(_(),S=h,g){const T=g.replace(/([^:])\/{2,}/g,"$1/");g!==T&&console.warn(`Redirect URL ${g} is invalid, fixing to ${T}`),m.set("Location",T)}return m.delete("Cache-Control"),h>301&&m.set("Cache-Control","no-store"),I(),new M},defer:h=>typeof h=="function"?h:()=>h,fail:(h,g)=>(_(),S=h,m.delete("Cache-Control"),{failed:!0,...g}),text:(h,g)=>(m.set("Content-Type","text/plain; charset=utf-8"),P(h,g)),html:(h,g)=>(m.set("Content-Type","text/html; charset=utf-8"),P(h,g)),parseBody:async()=>b!==void 0?b:b=kt(R.request,d,o),json:(h,g)=>(m.set("Content-Type","application/json; charset=utf-8"),P(h,JSON.stringify(g))),send:P,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const h=d.get("@serverTiming");h&&m.set("Server-Timing",h.map(g=>`${g[0]};dur=${g[1]}`).join(","))}w=e.getWritableStream(S,m,u,s,R)}return w}};return Object.freeze(R)}function j(e){return e[me]}function K(e){return e[ge]}function _t(e){return e[pe]}function F(e){return e[he]}var re=Number.MAX_SAFE_INTEGER,kt=async(e,t,r)=>{var n;const i=e.clone(),a=((n=e.headers.get("content-type"))==null?void 0:n.split(/[;,]/,1)[0].trim())??"";if(a==="application/x-www-form-urlencoded"||a==="multipart/form-data"){const o=await i.formData();return t.set(we,o),Dt(o)}else{if(a==="application/json")return await i.json();if(a==="application/qwik-json")return r._deserializeData(await i.text())}},Dt=e=>[...e.entries()].reduce((r,[n,i])=>(n.split(".").reduce((a,o,s,l)=>{if(o.endsWith("[]")){const c=o.slice(0,-2);return a[c]=a[c]||[],a[c]=[...a[c],i]}return s<l.length-1?a[o]=a[o]||(Number.isNaN(+l[s+1])?{}:[]):a[o]=i},r),r),{});function Pt(e,t,r,n,i=!0,a="/",o){let s;const l=new Promise(f=>s=f),c=At(e,t,r,n,i,a,o,s);return{response:l,requestEv:c,completion:Ct(c,s)}}async function Ct(e,t){try{await e.next()}catch(r){if(r instanceof M)await e.getWritableStream().close();else if(r instanceof ce){if(console.error(r),!e.headersSent){const n=Ve(r.status,r),i=r.status;e.html(i,n)}}else if(!(r instanceof J)){if(F(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const n=e.getWritableStream();if(!n.locked){const i=n.getWriter();await i.write($.encode(le(500,"Internal Server Error"))),await i.close()}}catch{console.error("Unable to render error page")}return r}}finally{e.isDirty()||t(null)}}function Ot(e,t){if(e.endsWith(v)){const r=e.length-be+(t?1:0);e=e.slice(0,r),e===""&&(e="/")}return e}var D="@isQData",v="/q-data.json",be=v.length;function Mt(e,t){const r=ie(e),n=ne(e),i=ie(t),a=ne(t);return Se(e,r,n,t,i,a)}function Se(e,t,r,n,i,a){let o=null;for(;t<r;){const s=e.charCodeAt(t++),l=n.charCodeAt(i++);if(s===91){const c=Te(e,t),f=t+(c?3:0),d=z(e,f,r,93),u=e.substring(f,d),m=z(e,d+1,r,47),p=e.substring(d+1,m);t=d+1;const y=i-1;if(c){const A=Ht(u,p,n,y,a,e,t+p.length+1,r);if(A)return Object.assign(o||(o={}),A)}const w=z(n,y,a,47,p);if(w==-1)return null;const b=n.substring(y,w);if(!c&&!p&&!b)return null;i=w,(o||(o={}))[u]=decodeURIComponent(b)}else if(s!==l&&!(isNaN(l)&&Wt(e,t)))return null}return ae(e,t)&&ae(n,i)?o||{}:null}function Wt(e,t){return e.charCodeAt(t)===91&&Te(e,t+1)}function ne(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function ae(e,t){const r=e.length;return t>=r||t==r-1&&e.charCodeAt(t)===47}function ie(e){return e.charCodeAt(0)===47?1:0}function Te(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function z(e,t,r,n,i=""){for(;t<r&&e.charCodeAt(t)!==n;)t++;const a=i.length;for(let o=0;o<a;o++)if(e.charCodeAt(t-a+o)!==i.charCodeAt(o))return-1;return t-a}function Ht(e,t,r,n,i,a,o,s){r.charCodeAt(n)===47&&n++;let l=i;const c=t+"/";let f=5;for(;l>=n&&f--;){const d=Se(a,o,s,r,l,i);if(d){let u=r.substring(n,Math.min(l,i));return u.endsWith(c)&&(u=u.substring(0,u.length-c.length)),d[e]=decodeURIComponent(u),d}l=$t(r,n,c,l,n-1)+c.length}return null}function $t(e,t,r,n,i){let a=e.lastIndexOf(r,n);return a==n-r.length&&(a=e.lastIndexOf(r,n-r.length-1)),a>t?a:i}var Nt=async(e,t,r,n)=>{if(Array.isArray(e))for(const i of e){const a=i[0],o=Mt(a,n);if(o){const s=i[1],l=i[3],c=new Array(s.length),f=[],d=Lt(t,n);let u;return s.forEach((m,p)=>{se(m,f,y=>c[p]=y,r)}),se(d,f,m=>u=m==null?void 0:m.default,r),f.length>0&&await Promise.all(f),[a,o,c,u,l]}}return null},se=(e,t,r,n)=>{if(typeof e=="function"){const i=V.get(e);if(i)r(i);else{const a=e();typeof a.then=="function"?t.push(a.then(o=>{n!==!1&&V.set(e,o),r(o)})):a&&r(a)}}},Lt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const r=e.find(n=>n[0]===t||t.startsWith(n[0]+(t.endsWith("/")?"":"/")));if(r)return r[1]}};async function jt(e,t,r){const{render:n,qwikCityPlan:i,manifest:a,checkOrigin:o}=t,s=e.url.pathname,l=Ot(s,i.trailingSlash),c=await Ft(i,l,e.request.method,o??!0,n);return c?Pt(e,c[0],c[1],a,i.trailingSlash,i.basePathname,r):null}async function Ft(e,t,r,n,i){const{routes:a,serverPlugins:o,menus:s,cacheModules:l}=e,c=await Nt(a,s,l,t),f=lt(o,c,r,n,yt(i));return f.length>0?[c,f]:null}function Q(e,t){var r;return((r=t==null?void 0:t.getOrigin)==null?void 0:r.call(t,e))??(t==null?void 0:t.origin)??process.env.ORIGIN??It(e)}function It(e){const{PROTOCOL_HEADER:t,HOST_HEADER:r}=process.env,n=e.headers,i=t&&n[t]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),a=r??(e instanceof He?":authority":"host"),o=n[a];return`${i}://${o}`}function G(e,t){return zt(e.originalUrl||e.url||"/",t)}var Ut=/\/\/|\\\\/g;function zt(e,t){return new URL(e.replace(Ut,"/"),t)}async function Qt(e,t,r,n,i){const a=new Headers,o=t.headers;for(const u in o){const m=o[u];if(typeof m=="string")a.set(u,m);else if(Array.isArray(m))for(const p of m)a.append(u,p)}const s=async function*(){for await(const u of t)yield u},l=t.method==="HEAD"||t.method==="GET"?void 0:s(),c=new AbortController,f={method:t.method,headers:a,body:l,signal:c.signal,duplex:"half"};return r.on("close",()=>{c.abort()}),{mode:n,url:e,request:new Request(e.href,f),env:{get(u){return process.env[u]}},getWritableStream:(u,m,p)=>{r.statusCode=u,m.forEach((w,b)=>r.setHeader(b,w));const y=p.headers();return y.length>0&&r.setHeader("Set-Cookie",y),new WritableStream({write(w){r.closed||r.destroyed||r.write(w,b=>{b&&console.error(b)})},close(){r.end()}})},getClientConn:()=>i?i(t):{ip:t.socket.remoteAddress},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var Gt={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function Bt(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=Fe,globalThis.Headers=Ie,globalThis.Request=Ue,globalThis.Response=ze,globalThis.FormData=Qe),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=$e,globalThis.TextDecoderStream=Ne),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=Le,globalThis.ReadableStream=je),typeof globalThis.crypto>"u"&&(globalThis.crypto=Ge.webcrypto)}function Jt(e){var t;Bt();const r={_deserializeData:Be,_serializeData:Je,_verifySerializable:Ke};e.manifest&&_e(e.manifest);const n=((t=e.static)==null?void 0:t.root)??O(We(import.meta.url),"..","..","dist");return{router:async(s,l,c)=>{try{const f=Q(s,e),d=await Qt(G(s,f),s,l,"server",e.getClientConn),u=await jt(d,e,r);if(u){const m=await u.completion;if(m)throw m;if(u.requestEv.headersSent)return}c()}catch(f){console.error(f),c(f)}},notFound:async(s,l,c)=>{try{if(!l.headersSent){const f=Q(s,e),d=G(s,f),u=De(d.pathname);l.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":d.pathname}),l.end(u)}}catch(f){console.error(f),c(f)}},staticFile:async(s,l,c)=>{var f;try{const d=Q(s,e),u=G(s,d);if(Pe(s.method||"GET",u)){const m=u.pathname;let p;Oe(m).includes(".")?p=O(n,m):e.qwikCityPlan.trailingSlash?p=O(n,m+"index.html"):p=O(n,m,"index.html");const y=Ce(p),w=Me(p).replace(/^\./,""),b=Gt[w];b&&l.setHeader("Content-Type",b),(f=e.static)!=null&&f.cacheControl&&l.setHeader("Cache-Control",e.static.cacheControl),y.on("error",c),y.pipe(l);return}return c()}catch(d){console.error(d),c(d)}}}}const{router:Kt,notFound:Xt}=Jt({render:ke,qwikCityPlan:Xe}),Yt=async(e,t)=>{const{buildDir:r,distDir:n}=t;e.register(X,{root:r,prefix:"/build",immutable:!0,maxAge:"1y",decorateReply:!1}),e.register(X,{root:n,redirect:!1,decorateReply:!1}),e.setNotFoundHandler(async(i,a)=>{await Kt(i.raw,a.raw,o=>e.log.error(o)),await Xt(i.raw,a.raw,o=>e.log.error(o))})},Vt=Ye(Yt,{fastify:"4.x"}),Re=oe(Ae(import.meta.url),"..","..","dist"),qt=oe(Re,"build"),Et=parseInt(process.env.PORT??"3000"),Zt=process.env.HOST??"0.0.0.0",er=async()=>{const e=ve({logger:!0});await e.register(Vt,{distDir:Re,buildDir:qt}),await e.listen({port:Et,host:Zt})};er();
