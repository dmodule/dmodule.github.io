import{o as s,c as a,a as e,v as l,F as r,k as d,b as m,w as u,d as _,t as p,q as h,e as x}from"./entry.dd57515c.js";const f={class:"backdrop-blur z-50 sticky top-0"},v={class:"md:flex md:items-center md:gap-12"},b={class:"hidden md:block"},g={class:"flex items-center gap-3 px-3"},k={class:"flex items-center gap-3"},y={class:"sm:flex sm:gap-3"},w=e("div",{class:"block md:hidden"},[e("button",{class:"rounded-full bg-base-200 p-2.5"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])])],-1),B={__name:"Base",props:{items:{type:Array,default(){return[]}},activeClass:{type:String,default:"text-base-primary"},justify:{type:String,default:"justify-between"}},setup(t){return(o,C)=>{const c=x;return s(),a("nav",f,[e("div",{class:h(["container mx-auto flex items-center min-h-16 p-3 text-sm",t.justify])},[e("div",v,[l(o.$slots,"logo")]),e("div",b,[e("ul",g,[(s(!0),a(r,null,d(t.items,(n,i)=>(s(),a("li",{key:i,class:"text-base-100 hover:bg-base-200 rounded"},[m(c,{to:n.to||"#",class:"inline-block px-3 py-1","active-class":t.activeClass},{default:u(()=>[_(p(n.label),1)]),_:2},1032,["to","active-class"])]))),128))])]),e("div",k,[e("div",y,[l(o.$slots,"action")]),w])],2)])}}},N=B;export{N as _};
