import{u as w,r as N,bs as e,bq as s,br as t,bu as c,bB as _,bC as d,bD as p,bP as f,by as n,bz as i,bI as m,bY as $,bJ as A,ca as C,cr as U,bF as j}from"./B5CNXMPg.js";const z={class:"flex flex-col justify-between h-full"},L={class:"flex-1 bg-base-300 p-1 my-1 rounded-full"},V={class:"h-full flex flex-col justify-between"},D={class:"flex-1"},E={class:"py-2 text-center"},F={class:"flex-1 w-full h-full"},I={key:0,class:"w-full text-left px-4 py-3 mt-2 border-t border-base-neutral"},S={class:"ml-4 text-sm font-medium"},q={class:"bg-white/5 rounded-full p-2 text-center"},J={key:0,class:"relative flex justify-center"},R={__name:"Edge",props:{items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1},logout:{type:Boolean,default:!1}},setup(r){const{$auth:b}=w();N(!1);const x=()=>{const{clearAuth:l}=b;l()};return(l,O)=>{const h=$,u=A,y=C,v=U,g=j;return e(),s("div",z,[t("div",L,[t("div",V,[t("div",D,[t("div",E,[c(l.$slots,"logo")]),t("div",F,[c(l.$slots,"action"),(e(!0),s(_,null,d(r.items,(a,k)=>(e(),s("div",{key:k},[a.label?(e(),s("b",I,p(a.label),1)):f("",!0),(e(!0),s(_,null,d(a.children,(o,B)=>(e(),s("div",{class:"relative",key:B},[n(v,{to:o.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:i(()=>[o.icon?(e(),m(u,{key:0,popper:{placement:"right"},text:o.title},{default:i(()=>[n(h,{name:o.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),m(y,{key:1,alt:o.label,size:"xs"},null,8,["alt"])),t("span",S,p(o.label),1)]),_:2},1032,["to"])]))),128))]))),128))])]),t("div",q,[c(l.$slots,"tool")])])]),r.logout?(e(),s("div",J,[t("div",{onClick:x},[n(u,{popper:{placement:"right"},text:"Logout"},{default:i(()=>[n(g,{icon:"i-ri-shut-down-line",color:"black",size:"xl",ui:{rounded:"rounded-full"}})]),_:1})])])):f("",!0)])}}};export{R as default};