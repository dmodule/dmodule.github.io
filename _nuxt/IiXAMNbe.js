import{aT as C,_ as b,a3 as h,a4 as l,a0 as k,a6 as O,j as u,y as s,at as V,ae as j,af as M,aU as $,o as p,c as d,b as A,w as B,a as c,U as f,ag as m,D as E,Q as g,aa as T}from"./CMgfjk2B.js";import{u as N}from"./BqgA8WkM.js";const U={wrapper:"relative",container:"z-20 group",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{placement:"bottom-start",scroll:!1},arrow:C},z=h(l.ui.strategy,l.ui.contextMenu,U),F=k({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},virtualElement:{type:Object,required:!0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:o}){const{ui:a,attrs:n}=O("contextMenu",u(e,"ui"),z),t=s(()=>V({},e.popper,a.value.popper)),r=s({get(){return e.modelValue},set(w){o("update:modelValue",w)}}),v=u(e,"virtualElement"),[,i]=N(t.value,v),y=s(()=>j(M(a.value.container,a.value.width),e.class));return $(i,()=>{r.value=!1}),{ui:a,attrs:n,isOpen:r,wrapperClass:y,popper:t,container:i}}});function P(e,o,a,n,t,r){return e.isOpen?(p(),d("div",g({key:0,ref:"container",class:e.wrapperClass},e.attrs),[A(T,g({appear:""},e.ui.transition),{default:B(()=>[c("div",null,[e.popper.arrow?(p(),d("div",{key:0,"data-popper-arrow":"",class:f(Object.values(e.ui.arrow))},null,2)):m("",!0),c("div",{class:f([e.ui.base,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background])},[E(e.$slots,"default")],2)])]),_:3},16)],16)):m("",!0)}const D=b(F,[["render",P]]);export{D as default};
