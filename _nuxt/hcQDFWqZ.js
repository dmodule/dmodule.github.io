import{bs as s,bq as o,bA as y,bB as x,bI as f,by as r,bx as a,bZ as u,bC as b,br as n,bU as k,ct as g,ci as C,bt as h,bM as _,bS as $,bE as B}from"./Nng3t-Yx.js";import{_ as M}from"./B4xiP5WV.js";import N from"./BpR7Ewcd.js";const S={class:"flex items-center gap-3 px-3"},w=["active-class"],T={__name:"Menu",props:{items:{type:Array,default(){return[]}},activeClass:{type:String,default:"text-base-primary"}},setup(e){return(c,m)=>{const i=k,l=g,d=C;return s(),o("ul",S,[(s(!0),o(y,null,x(e.items,(t,v)=>(s(),o("li",{key:v,class:"text-base-100 hover:bg-base-neutral rounded"},[t.children&&t.children.length?(s(),f(d,{key:0,items:[t.children],popper:{placement:"bottom-start",offsetDistance:0},mode:"hover"},{item:r(({item:p})=>[a(l,{class:"truncate",to:t.to},{default:r(()=>[u(b(p.label),1)]),_:2},1032,["to"])]),default:r(()=>[n("span",{class:"inline-flex gap-1 items-center px-3 py-1","active-class":e.activeClass},[u(b(t.label)+" ",1),a(i,{name:"i-heroicons-chevron-down-20-solid"})],8,w)]),_:2},1032,["items"])):(s(),f(l,{key:1,to:t.to,class:"inline-block px-3 py-1","active-class":e.activeClass},{default:r(()=>[u(b(t.label),1)]),_:2},1032,["to","active-class"]))]))),128))])}}},U={class:"backdrop-blur bg-base-glass"},V={class:"container mx-auto flex items-center justify-between min-h-16 p-3 text-sm"},Z={class:"md:flex md:items-center md:gap-12"},A={key:0,class:"hidden md:block"},D={key:0,class:"hidden md:block"},z={class:"flex items-center gap-3"},E={key:0,class:"hidden md:block"},I={class:"flex gap-3"},L={class:"block md:hidden"},G={__name:"Top",props:{items:{type:Array,default(){return[]}},activeClass:{type:String,default:"text-blue-400"},menu:{type:String,default:"center"},sticky:{type:Boolean,default:!1}},setup(e){return(c,m)=>{const i=T,l=M,d=B,t=N;return s(),o("div",{class:$(["z-50 top-0 border-b border-base-neutral",[e.sticky?"sticky":"relative"]])},[n("nav",U,[n("div",V,[n("div",Z,[h(c.$slots,"logo"),e.menu==="start"?(s(),o("div",A,[a(i,{items:e.items,"active-class":e.activeClass},null,8,["items","active-class"])])):_("",!0)]),e.menu==="center"?(s(),o("div",D,[a(i,{items:e.items,"active-class":e.activeClass},null,8,["items","active-class"])])):_("",!0),n("div",z,[e.menu==="end"?(s(),o("div",E,[a(i,{items:e.items,"active-class":e.activeClass},null,8,["items","active-class"])])):_("",!0),n("div",I,[h(c.$slots,"action"),a(l)]),n("div",L,[a(d,{icon:"i-ri-menu-line",color:"gray",variant:"ghost",onClick:m[0]||(m[0]=v=>c.$refs.nbMobile.sidebarToggle())})])])])]),a(t,{items:e.items,ref:"nbMobile"},null,8,["items"])],2)}}};export{G as default};
