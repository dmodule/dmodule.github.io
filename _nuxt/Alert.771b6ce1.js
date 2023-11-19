import j from"./Icon.78279365.js";import S from"./Avatar.d428d4c2.js";import A from"./Button.b1b9a520.js";import{_ as w,bI as z,bJ as g,f as I,b5 as M,x as N,bK as V,o,c as n,a as d,z as r,aq as p,A as i,ao as l,aP as $,d as B,t as C,F as h,aO as O,bz as y}from"./entry.e729eafb.js";import{t as q}from"./tw-merge.198ab33a.js";import{c as F,u as J}from"./ui.config.642def0d.js";import"./Link.c9ece3d2.js";import"./nuxt-link.ece1b4ed.js";const s=z(g.ui.strategy,g.ui.alert,F),P=I({components:{UIcon:j,UAvatar:S,UButton:A},inheritAttrs:!1,props:{title:{type:String,required:!0},description:{type:String,default:null},icon:{type:String,default:()=>s.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>s.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>s.default.color,validator(e){return[...g.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["close"],setup(e){const{ui:t,attrs:k}=J("alert",M(e,"ui"),s),b=N(()=>{var f,c;const u=((c=(f=t.value.color)==null?void 0:f[e.color])==null?void 0:c[e.variant])||t.value.variant[e.variant];return q(V(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,u==null?void 0:u.replaceAll("{color}",e.color)),e.class)});return{ui:t,attrs:k,alertClass:b}}}),D={class:"w-0 flex-1"},E={key:1,class:"mt-3 flex items-center gap-2"},K={class:"flex-shrink-0 flex items-center gap-3"},L={key:0,class:"flex items-center gap-2"};function R(e,t,k,b,u,f){const c=j,U=S,m=A;return o(),n("div",l({class:e.alertClass},e.attrs),[d("div",{class:p(["flex gap-3",{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}])},[e.icon?(o(),r(c,{key:0,name:e.icon,class:p(e.ui.icon.base)},null,8,["name","class"])):i("",!0),e.avatar?(o(),r(U,l({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):i("",!0),d("div",D,[d("p",{class:p(e.ui.title)},[$(e.$slots,"title",{title:e.title},()=>[B(C(e.title),1)])],2),e.description||e.$slots.description?(o(),n("p",{key:0,class:p(e.ui.description)},[$(e.$slots,"description",{description:e.description},()=>[B(C(e.description),1)])],2)):i("",!0),(e.description||e.$slots.description)&&e.actions.length?(o(),n("div",E,[(o(!0),n(h,null,O(e.actions,(a,v)=>(o(),r(m,l({key:v},{...e.ui.default.actionButton,...a},{onClick:y(a.click,["stop"])}),null,16,["onClick"]))),128))])):i("",!0)]),d("div",K,[!e.description&&!e.$slots.description&&e.actions.length?(o(),n("div",L,[(o(!0),n(h,null,O(e.actions,(a,v)=>(o(),r(m,l({key:v},{...e.ui.default.actionButton,...a},{onClick:y(a.click,["stop"])}),null,16,["onClick"]))),128))])):i("",!0),e.closeButton?(o(),r(m,l({key:1,"aria-label":"Close"},{...e.ui.default.closeButton,...e.closeButton},{onClick:t[0]||(t[0]=y(a=>e.$emit("close"),["stop"]))}),null,16)):i("",!0)])],2)],16)}const _=w(P,[["render",R]]);export{_ as default};
