import D from"./iO3TyptH.js";import{a3 as N,az as $,a4 as v,_ as j,a0 as B,a6 as E,j as g,y as L,at as O,r as S,o as n,c as r,D as b,d as i,U as u,b as U,w as M,a as p,ag as d,t as k,H as V,I as h,M as z,Q as w,aa as A}from"./CMgfjk2B.js";import{u as H}from"./BqgA8WkM.js";const f=N(v.ui.strategy,v.ui.tooltip,$),I=B({components:{UKbd:D},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:m}=E("tooltip",g(e,"ui"),f,g(e,"class")),l=L(()=>O({},e.popper,a.value.popper)),[y,c]=H(l.value),s=S(!1);let o=null,t=null;function T(){t&&(clearTimeout(t),t=null),!s.value&&(o=o||setTimeout(()=>{s.value=!0,o=null},e.openDelay))}function C(){o&&(clearTimeout(o),o=null),s.value&&(t=t||setTimeout(()=>{s.value=!1,t=null},e.closeDelay))}return{ui:a,attrs:m,popper:l,trigger:y,container:c,open:s,onMouseEnter:T,onMouseLeave:C}}});function K(e,a,m,l,y,c){const s=D;return n(),r("div",w({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:a[0]||(a[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:a[1]||(a[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[b(e.$slots,"default",{open:e.open},()=>[a[2]||(a[2]=i(" Hover "))]),e.open&&!e.prevent?(n(),r("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[U(A,w({appear:""},e.ui.transition),{default:M(()=>{var o;return[p("div",null,[e.popper.arrow?(n(),r("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.ui.arrow))},null,2)):d("",!0),p("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[b(e.$slots,"text",{},()=>[i(k(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(n(),r("span",{key:0,class:u(e.ui.shortcuts)},[p("span",{class:u(e.ui.middot)},"·",2),(n(!0),r(V,null,h(e.shortcuts,t=>(n(),z(s,{key:t,size:"xs"},{default:M(()=>[i(k(t),1)]),_:2},1024))),128))],2)):d("",!0)],2)])]}),_:3},16)],2)):d("",!0)],16)}const R=j(I,[["render",K]]);export{R as default};