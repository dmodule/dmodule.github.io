import{_ as B,a as V}from"./DHDtss_3.js";import{_ as $}from"./Bkyjul77.js";import{_ as Z}from"./CeQemdnL.js";import{_ as k}from"./BHma2A3l.js";import{_ as w}from"./CSNupTHx.js";import{i as M,a as S}from"./BzGOlt8I.js";import{C as I,o as N,c as C,b as a,a as o,s as b,q as e,n as H,ay as O}from"./Cq2HQBvY.js";const z=["dir"],P={class:"relative lg:flex lg:items-center px-4 py-32 gap-4"},q={class:"lg:flex lg:items-center"},E={class:"lg:w-1/2 flex-none"},Q={__name:"VideoHor",props:{dir:{type:String,default:"auto"},carousel:{type:Boolean,default:!1},maxPerView:{type:Number,default:0},tiktok:{type:Boolean,default:!1},modelValue:{type:Object,default(){return{}}}},setup(s){const l=s,t=I(()=>M(l.modelValue)?l.modelValue:S(["subject","title","description","btnStarted","btnMore","bgImage","items"]));return(G,R)=>{var r,c,i,m,p,d,u,_,f,v;const g=B,x=V,y=$,h=Z,n=k,j=w;return N(),C("section",{dir:s.dir,class:"relative bg-cover bg-center bg-no-repeat",style:O({backgroundImage:e(t).bgImage?`url(${e(t).bgImage.val})`:""})},[a(g,{type:"Base"}),o("div",P,[o("div",q,[o("div",{class:b(["text-center rtl:sm:text-left ltr:sm:text-right",s.dir==="auto"?"mx-auto max-w-6xl":"max-w-xl"])},[a(x,{val:(r=e(t).subject)==null?void 0:r.val,opt:(c=e(t).subject)==null?void 0:c.opt},null,8,["val","opt"]),a(y,{val:(i=e(t).title)==null?void 0:i.val,opt:(m=e(t).title)==null?void 0:m.opt},null,8,["val","opt"]),a(h,{val:(p=e(t).description)==null?void 0:p.val,opt:(d=e(t).description)==null?void 0:d.opt,className:"mt-4 text-justify"},null,8,["val","opt"]),o("div",{class:b(["mt-8 flex gap-4 flex-wrap",{"justify-center":s.dir==="auto"}])},[a(n,{val:(u=e(t).btnStarted)==null?void 0:u.val,opt:(_=e(t).btnStarted)==null?void 0:_.opt,class:"text-gray-100/90 rounded-full"},null,8,["val","opt"]),a(n,{val:(f=e(t).btnMore)==null?void 0:f.val,opt:(v=e(t).btnMore)==null?void 0:v.opt,class:"rounded-full border hover:bg-base-300 hover:text-base-neutral"},null,8,["val","opt"])],2)],2)]),o("div",E,[a(j,H({items:e(t).items},e(t).items.addon),null,16,["items"])])])],12,z)}}};export{Q as _};