import{_ as x,a as y}from"./Cgyz8qCS.js";import{_ as h}from"./wJH13Eel.js";import{_ as b}from"./Cr0tcXT8.js";import{i as V,a as B}from"./dJFlae2l.js";import{C as k,o as e,c,q as t,A as i,a as _,I as w,N as g,H as C,b as I,r as f,w as L,s as N,D as O}from"./CasGnjc5.js";import{_ as Z}from"./amMtTHyh.js";import{a as $}from"./w8daAOR2.js";import"./AWowccWq.js";import"./D7tgR7qg.js";import"./Dfgj8cn2.js";import"./D3-y7cIV.js";import"./CycxcUM0.js";import"./C8KoqhL9.js";import"./Acx5HmWG.js";import"./BO81ekGM.js";import"./DaMR3rau.js";import"./C124OCiz.js";import"./BxpRaN7E.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./2BLNlHuY.js";import"./BAS-xkq9.js";import"./Cs_SDZnJ.js";import"./Hz_VTRm7.js";import"./D1CmbsmE.js";import"./C9vVnKE5.js";import"./Bt6U8rWK.js";import"./DaEXFyde.js";import"./CCDmzXcs.js";import"./BxnikKvo.js";import"./Csao1_i6.js";import"./Cb_WsLqK.js";import"./Fevi3G6g.js";import"./CDr5L2Dd.js";import"./BcDIUS2f.js";import"./CVwGwjKC.js";import"./BcsZLyBd.js";import"./9r8_M1xF.js";import"./DnRLWcE9.js";import"./B6YhjqAj.js";import"./d3739r7Z.js";import"./DBtr21Ud.js";import"./B-7uzXAG.js";import"./DUInjjFt.js";import"./B-LBPKN4.js";const j={class:"flex flex-col h-full rounded-lg border border-base-neutral w-full mx-auto p-4"},F={class:"text-base space-y-4 flex-1 overflow-auto"},S={class:"flex items-center"},z={__name:"Base",props:{aspectRatio:{type:String,default:""},design:{type:String,default:""},shadow:{type:String,default:""},rounded:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},modelValue:{type:Object,default(){return{}}}},setup(m){const l=m,o=k(()=>V(l.modelValue)?l.modelValue:B(["chain","items"]));return(a,u)=>{const d=x,s=h,n=b,p=y;return e(),c("div",j,[t(o).chain?(e(),i(d,{key:0,val:t(o).chain.val,opt:t(o).chain.opt},null,8,["val","opt"])):(e(),i(s,{key:1,class:"mb-4",val:t(o).title.val,opt:t(o).title.opt},null,8,["val","opt"])),_("ul",F,[(e(!0),c(w,null,g(t(o).items.val,(r,v)=>(e(),c("li",{key:v},[_("div",S,[r.pic?(e(),i(n,{key:0,src:r.pic,"max-width":80,width:"80px",ratio:"1",class:"mr-4 max-w-4"},null,8,["src"])):C("",!0),I(p,{val:r},null,8,["val"])])]))),128))])])}}},Lt={__name:"ListBase",props:{item:{type:Object,default:()=>({infoId:"iFinscListSimple",id:null,name:null,grid:null})}},setup(m){const{item:l}=m,o=f(!1),a=f({}),u=async()=>{a.value=await $(l.infoId),o.value=!0};return(d,s)=>{const n=z,p=Z;return e(),i(p,{modelValue:t(a),"onUpdate:modelValue":s[0]||(s[0]=r=>O(a)?a.value=r:null),loaded:t(o),onOnVisibled:u},{default:L(({key:r})=>[(e(),i(n,{"model-value":t(a).attrs,key:r,class:N(t(a).className)},null,8,["model-value","class"]))]),_:1},8,["modelValue","loaded"])}}};export{Lt as default};
