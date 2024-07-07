import{g as k,r as g,aa as F,C as b,h as V,O as G,m as Y,ab as Q,ac as X,ad as O,ae as x,_ as ee,v as Z,B as q,af as te,M as U,P as oe,ag as ne,ah as C,o as D,c as $,I as se,X as ae,A as j,w as h,b as I,ai as z,U as P,n as K,s as S,aj as le,d as T,t as M,F as re,G as ue}from"./DlcRhjNe.js";import{u as ie}from"./9wEL8AXm.js";import{I as N,u as _,o as y,A as L,N as R,a as B,l as ce}from"./CKQJdjjE.js";import{s as de}from"./CL0pd27E.js";import{t as pe,i as w,l as fe}from"./vNAO0HN3.js";const ve={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}};var me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(me||{});let J=Symbol("DisclosureContext");function A(e){let c=Q(J,null);if(c===null){let p=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,A),p}return c}let W=Symbol("DisclosurePanelContext");function ge(){return Q(W,null)}let he=k({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:c,attrs:p}){let u=g(e.defaultOpen?0:1),o=g(null),d=g(null),l={buttonId:g(`headlessui-disclosure-button-${N()}`),panelId:g(`headlessui-disclosure-panel-${N()}`),disclosureState:u,panel:o,button:d,toggleDisclosure(){u.value=_(u.value,{0:1,1:0})},closeDisclosure(){u.value!==1&&(u.value=1)},close(a){l.closeDisclosure();let i=a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?y(a):y(l.button):y(l.button);i==null||i.focus()}};return F(J,l),pe(b(()=>_(u.value,{0:w.Open,1:w.Closed}))),()=>{let{defaultOpen:a,...i}=e,f={open:u.value===0,close:l.close};return L({theirProps:i,ourProps:{},slot:f,slots:c,attrs:p,name:"Disclosure"})}}}),ye=k({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:c,slots:p,expose:u}){let o=A("DisclosureButton"),d=ge(),l=b(()=>d===null?!1:d.value===o.panelId.value);V(()=>{l.value||e.id!==null&&(o.buttonId.value=e.id)}),G(()=>{l.value||(o.buttonId.value=null)});let a=g(null);u({el:a,$el:a}),l.value||Y(()=>{o.button.value=a.value});let i=de(b(()=>({as:e.as,type:c.type})),a);function f(){var t;e.disabled||(l.value?(o.toggleDisclosure(),(t=y(o.button))==null||t.focus()):o.toggleDisclosure())}function m(t){var n;if(!e.disabled)if(l.value)switch(t.key){case B.Space:case B.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure(),(n=y(o.button))==null||n.focus();break}else switch(t.key){case B.Space:case B.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure();break}}function r(t){switch(t.key){case B.Space:t.preventDefault();break}}return()=>{var t;let n={open:o.disclosureState.value===0},{id:s,...v}=e,E=l.value?{ref:a,type:i.value,onClick:f,onKeydown:m}:{id:(t=o.buttonId.value)!=null?t:s,ref:a,type:i.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||y(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:m,onKeyup:r};return L({ourProps:E,theirProps:v,slot:n,attrs:c,slots:p,name:"DisclosureButton"})}}}),be=k({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:c,slots:p,expose:u}){let o=A("DisclosurePanel");V(()=>{e.id!==null&&(o.panelId.value=e.id)}),G(()=>{o.panelId.value=null}),u({el:o.panel,$el:o.panel}),F(W,o.panelId);let d=fe(),l=b(()=>d!==null?(d.value&w.Open)===w.Open:o.disclosureState.value===0);return()=>{var a;let i={open:o.disclosureState.value===0,close:o.close},{id:f,...m}=e,r={id:(a=o.panelId.value)!=null?a:f,ref:o.panel};return L({ourProps:r,theirProps:m,slot:i,attrs:c,slots:p,features:R.RenderStrategy|R.Static,visible:l.value,name:"DisclosurePanel"})}}});const H=X(O.ui.strategy,O.ui.accordion,ve),De=X(O.ui.strategy,O.ui.button,x),Ie=k({components:{HDisclosure:he,HDisclosureButton:ye,HDisclosurePanel:be,UIcon:Z,UButton:q},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>H.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>H.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(e,{emit:c}){const{ui:p,attrs:u}=te("accordion",U(e,"ui"),H,U(e,"class")),o=b(()=>De),d=g([]),l=b(()=>d.value.map(({open:t})=>t));oe(l,(t,n)=>{for(const s in t){const v=n[s],E=t[s];!v&&E&&c("open",s)}},{immediate:!0});function a(t,n){!e.items[t].closeOthers&&e.multiple||d.value.forEach(s=>{s.open&&s.close(n.target)})}function i(t,n){const s=t;s.style.height="0",s.offsetHeight,s.style.height=s.scrollHeight+"px",s.addEventListener("transitionend",n,{once:!0})}function f(t){const n=t;n.style.height=n.scrollHeight+"px",n.offsetHeight}function m(t){const n=t;n.style.height="auto"}function r(t,n){const s=t;s.style.height="0",s.addEventListener("transitionend",n,{once:!0})}return ce(()=>ie("$SZ7s8siktv")),{ui:p,uiButton:o,attrs:u,buttonRefs:d,closeOthers:a,omit:ne,onEnter:i,onBeforeLeave:f,onAfterEnter:m,onLeave:r}}}),Se={key:1};function Be(e,c,p,u,o,d){const l=Z,a=q,i=C("HDisclosureButton"),f=C("HDisclosurePanel"),m=C("HDisclosure");return D(),$("div",{class:S(e.ui.wrapper)},[(D(!0),$(se,null,ae(e.items,(r,t)=>(D(),j(m,{key:t,as:"div",class:S(e.ui.container),"default-open":e.defaultOpen||r.defaultOpen},{default:h(({open:n,close:s})=>[I(i,{ref_for:!0,ref:()=>e.buttonRefs[t]={open:n,close:s},as:"template",disabled:r.disabled,onClick:v=>e.closeOthers(t,v),onKeydown:[z(v=>e.closeOthers(t,v),["enter"]),z(v=>e.closeOthers(t,v),["space"])]},{default:h(()=>[P(e.$slots,"default",{item:r,index:t,open:n,close:s},()=>[I(a,K({ref_for:!0},{...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(r,["slot","disabled","content","defaultOpen"])}),{trailing:h(()=>[I(l,{name:n&&e.closeIcon?e.closeIcon:e.openIcon,class:S([n&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[r.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),I(le,K({ref_for:!0},e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:h(()=>[e.unmount?(D(),j(f,{key:0,class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),unmount:""},{default:h(()=>[P(e.$slots,r.slot||"item",{item:r,index:t,open:n,close:s},()=>[T(M(r.content),1)])]),_:2},1032,["class"])):re((D(),$("div",Se,[I(f,{class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:h(()=>[P(e.$slots,r.slot||"item",{item:r,index:t,open:n,close:s},()=>[T(M(r.content),1)])]),_:2},1032,["class"])],512)),[[ue,n]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const $e=ee(Ie,[["render",Be]]);export{$e as default};