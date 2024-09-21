import{_ as z,a3 as I,a4 as y,a0 as V,V as O,ad as S,J as U,a6 as N,j as D,y as J,ae as w,af as E,o,c as n,a as h,D as u,M as d,U as s,ag as a,Q as c,d as B,t as C,H as A,I as j,ah as v}from"./CMgfjk2B.js";const F={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},r=I(y.ui.strategy,y.ui.alert,F),H=V({components:{UIcon:O,UAvatar:S,UButton:U},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>r.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>r.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>r.default.color,validator(e){return[...y.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:m}=N("alert",D(e,"ui"),r),$=J(()=>{var p,g;const i=((g=(p=t.value.color)==null?void 0:p[e.color])==null?void 0:g[e.variant])||t.value.variant[e.variant];return w(E(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,i==null?void 0:i.replaceAll("{color}",e.color)),e.class)});function b(i){i.click&&i.click()}return{ui:t,attrs:m,alertClass:$,onAction:b,twMerge:w}}});function L(e,t,m,$,b,i){const p=O,g=S,f=U;return o(),n("div",c({class:e.alertClass},e.attrs),[h("div",{class:s(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[u(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(o(),d(p,{key:0,name:e.icon,class:s(e.ui.icon.base)},null,8,["name","class"])):a("",!0)]),u(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(o(),d(g,c({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):a("",!0)]),h("div",{class:s(e.ui.inner)},[e.title||e.$slots.title?(o(),n("p",{key:0,class:s(e.ui.title)},[u(e.$slots,"title",{title:e.title},()=>[B(C(e.title),1)])],2)):a("",!0),e.description||e.$slots.description?(o(),n("div",{key:1,class:s(e.twMerge(e.ui.description,!e.title&&!e.$slots.title&&"mt-0 leading-5"))},[u(e.$slots,"description",{description:e.description},()=>[B(C(e.description),1)])],2)):a("",!0),(e.description||e.$slots.description)&&(e.actions.length||e.$slots.actions)?(o(),n("div",{key:2,class:s(e.ui.actions)},[u(e.$slots,"actions",{},()=>[(o(!0),n(A,null,j(e.actions,(l,k)=>(o(),d(f,c({key:k,ref_for:!0},{...e.ui.default.actionButton||{},...l},{onClick:v(M=>e.onAction(l),["stop"])}),null,16,["onClick"]))),128))])],2)):a("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),n("div",{key:0,class:s(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&(e.actions.length||e.$slots.actions)?u(e.$slots,"actions",{key:0},()=>[(o(!0),n(A,null,j(e.actions,(l,k)=>(o(),d(f,c({key:k,ref_for:!0},{...e.ui.default.actionButton||{},...l},{onClick:v(M=>e.onAction(l),["stop"])}),null,16,["onClick"]))),128))]):a("",!0),e.closeButton?(o(),d(f,c({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=v(l=>e.$emit("close"),["stop"]))}),null,16)):a("",!0)],2)):a("",!0)],2)],16)}const Q=z(H,[["render",L]]);export{Q as default};