import{_ as n,bH as r,bI as a,f as l,b5 as u,x as c,bJ as i,o as p,c as f,ao as d}from"./entry.315daf49.js";import{t as m}from"./tw-merge.ef7dc0f7.js";import{G as g,u as k}from"./ui.config.ea598d69.js";const b=r(a.ui.strategy,a.ui.skeleton,g),_=l({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:s,attrs:t}=k("skeleton",u(e,"ui"),b),o=c(()=>m(i(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:t,skeletonClass:o}}});function v(e,s,t,o,C,y){return p(),f("div",d({class:e.skeletonClass},e.attrs),null,16)}const w=n(_,[["render",v]]);export{w as default};
