import{_ as V,a as h,b as v}from"./DNvA7zWu.js";import{_ as y}from"./DziBQAlT.js";import{_ as j}from"./KR-DQjZn.js";import{i as N,c as $}from"./Ch1WCYms.js";import{b5 as u,b4 as S,b2 as B,ba as o,b7 as Z,b8 as k,b9 as e,b3 as n,bv as i,b6 as w,bN as O}from"./DtJsQ1E2.js";import"./DdMAs3fN.js";import"./BnaH1qzr.js";import"./DeKvNKWT.js";import"./6bUBh_yt.js";const R=["dir"],z={class:"relative px-4 py-32"},M={class:"mx-auto max-w-screen-3xl lg:flex lg:items-center"},A={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},dir:{type:String,default:"auto"}},setup(s){const a=s,c=u(()=>{var l,r;const m=((l=a.custom)==null?void 0:l.hue)??"",d=((r=a.custom)==null?void 0:r.className)??"";return{hue:m,className:d}}),f=u(()=>c.value.hue?{type:"Simple",bg:c.value.hue}:{type:a.dir==="auto"?"Rotate45":"LTR",bg:a.dir==="rtl"?"dark":"light"}),t=u(()=>N(a.modelValue)?a.modelValue:$(["subject","title","description","btnStarted","btnMore","pic"]));return(m,d)=>{var b,_;const l=V,r=h,x=v,g=y,p=j;return S(),B("section",{dir:s.dir,class:i(["bg-cover bg-center bg-no-repeat",e(c).className]),style:O({backgroundImage:e(t).pic?`url(${(_=(b=e(t).pic)==null?void 0:b.ext)==null?void 0:_.src})`:""})},[o(l,Z(k(e(f))),null,16),n("div",z,[n("div",M,[n("div",{class:i(["text-center ltr:sm:text-left rtl:sm:text-right",s.dir==="auto"?"mx-auto max-w-6xl":"max-w-3xl"])},[o(r,{modelValue:e(t).subject},null,8,["modelValue"]),o(x,{modelValue:e(t).title},null,8,["modelValue"]),o(g,{modelValue:e(t).description,className:"mt-4 text-justify"},null,8,["modelValue"]),n("div",{class:i(["mt-8 flex gap-4 flex-wrap",{"justify-center":s.dir==="auto"}])},[o(p,{modelValue:e(t).btnStarted,class:"text-gray-100/90 rounded-full"},null,8,["modelValue"]),o(p,{modelValue:e(t).btnMore,class:"rounded-full border hover:bg-base-300 hover:text-base-neutral"},null,8,["modelValue"])],2)],2)]),w(m.$slots,"default")])],14,R)}}};export{A as default};