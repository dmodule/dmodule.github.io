import{_ as L}from"./BrYQRYyp.js";import{_ as V}from"./Src98OHI.js";import{n as M,i as g,a as j}from"./dJFlae2l.js";import{_ as N,o as l,c as y,a,ay as $,C as O,b as u,q as e,n as Z,K as k,s as C,r as b,A as w,w as B,H,D as S}from"./CcuYpJnQ.js";import{_ as I}from"./BrnMSNZS.js";import{a as T}from"./D9Qe01qt.js";import"./8sqBgc8o.js";import"./Dx-G_uLH.js";import"./3CKmlXpl.js";import"./CcNdZ3pA.js";import"./CsMu8_zQ.js";import"./DjrQ84rw.js";import"./CycVya7J.js";import"./CBH-bgz6.js";import"./BemqgJf2.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./DK6Kx27Z.js";import"./DeEB31q3.js";import"./B4Je62Y-.js";import"./dMmj2CWa.js";import"./BF_Ze4d7.js";import"./HsIyjfAk.js";import"./CnxBZg4K.js";import"./Cz1X9jMQ.js";import"./B9RaefP6.js";import"./Bq0jxNzn.js";import"./C1CtCsoG.js";import"./Ccyy1IJv.js";import"./BjvuV3hR.js";import"./BTCh3Sqt.js";import"./DUk9XVOZ.js";import"./Dex0PSxJ.js";import"./usZZxkQW.js";import"./Dkiq55HW.js";import"./qmU4YgZt.js";import"./CXJOZJpW.js";import"./BhBX62Kj.js";import"./QIUo_-cO.js";import"./CBobFG8C.js";import"./89wrKuJp.js";import"./Cf1_sUKw.js";const W={props:{iframe:{type:String,default:""},src:{type:String,default:""},maxWidth:{type:Number,default:0},width:{type:Number,default:320},height:{type:Number,default:180}},computed:{link(){return M(this.src)}}},z={class:"relative"},E=a("div",{class:"absolute inset-0 flex items-center justify-center"},[a("svg",{class:"w-12 h-12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[a("path",{d:"M4 6.14286V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V4.85714L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L4 6.14286ZM16.2426 11.2426L12 15.4853L7.75736 11.2426C5.41421 8.89949 5.41421 5.10051 7.75736 2.75736C10.1005 0.414214 13.8995 0.414214 16.2426 2.75736C18.5858 5.10051 18.5858 8.89949 16.2426 11.2426ZM12 12.6569L14.8284 9.82843C16.3905 8.26633 16.3905 5.73367 14.8284 4.17157C13.2663 2.60948 10.7337 2.60948 9.17157 4.17157C7.60948 5.73367 7.60948 8.26633 9.17157 9.82843L12 12.6569Z"})])],-1),P=["innerHTML"];function q(i,s,t,o,p,c){return l(),y("div",z,[E,a("div",{class:"frame overflow-hidden rounded-md",style:$({"max-width":t.maxWidth?t.maxWidth+"px":"none","aspect-ratio":t.width/t.height}),innerHTML:t.iframe},null,12,P)])}const A=N(W,[["render",q]]),D={class:"relative"},F={class:"mx-auto max-w-screen-xl"},K={class:"mx-auto max-w-6xl text-center mb-8"},R={__name:"Map",props:{modelValue:{type:Object,default(){return{}}}},setup(i){const s=i,t=O(()=>g(s.modelValue)?s.modelValue:j(["subject","description","map"]));return(o,p)=>{var n,r,_,f,v,x,h;const c=L,m=V,d=A;return l(),y("section",D,[a("div",{class:C(["relative px-4",{"py-12":(n=e(t).subject)==null?void 0:n.val}])},[a("div",F,[a("div",K,[u(c,{val:(r=e(t).subject)==null?void 0:r.val,opt:(_=e(t).subject)==null?void 0:_.opt},null,8,["val","opt"]),u(m,{val:(f=e(t).description)==null?void 0:f.val,opt:(v=e(t).description)==null?void 0:v.opt,className:"mt-4 text-justify"},null,8,["val","opt"])]),u(d,Z({iframe:(x=e(t).map)==null?void 0:x.val},(h=e(t).map)==null?void 0:h.props),null,16,["iframe"])]),k(o.$slots,"default")],2)])}}},It={__name:"Map",props:{item:{type:Object,default:()=>({infoId:"iOuterMap",id:null,name:null,grid:null})}},setup(i){const{item:s}=i,t=b(!1),o=b({}),p=async()=>{o.value=await T(s.infoId),t.value=!0};return(c,m)=>{const d=R,n=I;return l(),w(n,{modelValue:e(o),"onUpdate:modelValue":m[0]||(m[0]=r=>S(o)?o.value=r:null),edit:"",loaded:e(t),onOnVisibled:p},{default:B(({key:r})=>[e(t)?(l(),w(d,{"model-value":e(o).attrs,key:r,class:C(e(o).className)},null,8,["model-value","class"])):H("",!0)]),_:1},8,["modelValue","loaded"])}}};export{It as default};