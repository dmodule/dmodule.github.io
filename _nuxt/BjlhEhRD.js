import{_ as O,a as z,b as D}from"./CuOZf8kP.js";import{_ as F,a as q}from"./Br25pqnL.js";import{bE as L,b3 as o,b1 as d,b2 as c,bu as m,bF as k,b4 as f,bl as y,bt as g,b8 as e,bn as J,ba as V,bc as v,bd as C,b9 as p,bv as K,aG as Q,b6 as U,b7 as X,b5 as Y}from"./BfFq9ARU.js";import{e as R,f as G,i as N}from"./DxkKgslY.js";import{_ as T,a as E}from"./JEDrFIbD.js";import{d as ee}from"./CmQm_u1F.js";import"./Bnw5sLI9.js";const te={props:{src:{type:String,default:""},mode:{type:String,default:"cover"},maxWidth:{type:Number,default:0},ratio:{type:Number,default:0},width:{type:String,default:"160px"},height:{type:String,default:"120px"},fullscreen:{type:Boolean,default:!1}},data:()=>({error:null}),computed:{aspectRatio(){if(this.ratio)return this.ratio;parseInt(this.width)/parseInt(this.height||1)}},methods:{onError(){this.error=!0}}},re=["src"];function ae(s,r,a,i,t,n){return o(),d("div",{class:m(["w-full",{"bg-base-300":s.error,"h-full":a.fullscreen}]),style:k({"max-width":a.maxWidth&&!a.fullscreen?a.maxWidth+"px":"none"})},[c("img",{src:a.src,class:m(["inline",{"opacity-0":s.error,"h-full":a.fullscreen}]),style:k({"min-width":a.width,"aspect-ratio":n.aspectRatio,"object-fit":a.mode}),onError:r[0]||(r[0]=(...l)=>n.onError&&n.onError(...l))},null,46,re)],6)}const se=L(te,[["render",ae]]),ne={props:{src:{type:String,default:""},maxWidth:{type:Number,default:0},width:{type:Number,default:320},height:{type:Number,default:180},fullscreen:{type:Boolean,default:!1}},computed:{link(){return R(this.src)}}},oe=["src"],le={key:1,class:"w-12 h-12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"};function ie(s,r,a,i,t,n){return o(),d("div",{class:m(["frame",{"h-full":a.fullscreen}]),style:k({"max-width":a.maxWidth?a.maxWidth+"px":"none","aspect-ratio":a.width/a.height})},[a.src?(o(),d("iframe",{key:0,class:"h-full w-full",src:n.link,frameborder:"0",scrolling:"no",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,oe)):(o(),d("svg",le,r[0]||(r[0]=[c("path",{d:"M17 18.4142L21.1925 22.6067L22.6067 21.1925L2.80769 1.39349L1.39348 2.80771L2.58579 4.00001H2C1.44772 4.00001 1 4.44773 1 5.00001V19C1 19.5523 1.44772 20 2 20H16C16.5523 20 17 19.5523 17 19V18.4142ZM15 16.4142V18H3V6.00001H4.58579L15 16.4142ZM23 18.0397C23 18.2517 22.875 18.4176 22.7083 18.4943L21 16.786V8.84133L17 11.6413V12.786L15 10.786V6.00001H10.214L8.21402 4.00001H16C16.5523 4.00001 17 4.44773 17 5.00001V9.20001L22.2133 5.55073C22.5447 5.31876 23 5.55583 23 5.96034V18.0397Z"},null,-1)])))],6)}const ue=L(ne,[["render",ie]]),P={__name:"Root",props:{src:{type:String,default:""},tiktok:{type:Boolean,default:!1},shorts:{type:Boolean,default:!1}},setup(s){const r=s,a=se,i=ue,t=f(()=>{const n={...r};return G(r.src)&&(n.ratio=r.tiktok?325/723:r.shorts?325/580:16/9,n.width="100%",n.maxWidth=r.tiktok||r.shorts?325:0),n});return(n,l)=>(o(),y(J(e(G)(s.src)?e(a):e(i)),g({class:"overflow-hidden rounded-md"},e(t)),null,16))}},ce={__name:"Slider",props:{items:{},itemTxt:{type:String,default:"title"},autoplay:{type:Number,default:0},spacing:{type:Number,default:0},perView:{type:Number,default:1},fullscreen:{type:Boolean,default:!1}},setup(s){const r=s,a=f(()=>{if(r.perView>1)return 16}),i=f(()=>{var n;const t=(n=r.items)==null?void 0:n.dat;return t&&Array.isArray(t)?t:N(t)?[t]:[]});return(t,n)=>{const l=P,u=T,h=E;return o(),y(h,{"per-view":s.perView,length:e(i).length,spacing:e(a),autoplay:s.autoplay,arrowStyle:"center",fullscreen:s.fullscreen},{default:V(()=>[(o(!0),d(v,null,C(e(i),(x,b)=>(o(),y(u,{key:b},{default:V(()=>[p(l,{src:x[s.itemTxt],fullscreen:s.fullscreen,maxWidth:0},null,8,["src","fullscreen"])]),_:2},1024))),128))]),_:1},8,["per-view","length","spacing","autoplay","fullscreen"])}}},de={class:"mx-auto max-w-screen-xl mt-8 md:mt-12 lg:mt-16"},me={__name:"Media",props:{items:{},itemTxt:{type:String,default:"title"},tiktok:{type:Boolean,default:!1},shorts:{type:Boolean,default:!1},carousel:{type:Boolean,default:!1},hor:{type:Boolean,default:!1},autoplay:{type:Number,default:0},spacing:{type:Number,default:0},perView:{type:Number,default:1},maxPerView:{type:Number,default:0}},setup(s){const r=s,a=f(()=>{if(r.perView>1)return 16}),i=f(()=>{var u;const l=((u=r.items)==null?void 0:u.dat)||[];return r.maxPerView?r.maxPerView:l.length===2?2:l.length>2?3:r.perView}),t=f(()=>{var u;const l=(u=r.items)==null?void 0:u.dat;return l&&Array.isArray(l)?l:N(l)?[l]:[]}),n=f(()=>r.tiktok?{maxWidth:325,width:325,height:723}:r.shorts?{maxWidth:325,width:325,height:580}:{});return(l,u)=>{const h=P,x=T,b=E;return o(),d("div",de,[r.carousel?(o(),y(b,{key:0,length:e(t).length,"per-view":e(i),spacing:e(a),autoplay:s.autoplay},{default:V(()=>[(o(!0),d(v,null,C(e(t),(_,w)=>(o(),y(x,{key:w},{default:V(()=>[p(h,g({src:_[s.itemTxt],tiktok:s.tiktok,shorts:s.shorts,ref_for:!0},e(n)),null,16,["src","tiktok","shorts"])]),_:2},1024))),128))]),_:1},8,["length","per-view","spacing","autoplay"])):(o(),d("div",{key:1,class:m(["grid grid-cols-1 gap-4 md:gap-8",e(i)===2?"md:grid-cols-2":e(i)>2?"md:grid-cols-3":""])},[(o(!0),d(v,null,C(e(t),(_,w)=>(o(),y(h,g({key:w,src:_[s.itemTxt],tiktok:s.tiktok,shorts:s.shorts,ref_for:!0},e(n)),null,16,["src","tiktok","shorts"]))),128))],2))])}}},fe={props:{iframe:{type:String,default:""},src:{type:String,default:""},maxWidth:{type:Number,default:0},width:{type:Number,default:320},height:{type:Number,default:180}},computed:{link(){return R(this.src)}}},he={key:0,class:"relative"},pe=["innerHTML"];function ye(s,r,a,i,t,n){return a.iframe?(o(),d("div",he,[r[0]||(r[0]=c("div",{class:"absolute inset-0 flex items-center justify-center"},[c("svg",{class:"w-12 h-12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},[c("path",{d:"M4 6.14286V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V4.85714L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L4 6.14286ZM16.2426 11.2426L12 15.4853L7.75736 11.2426C5.41421 8.89949 5.41421 5.10051 7.75736 2.75736C10.1005 0.414214 13.8995 0.414214 16.2426 2.75736C18.5858 5.10051 18.5858 8.89949 16.2426 11.2426ZM12 12.6569L14.8284 9.82843C16.3905 8.26633 16.3905 5.73367 14.8284 4.17157C13.2663 2.60948 10.7337 2.60948 9.17157 4.17157C7.60948 5.73367 7.60948 8.26633 9.17157 9.82843L12 12.6569Z"})])],-1)),c("div",{class:"frame overflow-hidden rounded-md",style:k({"max-width":a.maxWidth?a.maxWidth+"px":"none","aspect-ratio":a.width/a.height}),innerHTML:a.iframe},null,12,pe)])):K("",!0)}const _e=L(fe,[["render",ye]]),ge=["dir"],Le={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},dir:{type:String,default:"auto"},hor:{type:Boolean,default:!1}},setup(s){const r=s,a=f(()=>{var u,h;const n=((u=r.custom)==null?void 0:u.hue)??"",l=((h=r.custom)==null?void 0:h.className)??"";return{hue:n,className:l}}),i=f(()=>a.value.hue?{type:"Simple",bg:a.value.hue}:{type:"Radial2Middle"}),t=f(()=>N(r.modelValue)?r.modelValue:ee(["subject","title","dsnContent","btnStarted","btnMore","pic","dstMap","listGoods"]));return Q(()=>r.hor,n=>{console.log(n)},{immediate:!0}),(n,l)=>{var M,Z,B,S,W,j,H,$;const u=O,h=z,x=D,b=F,_=q,w=ce,I=me,A=_e;return o(),d("section",{dir:s.dir,class:m(["bg-cover bg-center bg-no-repeat",e(a).className]),style:k({backgroundImage:e(t).pic?`url(${(Z=(M=e(t).pic)==null?void 0:M.ext)==null?void 0:Z.src})`:""})},[p(u,U(X(e(i))),null,16),c("div",{class:m(["relative px-4",{"py-12":e(t).subject||e(t).title||e(t).dsnContent}])},[c("div",{class:m(["mx-auto max-w-screen-3xl",{"lg:flex lg:items-center":s.hor}])},[c("div",{class:m(["text-center ltr:sm:text-left rtl:sm:text-right",s.dir==="auto"?"mx-auto max-w-6xl":"max-w-3xl"])},[p(h,{modelValue:e(t).subject},null,8,["modelValue"]),p(x,{modelValue:e(t).title},null,8,["modelValue"]),p(b,{modelValue:e(t).dsnContent,className:"mt-4 text-justify"},null,8,["modelValue"]),c("div",{class:m(["flex gap-4 flex-wrap",{"justify-center":s.dir==="auto","my-8":e(t).btnStarted||e(t).btnMore}])},[p(_,{modelValue:e(t).btnStarted,class:"text-gray-100/90 rounded-full"},null,8,["modelValue"]),p(_,{modelValue:e(t).btnMore,class:"rounded-full border hover:bg-base-300 hover:text-base-neutral"},null,8,["modelValue"])],2)],2),c("div",{class:m({"lg:w-1/2 flex-none":s.hor})},[(S=(B=e(t).listGoods)==null?void 0:B.addon)!=null&&S.fullscreen?(o(),y(w,g({key:0,items:e(t).listGoods},(W=e(t).listGoods)==null?void 0:W.addon),null,16,["items"])):(o(),y(I,g({key:1,items:e(t).listGoods},(j=e(t).listGoods)==null?void 0:j.addon),null,16,["items"]))],2)],2),p(A,g({iframe:(H=e(t).dstMap)==null?void 0:H.dat},($=e(t).dstMap)==null?void 0:$.addon),null,16,["iframe"]),Y(n.$slots,"default")],2)],14,ge)}}};export{Le as default};
