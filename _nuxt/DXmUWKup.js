import{_ as V}from"./B05-Lajp.js";import{_ as b,a as w}from"./DOTsaN8L.js";import{i as y,a as x}from"./DgQDiXJJ.js";import{B as d,o as n,z as l,w as _,c as v,H as S,W as O,n as o,b as h,m as C,r as f,q as F,C as k}from"./CK5d3MQh.js";import{_ as B}from"./CPaiSBqn.js";import{a as N}from"./H4JB8t8X.js";import"./DfvzIQaV.js";import"./7-X7YiMw.js";import"./BVvwbdf7.js";import"./6edZz0Ct.js";import"./C8fMkDQg.js";import"./D5dm6z8z.js";import"./CYZMZs_g.js";import"./B5UKllE5.js";import"./DoSHHGPH.js";import"./Bl_JmNY1.js";import"./CcLTjWPV.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./BFKQxsH8.js";import"./ByZKupdY.js";import"./D4GacT3T.js";import"./CDzbEHWk.js";import"./DHTBjlOR.js";import"./D3zjbOBE.js";import"./CrJHp-Pz.js";import"./X-oxiXM3.js";import"./ZeUA9XZD.js";import"./Bri_7zzn.js";import"./BDt5LJ9X.js";import"./Cj3dIDpm.js";import"./Bm0iW4L0.js";import"./DYUZLIuu.js";import"./gAV5WVEa.js";import"./Dk-wYOq0.js";import"./C98ARfnz.js";import"./CcjXJZgs.js";import"./BCTY03xV.js";import"./Cev-Gf1o.js";import"./B0_V5oh5.js";import"./D0V1RBub.js";import"./BF3RsE_5.js";import"./D_rIsgeS.js";import"./ClG7QByg.js";import"./yFOWni-2.js";const Z={__name:"Slider",props:{items:{},itemTxt:{type:String,default:"title"},autoplay:{type:Number,default:0},spacing:{type:Number,default:0},perView:{type:Number,default:1}},setup(r){const i=r,a=d(()=>{if(i.perView>1)return 16}),e=d(()=>{var m;const t=(m=i.items)==null?void 0:m.val;return t&&Array.isArray(t)?t:y(t)?[t]:[]});return(t,m)=>{const p=V,u=b,c=w;return n(),l(c,{"per-view":r.perView,length:o(e).length,spacing:o(a),autoplay:r.autoplay,arrowStyle:"center",fullscreen:""},{default:_(()=>[(n(!0),v(S,null,O(o(e),(s,g)=>(n(),l(u,{key:g},{default:_(()=>[h(p,{src:s[r.itemTxt],fullscreen:"",maxWidth:0},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["per-view","length","spacing","autoplay"])}}},$={__name:"FullScreen",props:{modelValue:{type:Object,default(){return{}}}},setup(r){const i=r,a=d(()=>y(i.modelValue)?i.modelValue:x(["items"]));return(e,t)=>{const m=Z;return n(),l(m,C({items:o(a).items},o(a).items.addon),null,16,["items"])}}},Oe={__name:"FullScreen",props:{item:{type:Object,default:()=>({infoId:"iOuterFullScreen",id:null,name:null,grid:null})}},setup(r){const{item:i}=r,a=f(!1),e=f({}),t=async()=>{e.value=await N(i.infoId),a.value=!0};return(m,p)=>{const u=$,c=B;return n(),l(c,{modelValue:o(e),"onUpdate:modelValue":p[0]||(p[0]=s=>k(e)?e.value=s:null),edit:"",loaded:o(a),onOnVisibled:t},{default:_(({key:s})=>[(n(),l(u,{"model-value":o(e).attrs,key:s,class:F(o(e).className)},null,8,["model-value","class"]))]),_:1},8,["modelValue","loaded"])}}};export{Oe as default};
