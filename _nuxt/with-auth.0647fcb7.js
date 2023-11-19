import{_ as y}from"./nuxt-img.9e0b098c.js";import{_ as f}from"./nuxt-link.ece1b4ed.js";import{o as e,c as a,a as t,aP as d,F as v,aO as w,b as c,w as o,d as u,t as $,aq as B,f as C,bE as N,bC as p,bD as A,ba as h,z as j,A as b}from"./entry.e729eafb.js";const L={class:"backdrop-blur z-50 sticky top-0"},S={class:"md:flex md:items-center md:gap-12"},V={class:"hidden md:block"},z={class:"flex items-center gap-3 px-3"},M={class:"flex items-center gap-3"},D={class:"sm:flex sm:gap-3"},E=t("div",{class:"block md:hidden"},[t("button",{class:"rounded-full bg-base-200 p-2.5"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])])],-1),F={__name:"Base",props:{justify:{type:String,default:"justify-between"},items:{type:Array,default(){return[]}}},setup(r){return(n,_)=>{const l=f;return e(),a("nav",L,[t("div",{class:B(["container mx-auto flex items-center min-h-16 p-3 text-sm",r.justify])},[t("div",S,[d(n.$slots,"logo")]),t("div",V,[t("ul",z,[(e(!0),a(v,null,w(r.items,(s,i)=>(e(),a("li",{key:i,class:"text-base-100 hover:bg-base-200 rounded"},[c(l,{to:s.to||"#",class:"inline-block px-6 py-3","active-class":"text-base-primary"},{default:o(()=>[u($(s.label),1)]),_:2},1032,["to"])]))),128))])]),t("div",M,[t("div",D,[d(n.$slots,"action")]),E])],2)])}}},H=F,O={class:"block text-base-primary",href:"/"},R=t("span",{class:"sr-only"},"Home",-1),T={key:1,class:"hidden sm:flex"},q={class:"container mx-auto py-4"},J=C({__name:"with-auth",setup(r){const n=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Admin",to:"/admin"}],_=N(),{logUserOut:l}=p(),{authenticated:s}=A(p()),i=()=>{l(),_.push("/login")};return(x,I)=>{const g=y,m=f,k=H;return e(),a("div",null,[c(k,{items:n},{logo:o(()=>[t("a",O,[R,c(g,{src:"/media/logo.svg",width:20})])]),action:o(()=>[h(s)?b("",!0):(e(),j(m,{key:0,class:"cursor-pointer rounded-md bg-base-primary px-6 py-3 text-base-100 shadow",to:"/login"},{default:o(()=>[u(" Login ")]),_:1})),h(s)?(e(),a("div",T,[c(m,{class:"cursor-pointer rounded-md bg-base-100 px-6 py-3 text-base-100",onClick:i},{default:o(()=>[u(" Logout ")]),_:1})])):b("",!0)]),_:1}),t("div",q,[d(x.$slots,"default")])])}}});export{J as default};
