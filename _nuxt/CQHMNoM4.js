import{r as g,f as R,l as z,_ as A,a3 as D,a4 as E,a0 as I,J as U,a6 as W,j as L,an as X,ao as V,ap as H,y as v,ae as J,o as r,c as i,a as $,H as j,I as N,U as d,D as p,M as S,Q as k,ag as f}from"./CMgfjk2B.js";const Q={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},T=e=>{const l=g(0);function u(a){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",l.value=a.pageX,window.addEventListener("mousemove",o),window.addEventListener("mouseup",c)}function c(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),e.value.style.removeProperty("pointer-events"),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",c)}function o(a){a.preventDefault(),e.value.style.pointerEvents="none";const s=a.pageX-l.value;l.value=a.pageX,e.value.scrollBy(-s,0)}R(()=>{e.value&&e.value.addEventListener("mousedown",u)}),z(()=>{e.value&&e.value.removeEventListener("mousedown",u)})},w=D(E.ui.strategy,E.ui.carousel,Q),q=I({components:{UButton:U},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>w.default.prevButton},nextButton:{type:Object,default:()=>w.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:l}){const{ui:u,attrs:c}=W("carousel",L(e,"ui"),w,L(e,"class")),o=g(),a=g(0),{x:s}=X(o,{behavior:"smooth"}),{width:t}=V(o);T(o),H(o,y=>{var P,M;const[b]=y;a.value=((M=(P=b==null?void 0:b.target)==null?void 0:P.firstElementChild)==null?void 0:M.clientWidth)||0});const n=v(()=>a.value?Math.round(s.value/a.value)+1:0),m=v(()=>a.value?e.items.length-Math.round(t.value/a.value)+1:0),O=v(()=>n.value<=1),F=v(()=>n.value===m.value);function h(){s.value+=a.value}function B(){s.value-=a.value}function C(y){s.value=(y-1)*a.value}return l({pages:m,page:n,prev:B,next:h,select:C}),{ui:u,attrs:c,isFirst:O,isLast:F,carouselRef:o,pages:m,currentPage:n,onClickNext:h,onClickPrev:B,onClick:C,twMerge:J}}}),G=["role"],K=["aria-selected","aria-label","onClick"];function Y(e,l,u,c,o,a){const s=U;return r(),i("div",k({class:e.ui.wrapper},e.attrs),[$("div",{ref:"carouselRef",class:d([e.ui.container,"no-scrollbar"])},[(r(!0),i(j,null,N(e.items,(t,n)=>(r(),i("div",{key:n,class:d(e.ui.item),role:e.indicators?"tabpanel":null},[p(e.$slots,"default",{item:t,index:n},void 0,!0)],10,G))),128))],2),e.arrows?(r(),i("div",{key:0,class:d(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(r(),S(s,k({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):f("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(r(),S(s,k({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):f("",!0)]},!0)],2)):f("",!0),e.indicators?(r(),i("div",{key:1,role:"tablist",class:d(e.ui.indicators.wrapper)},[(r(!0),i(j,null,N(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[$("button",{type:"button",role:"tab","aria-selected":t===e.currentPage,class:d([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:n=>e.onClick(t)},null,10,K)],!0)),128))],2)):f("",!0)],16)}const x=A(q,[["render",Y],["__scopeId","data-v-6e7d7177"]]);export{x as default};