import{_ as V,a as h,b as v}from"./qvIwQ-qn.js";import{_ as y,a as j}from"./DzP7GS1w.js";import{i as N}from"./B6Lq9Mqd.js";import{d as $}from"./iP-yhpA_.js";import{b4 as m,b3 as S,b1 as w,b9 as s,b6 as B,b7 as Z,b8 as e,b2 as r,bu as d,b5 as k,bF as R}from"./CHOppScM.js";const z=["dir"],C={class:"relative px-4 py-32"},O={class:"mx-auto max-w-screen-3xl lg:flex lg:items-center"},E={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},dir:{type:String,default:"auto"}},setup(o){const a=o,c=m(()=>{var l,n;const u=((l=a.custom)==null?void 0:l.hue)??"",i=((n=a.custom)==null?void 0:n.className)??"";return{hue:u,className:i}}),_=m(()=>c.value.hue?{type:"Simple",bg:c.value.hue}:{type:a.dir==="auto"?"Rotate45":"LTR",bg:a.dir==="rtl"?"dark":"light"}),t=m(()=>N(a.modelValue)?a.modelValue:$(["subject","title","dsnContent","btnStarted","btnMore","pic"]));return(u,i)=>{var p,f;const l=V,n=h,x=v,g=y,b=j;return S(),w("section",{dir:o.dir,class:d(["bg-cover bg-center bg-no-repeat",e(c).className]),style:R({backgroundImage:e(t).pic?`url(${(f=(p=e(t).pic)==null?void 0:p.ext)==null?void 0:f.src})`:""})},[s(l,B(Z(e(_))),null,16),r("div",C,[r("div",O,[r("div",{class:d(["text-center ltr:sm:text-left rtl:sm:text-right",o.dir==="auto"?"mx-auto max-w-6xl":"max-w-3xl"])},[s(n,{modelValue:e(t).subject},null,8,["modelValue"]),s(x,{modelValue:e(t).title},null,8,["modelValue"]),s(g,{modelValue:e(t).dsnContent,className:"mt-4 text-justify"},null,8,["modelValue"]),r("div",{class:d(["mt-8 flex gap-4 flex-wrap",{"justify-center":o.dir==="auto"}])},[s(b,{modelValue:e(t).btnStarted,class:"text-gray-100/90 rounded-full"},null,8,["modelValue"]),s(b,{modelValue:e(t).btnMore,class:"rounded-full border hover:bg-base-300 hover:text-base-neutral"},null,8,["modelValue"])],2)],2)]),k(u.$slots,"default")])],14,z)}}};export{E as default};