import{co as T,u as U,r as L,bb as S,bs as e,bq as t,br as s,bx as a,bt as m,bA as p,bB as _,bC as x,bO as f,by as c,bH as h,bU as V,bw as j,cp as z,bE as E,bW as O,bK as R,c7 as q,cn as D}from"./BD89yi6W.js";import{_ as F}from"./DTastN19.js";import"./B39OMRwo.js";import"./DxqHYnwt.js";import"./DgaNmZUo.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const H={class:"flex-none flex items-center justify-between w-full h-12 px-3 rounded hover:bg-neutral-focus cursor-pointer"},I={class:"sidebar-text text-2xl"},K={class:"sidebar-text"},M={class:"flex-1 w-full h-full px-1"},W={key:0,class:"w-full sidebar-text text-left px-4 py-3 mt-2 border-t border-base-neutral"},Z={class:"ml-4 sidebar-text text-sm font-medium"},G={key:0,class:"relative px-1"},oe={__name:"Side",props:{items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1},logout:{type:Boolean,default:!1}},setup(r){const g=T(z).greater("sm"),{$auth:y}=U(),n=L(!1),k=()=>{n.value=!n.value},v=()=>{const{clearAuth:l}=y;l()};return S(()=>{n.value=g.value}),(l,u)=>{const B=E,w=F,d=O,b=R,C=q,$=D;return e(),t("div",{class:V(["sidebar flex flex-col justify-between h-full bg-base-100 bg-opacity-80",{"sidebar-r border-l border-base-neutral":r.sideRight,"sidebar-full":j(n)}])},[s("span",H,[a(B,{icon:"i-ri-menu-line",color:"gray",variant:"ghost",onClick:k}),s("span",I,[m(l.$slots,"logo")]),s("span",K,[a(w)])]),s("div",M,[m(l.$slots,"action"),(e(!0),t(p,null,_(r.items,(i,A)=>(e(),t("div",{key:A},[i.label?(e(),t("b",W,x(i.label),1)):f("",!0),(e(!0),t(p,null,_(i.children,(o,N)=>(e(),t("div",{class:"relative",key:N},[a($,{to:o.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:c(()=>[o.icon?(e(),h(b,{key:0,popper:{placement:"right"},text:o.title},{default:c(()=>[a(d,{name:o.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),h(C,{key:1,alt:o.label,size:"xs"},null,8,["alt"])),s("span",Z,x(o.label),1)]),_:2},1032,["to"])]))),128))]))),128))]),r.logout?(e(),t("div",G,[s("div",{class:"sidebar-item",onClick:v},[a(b,{popper:{placement:"right"},text:"Logout"},{default:c(()=>[a(d,{name:"i-ri-shut-down-line",class:"text-2xl"})]),_:1}),u[0]||(u[0]=s("span",{class:"ml-4 sidebar-text text-sm font-medium"},"Logout",-1))])])):f("",!0)],2)}}};export{oe as default};