import{bJ as $,r as A,aJ as L,b1 as e,a$ as t,b0 as s,b7 as o,b3 as m,ba as _,bb as p,bc as x,bu as f,b8 as c,bj as h,bt as N,b6 as U,bK as j,be as V,bw as z,bx as I,bH as J,bI as R}from"./D0HIuDqn.js";import{_ as D}from"./CzZDPzCa.js";import{u as E}from"./DapDS86f.js";import"./CwKFrmWP.js";import"./BLVB0qGI.js";const F={class:"flex-none flex items-center justify-between w-full h-12 px-3 rounded hover:bg-neutral-focus cursor-pointer"},H={class:"sidebar-text text-2xl"},K={class:"sidebar-text"},M={class:"flex-1 w-full h-full px-1"},O={key:0,class:"w-full sidebar-text text-left px-4 py-3 mt-2 border-t border-base-neutral"},Z={class:"ml-4 sidebar-text text-sm font-medium"},q={key:0,class:"relative px-1"},ee={__name:"Side",props:{items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1},logout:{type:Boolean,default:!1}},setup(r){const g=$(j).greater("sm"),n=A(!1),k=()=>{n.value=!n.value},y=()=>{const{clearAuth:l}=E();l()};return L(()=>{n.value=g.value}),(l,u)=>{const v=V,w=D,b=z,d=I,B=J,C=R;return e(),t("div",{class:N(["sidebar flex flex-col justify-between h-full bg-base-100 bg-opacity-80",{"sidebar-r border-l border-base-neutral":r.sideRight,"sidebar-full":U(n)}])},[s("span",F,[o(v,{icon:"i-ri-menu-line",color:"gray",variant:"ghost",onClick:k}),s("span",H,[m(l.$slots,"logo")]),s("span",K,[o(w)])]),s("div",M,[m(l.$slots,"action"),(e(!0),t(_,null,p(r.items,(i,S)=>(e(),t("div",{key:S},[i.label?(e(),t("b",O,x(i.label),1)):f("",!0),(e(!0),t(_,null,p(i.children,(a,T)=>(e(),t("div",{class:"relative",key:T},[o(C,{to:a.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:c(()=>[a.icon?(e(),h(d,{key:0,popper:{placement:"right"},text:a.title},{default:c(()=>[o(b,{name:a.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),h(B,{key:1,alt:a.label,size:"xs"},null,8,["alt"])),s("span",Z,x(a.label),1)]),_:2},1032,["to"])]))),128))]))),128))]),r.logout?(e(),t("div",q,[s("div",{class:"sidebar-item",onClick:y},[o(d,{popper:{placement:"right"},text:"Logout"},{default:c(()=>[o(b,{name:"i-ri-shut-down-line",class:"text-2xl"})]),_:1}),u[0]||(u[0]=s("span",{class:"ml-4 sidebar-text text-sm font-medium"},"Logout",-1))])])):f("",!0)],2)}}};export{ee as default};
