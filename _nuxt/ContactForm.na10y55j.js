import h from"./Input.bypM5o6j.js";import y from"./Button.iTZZ3fZZ.js";import{d as b,x,m as S,r as v,a1 as w,b as l,c,e as d,F as B,Y as F,L as s,g as R,w as T,t as V,j,W as C,l as E}from"./entry.dPNU286_.js";const k=["action"],N={class:"inputs"},O=b({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const i=x().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=v(),p=w(m.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const u=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:u,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=i.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,u)=>{const r=h,a=y;return l(),c("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",N,[(l(!0),c(B,null,F(s(p),(o,_)=>(l(),C(r,{key:_,modelValue:o.data,"onUpdate:modelValue":g=>o.data=g,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[R(a,{type:"submit",disabled:!s(n)},{default:T(()=>[j(V(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,k)}}}),Y=E(O,[["__scopeId","data-v-9eff3307"]]);export{Y as default};
