import{_ as L}from"./BkIOzmI1.js";import{r as c,C as h,h as N,o as v,c as x,b as s,w as m,T as b,H as y,q as d,I as O,a as i,D as g,s as S,B as T}from"./BBa6so6u.js";import{o as Y,s as V,_ as F,m as k,r as Z}from"./CG1XjJ8T.js";import A from"./B7vKuAwX.js";import D from"./DlwJao42.js";import{c as H}from"./DHFOe2EN.js";const I={class:"absolute top-0 right-0"},P={class:"flex items-center justify-between relative z-10"},G=i("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Module Editing ",-1),J={class:"w-full md:flex items-stretch"},K={class:"flex-1 md:h-[calc(100vh-64px)] overflow-auto p-4"},se={__name:"Popup",props:{modelValue:{type:Object,default(){return{}}},loaded:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},emits:["update:modelValue","shut","onVisibled"],setup(w,{expose:C,emit:B}){const u=c(!1),a=c(!1),U=c(0),_=c(null),n=w,f=B,p=h({get:()=>{const t=n.modelValue,e=H(t.attrs);return{...t,state:e}},set:t=>{f("update:modelValue",t),++U.value}}),$=h(()=>{var e;const t=(e=n.modelValue)==null?void 0:e.attrs;if(t){const l={};for(const o in t)o==="title"?l[o]=V("Your title must be a string.",[k(1,"The title must have at least 1 characters.")]):o==="phone"&&(l[o]=V("Your phone must be a number.",[k(10,"The phone number must have at least 10 characters."),Z(/[0-9]/,"Your phone must contain a number.")]));return Y(l)}}),z=()=>{a.value=!1,f("shut")},M=t=>{u.value=t},R=()=>{_.value.close()};return N(()=>{u.value=n.edit}),C({setEditor:M}),(t,e)=>{const l=L,o=T,j=F,q=A,E=D;return v(),x("div",{class:S(["w-full flex items-center relative",{"overflow-hidden":d(u)}])},[s(l,{loaded:n.loaded,onOnVisibled:e[0]||(e[0]=r=>f("onVisibled"))},{default:m(()=>[n.loaded?b(t.$slots,"default",{key:0}):y("",!0)]),_:3},8,["loaded"]),d(u)?(v(),x(O,{key:0},[i("div",I,[s(o,{icon:"i-heroicons-pencil-square",size:"sm",square:"",color:"gray",onClick:e[1]||(e[1]=r=>a.value=!0),class:"ring-0"})]),s(E,{modelValue:d(a),"onUpdate:modelValue":e[3]||(e[3]=r=>g(a)?a.value=r:null),fullscreen:""},{default:m(()=>[s(q,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow overflow-hidden"}}},{header:m(()=>[i("div",P,[G,s(o,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:R})])]),default:m(()=>[i("div",J,[s(j,{ref_key:"formRef",ref:_,class:"form-card md:h-[calc(100vh-64px)]",schema:d($),modelValue:d(p),"onUpdate:modelValue":e[2]||(e[2]=r=>g(p)?p.value=r:null),onShut:z},null,8,["schema","modelValue"]),i("div",K,[b(t.$slots,"default")])])]),_:3})]),_:3},8,["modelValue"])],64)):y("",!0)],2)}}};export{se as _};