import{r as h,b3 as e,b1 as a,b2 as c,b9 as o,bc as r,bd as i,be as _,bv as B,ba as u,bl as b,bu as V,b8 as C,bg as N,bx as U,by as z,bH as w,bI as A}from"./Bsd2YIFp.js";const I={class:"flex items-center justify-end pt-1"},L={key:0,class:"block text-left px-4 py-3 mt-2 border-t border-base-neutral"},T={class:"ml-4 text-sm font-medium"},H={__name:"Mobile",props:{items:{type:Array,default(){return[]}}},setup(p,{expose:m}){const n=h(!1),l=()=>{n.value=!n.value};return m({sidebarToggle:l,getValue:()=>n.value}),(D,E)=>{const d=N,x=U,f=z,y=w,g=A;return e(),a("div",{class:V(["transition-all fixed z-50 h-full w-full top-0 bg-base-100 bg-opacity-80",[C(n)?"opacity-1 left-0":"opacity-0 left-full"]])},[c("span",I,[o(d,{icon:"i-ri-close-line",color:"gray",variant:"ghost",onClick:l})]),(e(!0),a(r,null,i(p.items,(s,k)=>(e(),a("div",{key:k},[s.label?(e(),a("b",L,_(s.label),1)):B("",!0),(e(!0),a(r,null,i(s.children,(t,v)=>(e(),a("div",{class:"relative",key:v},[o(g,{to:t.to||"#",class:"sidebar-item","active-class":"sidebar-active"},{default:u(()=>[t.icon?(e(),b(f,{key:0,popper:{placement:"right"},text:t.title},{default:u(()=>[o(x,{name:t.icon,class:"text-2xl"},null,8,["name"])]),_:2},1032,["text"])):(e(),b(y,{key:1,alt:t.label,size:"xs"},null,8,["alt"])),c("span",T,_(t.label),1)]),_:2},1032,["to"])]))),128))]))),128))],2)}}};export{H as default};
