import{_ as $,a as S}from"./C0QdnHxA.js";import{_ as B}from"./DtJjlmp6.js";import{_ as V}from"./mPg56FZw.js";import{_ as Z}from"./DAGLtlZd.js";import{i as k,a as w}from"./n4Xe9ecP.js";import{C as I,o as M,c as N,b as o,a as l,s as v,q as e,T as O,aE as R}from"./DQbio8Ee.js";const T=["dir"],z={class:"relative px-4 py-32"},C={class:"mx-auto max-w-screen-xl lg:flex lg:items-center"},F={__name:"Base",props:{dir:{type:String,default:"auto"},modelValue:{type:Object,default(){return{}}}},setup(a){const s=a,t=I(()=>k(s.modelValue)?s.modelValue:w(["subject","title","description","btnStarted","btnMore","bgImage"]));return(g,E)=>{var n,c,i,m,d,u,p,b,f,_;const x=$,y=S,h=B,j=V,r=Z;return M(),N("section",{dir:a.dir,class:"bg-cover bg-center bg-no-repeat",style:R({backgroundImage:e(t).bgImage?`url(${e(t).bgImage.val})`:""})},[o(x,{type:a.dir==="auto"?"Rotate45":"LTR",bg:a.dir==="rtl"?"dark":"light"},null,8,["type","bg"]),l("div",z,[l("div",C,[l("div",{class:v(["text-center ltr:sm:text-left rtl:sm:text-right",a.dir==="auto"?"mx-auto max-w-6xl":"max-w-xl"])},[o(y,{val:(n=e(t).subject)==null?void 0:n.val,opt:(c=e(t).subject)==null?void 0:c.opt},null,8,["val","opt"]),o(h,{val:(i=e(t).title)==null?void 0:i.val,opt:(m=e(t).title)==null?void 0:m.opt},null,8,["val","opt"]),o(j,{val:(d=e(t).description)==null?void 0:d.val,opt:(u=e(t).description)==null?void 0:u.opt,className:"mt-4 text-justify"},null,8,["val","opt"]),l("div",{class:v(["mt-8 flex gap-4 flex-wrap",{"justify-center":a.dir==="auto"}])},[o(r,{val:(p=e(t).btnStarted)==null?void 0:p.val,opt:(b=e(t).btnStarted)==null?void 0:b.opt,class:"text-gray-100/90 rounded-full"},null,8,["val","opt"]),o(r,{val:(f=e(t).btnMore)==null?void 0:f.val,opt:(_=e(t).btnMore)==null?void 0:_.opt,class:"rounded-full border hover:bg-base-300 hover:text-base-neutral"},null,8,["val","opt"])],2)],2)]),O(g.$slots,"default")])],12,T)}}};export{F as _};
