import{b9 as u,u as a,n as r,bb as p}from"./Nng3t-Yx.js";const f=u({__name:"login",setup(c){const{$auth:t}=a(),{token:n,login:e,goTo:o}=t,s=r();return p(async()=>{if(n)return s.push({path:o||"/"});await e()}),(_,i)=>null}});export{f as default};