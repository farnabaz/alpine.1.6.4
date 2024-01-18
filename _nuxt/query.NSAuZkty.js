import{a5 as $,m as f,a6 as P,a7 as C,a8 as E,a9 as l,_ as S}from"./entry.dPNU286_.js";import{u as g}from"./preview.AyrfvJzG.js";const y=(t,r)=>r.split(".").reduce((n,i)=>n&&n[i],t),h=(t,r)=>Object.keys(t).filter(r).reduce((n,i)=>Object.assign(n,{[i]:t[i]}),{}),D=t=>r=>t&&t.length?h(r,n=>!t.includes(n)):r,j=t=>r=>Array.isArray(r)?r.map(n=>t(n)):t(r),w=t=>{const r=[],n=[];for(const i of t)["$","_"].includes(i)?r.push(i):n.push(i);return{prefixes:r,properties:n}},q=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:n,properties:i}=w(t);return h(r,s=>!i.includes(s)&&!n.includes(s[0]))},v=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:n,properties:i}=w(t);return h(r,s=>i.includes(s)||n.includes(s[0]))},I=(t,r)=>{const n=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),i=Object.keys(r).filter(s=>!s.startsWith("$"));for(const s of i)t=t.sort((a,e)=>{const o=[y(a,s),y(e,s)].map(c=>{if(c!==null)return c instanceof Date?c.toISOString():c});return r[s]===-1&&o.reverse(),n.compare(o[0],o[1])});return t},Q=(t,r="Expected an array")=>{if(!Array.isArray(t))throw new TypeError(r)},u=t=>Array.isArray(t)?t:[void 0,null].includes(t)?[]:[t],b=["sort","where","only","without"];function x(t,r={}){const n={};for(const e of Object.keys(r.initialParams||{}))n[e]=b.includes(e)?u(r.initialParams[e]):r.initialParams[e];const i=(e,o=c=>c)=>(...c)=>(n[e]=o(...c),a),s=e=>{var o;return r.legacy?e!=null&&e.surround?e.surround:e&&(e!=null&&e.dirConfig&&(e.result={_path:(o=e.dirConfig)==null?void 0:o._path,...e.result,_dir:e.dirConfig}),e!=null&&e._path||Array.isArray(e)||!Object.prototype.hasOwnProperty.call(e,"result")?e:e==null?void 0:e.result):e},a={params:()=>({...n,...n.where?{where:[...u(n.where)]}:{},...n.sort?{sort:[...u(n.sort)]}:{}}),only:i("only",u),without:i("without",u),where:i("where",e=>[...u(n.where),...u(e)]),sort:i("sort",e=>[...u(n.sort),...u(e)]),limit:i("limit",e=>parseInt(String(e),10)),skip:i("skip",e=>parseInt(String(e),10)),find:()=>t(a).then(s),findOne:()=>t(i("first")(!0)).then(s),count:()=>t(i("count")(!0)).then(s),locale:e=>a.where({_locale:e}),withSurround:i("surround",(e,o)=>({query:e,...o})),withDirConfig:()=>i("dirConfig")(!0)};return r.legacy&&(a.findSurround=(e,o)=>a.withSurround(e,o).find().then(s)),a}function m(t){return JSON.stringify(t,A)}function A(t,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const O=t=>{let r=m(t);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},d=t=>$(t,f().public.content.api.baseURL),R=()=>{const{experimental:t}=f().public.content;return t.clientDB?!0:g().isEnabled()},k=()=>async t=>{const{content:r}=f().public,n=t.params(),i=r.experimental.stripQueryParameters?d(`/query/${`${l(n)}.${r.integrity}`}/${O(n)}.json`):d(`/query/${l(n)}.${r.integrity}.json`);if(R())return(await S(()=>import("./client-db.QXB05zN7.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>e.useContentDatabase())).fetch(t);const s=await $fetch(i,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:m(n),previewToken:g().getPreviewToken()}});if(typeof s=="string"&&s.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return s};function F(t,...r){const{content:n}=f().public,i=x(k(),{initialParams:typeof t!="string"?t:{},legacy:!0});let s;typeof t=="string"&&(s=P(C(t,...r)));const a=i.params;return i.params=()=>{var o,c,p;const e=a();return s&&(e.where=e.where||[],e.first&&(e.where||[]).length===0?e.where.push({_path:E(s)}):e.where.push({_path:new RegExp(`^${s.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(o=e.sort)!=null&&o.length||(e.sort=[{_file:1,$numeric:!0}]),n.locales.length&&((p=(c=e.where)==null?void 0:c.find(_=>_._locale))!=null&&p._locale||(e.where=e.where||[],e.where.push({_locale:n.defaultLocale}))),e},i}export{Q as a,u as b,I as c,j as d,O as e,q as f,y as g,v as h,x as i,m as j,D as o,F as q,R as s,d as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.QXB05zN7.js","./entry.dPNU286_.js","./entry.yqTKp5hu.css","./slugify.2uBFTL6U.js","./preview.AyrfvJzG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
