import{a1 as l,a2 as u,_ as g,Z as p,a4 as c,j as b,y as f,ac as y,ad as m,o as s,I as k,w as v,c as r,R as d,z as o,S as n,Q as h,K as $}from"./B5KGO6qV.js";import"./Dgc4RXB8.js";const C={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},w=l(u.ui.strategy,u.ui.card,C),S=p({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:i}=c("card",b(a,"ui"),w),t=f(()=>y(m(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:i,cardClass:t}}});function j(a,e,i,t,B,z){return s(),k($(a.$attrs.onSubmit?"form":a.as),h({class:a.cardClass},a.attrs),{default:v(()=>[a.$slots.header?(s(),r("div",{key:0,class:d([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[o(a.$slots,"header")],2)):n("",!0),a.$slots.default?(s(),r("div",{key:1,class:d([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[o(a.$slots,"default")],2)):n("",!0),a.$slots.footer?(s(),r("div",{key:2,class:d([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[o(a.$slots,"footer")],2)):n("",!0)]),_:3},16,["class"])}const O=g(S,[["render",j]]);export{O as default};
