import N from"./Icon.78279365.js";import O from"./Avatar.d428d4c2.js";import P from"./Button.b1b9a520.js";import{aL as I,x as C,_ as D,bI as E,bJ as S,f as F,b5 as L,bK as A,az as V,br as J,aE as R,o as s,z as g,w as K,a as d,ao as y,aq as p,A as m,aP as h,d as U,t as z,c as k,F as T,aO as j,bz as M,as as G,j as H}from"./entry.e729eafb.js";import{t as Q}from"./tw-merge.198ab33a.js";import{L as W,u as X}from"./ui.config.642def0d.js";import{d as Y}from"./index.09adc765.js";import"./Link.c9ece3d2.js";import"./nuxt-link.ece1b4ed.js";import"./index.ef41713e.js";function Z(e,r,n){let l=null;const{pause:t,resume:b,timestamp:f}=Y({...n||{},controls:!0}),a=I(null),u=C(()=>a.value?r-(f.value-a.value):0);function o(...q){l=setTimeout(()=>{l=null,a.value=null,e(...q)},u.value)}function c(){l&&(clearTimeout(l),l=null)}function v(){a.value=Date.now(),o()}function $(){c(),t()}function B(){c(),t()}function i(){o(),b(),a.value=(a.value||0)+(Date.now()-f.value)}return v(),{start:v,stop:$,pause:B,resume:i,remaining:u}}const w=E(S.ui.strategy,S.ui.notification,W),_=F({components:{UIcon:N,UAvatar:O,UButton:P},inheritAttrs:!1,props:{id:{type:[String,Number],required:!0},title:{type:String,required:!0},description:{type:String,default:null},icon:{type:String,default:()=>w.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>w.default.closeButton},timeout:{type:Number,default:5e3},actions:{type:Array,default:()=>[]},callback:{type:Function,default:null},color:{type:String,default:()=>w.default.color,validator(e){return["gray",...S.ui.colors].includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["close"],setup(e,{emit:r}){const{ui:n,attrs:l}=X("notification",L(e,"ui"),w);let t=null;const b=I(e.timeout),f=C(()=>Q(A(n.value.wrapper,n.value.background,n.value.rounded,n.value.shadow),e.class)),a=C(()=>{var i;return A(n.value.progress.base,(i=n.value.progress.background)==null?void 0:i.replaceAll("{color}",e.color))}),u=C(()=>({width:`${b.value/e.timeout*100||0}%`})),o=C(()=>{var i;return A(n.value.icon.base,(i=n.value.icon.color)==null?void 0:i.replaceAll("{color}",e.color))});function c(){t&&t.pause()}function v(){t&&t.resume()}function $(){t&&t.stop(),e.callback&&e.callback(),r("close")}function B(i){t&&t.stop(),i.click&&i.click(),r("close")}return V(()=>{e.timeout&&(t=Z(()=>{$()},e.timeout),J(()=>{b.value=t.remaining.value}))}),R(()=>{t&&t.stop()}),{ui:n,attrs:l,wrapperClass:f,progressClass:a,progressStyle:u,iconClass:o,onMouseover:c,onMouseleave:v,onClose:$,onAction:B}}}),x={class:"w-0 flex-1"},ee={key:1,class:"mt-3 flex items-center gap-2"},te={class:"flex-shrink-0 flex items-center gap-3"},oe={key:0,class:"flex items-center gap-2"};function ne(e,r,n,l,t,b){const f=N,a=O,u=P;return s(),g(H,y({appear:""},e.ui.transition),{default:K(()=>[d("div",y({class:e.wrapperClass,role:"status"},e.attrs,{onMouseover:r[0]||(r[0]=(...o)=>e.onMouseover&&e.onMouseover(...o)),onMouseleave:r[1]||(r[1]=(...o)=>e.onMouseleave&&e.onMouseleave(...o))}),[d("div",{class:p([e.ui.container,e.ui.rounded,e.ui.ring])},[d("div",{class:p(e.ui.padding)},[d("div",{class:p(["flex gap-3",{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}])},[e.icon?(s(),g(f,{key:0,name:e.icon,class:p(e.iconClass)},null,8,["name","class"])):m("",!0),e.avatar?(s(),g(a,y({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):m("",!0),d("div",x,[d("p",{class:p(e.ui.title)},[h(e.$slots,"title",{title:e.title},()=>[U(z(e.title),1)])],2),e.description||e.$slots.description?(s(),k("p",{key:0,class:p(e.ui.description)},[h(e.$slots,"description",{description:e.description},()=>[U(z(e.description),1)])],2)):m("",!0),(e.description||e.$slots.description)&&e.actions.length?(s(),k("div",ee,[(s(!0),k(T,null,j(e.actions,(o,c)=>(s(),g(u,y({key:c},{...e.ui.default.actionButton,...o},{onClick:M(v=>e.onAction(o),["stop"])}),null,16,["onClick"]))),128))])):m("",!0)]),d("div",te,[!e.description&&!e.$slots.description&&e.actions.length?(s(),k("div",oe,[(s(!0),k(T,null,j(e.actions,(o,c)=>(s(),g(u,y({key:c},{...e.ui.default.actionButton,...o},{onClick:M(v=>e.onAction(o),["stop"])}),null,16,["onClick"]))),128))])):m("",!0),e.closeButton?(s(),g(u,y({key:1,"aria-label":"Close"},{...e.ui.default.closeButton,...e.closeButton},{onClick:M(e.onClose,["stop"])}),null,16,["onClick"])):m("",!0)])],2)],2),e.timeout?(s(),k("div",{key:0,class:p(e.progressClass),style:G(e.progressStyle)},null,6)):m("",!0)],2)],16)]),_:3},16)}const fe=D(_,[["render",ne]]);export{fe as default};