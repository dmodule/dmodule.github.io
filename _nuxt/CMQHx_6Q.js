import{r as v,bs as e,bq as a,br as c,by as o,bB as r,bC as i,bD as _,bN as B,bz as u,bJ as p,bU as C,bx as N,bF as U,bW as V,bO as z,cf as w,cg as A}from"./C-QD9eoP.js";const D={class:"flex items-center justify-end pt-1"},F={key:0,class:"block text-left px-4 py-3 mt-2 border-t border-base-neutral"},L={class:"ml-4 text-sm font-medium"},I={__name:"Mobile",props:{items:{type:Array,default(){return[]}}},setup(b,{expose:m}){const s=v(!1),l=()=>{s.value=!s.value};return m({sidebarToggle:l,getValue:()=>s.value}),(j,q)=>{const d=U,x=V,f=z,y=w,g=A;return e(),a("div",{class:C(["transition-all fixed z-50 h-full w-full top-0 bg-base-100 bg-opacity-80",[N(s)?"opacity-1 left-0":"opacity-0 left-full"]])},[c("span",D,[o(d,{icon:"i-ri-close-line",color:"gray",variant:"ghost",onClick:l})]),(e(!0),a(r,null,i(b.items,(n,k)=>(e(),a("div",{key:k},[n.label?(e(),a("b",F,_(n.label),1)):B("",!0),(e(!0),a(r,null,i(n.children,(t,h)=>(e(),a("div",{class:"relative",key:h},[o(g,{to:t.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:u(()=>[t.icon?(e(),p(f,{key:0,popper:{placement:"right"},text:t.title},{default:u(()=>[o(x,{name:t.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),p(y,{key:1,alt:t.label,size:"xs"},null,8,["alt"])),c("span",L,_(t.label),1)]),_:2},1032,["to"])]))),128))]))),128))],2)}}};export{I as default};
