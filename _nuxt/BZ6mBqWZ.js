import{ac as o,ad as n,_ as r,g as u,af as c,M as l,C as d,ak as i,al as p,o as f,c as g,n as k}from"./DeuvRX2B.js";const m={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},_=o(n.ui.strategy,n.ui.skeleton,m),b=u({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:a}=c("skeleton",l(e,"ui"),_),t=d(()=>i(p(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:a,skeletonClass:t}}});function y(e,s,a,t,C,v){return f(),g("div",k({class:e.skeletonClass},e.attrs),null,16)}const h=r(b,[["render",y]]);export{h as default};