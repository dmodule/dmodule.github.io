import{bc as h,g as x,j as f,c,b as r,w as t,a as e,T as g,o,n as i,z as k,d as l,G as _,e as y}from"./CK5d3MQh.js";import{_ as A}from"./ikgK771W.js";import"./BheWnx7M.js";const N=h("/static/logo.svg"),w={id:"main-wrap"},v=e("a",{class:"block text-base-primary",href:"/"},[e("span",{class:"sr-only"},"Home"),e("img",{src:N,width:20})],-1),B={key:1,class:"hidden sm:flex"},C={id:"main",class:"container mx-auto py-4"},$=x({__name:"auth-menu",setup(T){const{$auth:s}=f(),m=[{label:"Home",to:"/"},{label:"About",to:"/about"},{label:"Admin",to:"/admin"}],{getToken:d}=s,a=d(),p=()=>{s.clearAuth()};return(u,V)=>{const n=y,b=A;return o(),c("div",w,[r(b,{type:"Top",items:m},{logo:t(()=>[v]),action:t(()=>[i(a)?_("",!0):(o(),k(n,{key:0,class:"cursor-pointer rounded-md bg-base-primary px-6 py-3 text-base-100 shadow",to:"/login"},{default:t(()=>[l(" Login ")]),_:1})),i(a)?(o(),c("div",B,[r(n,{class:"cursor-pointer rounded-md bg-base-100 px-6 py-3 text-base-100",onClick:p},{default:t(()=>[l(" Logout ")]),_:1})])):_("",!0)]),_:1}),e("main",C,[g(u.$slots,"default")])])}}});export{$ as default};
