import{r as p,o as a,A as l,q as o,D as m,_ as i,w as f,b as t,E as S,a as d,g as V,F as B,G as D,B as C,c as h,n as A,H,d as k,t as M,v as z,I as q}from"./CcuYpJnQ.js";import x from"./Dex0PSxJ.js";import U from"./Bq0jxNzn.js";import g from"./CRAlYeQY.js";import v from"./DjrQ84rw.js";import $ from"./Ccyy1IJv.js";import T from"./BjvuV3hR.js";import{_ as w}from"./BTCh3Sqt.js";import R from"./C1CtCsoG.js";import y from"./DUk9XVOZ.js";import"./B9RaefP6.js";import"./CycVya7J.js";import"./CBH-bgz6.js";import"./BemqgJf2.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./DK6Kx27Z.js";import"./DeEB31q3.js";import"./B4Je62Y-.js";import"./dMmj2CWa.js";import"./BF_Ze4d7.js";import"./HsIyjfAk.js";import"./CnxBZg4K.js";import"./Cz1X9jMQ.js";import"./CsMu8_zQ.js";const E={__name:"Base",setup(c){const n=p("");return(e,s)=>{const r=x;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),placeholder:"Search..."},null,8,["modelValue"])}}},L={};function P(c,n){const e=x;return a(),l(e,{type:"password",color:"gray",variant:"outline",placeholder:"Search..."})}const j=i(L,[["render",P]]),F={};function N(c,n){const e=S,s=x;return a(),l(s,{placeholder:"Search..."},{leading:f(()=>[t(e,{src:"https://avatars.githubusercontent.com/u/739984?v=4",size:"3xs"})]),_:1})}const W=i(F,[["render",N]]),G={},O=d("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"EUR",-1);function J(c,n){const e=x;return a(),l(e,{placeholder:"Search..."},{trailing:f(()=>[O]),_:1})}const K=i(G,[["render",J]]),Q=V({__name:"TrailingCustom",setup(c){const n=p("");return(e,s)=>{const r=C,_=x;return a(),l(_,{modelValue:o(n),"onUpdate:modelValue":s[1]||(s[1]=u=>m(n)?n.value=u:null),name:"q",placeholder:"Search...",icon:"i-heroicons-magnifying-glass-20-solid",autocomplete:"off",ui:{icon:{trailing:{pointer:""}}}},{trailing:f(()=>[B(t(r,{color:"gray",variant:"link",icon:"i-heroicons-x-mark-20-solid",padded:!1,onClick:s[0]||(s[0]=u=>n.value="")},null,512),[[D,o(n)!==""]])]),_:1},8,["modelValue"])}}}),X={};function Y(c,n){const e=x;return a(),l(e,{variant:"none",loading:"",icon:"i-heroicons-magnifying-glass-20-solid",placeholder:"Searching..."})}const Z=i(X,[["render",Y]]),ee={};function ne(c,n){const e=C,s=x;return a(),l(s,{class:"w-64 relative",placeholder:"Search...",size:"lg",autocomplete:"off",ui:{rounded:"rounded-full",icon:{trailing:{pointer:"",padding:{lg:"p-1"}}}}},{trailing:f(()=>[t(e,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"primary",square:"",variant:"solid",ui:{rounded:"rounded-full"}})]),_:1})}const oe=i(ee,[["render",ne]]),te={class:"relative"},ae=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Input",-1),ce={__name:"Input",setup(c){return(n,e)=>(a(),h("div",te,[ae,t(o(E)),t(o(j)),t(o(W)),t(o(K)),t(o(Q)),t(o(Z)),t(o(oe))]))}},se=ce,re={__name:"Base",setup(c){const n=p("");return(e,s)=>{const r=U;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null)},null,8,["modelValue"])}}},le={};function _e(c,n){const e=U;return a(),l(e,{resize:"",rows:3,placeholder:"Search...",value:"Here is an size 3 rows"})}const ie=i(le,[["render",_e]]),ue={};function pe(c,n){const e=U;return a(),l(e,{autoresize:"",placeholder:"Search...",value:"Here is an autoresize Textarea, write new lines to make the Textarea grow up..."})}const me=i(ue,[["render",pe]]),de={class:"relative"},he=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Textarea",-1),fe={__name:"Textarea",setup(c){return(n,e)=>(a(),h("div",de,[he,t(o(re)),t(o(ie)),t(o(me))]))}},xe=fe,be={__name:"Base",setup(c){const n=["United States","Canada","Mexico"],e=p(n[0]);return(s,r)=>{const _=g;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),options:n},null,8,["modelValue"])}}},ge={};function ve(c,n){const e=g;return a(),l(e,{color:"gray",variant:"outline",options:["United States","Canada","Mexico"]})}const $e=i(ge,[["render",ve]]),Se={};function Ue(c,n){const e=S,s=g;return a(),l(s,{options:["United States","Canada","Mexico"],placeholder:"Search..."},{leading:f(()=>[t(e,{src:"https://avatars.githubusercontent.com/u/739984?v=4",size:"3xs"})]),_:1})}const ye=i(Se,[["render",Ue]]),Ve={};function Ce(c,n){const e=g;return a(),l(e,{icon:"i-heroicons-magnifying-glass-20-solid",color:"white",size:"sm",options:["United States","Canada","Mexico"],placeholder:"Search..."})}const ke=i(Ve,[["render",Ce]]),Me={};function ze(c,n){const e=g;return a(),l(e,{loading:"",icon:"i-heroicons-magnifying-glass-20-solid",options:["United States","Canada","Mexico"],placeholder:"Search..."})}const Te=i(Me,[["render",ze]]),we={class:"relative"},Re=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Select",-1),Ie={__name:"Select",setup(c){return(n,e)=>(a(),h("div",we,[Re,t(o(be)),t(o($e)),t(o(ye)),t(o(ke)),t(o(Te))]))}},Be=Ie,De={__name:"Base",setup(c){const n=["Wade Cooper","Arlene Mccoy","Devon Webb","Tom Cook","Tanya Fox","Hellen Schmidt","Caroline Schultz","Mason Heaney","Claudie Smitham","Emil Schaefer"],e=p(n[0]);return(s,r)=>{const _=v;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),options:n},null,8,["modelValue"])}}},Ae={__name:"Multiple",setup(c){const n=["Wade Cooper","Arlene Mccoy","Devon Webb","Tom Cook","Tanya Fox","Hellen Schmidt","Caroline Schultz","Mason Heaney","Claudie Smitham","Emil Schaefer"],e=p([]);return(s,r)=>{const _=v;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),options:n,multiple:"",placeholder:"Select people"},null,8,["modelValue"])}}},He={__name:"Object",setup(c){const n=[{id:"benjamincanac",label:"benjamincanac",href:"https://github.com/benjamincanac",target:"_blank",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"}},{id:"Atinux",label:"Atinux",href:"https://github.com/Atinux",target:"_blank",avatar:{src:"https://avatars.githubusercontent.com/u/904724?v=4"}},{id:"smarroufin",label:"smarroufin",href:"https://github.com/smarroufin",target:"_blank",avatar:{src:"https://avatars.githubusercontent.com/u/7547335?v=4"}},{id:"nobody",label:"Nobody",icon:"i-heroicons-user-circle"}],e=p(n[0]);return(s,r)=>{const _=z,u=S,b=v;return a(),l(b,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=I=>m(e)?e.value=I:null),options:n},{label:f(()=>[o(e).icon?(a(),l(_,{key:0,name:o(e).icon,class:"w-4 h-4"},null,8,["name"])):o(e).avatar?(a(),l(u,A({key:1},o(e).avatar,{size:"3xs"}),null,16)):H("",!0),k(" "+M(o(e).label),1)]),_:1},8,["modelValue"])}}},qe={};function Ee(c,n){const e=v;return a(),l(e,{searchable:"","searchable-placeholder":"Search a person...",placeholder:"Select a person",options:["Wade Cooper","Arlene Mccoy","Devon Webb","Tom Cook","Tanya Fox","Hellen Schmidt","Caroline Schultz","Mason Heaney","Claudie Smitham","Emil Schaefer"],value:"Arlene Mccoy"})}const Le=i(qe,[["render",Ee]]),Pe={__name:"SearchAsync",setup(c){const n=async s=>(await $fetch("https://jsonplaceholder.typicode.com/users",{params:{q:s}})).map(_=>({id:_.id,label:_.name,suffix:_.email})).filter(Boolean),e=p([]);return(s,r)=>{const _=v;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),searchable:n,placeholder:"Search for a user...",multiple:"",by:"id"},null,8,["modelValue"])}}},je={class:"relative"},Fe=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"SelectMenu",-1),Ne={__name:"SelectMenu",setup(c){return(n,e)=>(a(),h("div",je,[Fe,t(o(De)),t(o(Ae)),t(o(He)),t(o(Le)),t(o(Pe))]))}},We=Ne,Ge={__name:"Base",setup(c){const n=p(!0);return(e,s)=>{const r=$;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),name:"notifications",label:"Notifications"},null,8,["modelValue"])}}},Oe={};function Je(c,n){const e=$;return a(),l(e,{label:"Label",required:"",value:"true"})}const Ke=i(Oe,[["render",Je]]),Qe={};function Xe(c,n){const e=$;return a(),l(e,{label:"Label",help:"Please check this box",value:!1})}const Ye=i(Qe,[["render",Xe]]),Ze={},en=d("span",{class:"italic"},"Label",-1);function nn(c,n){const e=$;return a(),l(e,null,{label:f(()=>[en]),_:1})}const on=i(Ze,[["render",nn]]),tn={class:"relative"},an=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Checkbox",-1),cn={__name:"Checkbox",setup(c){return(n,e)=>(a(),h("div",tn,[an,t(o(Ge)),t(o(Ke)),t(o(Ye)),t(o(on))]))}},sn=cn,rn={__name:"Base",setup(c){const n=[{value:"email",label:"Email"},{value:"sms",label:"Phone (SMS)"},{value:"push",label:"Push notification"}],e=p("sms");return(s,r)=>{const _=T;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),legend:"Choose something",options:n},null,8,["modelValue"])}}},ln={};function _n(c,n){const e=w;return a(),l(e,{label:"Label",required:""})}const un=i(ln,[["render",_n]]),pn={};function mn(c,n){const e=w;return a(),l(e,{label:"Label",help:"Please choose one"})}const dn=i(pn,[["render",mn]]),hn={class:"italic"},fn={__name:"Slot",setup(c){const n=[{value:"email",label:"Email",icon:"i-heroicons-at-symbol"},{value:"sms",label:"Phone (SMS)",icon:"i-heroicons-phone"},{value:"push",label:"Push notification",icon:"i-heroicons-bell"}],e=p("sms");return(s,r)=>{const _=z,u=T;return a(),l(u,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=b=>m(e)?e.value=b:null),options:n},{label:f(({option:b})=>[d("p",hn,[t(_,{name:b.icon},null,8,["name"]),k(" "+M(b.label),1)])]),_:1},8,["modelValue"])}}},xn={class:"relative"},bn=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Radio",-1),gn={__name:"Radio",setup(c){return(n,e)=>(a(),h("div",xn,[bn,t(o(rn)),t(o(un)),t(o(dn)),t(o(fn))]))}},vn=gn,$n={__name:"Base",setup(c){const n=p(!0);return(e,s)=>{const r=R;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),color:"primary"},null,8,["modelValue"])}}},Sn={__name:"Icon",setup(c){const n=p(!0);return(e,s)=>{const r=R;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),"on-icon":"i-heroicons-check-20-solid","off-icon":"i-heroicons-x-mark-20-solid"},null,8,["modelValue"])}}},Un={class:"relative"},yn=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Toggle",-1),Vn={__name:"Toggle",setup(c){return(n,e)=>(a(),h("div",Un,[yn,t(o($n)),t(o(Sn))]))}},Cn=Vn,kn=d("label",{for:"range",class:"sr-only"},null,-1),Mn={__name:"Base",setup(c){const n=p(50);return(e,s)=>{const r=y;return a(),h(q,null,[kn,t(r,{id:"range",modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),name:"range"},null,8,["modelValue"])],64)}}},zn={};function Tn(c,n){const e=y;return a(),l(e,{min:0,max:100})}const wn=i(zn,[["render",Tn]]),Rn={};function In(c,n){const e=y;return a(),l(e,{step:20})}const Bn=i(Rn,[["render",In]]),Dn={class:"relative"},An=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Range",-1),Hn={__name:"Range",setup(c){return(n,e)=>(a(),h("div",Dn,[An,t(o(Mn)),t(o(wn)),t(o(Bn))]))}},qn=Hn,io=V({__name:"form",setup(c){return(n,e)=>(a(),h("div",null,[t(se,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(xe,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(Be,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(We,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(vn,{class:"flex flex-wrap items-center gap-6 bg-base-100 px-4 py-6 mb-3"}),t(sn,{class:"flex flex-wrap items-center gap-6 bg-base-100 px-4 py-6 mb-3"}),t(Cn,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(qn,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"})]))}});export{io as default};