import{u as C}from"./DoSHHGPH.js";import{Y as k,G as T,S as B,h as z}from"./D_rIsgeS.js";import{l as S}from"./BFKQxsH8.js";import{_ as V,ad as A,ae as g,g as D,ag as H,L as h,B as p,ai as n,o as y,z as b,w as s,b as f,m as c,a as $,q as w,G as L,T as j}from"./CK5d3MQh.js";import"./ClG7QByg.js";import"./D4GacT3T.js";import"./ByZKupdY.js";import"./D3zjbOBE.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./CrJHp-Pz.js";const F={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",height:"h-screen max-h-96",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},O=A(g.ui.strategy,g.ui.slideover,F),P=D({components:{HDialog:k,HDialogPanel:T,TransitionRoot:B,TransitionChild:z},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right","top","bottom"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:r}){const{ui:a,attrs:m}=H("slideover",h(e,"ui"),O,h(e,"class")),i=p({get(){return e.modelValue},set(t){r("update:modelValue",t)}}),v=p(()=>{if(!e.transition)return{};let t,o;switch(e.side){case"left":t=a.value.translate.left,o=a.value.translate.left;break;case"right":t=a.value.translate.right,o=a.value.translate.right;break;case"top":t=a.value.translate.top,o=a.value.translate.top;break;case"bottom":t=a.value.translate.bottom,o=a.value.translate.bottom;break;default:t=a.value.translate.right,o=a.value.translate.right}return{...a.value.transition,enterFrom:t,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:o}}),l=p(()=>{switch(e.side){case"left":return"horizontal";case"right":return"horizontal";case"top":return"vertical";case"bottom":return"vertical";default:return"right"}});function u(t){if(e.preventClose){r("close-prevented");return}i.value=t,r("close")}const d=()=>{r("after-leave")};return S(()=>C("$zSEivjycv8")),{ui:a,attrs:m,isOpen:i,transitionClass:v,sideType:l,onAfterLeave:d,close:u}}});function R(e,r,a,m,i,v){const l=n("TransitionChild"),u=n("HDialogPanel"),d=n("HDialog"),t=n("TransitionRoot");return y(),b(t,{as:"template",appear:e.appear,show:e.isOpen,onAfterLeave:e.onAfterLeave},{default:s(()=>[f(d,c({class:[e.ui.wrapper,{"justify-end":e.side==="right"},{"items-end":e.side==="bottom"}]},e.attrs,{onClose:e.close}),{default:s(()=>[e.overlay?(y(),b(l,c({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:s(()=>[$("div",{class:w([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):L("",!0),f(l,c({as:"template",appear:e.appear},e.transitionClass),{default:s(()=>[f(u,{class:w([e.ui.base,e.sideType==="horizontal"?[e.ui.width,"h-full"]:[e.ui.height,"w-full"],e.ui.background,e.ui.ring,e.ui.padding])},{default:s(()=>[j(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const W=V(P,[["render",R]]);export{W as default};
