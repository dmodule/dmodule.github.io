import{bN as h,bp as i,bn as d,br as y,r as v,a$ as z,b4 as S,c0 as N,bo as V,bS as m,bv as w,bL as $,b9 as B,bC as E}from"./DJaf_P2z.js";import{y as C}from"./Bnw5sLI9.js";import{s as I}from"./ZS5rF5Ms.js";const L={},q={class:"keen-slider__slide"};function U(t,n){return i(),d("div",q,[y(t.$slots,"default")])}const A=h(L,[["render",U]]),j={class:"relative"},D={__name:"Base",props:{length:{type:Number,default:0},perView:{type:Number,default:3},spacing:{type:Number,default:16},autoplay:{type:Number,default:0},arrowStyle:{type:String,default:"right"},size:{type:String,default:"xl"},fullscreen:{type:Boolean,default:!1}},setup(t){const n=t,r=v(null),a=v(!0);let e=null,u=null;const b={loop:!0,mode:"free-snap",slides:{perView:n.perView,spacing:n.spacing},breakpoints:n.fullscreen?{}:{"(max-width: 1024px)":{slides:{perView:2,spacing:16}},"(max-width: 640px)":{slides:{perView:1,spacing:8}}}},c=()=>{e&&e.destroy(),B(()=>{e=new C(r.value,b),n.length>1?(a.value=!0,n.autoplay&&(e.on("created",l),e.on("dragStart",o),e.on("dragEnd",l),r.value.addEventListener("mouseover",o),r.value.addEventListener("mouseout",l))):a.value=!1})},l=()=>{u=I(()=>{e&&e.next()},autoplay)},o=()=>{clearInterval(u)},g=()=>{e&&e.prev()},_=()=>{e&&e.next()},f=()=>{e&&e.update()};return z(n,()=>{c()}),S(()=>{c(),window.addEventListener("resize",f)}),N(()=>{e&&e.destroy(),o(),window.removeEventListener("resize",f)}),(x,s)=>{const p=E;return i(),d("div",j,[V("div",{ref_key:"slider",ref:r,class:m(["keen-slider mx-auto",{"h-full":t.fullscreen}])},[y(x.$slots,"default")],2),a.value?(i(),d("div",{key:0,dir:"ltr",class:m({"flex gap-4 justify-end py-4":t.arrowStyle==="right","keen-arrow":t.arrowStyle==="center"})},[w(p,{class:"keen-arrow-left",icon:"i-ri-arrow-left-s-line",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:s[0]||(s[0]=k=>g())},null,8,["size"]),w(p,{icon:"i-ri-arrow-right-s-line",class:"keen-arrow-right",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:s[1]||(s[1]=k=>_())},null,8,["size"])],2)):$("",!0)])}}};export{A as _,D as a};
