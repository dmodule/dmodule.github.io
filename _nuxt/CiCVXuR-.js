import T from"./DQ51VXc0.js";import{ak as N,az as $,al as v,_ as h,g as A,an as B,O as g,C as O,aA as V,r as j,o as n,c as r,K as b,d as i,s as u,b as E,w as k,a as p,H as d,t as w,I as L,Q as S,A as z,n as M,V as K}from"./Bp7PwLku.js";import{u as U}from"./Dvz4wLlJ.js";const f=N(v.ui.strategy,v.ui.tooltip,$),H=A({components:{UKbd:T},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:m}=B("tooltip",g(e,"ui"),f,g(e,"class")),l=O(()=>V({},e.popper,a.value.popper)),[c,y]=U(l.value),s=j(!1);let o=null,t=null;function C(){t&&(clearTimeout(t),t=null),!s.value&&(o=o||setTimeout(()=>{s.value=!0,o=null},e.openDelay))}function D(){o&&(clearTimeout(o),o=null),s.value&&(t=t||setTimeout(()=>{s.value=!1,t=null},e.closeDelay))}return{ui:a,attrs:m,popper:l,trigger:c,container:y,open:s,onMouseEnter:C,onMouseLeave:D}}});function I(e,a,m,l,c,y){const s=T;return n(),r("div",M({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:a[0]||(a[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:a[1]||(a[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[b(e.$slots,"default",{open:e.open},()=>[i(" Hover ")]),e.open&&!e.prevent?(n(),r("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[E(K,M({appear:""},e.ui.transition),{default:k(()=>{var o;return[p("div",null,[e.popper.arrow?(n(),r("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.ui.arrow))},null,2)):d("",!0),p("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[b(e.$slots,"text",{},()=>[i(w(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(n(),r("span",{key:0,class:u(e.ui.shortcuts)},[p("span",{class:u(e.ui.middot)},"·",2),(n(!0),r(L,null,S(e.shortcuts,t=>(n(),z(s,{key:t,size:"xs"},{default:k(()=>[i(w(t),1)]),_:2},1024))),128))],2)):d("",!0)],2)])]}),_:3},16)],2)):d("",!0)],16)}const R=h(H,[["render",I]]);export{R as default};
