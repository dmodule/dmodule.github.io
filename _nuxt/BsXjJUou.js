import{u as N,r as $,b4 as e,b2 as o,b3 as t,b6 as u,bd as d,be as p,bf as m,bw as f,ba as s,bb as a,bm as b,by as z,bz as A,bJ as C,bH as U,bh as j}from"./DtJsQ1E2.js";import{_ as L}from"./CffGKV64.js";const V={class:"flex flex-col justify-between h-full"},E={class:"flex-1 bg-base-300 p-1 ml-2 my-2 rounded-full"},S={class:"h-full flex flex-col justify-between"},T={class:"flex-1"},D={class:"py-2 text-center"},F={class:"flex-1 w-full h-full"},H={key:0,class:"w-full text-left px-4 py-3 mt-2 border-t border-base-neutral"},I={class:"ml-4 text-sm font-medium"},J={class:"bg-white/5 rounded-full p-2"},O={class:"mt-2"},R={key:0,class:"relative pl-2 flex justify-center"},K={__name:"Edge",props:{items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1},logout:{type:Boolean,default:!1}},setup(r){const{$auth:h}=N();$(!1);const x=()=>{const{clearAuth:n}=h;n()};return(n,Z)=>{const y=z,c=A,g=C,v=U,_=j,k=L;return e(),o("div",V,[t("div",E,[t("div",S,[t("div",T,[t("div",D,[u(n.$slots,"logo")]),t("div",F,[u(n.$slots,"action"),(e(!0),o(d,null,p(r.items,(i,w)=>(e(),o("div",{key:w},[i.label?(e(),o("b",H,m(i.label),1)):f("",!0),(e(!0),o(d,null,p(i.children,(l,B)=>(e(),o("div",{class:"relative",key:B},[s(v,{to:l.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:a(()=>[l.icon?(e(),b(c,{key:0,popper:{placement:"right"},text:l.title},{default:a(()=>[s(y,{name:l.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),b(g,{key:1,alt:l.label,size:"xs"},null,8,["alt"])),t("span",I,m(l.label),1)]),_:2},1032,["to"])]))),128))]))),128))])]),t("div",J,[s(c,{popper:{placement:"right"},text:"Create"},{default:a(()=>[s(_,{icon:"i-ri-add-line",color:"gray",size:"sm",variant:"ghost",ui:{rounded:"rounded-full"}})]),_:1}),t("div",O,[s(k)])])])]),r.logout?(e(),o("div",R,[t("div",{onClick:x},[s(c,{popper:{placement:"right"},text:"Logout"},{default:a(()=>[s(_,{icon:"i-ri-shut-down-line",color:"black",size:"xl",ui:{rounded:"rounded-full"}})]),_:1})])])):f("",!0)])}}};export{K as default};