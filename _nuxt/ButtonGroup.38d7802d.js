import{bH as s,bI as r,f as p,b5 as g,x as n,bK as v,s as h,bJ as x,a6 as z}from"./entry.315daf49.js";import{t as y}from"./tw-merge.ef7dc0f7.js";import{u as C,b as w,g as G}from"./ui.config.ea598d69.js";const S=s(r.ui.strategy,r.ui.button,w),_=s(r.ui.strategy,r.ui.buttonGroup,G),A=p({inheritAttrs:!1,props:{size:{type:String,default:null,validator(o){return Object.keys(S.size).includes(o)}},orientation:{type:String,default:"horizontal",validator(o){return["horizontal","vertical"].includes(o)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(o,{slots:b}){const{ui:e,attrs:f}=C("buttonGroup",g(o,"ui"),_),l=n(()=>v(b)),d=n(()=>({"rounded-none":{horizontal:{left:"rounded-s-none",right:"rounded-e-none"},vertical:{top:"rounded-t-none",bottom:"rounded-b-none"}},"rounded-sm":{horizontal:{left:"rounded-s-sm",right:"rounded-e-sm"},vertical:{top:"rounded-t-sm",bottom:"rounded-b-sm"}},rounded:{horizontal:{left:"rounded-s",right:"rounded-e"},vertical:{top:"rounded-t",bottom:"rounded-b"}},"rounded-md":{horizontal:{left:"rounded-s-md",right:"rounded-e-md"},vertical:{top:"rounded-t-md",bottom:"rounded-b-md"}},"rounded-lg":{horizontal:{left:"rounded-s-lg",right:"rounded-e-lg"},vertical:{top:"rounded-t-lg",bottom:"rounded-b-lg"}},"rounded-xl":{horizontal:{left:"rounded-s-xl",right:"rounded-e-xl"},vertical:{top:"rounded-t-xl",bottom:"rounded-b-xl"}},"rounded-2xl":{horizontal:{left:"rounded-s-2xl",right:"rounded-e-2xl"},vertical:{top:"rounded-t-2xl",bottom:"rounded-b-2xl"}},"rounded-3xl":{horizontal:{left:"rounded-s-3xl",right:"rounded-e-3xl"},vertical:{top:"rounded-t-3xl",bottom:"rounded-b-3xl"}},"rounded-full":{horizontal:{left:"rounded-s-full",right:"rounded-e-full"},vertical:{top:"rounded-t-full",bottom:"rounded-b-full"}}})[e.value.rounded][o.orientation]),c=n(()=>l.value.map((u,i)=>{var a;const t={};return o.size&&(t.size=o.size),t.ui=((a=u.props)==null?void 0:a.ui)||{},t.ui.rounded="rounded-none",t.ui.base="!shadow-none",i===0&&(t.ui.rounded+=` ${d.value.left||d.value.top}`),i===l.value.length-1&&(t.ui.rounded+=` ${d.value.right||d.value.bottom}`),h(u,t)})),m=n(()=>y(x(e.value.wrapper[o.orientation],e.value.rounded,e.value.shadow),o.class));return()=>z("div",{class:m.value,...f.value},c.value)}});export{A as default};