import{ak as i,al as r,_ as o,g as d,an as u,O as l,C as g,ap as c,aq as p,o as f,c as m,K as b,d as k,t as x,n as y}from"./Bp7PwLku.js";const v={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},a=i(r.ui.strategy,r.ui.kbd,v),_=d({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>a.default.size,validator(e){return Object.keys(a.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=u("kbd",l(e,"ui"),a),n=g(()=>c(p(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:s,kbdClass:n}}});function z(e,t,s,n,h,w){return f(),m("kbd",y({class:e.kbdClass},e.attrs),[b(e.$slots,"default",{},()=>[k(x(e.value),1)])],16)}const S=o(_,[["render",z]]);export{S as default};
