import{ac as g,an as x,ad as r,g as y,af as z,M as o,C as n,ao as _,ak as C,al as c,ap as h,aq as v,E as w}from"./BBa6so6u.js";const b={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},f=g(r.ui.strategy,r.ui.avatar,x),j=g(r.ui.strategy,r.ui.avatarGroup,b),k=y({inheritAttrs:!1,props:{size:{type:String,default:null,validator(a){return Object.keys(f.size).includes(a)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a,{slots:m}){const{ui:t,attrs:d}=z("avatarGroup",o(a,"ui"),j,o(a,"class")),i=n(()=>_(m)),s=n(()=>typeof a.max=="string"?parseInt(a.max,10):a.max),p=n(()=>i.value.map((l,u)=>{const e={};return!a.max||s.value&&u<s.value?(a.size&&(e.size=a.size),e.class=l.props.class||"",e.class=C(c(e.class,t.value.ring,t.value.margin),e.class),h(l,e)):s.value!==void 0&&u===s.value?v(w,{size:a.size||f.default.size,text:`+${i.value.length-s.value}`,class:c(t.value.ring,t.value.margin)}):null}).filter(Boolean).reverse());return()=>v("div",{class:t.value.wrapper,...d.value},p.value)}});export{k as default};