import O from"./Kbd.30c0fcd3.js";import{_ as h,bI as C,bJ as c,f as N,b5 as b,x as $,bM as j,aL as B,o as s,c as n,aP as y,d as i,aq as u,b as D,w as g,a as f,A as p,t as k,F as L,aO as z,z as A,ao as M,j as S}from"./entry.e729eafb.js";import{O as V,u as P}from"./ui.config.642def0d.js";import{u as U}from"./usePopper.4c94c7a9.js";import"./tw-merge.198ab33a.js";import"./index.09adc765.js";import"./index.ef41713e.js";const F=C(c.ui.strategy,c.ui.tooltip,V),I=N({components:{UKbd:O},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:d}=P("tooltip",b(e,"ui"),F,b(e,"class")),l=$(()=>j({},e.popper,a.value.popper)),[m,v]=U(l.value),r=B(!1);let o=null,t=null;function w(){t&&(clearTimeout(t),t=null),!r.value&&(o=o||setTimeout(()=>{r.value=!0,o=null},e.openDelay))}function T(){o&&(clearTimeout(o),o=null),r.value&&(t=t||setTimeout(()=>{r.value=!1,t=null},e.closeDelay))}return{ui:a,attrs:d,popper:l,trigger:m,container:v,open:r,onMouseOver:w,onMouseLeave:T}}}),K=f("span",{class:"mx-1 text-gray-700 dark:text-gray-200"},"·",-1);function q(e,a,d,l,m,v){const r=O;return s(),n("div",M({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseover:a[0]||(a[0]=(...o)=>e.onMouseOver&&e.onMouseOver(...o)),onMouseleave:a[1]||(a[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[y(e.$slots,"default",{open:e.open},()=>[i(" Hover ")]),e.open&&!e.prevent?(s(),n("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[D(S,M({appear:""},e.ui.transition),{default:g(()=>{var o;return[f("div",null,[e.popper.arrow?(s(),n("div",{key:0,"data-popper-arrow":"",class:u(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):p("",!0),f("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[y(e.$slots,"text",{},()=>[i(k(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(s(),n("span",{key:0,class:u(e.ui.shortcuts)},[K,(s(!0),n(L,null,z(e.shortcuts,t=>(s(),A(r,{key:t,size:"xs"},{default:g(()=>[i(k(t),1)]),_:2},1024))),128))],2)):p("",!0)],2)])]}),_:3},16)],2)):p("",!0)],16)}const X=h(I,[["render",q]]);export{X as default};
