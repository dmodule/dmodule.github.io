import{a as i,u as s}from"./DgaNmZUo.js";const u=(t,a={})=>{const r={baseURL:i().API_URL,headers:{Authorization:null},method:t.toUpperCase(),timeout:1e4,...a},e=s().token;return e&&(r.headers.Authorization=e),r};function E(t){return t!=null&&t.data&&typeof t.data=="string"&&t.data.length>0&&console.log(t.data),Promise.reject(t)}async function n(t,a,r,e={}){try{return await $fetch(a,t==="GET"||t==="DELETE"?{...u(t,e),params:r}:{...u(t,e),body:r})}catch(o){return E(o)}}function c(t={}){return{get:(a,r={})=>n("GET",a,r,t),post:(a,r={})=>n("POST",a,r,t),put:(a,r={})=>n("PUT",a,r,t),patch:(a,r={})=>n("PATCH",a,r,t),delete:(a,r={})=>n("DELETE",a,r,t)}}export{c as u};