import{h as o,i as n,c,o as r,j as u,a as p}from"./BBa6so6u.js";const _=p("p",null,"Processing authentication...",-1),i=[_],d={__name:"callback",setup(l){return o(async()=>{const t=n(),{$auth:e}=u(),{getToken:s,loadUser:a}=e;return s()?t.push({path:"/"}):(await a(),t.push({path:"/"}))}),(t,e)=>(r(),c("div",null,i))}};export{d as default};