import{cs as A,u as L,r as S,bb as U,bs as e,bq as t,br as s,by as a,bu as b,bB as p,bC as _,bD as x,bP as f,bz as c,bI as h,bW as z,bx as V,ct as j,bF as D,bY as F,bJ as I,ca as R,cr as q}from"./B5CNXMPg.js";import{_ as E}from"./DZ0CNGnS.js";import"./D0QZyhSl.js";import"./DufZqOZ-.js";import"./p-mXrVAG.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./DxqHYnwt.js";const J={class:"flex-none flex items-center justify-between w-full h-12 px-3 rounded hover:bg-neutral-focus cursor-pointer"},M={class:"sidebar-text text-2xl"},O={class:"sidebar-text"},P={class:"flex-1 w-full h-full px-1"},W={key:0,class:"w-full sidebar-text text-left px-4 py-3 mt-2 border-t border-base-neutral"},Y={class:"ml-4 sidebar-text text-sm font-medium"},Z={key:0,class:"relative px-1"},ae={__name:"Side",props:{items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1},logout:{type:Boolean,default:!1}},setup(r){const g=A(j).greater("sm"),{$auth:y}=L(),n=S(!1),k=()=>{n.value=!n.value},v=()=>{const{clearAuth:l}=y;l()};return U(()=>{n.value=g.value}),(l,u)=>{const B=D,w=E,d=F,m=I,C=R,N=q;return e(),t("div",{class:z(["sidebar flex flex-col justify-between h-full bg-base-100 bg-opacity-80",{"sidebar-r border-l border-base-neutral":r.sideRight,"sidebar-full":V(n)}])},[s("span",J,[a(B,{icon:"i-ri-menu-line",color:"gray",variant:"ghost",onClick:k}),s("span",M,[b(l.$slots,"logo")]),s("span",O,[a(w)])]),s("div",P,[b(l.$slots,"action"),(e(!0),t(p,null,_(r.items,(i,T)=>(e(),t("div",{key:T},[i.label?(e(),t("b",W,x(i.label),1)):f("",!0),(e(!0),t(p,null,_(i.children,(o,$)=>(e(),t("div",{class:"relative",key:$},[a(N,{to:o.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:c(()=>[o.icon?(e(),h(m,{key:0,popper:{placement:"right"},text:o.title},{default:c(()=>[a(d,{name:o.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),h(C,{key:1,alt:o.label,size:"xs"},null,8,["alt"])),s("span",Y,x(o.label),1)]),_:2},1032,["to"])]))),128))]))),128))]),r.logout?(e(),t("div",Z,[s("div",{class:"sidebar-item",onClick:v},[a(m,{popper:{placement:"right"},text:"Logout"},{default:c(()=>[a(d,{name:"i-ri-shut-down-line",class:"text-2xl"})]),_:1}),u[0]||(u[0]=s("span",{class:"ml-4 sidebar-text text-sm font-medium"},"Logout",-1))])])):f("",!0)],2)}}};export{ae as default};