import{_ as V}from"./BAQo9MjC.js";import{_ as b,a as w}from"./CVtMQEi1.js";import{i as y,a as x}from"./BzGOlt8I.js";import{C as d,o as m,A as l,w as _,c as v,I as S,N as O,q as o,b as h,n as C,r as f,s as F,D as N}from"./Bo6MmINt.js";import{_ as k}from"./DnHg1XVO.js";import{a as I}from"./A5kO3WBu.js";import"./DphHcEMw.js";import"./BLc_DOyL.js";import"./RUUazTq9.js";import"./BfBuFdHM.js";import"./DQkwNg4U.js";import"./BmEuEqsc.js";import"./LyieEY-_.js";import"./DDtdqtpV.js";import"./DdaiPY8x.js";import"./usZo0YZQ.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./ByyEM0br.js";import"./yU_4VnkW.js";import"./Clpy4-uC.js";import"./DZfMgOWl.js";import"./ggkAxTEh.js";import"./CbXGSRKc.js";import"./BkdYJT4c.js";import"./CrM66H_P.js";import"./CAeQxgGy.js";import"./CAg7XoP8.js";import"./DcWkmQyL.js";import"./C4qCPQPM.js";import"./CzDHCrVp.js";import"./bna_kBPA.js";import"./DZKnPlWw.js";import"./CGlAVP-e.js";import"./CO_21lo5.js";import"./C_cQdEgV.js";import"./BTq7K5su.js";import"./TmHJlx_E.js";import"./Bts724U1.js";import"./Da7UQM1f.js";import"./BGPPBosv.js";import"./ByOv-KzA.js";import"./CJ8hK8vJ.js";const Z={__name:"Slider",props:{items:{},itemTxt:{type:String,default:"title"},autoplay:{type:Number,default:0},spacing:{type:Number,default:0},perView:{type:Number,default:1}},setup(r){const a=r,i=d(()=>{if(a.perView>1)return 16}),e=d(()=>{var n;const t=(n=a.items)==null?void 0:n.val;return t&&Array.isArray(t)?t:y(t)?[t]:[]});return(t,n)=>{const p=V,u=b,c=w;return m(),l(c,{"per-view":r.perView,length:o(e).length,spacing:o(i),autoplay:r.autoplay,arrowStyle:"center",fullscreen:""},{default:_(()=>[(m(!0),v(S,null,O(o(e),(s,g)=>(m(),l(u,{key:g},{default:_(()=>[h(p,{src:s[r.itemTxt],fullscreen:"",maxWidth:0},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["per-view","length","spacing","autoplay"])}}},$={__name:"FullScreen",props:{modelValue:{type:Object,default(){return{}}}},setup(r){const a=r,i=d(()=>y(a.modelValue)?a.modelValue:x(["items"]));return(e,t)=>{const n=Z;return m(),l(n,C({items:o(i).items},o(i).items.addon),null,16,["items"])}}},ve={__name:"FullScreen",props:{item:{type:Object,default:()=>({infoId:"iOuterFullScreen",id:null,name:null,grid:null})}},setup(r){const{item:a}=r,i=f(!1),e=f({}),t=async()=>{e.value=await I(a.infoId),i.value=!0};return(n,p)=>{const u=$,c=k;return m(),l(c,{modelValue:o(e),"onUpdate:modelValue":p[0]||(p[0]=s=>N(e)?e.value=s:null),edit:"",loaded:o(i),onOnVisibled:t},{default:_(({key:s})=>[(m(),l(u,{"model-value":o(e).attrs,key:s,class:F(o(e).className)},null,8,["model-value","class"]))]),_:1},8,["modelValue","loaded"])}}};export{ve as default};