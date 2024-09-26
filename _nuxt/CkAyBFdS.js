import{_ as w,a1 as I,a2 as d,Z as P,T as M,a4 as U,j as g,y as t,ad as l,o as k,c as V,z as S,a as o,R as i,t as $,an as R,A as h,Q as c,S as m,I as T,d as D}from"./B5KGO6qV.js";import{m as E}from"./DOl6dAT8.js";import"./Dgc4RXB8.js";const s=I(d.ui.strategy,d.ui.meter,E),J=P({components:{UIcon:M},inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.meter.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...d.ui.colors,...Object.keys(s.color)].includes(e)}},icon:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:v}=U("meter",g(e,"ui"),s,g(e,"class"));function f(C,r,n){if(r==n)return C<r?0:100;r>n&&(n=[r,r=n][0]);const O=(C-r)/(n-r)*100;return Math.max(0,Math.min(100,O))}const b=t(()=>l(a.value.indicator.container)),p=t(()=>l(a.value.indicator.text,a.value.indicator.size[e.size])),u=t(()=>l(a.value.meter.base,a.value.meter.background,a.value.meter.ring,a.value.meter.rounded,a.value.meter.shadow,a.value.color[e.color]??a.value.meter.color.replaceAll("{color}",e.color),a.value.meter.size[e.size])),A=t(()=>l(a.value.meter.appearance.inner,a.value.meter.appearance.meter,a.value.meter.appearance.bar,a.value.meter.appearance.value)),B=t(()=>l(a.value.meter.bar.transition,a.value.meter.bar.ring,a.value.meter.bar.rounded,a.value.meter.bar.size[e.size])),N=t(()=>l(a.value.label.base,a.value.label.text,a.value.color[e.color]??a.value.label.color.replaceAll("{color}",e.color),a.value.label.size[e.size])),y=t(()=>e.min>e.max?e.max:e.min),z=t(()=>e.max<e.min?e.min:e.max),j=t(()=>f(Number(e.value),y.value,z.value));return{ui:a,attrs:v,indicatorContainerClass:b,indicatorClass:p,meterClass:u,meterAppearanceClass:A,meterBarClass:B,labelClass:N,normalizedMin:y,normalizedMax:z,percent:j}}}),Q=["value","min","max"];function Z(e,a,v,f,b,p){const u=M;return k(),V("div",c({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?S(e.$slots,"indicator",h(c({key:0},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.indicatorContainerClass),style:R({width:`${e.percent}%`})},[o("div",{class:i(e.indicatorClass)},$(Math.round(e.percent))+"% ",3)],6)]):m("",!0),o("meter",{value:e.value,min:e.normalizedMin,max:e.normalizedMax,class:i([e.meterClass,e.meterAppearanceClass,e.meterBarClass])},null,10,Q),e.label||e.$slots.label?S(e.$slots,"label",h(c({key:1},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.labelClass)},[e.icon?(k(),T(u,{key:0,name:e.icon},null,8,["name"])):m("",!0),D(" "+$(e.label),1)],2)]):m("",!0)],16)}const H=w(J,[["render",Z]]);export{H as default};
