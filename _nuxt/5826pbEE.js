import{b4 as t,b3 as n,b1 as a,bF as i,b2 as s,b5 as d,b8 as l}from"./CHOppScM.js";const w={class:"relative h-full flex justify-center items-center"},h={__name:"Wave",props:{pos:{type:String,default:"tr"},scale:{type:Number,default:.25}},setup(r){const e=r,c=t(()=>e.scale*248),p=t(()=>e.scale*200),f=t(()=>e.pos==="tr"?"-1 , 1":e.pos==="br"?"-1 , -1":e.pos==="bl"?"1 , -1":"1, 1");return(u,o)=>(n(),a("div",{class:"relative overflow-hidden flex-none",style:i({width:l(c)+"px",height:l(p)+"px",transform:`scale(${l(f)})`})},[(n(),a("svg",{class:"absolute w-[248px] h-[200px] origin-top-left text-base-bg-200",style:i({transform:`scale(${r.scale})`}),xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"248",height:"200",viewBox:"0 0 248 200"},o[0]||(o[0]=[s("g",null,[s("path",{d:"M0,181.009C0,100.39,106.116,125.641,138.148,93.1624C170.179,60.6838,139.172,0,228.424,0L0.00000470335,0L0,181.009Z",fill:"currentColor","fill-opacity":"1"})],-1)]),4)),s("div",w,[d(u.$slots,"default")])],4))}};export{h as _};
