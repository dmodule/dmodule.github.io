import{b4 as l,b2 as i,ba as a,b3 as m,bx as u,bD as x,bE as d}from"./PQ9VTHH8.js";const h=window.setInterval,b=()=>{var t=new Date().getTime(),s="ddk-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var e=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(o=="x"?e:e&3|8).toString(16)});return s},g=(t,s)=>{let o;return function(){clearTimeout(o),o=setTimeout(()=>t.apply(this,arguments),s)}},_=t=>JSON.parse(JSON.stringify(t)),k=(t,s,o=2e3)=>{let n=0;const r=h(()=>{(t||(n+=100)>=o)&&(clearInterval(r),s())},100)},S=(t,s,o="id")=>{const e=new Map(t.map(n=>[n[o],n]));return s.forEach(n=>e.set(n[o],{...e.get(n[o]),...n})),[...e.values()]},T=t=>t&&typeof t=="object"&&Object.keys(t).length!==0&&!Array.isArray(t),A=(t,s=!1)=>{if(!t)return"";let e=t.split(/(?=[A-Z])/).map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ");return s?e.toLowerCase():e},I=t=>{const s=t.replace(/([a-z])([A-Z])/g,"$1 $2");return s.charAt(0).toUpperCase()+s.slice(1)},M=t=>/\.(jpeg|jpg|gif|png|svg|webp|bmp|ico)$/i.test(t),$=t=>String(t||"").replace(/(\d)(?=(\d{3})+\b)/g,"$1,"),C=t=>{const s=/^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|(?:youtu\.be\/)|(?:youtube\.com\/shorts\/)))([a-zA-Z0-9_-]{11})/,o=/(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/)?)(\d+)(?:\/\?|$)/,e=/(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com\/(@\w+\/video\/(\d+)|([\w-]+)))/,n=t.match(s);if(n&&n[1])return`https://www.youtube.com/embed/${n[1]}`;const r=t.match(o);if(r&&r[3])return`https://player.vimeo.com/video/${r[3]}`;const c=t.match(e);return c?`https://www.tiktok.com/embed/${c[2]||c[3]}`:""},N=(t,s,o)=>{const e=t[s];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+s+(s.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})},p={key:0,class:"flex"},w={class:"flex-1 pl-4 space-y-2"},v={class:"space-y-2"},E={__name:"Skeleton",props:{height:{type:String,default:"100%"},avatar:{type:Boolean,default:!1}},setup(t){return(s,o)=>{const e=d;return l(),i("div",{class:"w-full space-y-4 overflow-hidden",style:x({height:t.height})},[t.avatar?(l(),i("div",p,[a(e,{class:"h-[5.5rem] w-[5.5rem]"}),m("div",w,[a(e,{class:"h-4 max-w-lg"}),a(e,{class:"h-4 max-w-xl"}),a(e,{class:"h-4 max-w-md"}),a(e,{class:"h-4 max-w-sm"})])])):u("",!0),m("div",v,[a(e,{class:"h-4 max-w-3xl"}),a(e,{class:"h-4 max-w-4xl"}),a(e,{class:"h-4 max-w-6xl"}),a(e,{class:"h-4 max-w-2xl"}),a(e,{class:"h-4 max-w-xl"}),a(e,{class:"h-4 max-w-3xl"}),a(e,{class:"h-4 max-w-4xl"}),a(e,{class:"h-4 max-w-6xl"}),a(e,{class:"h-4 max-w-2xl"}),a(e,{class:"h-4 max-w-xl"}),a(e,{class:"h-4 max-w-lg"}),a(e,{class:"h-4 max-w-md"})])],4)}}};export{N as _,S as a,E as b,_ as c,g as d,I as e,C as f,M as g,$ as h,T as i,h as s,A as t,b as u,k as w};
