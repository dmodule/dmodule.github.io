import{_ as V,a as h,b as v}from"./DfpLb-CI.js";import{_ as y}from"./DSQc2Vkf.js";import{_ as j}from"./CAKtWq15.js";import{i as $,c as N}from"./DUiTNb9Q.js";import{b2 as u,b1 as S,a$ as B,b7 as o,b4 as Z,b5 as k,b6 as e,b0 as n,bt as i,b3 as w,bM as M}from"./D0HIuDqn.js";import"./BXs7iR5A.js";import"./BnaH1qzr.js";import"./6ceMz00Z.js";import"./6bUBh_yt.js";const O=["dir"],R={class:"relative px-4 py-32"},z={class:"mx-auto max-w-screen-3xl lg:flex lg:items-center"},A={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},dir:{type:String,default:"auto"}},setup(s){const a=s,c=u(()=>{var l,r;const m=((l=a.custom)==null?void 0:l.hue)??"",d=((r=a.custom)==null?void 0:r.className)??"";return{hue:m,className:d}}),f=u(()=>c.value.hue?{type:"Simple",bg:c.value.hue}:{type:a.dir==="auto"?"Rotate45":"LTR",bg:a.dir==="rtl"?"dark":"light"}),t=u(()=>$(a.modelValue)?a.modelValue:N(["subject","title","description","btnStarted","btnMore","pic"]));return(m,d)=>{var b,_;const l=V,r=h,x=v,g=y,p=j;return S(),B("section",{dir:s.dir,class:i(["bg-cover bg-center bg-no-repeat",e(c).className]),style:M({backgroundImage:e(t).pic?`url(${(_=(b=e(t).pic)==null?void 0:b.ext)==null?void 0:_.src})`:""})},[o(l,Z(k(e(f))),null,16),n("div",R,[n("div",z,[n("div",{class:i(["text-center ltr:sm:text-left rtl:sm:text-right",s.dir==="auto"?"mx-auto max-w-6xl":"max-w-3xl"])},[o(r,{modelValue:e(t).subject},null,8,["modelValue"]),o(x,{modelValue:e(t).title},null,8,["modelValue"]),o(g,{modelValue:e(t).description,className:"mt-4 text-justify"},null,8,["modelValue"]),n("div",{class:i(["mt-8 flex gap-4 flex-wrap",{"justify-center":s.dir==="auto"}])},[o(p,{modelValue:e(t).btnStarted,class:"text-gray-100/90 rounded-full"},null,8,["modelValue"]),o(p,{modelValue:e(t).btnMore,class:"rounded-full border hover:bg-base-300 hover:text-base-neutral"},null,8,["modelValue"])],2)],2)]),w(m.$slots,"default")])],14,O)}}};export{A as default};
