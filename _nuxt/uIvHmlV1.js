import{_}from"./DbOcTVb6.js";import{_ as b}from"./JdGXrGLj.js";import{i as h}from"./DixkBZ37.js";import{d as x}from"./B-i9trGf.js";import{b4 as y,bT as r,b3 as t,b1 as l,b8 as o,bl as s,b2 as c,bc as v,bd as w,bw as k,b9 as B}from"./DU-fRFFF.js";const g={class:"flex flex-col h-full rounded-lg border border-base-neutral w-full mx-auto p-4"},V={class:"text-base space-y-4 flex-1 overflow-auto"},Z={class:"flex items-center"},O={__name:"BoxNews",props:{aspectRatio:{type:String,default:""},design:{type:String,default:""},shadow:{type:String,default:""},rounded:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},modelValue:{type:Object,default(){return{}}}},setup(i){const n=i,e=y(()=>h(n.modelValue)?n.modelValue:x(["chain","items"]));return(N,C)=>{const m=_,p=b,u=r("ZoPhoto"),d=r("ZoItemCol2");return t(),l("div",g,[o(e).chain?(t(),s(m,{key:0,val:o(e).chain.val,opt:o(e).chain.opt},null,8,["val","opt"])):(t(),s(p,{key:1,class:"mb-4",val:o(e).title.val,opt:o(e).title.opt},null,8,["val","opt"])),c("ul",V,[(t(!0),l(v,null,w(o(e).items.val,(a,f)=>(t(),l("li",{key:f},[c("div",Z,[a.pic?(t(),s(u,{key:0,src:a.pic,"max-width":80,width:"80px",ratio:"1",class:"mr-4 max-w-4"},null,8,["src"])):k("",!0),B(d,{val:a},null,8,["val"])])]))),128))])])}}};export{O as default};
