import{b9 as x,g,c,b as r,w as o,a as t,T as h,j as f,o as e,q as i,A as k,d as l,H as _,e as y}from"./DeuvRX2B.js";import{_ as w}from"./DQCOGO_0.js";const N=x("/static/logo.svg"),A={id:"main-wrap"},v=t("a",{class:"block text-base-primary",href:"/"},[t("span",{class:"sr-only"},"Home"),t("img",{src:N,width:20})],-1),B={key:1,class:"hidden sm:flex"},C={id:"main",class:"container mx-auto py-4"},$=g({__name:"with-auth",setup(T){const{$auth:s}=f(),d=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Admin",to:"/admin"}],{getToken:m}=s,a=m(),p=()=>{s.logout()};return(u,V)=>{const n=y,b=w;return e(),c("div",A,[r(b,{type:"Top",items:d},{logo:o(()=>[v]),action:o(()=>[i(a)?_("",!0):(e(),k(n,{key:0,class:"cursor-pointer rounded-md bg-base-primary px-6 py-3 text-base-100 shadow",to:"/login"},{default:o(()=>[l(" Login ")]),_:1})),i(a)?(e(),c("div",B,[r(n,{class:"cursor-pointer rounded-md bg-base-100 px-6 py-3 text-base-100",onClick:p},{default:o(()=>[l(" Logout ")]),_:1})])):_("",!0)]),_:1}),t("main",C,[h(u.$slots,"default")])])}}});export{$ as default};