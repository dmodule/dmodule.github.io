import{_ as x}from"./DtEQ_dhK.js";import y from"./BNzeLix1.js";import{r as a,b5 as k,aG as v,b4 as u,bm as m,bb as _,b9 as o,bv as j,bx as V,bc as z}from"./CsE2J8A2.js";import{s as i}from"./Dr2rJf_n.js";import{t as s}from"./keR--Cwk.js";import{d as h}from"./D6T400fQ.js";import"./Be7hkzXI.js";import"./CBIDf7Kw.js";import"./BkNakb6S.js";import"./CGATlkly.js";import"./B8KOUFSm.js";import"./Bnw5sLI9.js";import"./CA07Ia20.js";const B={custom:{hue:"",className:""},design:{},attrs:{subject:i(["4xl","white"]),title:s(["6xl","yellow","none","slideInRight"]),dsnContent:h(["lg","white"]),dstMap:{opt:{},dat:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265265.4115607142!2d106.29606136957672!3d11.648954170646453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174b5c8f60d988d%3A0x56a2066a96add4a0!2zRMOjeSBUcuG7jSBLaW90IETFqW5nIETDoG4!5e0!3m2!1svi!2s!4v1713079850458!5m2!1svi!2s"
			width="600"
			height="450"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"></iframe>`,addon:{}}}},I={custom:{hue:"",className:""},design:{},attrs:{listGoods:{opt:{text:"lg",color:"none",bg:"none"},dat:[{id:1,src:"https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-12.jpeg",subject:s(["6xl","yellow","none","slideInRight"]),description:h(["lg","white"])},{id:2,src:"https://www.youtube.com/watch?v=MzgMBrtrFc4"}],addon:{itemTxt:"src",carousel:!0,fullscreen:!0}}}},R={custom:{hue:"",className:""},design:{},attrs:{subject:i(["4xl","white"]),title:s(["6xl","yellow","none","slideInRight"]),listGoods:{opt:{text:"lg",color:"none",bg:"none"},dat:[{id:1,src:"https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-12.jpeg"},{id:2,src:"https://www.youtube.com/watch?v=MzgMBrtrFc4"}],addon:{itemTxt:"src",carousel:!0}}}},S={custom:{hue:"",className:""},design:{},attrs:{subject:i(["4xl","white"]),title:s(["6xl","yellow","none","slideInRight"]),listGoods:{opt:{text:"lg",color:"none",bg:"none"},dat:[{id:1,src:"https://www.youtube.com/shorts/PzIoCcvVZoQ"},{id:2,src:"https://www.youtube.com/shorts/ZhB9Cz3daBk"},{id:3,src:"https://www.youtube.com/shorts/QudZAztSd2E"},{id:4,src:"https://www.youtube.com/shorts/hLJiUuhf1hk"}],addon:{itemTxt:"src",carousel:!0,shorts:!0}}}},T={custom:{hue:"",className:""},design:{},attrs:{subject:i(["4xl","white"]),title:s(["6xl","yellow","none","slideInRight"]),listGoods:{opt:{text:"lg",color:"none",bg:"none"},dat:[{id:1,src:"https://www.tiktok.com/@hugonguyen39/video/7357188784435268871"},{id:2,src:"https://www.tiktok.com/@_congailaphaidep/video/7348645748365413634"},{id:3,src:"https://www.tiktok.com/@hothitsaigon/video/7352162872882892039"},{id:4,src:"https://www.tiktok.com/@hothitsaigon/video/7347350132800703752"}],addon:{itemTxt:"src",carousel:!0,tiktok:!0}}}},G={custom:{hue:"",className:""},design:{dir:"ltr"},attrs:{subject:i(["4xl","white"]),title:s(["6xl","yellow","none","slideInRight"]),listGoods:{opt:{text:"lg",color:"none",bg:"none"},dat:[{id:1,src:"https://www.youtube.com/shorts/PzIoCcvVZoQ"},{id:2,src:"https://www.youtube.com/shorts/ZhB9Cz3daBk"},{id:3,src:"https://www.youtube.com/shorts/QudZAztSd2E"},{id:4,src:"https://www.youtube.com/shorts/hLJiUuhf1hk"}],addon:{itemTxt:"src",carousel:!0,shorts:!0,hor:!0,maxPerView:2}}}},M=Object.freeze(Object.defineProperty({__proto__:null,Fullscreen:I,Map:B,Shorts:S,ShortsHor:G,Slider:R,Tiktok:T},Symbol.toStringTag,{value:"Module"})),$={__name:"Root",props:{modelValue:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(p,{emit:w}){const g=w,n=p,c=a(!1),b=k(()=>!0),t=a({}),f=async()=>{const{info:e}=n.modelValue;if(typeof e=="string"){const{design:l,custom:d,attrs:r}=M[e];t.value={design:l,custom:d,attrs:r}}else t.value={...e};c.value=!0};return v(()=>t.value,e=>{g("update:modelValue",{...n.modelValue,info:e})},{deep:!0}),(e,l)=>{const d=x;return u(),m(d,{modelValue:o(t),"onUpdate:modelValue":l[0]||(l[0]=r=>z(t)?t.value=r:null),edit:o(b),loaded:o(c),onOnVisibled:f},{default:_(({key:r})=>[o(c)?(u(),m(y,j({key:r},o(t).design,{custom:o(t).custom,"model-value":o(t).attrs}),null,16,["custom","model-value"])):V("",!0)]),_:1},8,["modelValue","edit","loaded"])}}};export{$ as default};