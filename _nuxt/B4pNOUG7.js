import{f as y,d as v}from"./IBa4ntg6.js";import{b5 as d,b9 as t,b4 as n,b2 as c,bG as V,bf as p,b6 as _,bx as m,b3 as x,bw as b,ba as f,bm as h,bb as N,bd as g,bB as C,be as j}from"./PQ9VTHH8.js";import{a as T,_ as B}from"./_QBQ6ZNR.js";import{_ as S}from"./YuNIeZg6.js";import{i as Z}from"./AKZmsCIZ.js";const O={key:0},L=["href","target"],M={__name:"LinkTitle",props:{className:{type:String,default:"text-xl flex justify-between mb-4"},modelValue:{type:Object,default:()=>{}},newTab:{type:Boolean,default:!1}},setup(e){const u=e,a=d(()=>{const{opt:o,dat:l,ext:s}=u.modelValue;return{opt:o||{},dat:l,ext:s||{}}});return(o,l)=>{var s,r;return e.modelValue&&t(a).dat?(n(),c("div",{key:0,class:b([e.className,...t(y)(t(a).opt)])},[e.modelValue&&t(a).dat?(n(),c("span",O,[V(p(t(a).dat)+" ",1),_(o.$slots,"default")])):m("",!0),(s=t(a).ext)!=null&&s.src?(n(),c("a",{key:1,href:(r=t(a).ext)==null?void 0:r.src,target:e.newTab?"_blank":"_self",class:"text-sm hover:text-base-200 flex items-center gap-2"},l[0]||(l[0]=[V(" More "),x("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"8",width:"8",viewBox:"0 0 8 8",class:"sc-aef7b723-0 iJFlGY"},[x("path",{d:"M1.5 1L4.5 4L1.5 7",stroke:"currentColor","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),8,L)):m("",!0)],2)):m("",!0)}}},G={__name:"Caption",props:{className:{type:String,default:"text-xs text-base-200"},modelValue:{type:Object,default:()=>{}}},setup(e){const u=e,a=d(()=>{const{opt:o,dat:l,ext:s}=u.modelValue;return{opt:o||{},dat:l,ext:s||{}}});return(o,l)=>e.modelValue&&t(a).dat?(n(),c("p",{key:0,class:b([e.className,...t(y)(t(a).opt)])},[V(p(t(a).dat)+" ",1),e.modelValue&&t(a).dat?_(o.$slots,"default",{key:0}):m("",!0)],2)):m("",!0)}},F={__name:"Percent",props:{className:{type:String,default:"text-green-600 caret-up"},modelValue:{type:Object,default:()=>{}}},setup(e){const u=e,a=d(()=>{const{opt:l,dat:s,ext:r}=u.modelValue;return{opt:l||{},dat:s,ext:r||{}}}),o=d(()=>{const l=parseFloat(a.value.dat);if(l>0)return"text-green-600 caret-up";if(l<0)return"text-red-600 caret-down"});return(l,s)=>e.modelValue&&(t(a).dat||t(a).dat===0)?(n(),c("p",{key:0,class:b([t(o),...t(y)(t(a).opt)])},[V(p(Math.abs(t(a).dat))+"% ",1),e.modelValue&&t(a).dat?_(l.$slots,"default",{key:0}):m("",!0)],2)):m("",!0)}},I={__name:"Currency",props:{className:{type:String,default:""},prefix:{type:String,default:""},suffix:{type:String,default:""},modelValue:{type:Object,default:()=>{}}},setup(e){const u=e,a=d(()=>{const{opt:o,dat:l,ext:s}=u.modelValue;return{opt:o||{},dat:l,ext:s||{}}});return(o,l)=>e.modelValue&&t(a).dat?(n(),c("p",{key:0,class:b([e.className,...t(y)(t(a).opt)])},[V(p(e.prefix)+" "+p(t(a).dat)+" "+p(e.suffix)+" ",1),e.modelValue&&t(a).dat?_(o.$slots,"default",{key:0}):m("",!0)],2)):m("",!0)}},D={key:0,class:"flex justify-between gap-4"},P={class:"flex-1"},q={class:"flex-none flex items-center gap-2"},z={__name:"ItemCol2",props:["modelValue"],setup(e){return(u,a)=>{const o=S,l=G,s=C,r=T,i=F,k=I;return e.modelValue?(n(),c("div",D,[x("div",P,[f(o,{modelValue:e.modelValue.linkTitle},null,8,["modelValue"]),f(l,{modelValue:e.modelValue.caption},null,8,["modelValue"])]),x("div",q,[e.modelValue.btnMore?(n(),h(r,{key:0,class:"btn-xs btn-outline",modelValue:e.modelValue.btnMore},{default:N(()=>[f(s,{name:"i-heroicons-arrow-top-right-on-square",class:"ml-2"})]),_:1},8,["modelValue"])):(n(),c(g,{key:1},[f(i,{modelValue:e.modelValue.percent},null,8,["modelValue"]),f(k,{prefix:"$",modelValue:e.modelValue.currency},null,8,["modelValue"])],64))])])):m("",!0)}}},A={class:"text-base space-y-4"},K={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},dir:{type:String,default:"auto"}},setup(e){const u=e,a=d(()=>{var r,i;const l=((r=u.custom)==null?void 0:r.hue)??"",s=((i=u.custom)==null?void 0:i.className)??"";return{hue:l,className:s}}),o=d(()=>Z(u.modelValue)?u.modelValue:v(["linkTitle","title","listGoods"]));return(l,s)=>{const r=M,i=B,k=z;return n(),c("div",{class:b(["rounded-lg border border-base-neutral max-w-md mx-auto p-4",[t(a).className]])},[t(o).linkTitle?(n(),h(r,{key:0,modelValue:t(o).linkTitle},null,8,["modelValue"])):(n(),h(i,{key:1,class:"mb-4",modelValue:t(o).title},null,8,["modelValue"])),x("ul",A,[(n(!0),c(g,null,j(t(o).listGoods.dat,(w,$)=>(n(),c("li",{key:$},[f(k,{modelValue:w},null,8,["modelValue"])]))),128))])],2)}}};export{K as default};
