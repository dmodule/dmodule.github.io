import{_ as V}from"./BAR-neLq.js";import{_ as b,a as w}from"./wD6NnAud.js";import{i as y,a as x}from"./n4Xe9ecP.js";import{C as d,o as m,A as l,w as _,c as v,I as S,W as O,q as o,b as h,n as C,r as f,s as F,D as k}from"./DQbio8Ee.js";import{_ as I}from"./Nzfsd2rr.js";import{a as N}from"./CnSZMf4o.js";import"./DSXVFW9Y.js";import"./2oOvjF_4.js";import"./Cs86gS-c.js";import"./Bwe72PNb.js";import"./BYH2VhWn.js";import"./Bw412BoG.js";import"./H1X4eqvm.js";import"./BlPGclGo.js";import"./ppRf6fU5.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./Bq6hIOc_.js";import"./CUs0Z-Rb.js";import"./BF931hpm.js";import"./D6eWb1LC.js";import"./DXObKUXz.js";import"./BY3wjn01.js";import"./D5k4HRiJ.js";import"./BEAVucgv.js";import"./CIbLJOml.js";import"./DWaDNkm8.js";import"./8IWeArez.js";import"./BgP2hLVO.js";import"./C_-GUtgP.js";import"./BgKMyb-i.js";import"./BMlWoymn.js";import"./nFkp5eOy.js";import"./DkV_OOTG.js";import"./B99xPK6E.js";import"./DBKzgfkv.js";import"./BwpN9O7i.js";import"./CYt8BpGf.js";import"./omsRMl2Q.js";import"./Da1dC0TA.js";import"./CpodiPUq.js";import"./DJb41gAI.js";const Z={__name:"Slider",props:{items:{},itemTxt:{type:String,default:"title"},autoplay:{type:Number,default:0},spacing:{type:Number,default:0},perView:{type:Number,default:1}},setup(r){const a=r,i=d(()=>{if(a.perView>1)return 16}),e=d(()=>{var n;const t=(n=a.items)==null?void 0:n.val;return t&&Array.isArray(t)?t:y(t)?[t]:[]});return(t,n)=>{const p=V,u=b,c=w;return m(),l(c,{"per-view":r.perView,length:o(e).length,spacing:o(i),autoplay:r.autoplay,arrowStyle:"center",fullscreen:""},{default:_(()=>[(m(!0),v(S,null,O(o(e),(s,g)=>(m(),l(u,{key:g},{default:_(()=>[h(p,{src:s[r.itemTxt],fullscreen:"",maxWidth:0},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["per-view","length","spacing","autoplay"])}}},$={__name:"FullScreen",props:{modelValue:{type:Object,default(){return{}}}},setup(r){const a=r,i=d(()=>y(a.modelValue)?a.modelValue:x(["items"]));return(e,t)=>{const n=Z;return m(),l(n,C({items:o(i).items},o(i).items.addon),null,16,["items"])}}},xe={__name:"FullScreen",props:{item:{type:Object,default:()=>({infoId:"iOuterFullScreen",id:null,name:null,grid:null})}},setup(r){const{item:a}=r,i=f(!1),e=f({}),t=async()=>{e.value=await N(a.infoId),i.value=!0};return(n,p)=>{const u=$,c=I;return m(),l(c,{modelValue:o(e),"onUpdate:modelValue":p[0]||(p[0]=s=>k(e)?e.value=s:null),edit:"",loaded:o(i),onOnVisibled:t},{default:_(({key:s})=>[(m(),l(u,{"model-value":o(e).attrs,key:s,class:F(o(e).className)},null,8,["model-value","class"]))]),_:1},8,["modelValue","loaded"])}}};export{xe as default};
