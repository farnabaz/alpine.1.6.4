import{u as m}from"./asyncData.8476fc22.js";import{M as c,I as p,d as i,ae as u,r as l,N as n,k as d}from"./entry.a5cd298e.js";import f from"./Ellipsis.a203bab1.js";import _ from"./ComponentPlaygroundData.9e5e6c6f.js";import"./TabsHeader.a2bc13df.js";import"./ComponentPlaygroundProps.01d2ae77.js";import"./ProseH4.e83df390.js";import"./ProseCodeInline.8b30ea65.js";import"./Badge.c72f665e.js";import"./MDCSlot.1a026699.js";import"./slot.ab2fd7c9.js";import"./ProseP.f29518c7.js";import"./index.3a8d126d.js";import"./ComponentPlaygroundSlots.vue.1505ff50.js";import"./ComponentPlaygroundTokens.vue.2bc7a4fa.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-c0c27b3d"]]);export{V as default};
