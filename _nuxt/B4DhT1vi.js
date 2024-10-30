import{_ as f}from"./B39OMRwo.js";import{bJ as u,bb as h,bq as b,br as s,bx as r,b$ as g,bs as w}from"./BD89yi6W.js";const _={class:"h-screen flex items-center justify-center"},y={class:"solar-system"},M={id:"sun",class:"flex items-center animate-pulse p-2"},x={class:"earth-spin"},S={__name:"intro",setup(B){return h(()=>{const i=document.getElementById("starCanvas"),t=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;const a=[],d=300,n=5e-5,c=5e-4;function l(){for(let e=0;e<d;e++)a.push({angle:Math.random()*Math.PI*2,radius:Math.random()*(Math.min(i.width,i.height)/2),size:Math.random(),opacity:Math.random()})}function v(){t.clearRect(0,0,i.width,i.height),a.forEach(e=>{const m=i.width/2+Math.cos(e.angle+performance.now()*n)*e.radius,p=i.height/2+Math.sin(e.angle+performance.now()*n)*e.radius;e.opacity=Math.abs(Math.sin(performance.now()*c+e.angle)),t.fillStyle=`rgba(255, 255, 255, ${e.opacity})`,t.beginPath(),t.arc(m,p,e.size,0,Math.PI*2),t.fill()})}function o(){v(),requestAnimationFrame(o)}l(),o()}),(i,t)=>{const a=f;return w(),b("div",_,[t[5]||(t[5]=s("canvas",{id:"starCanvas"},null,-1)),s("div",y,[s("div",M,[r(a,{src:"/static/logo.png"})]),t[2]||(t[2]=g('<div class="orbit mercury-orbit" data-v-f9eee65e></div><div class="mercury-spin" data-v-f9eee65e><div id="mercury" data-v-f9eee65e></div></div><div class="orbit venus-orbit" data-v-f9eee65e></div><div class="venus-spin" data-v-f9eee65e><div id="venus" data-v-f9eee65e></div></div><div class="orbit earth-orbit" data-v-f9eee65e></div>',5)),s("div",x,[t[0]||(t[0]=s("div",{class:"orbit moon-orbit"},null,-1)),t[1]||(t[1]=s("div",{class:"moon-spin"},[s("div",{id:"moon"})],-1)),r(a,{id:"earth",src:"/static/earth.webp"})]),t[3]||(t[3]=s("div",{class:"orbit mars-orbit"},null,-1)),t[4]||(t[4]=s("div",{class:"mars-spin"},[s("div",{id:"mars"})],-1))])])}}},P=u(S,[["__scopeId","data-v-f9eee65e"]]);export{P as default};