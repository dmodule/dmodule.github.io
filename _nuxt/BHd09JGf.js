import{_ as E}from"./CWc4T1gT.js";import{r as p,C as h,h as L,o as v,c as x,b as s,w as m,K as b,H as g,q as d,I as N,a as i,D as y,s as O,B as S}from"./Cq2HQBvY.js";import{o as Y,s as V,_ as F,m as k,r as T}from"./CwPp1TvK.js";import Z from"./DxcKS-Od.js";import A from"./MD4imDra.js";import{c as D}from"./BzGOlt8I.js";const H={class:"absolute top-0 right-0"},I={class:"flex items-center justify-between relative z-10"},K=i("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Module Editing ",-1),P={class:"w-full md:flex items-stretch"},G={class:"flex-1 relative md:h-[calc(100vh-64px)] overflow-auto p-4 form-main"},oe={__name:"Popup",props:{modelValue:{type:Object,default(){return{}}},loaded:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},emits:["update:modelValue","shut","onVisibled"],setup(w,{expose:C,emit:B}){const u=p(!1),a=p(!1),_=p(null),l=w,c=B,f=h({get:()=>{const t=l.modelValue,e=D(t.attrs);return{...t,state:e}},set:t=>{c("update:modelValue",t)}}),U=h(()=>{var e;const t=(e=l.modelValue)==null?void 0:e.attrs;if(t){const n={};for(const o in t)o==="title"?n[o]=V("Your title must be a string.",[k(1,"The title must have at least 1 characters.")]):o==="phone"&&(n[o]=V("Your phone must be a number.",[k(10,"The phone number must have at least 10 characters."),T(/[0-9]/,"Your phone must contain a number.")]));return Y(n)}}),$=()=>{a.value=!1,c("shut")},z=t=>{u.value=t},M=()=>{_.value.close()};return L(()=>{u.value=l.edit}),C({setEditor:z}),(t,e)=>{const n=E,o=S,R=F,j=Z,q=A;return v(),x("div",{class:O(["w-full flex items-start relative",{"overflow-hidden":d(u)}])},[s(n,{loaded:l.loaded,onOnVisibled:e[0]||(e[0]=r=>c("onVisibled"))},{default:m(()=>[l.loaded?b(t.$slots,"default",{key:0}):g("",!0)]),_:3},8,["loaded"]),d(u)?(v(),x(N,{key:0},[i("div",H,[s(o,{icon:"i-heroicons-pencil-square",size:"sm",square:"",color:"gray",onClick:e[1]||(e[1]=r=>a.value=!0),class:"ring-0"})]),s(q,{modelValue:d(a),"onUpdate:modelValue":e[3]||(e[3]=r=>y(a)?a.value=r:null),fullscreen:""},{default:m(()=>[s(j,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow overflow-hidden"}}},{header:m(()=>[i("div",I,[K,s(o,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:M})])]),default:m(()=>[i("div",P,[s(R,{ref_key:"formRef",ref:_,class:"form-card md:h-[calc(100vh-64px)]",schema:d(U),modelValue:d(f),"onUpdate:modelValue":e[2]||(e[2]=r=>y(f)?f.value=r:null),onShut:$},null,8,["schema","modelValue"]),i("div",G,[b(t.$slots,"default")])])]),_:3})]),_:3},8,["modelValue"])],64)):g("",!0)],2)}}};export{oe as _};