import{_ as V}from"./BIZFaKvT.js";import{_ as b,a as w}from"./CYkJn41X.js";import{i as y,a as x}from"./dJFlae2l.js";import{C as d,o as m,A as l,w as _,c as v,I as S,N as O,q as o,b as h,n as C,r as f,s as F,D as N}from"./CcuYpJnQ.js";import{_ as k}from"./BrnMSNZS.js";import{a as I}from"./D9Qe01qt.js";import"./CnNvAa7q.js";import"./8sqBgc8o.js";import"./Dx-G_uLH.js";import"./3CKmlXpl.js";import"./CcNdZ3pA.js";import"./CsMu8_zQ.js";import"./DjrQ84rw.js";import"./CycVya7J.js";import"./CBH-bgz6.js";import"./BemqgJf2.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./DK6Kx27Z.js";import"./DeEB31q3.js";import"./B4Je62Y-.js";import"./dMmj2CWa.js";import"./BF_Ze4d7.js";import"./HsIyjfAk.js";import"./CnxBZg4K.js";import"./Cz1X9jMQ.js";import"./B9RaefP6.js";import"./Bq0jxNzn.js";import"./C1CtCsoG.js";import"./Ccyy1IJv.js";import"./BjvuV3hR.js";import"./BTCh3Sqt.js";import"./DUk9XVOZ.js";import"./Dex0PSxJ.js";import"./usZZxkQW.js";import"./Dkiq55HW.js";import"./qmU4YgZt.js";import"./CXJOZJpW.js";import"./BhBX62Kj.js";import"./QIUo_-cO.js";import"./CBobFG8C.js";import"./89wrKuJp.js";import"./Cf1_sUKw.js";const Z={__name:"Slider",props:{items:{},itemTxt:{type:String,default:"title"},autoplay:{type:Number,default:0},spacing:{type:Number,default:0},perView:{type:Number,default:1}},setup(r){const a=r,i=d(()=>{if(a.perView>1)return 16}),e=d(()=>{var n;const t=(n=a.items)==null?void 0:n.val;return t&&Array.isArray(t)?t:y(t)?[t]:[]});return(t,n)=>{const p=V,u=b,c=w;return m(),l(c,{"per-view":r.perView,length:o(e).length,spacing:o(i),autoplay:r.autoplay,arrowStyle:"center",fullscreen:""},{default:_(()=>[(m(!0),v(S,null,O(o(e),(s,g)=>(m(),l(u,{key:g},{default:_(()=>[h(p,{src:s[r.itemTxt],fullscreen:"",maxWidth:0},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["per-view","length","spacing","autoplay"])}}},$={__name:"FullScreen",props:{modelValue:{type:Object,default(){return{}}}},setup(r){const a=r,i=d(()=>y(a.modelValue)?a.modelValue:x(["items"]));return(e,t)=>{const n=Z;return m(),l(n,C({items:o(i).items},o(i).items.addon),null,16,["items"])}}},ve={__name:"FullScreen",props:{item:{type:Object,default:()=>({infoId:"iOuterFullScreen",id:null,name:null,grid:null})}},setup(r){const{item:a}=r,i=f(!1),e=f({}),t=async()=>{e.value=await I(a.infoId),i.value=!0};return(n,p)=>{const u=$,c=k;return m(),l(c,{modelValue:o(e),"onUpdate:modelValue":p[0]||(p[0]=s=>N(e)?e.value=s:null),edit:"",loaded:o(i),onOnVisibled:t},{default:_(({key:s})=>[(m(),l(u,{"model-value":o(e).attrs,key:s,class:F(o(e).className)},null,8,["model-value","class"]))]),_:1},8,["modelValue","loaded"])}}};export{ve as default};