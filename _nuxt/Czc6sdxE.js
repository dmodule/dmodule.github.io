import{u as N,r as $,bs as e,bq as s,br as t,bu as c,bB as u,bC as d,bD as m,bN as p,by as n,bz as i,bJ as f,bW as A,bO as C,cf as U,cg as j,bF as z}from"./C-QD9eoP.js";import{_ as L}from"./DUfhU72_.js";const V={class:"flex flex-col justify-between h-full"},D={class:"flex-1 bg-base-300 p-1 ml-2 my-2 rounded-full"},E={class:"h-full flex flex-col justify-between"},F={class:"flex-1"},O={class:"py-2 text-center"},S={class:"flex-1 w-full h-full"},T={key:0,class:"w-full text-left px-4 py-3 mt-2 border-t border-base-neutral"},q={class:"ml-4 text-sm font-medium"},I={class:"bg-white/5 rounded-full p-2 text-center"},J={class:"mt-2"},R={key:0,class:"relative pl-2 flex justify-center"},H={__name:"Edge",props:{items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1},logout:{type:Boolean,default:!1}},setup(_){const{$auth:b}=N();$(!1);const x=()=>{const{clearAuth:l}=b;l()};return(l,W)=>{const h=A,r=C,y=U,v=j,g=L,k=z;return e(),s("div",V,[t("div",D,[t("div",E,[t("div",F,[t("div",O,[c(l.$slots,"logo")]),t("div",S,[c(l.$slots,"action"),(e(!0),s(u,null,d(_.items,(a,B)=>(e(),s("div",{key:B},[a.label?(e(),s("b",T,m(a.label),1)):p("",!0),(e(!0),s(u,null,d(a.children,(o,w)=>(e(),s("div",{class:"relative",key:w},[n(v,{to:o.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:i(()=>[o.icon?(e(),f(r,{key:0,popper:{placement:"right"},text:o.title},{default:i(()=>[n(h,{name:o.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),f(y,{key:1,alt:o.label,size:"xs"},null,8,["alt"])),t("span",q,m(o.label),1)]),_:2},1032,["to"])]))),128))]))),128))])]),t("div",I,[c(l.$slots,"tool"),t("div",J,[n(g)])])])]),_.logout?(e(),s("div",R,[t("div",{onClick:x},[n(r,{popper:{placement:"right"},text:"Logout"},{default:i(()=>[n(k,{icon:"i-ri-shut-down-line",color:"black",size:"xl",ui:{rounded:"rounded-full"}})]),_:1})])])):p("",!0)])}}};export{H as default};
