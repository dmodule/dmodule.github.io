import{ak as I,al as b,_ as F,g as P,an as V,O as h,C as s,aq as t,o,c as u,K as z,s as g,W as L,a as C,t as v,H as m,L as A,n as f,I as R,Q as q,d as D,M as E}from"./Bp7PwLku.js";const H={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},i=I(b.ui.strategy,b.ui.progress,H),J=P({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>i.default.animation,validator(e){return Object.keys(i.animation).includes(e)}},size:{type:String,default:()=>i.default.size,validator(e){return Object.keys(i.progress.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return b.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:y}=V("progress",h(e,"ui"),i,h(e,"class")),x=s(()=>t(r.value.indicator.container.base,r.value.indicator.container.width,r.value.indicator.container.transition)),w=s(()=>t(r.value.indicator.align,r.value.indicator.width,r.value.indicator.color,r.value.indicator.size[e.size])),k=s(()=>{var n;const a=[r.value.progress.base,r.value.progress.width,r.value.progress.size[e.size],r.value.progress.rounded,r.value.progress.track,r.value.progress.bar,(n=r.value.progress.color)==null?void 0:n.replaceAll("{color}",e.color),r.value.progress.background,r.value.progress.indeterminate.base,r.value.progress.indeterminate.rounded];return c.value&&a.push(r.value.animation[e.animation]),t(...a)}),d=s(()=>{var a;return t(r.value.steps.base,(a=r.value.steps.color)==null?void 0:a.replaceAll("{color}",e.color),r.value.steps.size[e.size])}),l=s(()=>t(r.value.step.base,r.value.step.align)),S=s(()=>t(r.value.step.active)),$=s(()=>t(r.value.step.first));function N(a){return a===Number(e.value)}function j(a){return a===0}function M(a){a=Number(a);const n=[l.value];return j(a)&&n.push($.value),N(a)&&n.push(S.value),n.join(" ")}const c=s(()=>e.value===void 0||e.value===null),O=s(()=>Array.isArray(e.max)),p=s(()=>c.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),B=s(()=>{if(!c.value)switch(!0){case e.value<0:return 0;case e.value>p.value:return 100;default:return e.value/p.value*100}});return{ui:r,attrs:y,indicatorContainerClass:x,indicatorClass:w,progressClass:k,stepsClass:d,stepClasses:M,isIndeterminate:c,isSteps:O,realMax:p,percent:B}}});function K(e,r,y,x,w,k){return o(),u("div",f({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?z(e.$slots,"indicator",A(f({key:0},{percent:e.percent})),()=>[e.isSteps?m("",!0):(o(),u("div",{key:0,class:g(e.indicatorContainerClass),style:L({width:`${e.percent}%`})},[C("div",{class:g(e.indicatorClass)},v(Math.round(e.percent))+"% ",3)],6))],!0):m("",!0),C("progress",f({class:e.progressClass},{value:e.value,max:e.realMax}),v(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17),e.isSteps?(o(),u("div",{key:1,class:g(e.stepsClass)},[(o(!0),u(R,null,q(e.max,(d,l)=>(o(),u("div",{key:l,class:g(e.stepClasses(l))},[z(e.$slots,`step-${l}`,A(E({step:d})),()=>[D(v(d),1)],!0)],2))),128))],2)):m("",!0)],16)}const T=F(J,[["render",K],["__scopeId","data-v-1e545a26"]]);export{T as default};
