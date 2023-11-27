import x from"./Input.362e72cd.js";import{r as p,o as a,l,h as o,i as m,_ as i,w as f,b as t,bJ as S,a as d,g as V,bA as B,br as A,j as C,c as h,y as D,s as H,d as k,t as M,m as z,F as L}from"./entry.dd57515c.js";import U from"./Textarea.00d89d9e.js";import g from"./Select.1ff5492f.js";import v from"./SelectMenu.31775046.js";import $ from"./Checkbox.f383ff64.js";import T from"./RadioGroup.9f0ee6cd.js";import{_ as w}from"./Radio.e123df4c.js";import R from"./Toggle.6878a9b3.js";import y from"./Range.92c61054.js";import"./useFormGroup.9469e0b5.js";import"./uid.12f507af.js";import"./usePopper.131299e2.js";import"./combobox.040890dc.js";import"./dom.4fbabe05.js";import"./use-tracked-pointer.4fea9068.js";import"./focus-management.d1b67802.js";import"./open-closed.43a4452f.js";import"./use-resolve-button-type.77b84eb6.js";import"./use-outside-click.5f24c618.js";import"./hidden.324ae6c0.js";import"./use-controllable.04c719e4.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";import"./use-text-value.f39937f1.js";const q={__name:"Base",setup(c){const n=p("");return(e,s)=>{const r=x;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),placeholder:"Search..."},null,8,["modelValue"])}}},E={};function j(c,n){const e=x;return a(),l(e,{type:"password",color:"gray",variant:"outline",placeholder:"Search..."})}const P=i(E,[["render",j]]),F={};function N(c,n){const e=S,s=x;return a(),l(s,{placeholder:"Search..."},{leading:f(()=>[t(e,{src:"https://avatars.githubusercontent.com/u/739984?v=4",size:"3xs"})]),_:1})}const W=i(F,[["render",N]]),G={},J=d("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"EUR",-1);function O(c,n){const e=x;return a(),l(e,{placeholder:"Search..."},{trailing:f(()=>[J]),_:1})}const K=i(G,[["render",O]]),Q=V({__name:"TrailingCustom",setup(c){const n=p("");return(e,s)=>{const r=C,_=x;return a(),l(_,{modelValue:o(n),"onUpdate:modelValue":s[1]||(s[1]=u=>m(n)?n.value=u:null),name:"q",placeholder:"Search...",icon:"i-heroicons-magnifying-glass-20-solid",autocomplete:"off",ui:{icon:{trailing:{pointer:""}}}},{trailing:f(()=>[B(t(r,{color:"gray",variant:"link",icon:"i-heroicons-x-mark-20-solid",padded:!1,onClick:s[0]||(s[0]=u=>n.value="")},null,512),[[A,o(n)!==""]])]),_:1},8,["modelValue"])}}}),X={};function Y(c,n){const e=x;return a(),l(e,{variant:"none",loading:"",icon:"i-heroicons-magnifying-glass-20-solid",placeholder:"Searching..."})}const Z=i(X,[["render",Y]]),ee={};function ne(c,n){const e=C,s=x;return a(),l(s,{class:"w-64 relative",placeholder:"Search...",size:"lg",autocomplete:"off",ui:{rounded:"rounded-full",icon:{trailing:{pointer:"",padding:{lg:"p-1"}}}}},{trailing:f(()=>[t(e,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"primary",square:"",variant:"solid",ui:{rounded:"rounded-full"}})]),_:1})}const oe=i(ee,[["render",ne]]),te={class:"relative"},ae=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Input",-1),ce={__name:"Input",setup(c){return(n,e)=>(a(),h("div",te,[ae,t(o(q)),t(o(P)),t(o(W)),t(o(K)),t(o(Q)),t(o(Z)),t(o(oe))]))}},se=ce,re={__name:"Base",setup(c){const n=p("");return(e,s)=>{const r=U;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null)},null,8,["modelValue"])}}},le={};function _e(c,n){const e=U;return a(),l(e,{resize:"",rows:3,placeholder:"Search...",value:"Here is an size 3 rows"})}const ie=i(le,[["render",_e]]),ue={};function pe(c,n){const e=U;return a(),l(e,{autoresize:"",placeholder:"Search...",value:"Here is an autoresize Textarea, write new lines to make the Textarea grow up..."})}const me=i(ue,[["render",pe]]),de={class:"relative"},he=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Textarea",-1),fe={__name:"Textarea",setup(c){return(n,e)=>(a(),h("div",de,[he,t(o(re)),t(o(ie)),t(o(me))]))}},xe=fe,be={__name:"Base",setup(c){const n=["United States","Canada","Mexico"],e=p(n[0]);return(s,r)=>{const _=g;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),options:n},null,8,["modelValue"])}}},ge={};function ve(c,n){const e=g;return a(),l(e,{color:"gray",variant:"outline",options:["United States","Canada","Mexico"]})}const $e=i(ge,[["render",ve]]),Se={};function Ue(c,n){const e=S,s=g;return a(),l(s,{options:["United States","Canada","Mexico"],placeholder:"Search..."},{leading:f(()=>[t(e,{src:"https://avatars.githubusercontent.com/u/739984?v=4",size:"3xs"})]),_:1})}const ye=i(Se,[["render",Ue]]),Ve={};function Ce(c,n){const e=g;return a(),l(e,{icon:"i-heroicons-magnifying-glass-20-solid",color:"white",size:"sm",options:["United States","Canada","Mexico"],placeholder:"Search..."})}const ke=i(Ve,[["render",Ce]]),Me={};function ze(c,n){const e=g;return a(),l(e,{loading:"",icon:"i-heroicons-magnifying-glass-20-solid",options:["United States","Canada","Mexico"],placeholder:"Search..."})}const Te=i(Me,[["render",ze]]),we={class:"relative"},Re=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Select",-1),Ie={__name:"Select",setup(c){return(n,e)=>(a(),h("div",we,[Re,t(o(be)),t(o($e)),t(o(ye)),t(o(ke)),t(o(Te))]))}},Be=Ie,Ae={__name:"Base",setup(c){const n=["Wade Cooper","Arlene Mccoy","Devon Webb","Tom Cook","Tanya Fox","Hellen Schmidt","Caroline Schultz","Mason Heaney","Claudie Smitham","Emil Schaefer"],e=p(n[0]);return(s,r)=>{const _=v;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),options:n},null,8,["modelValue"])}}},De={__name:"Multiple",setup(c){const n=["Wade Cooper","Arlene Mccoy","Devon Webb","Tom Cook","Tanya Fox","Hellen Schmidt","Caroline Schultz","Mason Heaney","Claudie Smitham","Emil Schaefer"],e=p([]);return(s,r)=>{const _=v;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),options:n,multiple:"",placeholder:"Select people"},null,8,["modelValue"])}}},He={__name:"Object",setup(c){const n=[{id:"benjamincanac",label:"benjamincanac",href:"https://github.com/benjamincanac",target:"_blank",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"}},{id:"Atinux",label:"Atinux",href:"https://github.com/Atinux",target:"_blank",avatar:{src:"https://avatars.githubusercontent.com/u/904724?v=4"}},{id:"smarroufin",label:"smarroufin",href:"https://github.com/smarroufin",target:"_blank",avatar:{src:"https://avatars.githubusercontent.com/u/7547335?v=4"}},{id:"nobody",label:"Nobody",icon:"i-heroicons-user-circle"}],e=p(n[0]);return(s,r)=>{const _=z,u=S,b=v;return a(),l(b,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=I=>m(e)?e.value=I:null),options:n},{label:f(()=>[o(e).icon?(a(),l(_,{key:0,name:o(e).icon,class:"w-4 h-4"},null,8,["name"])):o(e).avatar?(a(),l(u,D({key:1},o(e).avatar,{size:"3xs"}),null,16)):H("",!0),k(" "+M(o(e).label),1)]),_:1},8,["modelValue"])}}},Le={};function qe(c,n){const e=v;return a(),l(e,{searchable:"","searchable-placeholder":"Search a person...",placeholder:"Select a person",options:["Wade Cooper","Arlene Mccoy","Devon Webb","Tom Cook","Tanya Fox","Hellen Schmidt","Caroline Schultz","Mason Heaney","Claudie Smitham","Emil Schaefer"],value:"Arlene Mccoy"})}const Ee=i(Le,[["render",qe]]),je={__name:"SearchAsync",setup(c){const n=async s=>(await $fetch("https://jsonplaceholder.typicode.com/users",{params:{q:s}})).map(_=>({id:_.id,label:_.name,suffix:_.email})).filter(Boolean),e=p([]);return(s,r)=>{const _=v;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),searchable:n,placeholder:"Search for a user...",multiple:"",by:"id"},null,8,["modelValue"])}}},Pe={class:"relative"},Fe=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"SelectMenu",-1),Ne={__name:"SelectMenu",setup(c){return(n,e)=>(a(),h("div",Pe,[Fe,t(o(Ae)),t(o(De)),t(o(He)),t(o(Ee)),t(o(je))]))}},We=Ne,Ge={__name:"Base",setup(c){const n=p(!0);return(e,s)=>{const r=$;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),name:"notifications",label:"Notifications"},null,8,["modelValue"])}}},Je={};function Oe(c,n){const e=$;return a(),l(e,{label:"Label",required:"",value:"true"})}const Ke=i(Je,[["render",Oe]]),Qe={};function Xe(c,n){const e=$;return a(),l(e,{label:"Label",help:"Please check this box",value:!1})}const Ye=i(Qe,[["render",Xe]]),Ze={},en=d("span",{class:"italic"},"Label",-1);function nn(c,n){const e=$;return a(),l(e,null,{label:f(()=>[en]),_:1})}const on=i(Ze,[["render",nn]]),tn={class:"relative"},an=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Checkbox",-1),cn={__name:"Checkbox",setup(c){return(n,e)=>(a(),h("div",tn,[an,t(o(Ge)),t(o(Ke)),t(o(Ye)),t(o(on))]))}},sn=cn,rn={__name:"Base",setup(c){const n=[{value:"email",label:"Email"},{value:"sms",label:"Phone (SMS)"},{value:"push",label:"Push notification"}],e=p("sms");return(s,r)=>{const _=T;return a(),l(_,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=u=>m(e)?e.value=u:null),legend:"Choose something",options:n},null,8,["modelValue"])}}},ln={};function _n(c,n){const e=w;return a(),l(e,{label:"Label",required:""})}const un=i(ln,[["render",_n]]),pn={};function mn(c,n){const e=w;return a(),l(e,{label:"Label",help:"Please choose one"})}const dn=i(pn,[["render",mn]]),hn={class:"italic"},fn={__name:"Slot",setup(c){const n=[{value:"email",label:"Email",icon:"i-heroicons-at-symbol"},{value:"sms",label:"Phone (SMS)",icon:"i-heroicons-phone"},{value:"push",label:"Push notification",icon:"i-heroicons-bell"}],e=p("sms");return(s,r)=>{const _=z,u=T;return a(),l(u,{modelValue:o(e),"onUpdate:modelValue":r[0]||(r[0]=b=>m(e)?e.value=b:null),options:n},{label:f(({option:b})=>[d("p",hn,[t(_,{name:b.icon},null,8,["name"]),k(" "+M(b.label),1)])]),_:1},8,["modelValue"])}}},xn={class:"relative"},bn=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Radio",-1),gn={__name:"Radio",setup(c){return(n,e)=>(a(),h("div",xn,[bn,t(o(rn)),t(o(un)),t(o(dn)),t(o(fn))]))}},vn=gn,$n={__name:"Base",setup(c){const n=p(!0);return(e,s)=>{const r=R;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),color:"primary"},null,8,["modelValue"])}}},Sn={__name:"Icon",setup(c){const n=p(!0);return(e,s)=>{const r=R;return a(),l(r,{modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),"on-icon":"i-heroicons-check-20-solid","off-icon":"i-heroicons-x-mark-20-solid"},null,8,["modelValue"])}}},Un={class:"relative"},yn=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Toggle",-1),Vn={__name:"Toggle",setup(c){return(n,e)=>(a(),h("div",Un,[yn,t(o($n)),t(o(Sn))]))}},Cn=Vn,kn=d("label",{for:"range",class:"sr-only"},null,-1),Mn={__name:"Base",setup(c){const n=p(50);return(e,s)=>{const r=y;return a(),h(L,null,[kn,t(r,{id:"range",modelValue:o(n),"onUpdate:modelValue":s[0]||(s[0]=_=>m(n)?n.value=_:null),name:"range"},null,8,["modelValue"])],64)}}},zn={};function Tn(c,n){const e=y;return a(),l(e,{min:0,max:100})}const wn=i(zn,[["render",Tn]]),Rn={};function In(c,n){const e=y;return a(),l(e,{step:20})}const Bn=i(Rn,[["render",In]]),An={class:"relative"},Dn=d("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Range",-1),Hn={__name:"Range",setup(c){return(n,e)=>(a(),h("div",An,[Dn,t(o(Mn)),t(o(wn)),t(o(Bn))]))}},Ln=Hn,io=V({__name:"form",setup(c){return(n,e)=>(a(),h("div",null,[t(se,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(xe,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(Be,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(We,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(vn,{class:"flex flex-wrap items-center gap-6 bg-base-100 px-4 py-6 mb-3"}),t(sn,{class:"flex flex-wrap items-center gap-6 bg-base-100 px-4 py-6 mb-3"}),t(Cn,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),t(Ln,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"})]))}});export{io as default};
