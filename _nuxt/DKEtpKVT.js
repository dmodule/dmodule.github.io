import{aZ as g,a0 as k,h as f,a8 as y,c as l,b as i,w as o,a as e,D as h,o as s,q as c,M as N,d,ag as m,e as v}from"./CMgfjk2B.js";const A=g("/static/logo.svg"),w={id:"main-wrap"},C={key:1,class:"hidden sm:flex"},B={id:"main",class:"container mx-auto py-4"},R=k({__name:"auth-menu",setup(V){const{$auth:a}=f(),p=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Admin",to:"/admin"}],{getToken:u}=a,n=u(),_=()=>{a.clearAuth()};return(b,t)=>{const r=v,x=y("NavbarRoot");return s(),l("div",w,[i(x,{type:"Top",items:p},{logo:o(()=>t[0]||(t[0]=[e("a",{class:"block text-base-primary",href:"/"},[e("span",{class:"sr-only"},"Home"),e("img",{src:A,width:20})],-1)])),action:o(()=>[c(n)?m("",!0):(s(),N(r,{key:0,class:"cursor-pointer rounded-md bg-base-primary px-6 py-3 text-base-100 shadow",to:"/login"},{default:o(()=>t[1]||(t[1]=[d(" Login ")])),_:1})),c(n)?(s(),l("div",C,[i(r,{class:"cursor-pointer rounded-md bg-base-100 px-6 py-3 text-base-100",onClick:_},{default:o(()=>t[2]||(t[2]=[d(" Logout ")])),_:1})])):m("",!0)]),_:1}),e("main",B,[h(b.$slots,"default")])])}}});export{R as default};