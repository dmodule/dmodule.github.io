import{ak as d,al as o,_ as u,g as y,an as b,O as p,aF as f,C as k,ap as x,aq as m,o as v,c as _,K as h,d as j,t as w,n as O}from"./Bp7PwLku.js";const z={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},r=d(o.ui.strategy,o.ui.badge,z),S=y({inheritAttrs:!1,props:{size:{type:String,default:()=>r.default.size,validator(t){return Object.keys(r.size).includes(t)}},color:{type:String,default:()=>r.default.color,validator(t){return[...o.ui.colors,...Object.keys(r.color)].includes(t)}},variant:{type:String,default:()=>r.default.variant,validator(t){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(e=>Object.keys(e))].includes(t)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:n}=b("badge",p(t,"ui"),r),{size:i,rounded:l}=f({ui:e,props:t}),s=k(()=>{var c,g;const a=((g=(c=e.value.color)==null?void 0:c[t.color])==null?void 0:g[t.variant])||e.value.variant[t.variant];return x(m(e.value.base,e.value.font,l.value,e.value.size[i.value],a==null?void 0:a.replaceAll("{color}",t.color)),t.class)});return{attrs:n,badgeClass:s}}});function C(t,e,n,i,l,s){return v(),_("span",O({class:t.badgeClass},t.attrs),[h(t.$slots,"default",{},()=>[j(w(t.label),1)])],16)}const A=u(S,[["render",C]]);export{A as default};
