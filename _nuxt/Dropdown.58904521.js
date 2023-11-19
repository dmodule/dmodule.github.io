import{_ as ne}from"./nuxt-link.ece1b4ed.js";import W from"./Icon.78279365.js";import Y from"./Avatar.d428d4c2.js";import Z from"./Kbd.30c0fcd3.js";import{f as O,aL as h,x as S,aG as oe,az as X,aE as ue,br as le,ap as D,ac as se,_ as re,bI as ie,bJ as V,b5 as q,bM as de,aQ as $,o as I,z as P,w as R,b as H,aP as x,a as L,c as w,aq as T,as as pe,j as ce,ao as A,A as N,F,aO as j,aS as ve,t as Q,d as me}from"./entry.e729eafb.js";import{h as fe,u as be,o as ge}from"./ui.config.642def0d.js";import{u as ye}from"./usePopper.4c94c7a9.js";import{o as g,u as Ie,H as E,t as U,N as J,a as b}from"./dom.8e954345.js";import{p as Me,u as he,x as Se,a as M}from"./use-tracked-pointer.dc3b39da.js";import{c as ke,l as B,p as Re}from"./open-closed.26883f27.js";import{b as we}from"./use-resolve-button-type.b0c920a1.js";import{w as Pe,h as Te,v as De,N as G,_ as ee,O as Oe}from"./focus-management.06592d18.js";import{y as Ce}from"./use-outside-click.779f272c.js";import{p as $e}from"./use-text-value.92d33bbc.js";import"./tw-merge.198ab33a.js";import"./index.09adc765.js";import"./index.ef41713e.js";var Ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ae||{}),Ne=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ne||{});function Be(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let te=Symbol("MenuContext");function _(e){let v=se(te,null);if(v===null){let y=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(y,_),y}return v}let Ee=O({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:v,attrs:y}){let f=h(1),t=h(null),m=h(null),l=h([]),p=h(""),r=h(null),d=h(1);function a(s=o=>o){let o=r.value!==null?l.value[r.value]:null,u=Oe(s(l.value.slice()),i=>g(i.dataRef.domRef)),n=o?u.indexOf(o):null;return n===-1&&(n=null),{items:u,activeItemIndex:n}}let c={menuState:f,buttonRef:t,itemsRef:m,items:l,searchQuery:p,activeItemIndex:r,activationTrigger:d,closeMenu:()=>{f.value=1,r.value=null},openMenu:()=>f.value=0,goToItem(s,o,u){let n=a(),i=Se(s===M.Specific?{focus:M.Specific,id:o}:{focus:s},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:k=>k.id,resolveDisabled:k=>k.dataRef.disabled});p.value="",r.value=i,d.value=u??1,l.value=n.items},search(s){let o=p.value!==""?0:1;p.value+=s.toLowerCase();let u=(r.value!==null?l.value.slice(r.value+o).concat(l.value.slice(0,r.value+o)):l.value).find(i=>i.dataRef.textValue.startsWith(p.value)&&!i.dataRef.disabled),n=u?l.value.indexOf(u):-1;n===-1||n===r.value||(r.value=n,d.value=1)},clearSearch(){p.value=""},registerItem(s,o){let u=a(n=>[...n,{id:s,dataRef:o}]);l.value=u.items,r.value=u.activeItemIndex,d.value=1},unregisterItem(s){let o=a(u=>{let n=u.findIndex(i=>i.id===s);return n!==-1&&u.splice(n,1),u});l.value=o.items,r.value=o.activeItemIndex,d.value=1}};return Ce([t,m],(s,o)=>{var u;c.closeMenu(),Pe(o,Te.Loose)||(s.preventDefault(),(u=g(t))==null||u.focus())},S(()=>f.value===0)),oe(te,c),ke(S(()=>Ie(f.value,{0:B.Open,1:B.Closed}))),()=>{let s={open:f.value===0,close:c.closeMenu};return E({ourProps:{},theirProps:e,slot:s,slots:v,attrs:y,name:"Menu"})}}}),_e=O({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${U()}`}},setup(e,{attrs:v,slots:y,expose:f}){let t=_("MenuButton");f({el:t.buttonRef,$el:t.buttonRef});function m(d){switch(d.key){case b.Space:case b.Enter:case b.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),D(()=>{var a;(a=g(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(M.First)});break;case b.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),D(()=>{var a;(a=g(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(M.Last)});break}}function l(d){switch(d.key){case b.Space:d.preventDefault();break}}function p(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),D(()=>{var a;return(a=g(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),Be(()=>{var a;return(a=g(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let r=we(S(()=>({as:e.as,type:v.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{id:c,...s}=e,o={ref:t.buttonRef,id:c,type:r.value,"aria-haspopup":"menu","aria-controls":(d=g(t.itemsRef))==null?void 0:d.id,"aria-expanded":t.menuState.value===0,onKeydown:m,onKeyup:l,onClick:p};return E({ourProps:o,theirProps:s,slot:a,attrs:v,slots:y,name:"MenuButton"})}}}),He=O({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${U()}`}},setup(e,{attrs:v,slots:y,expose:f}){let t=_("MenuItems"),m=h(null);f({el:t.itemsRef,$el:t.itemsRef}),Me({container:S(()=>g(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function l(a){var c;switch(m.value&&clearTimeout(m.value),a.key){case b.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let s=t.items.value[t.activeItemIndex.value];(c=g(s.dataRef.domRef))==null||c.click()}t.closeMenu(),ee(g(t.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(M.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(M.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(M.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(M.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),D(()=>{var s;return(s=g(t.buttonRef))==null?void 0:s.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),D(()=>De(g(t.buttonRef),a.shiftKey?G.Previous:G.Next));break;default:a.key.length===1&&(t.search(a.key),m.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case b.Space:a.preventDefault();break}}let r=Re(),d=S(()=>r!==null?(r.value&B.Open)===B.Open:t.menuState.value===0);return()=>{var a,c;let s={open:t.menuState.value===0},{id:o,...u}=e,n={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(c=g(t.buttonRef))==null?void 0:c.id,id:o,onKeydown:l,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return E({ourProps:n,theirProps:u,slot:s,attrs:v,slots:y,features:J.RenderStrategy|J.Static,visible:d.value,name:"MenuItems"})}}}),Le=O({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${U()}`}},setup(e,{slots:v,attrs:y,expose:f}){let t=_("MenuItem"),m=h(null);f({el:m,$el:m});let l=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),p=$e(m),r=S(()=>({disabled:e.disabled,get textValue(){return p()},domRef:m}));X(()=>t.registerItem(e.id,r)),ue(()=>t.unregisterItem(e.id)),le(()=>{t.menuState.value===0&&l.value&&t.activationTrigger.value!==0&&D(()=>{var n,i;return(i=(n=g(m))==null?void 0:n.scrollIntoView)==null?void 0:i.call(n,{block:"nearest"})})});function d(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ee(g(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(M.Nothing);t.goToItem(M.Specific,e.id)}let c=he();function s(n){c.update(n)}function o(n){c.wasMoved(n)&&(e.disabled||l.value||t.goToItem(M.Specific,e.id,0))}function u(n){c.wasMoved(n)&&(e.disabled||l.value&&t.goToItem(M.Nothing))}return()=>{let{disabled:n}=e,i={active:l.value,disabled:n,close:t.closeMenu},{id:k,...C}=e;return E({ourProps:{id:k,ref:m,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:a,onPointerenter:s,onMouseenter:s,onPointermove:o,onMousemove:o,onPointerleave:u,onMouseleave:u},theirProps:{...y,...C},slot:i,attrs:y,slots:v,name:"MenuItem"})}}});const Fe=ie(V.ui.strategy,V.ui.dropdown,fe),je=O({components:{HMenu:Ee,HMenuButton:_e,HMenuItems:He,HMenuItem:Le,UIcon:W,UAvatar:Y,UKbd:Z},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:v,attrs:y}=be("dropdown",q(e,"ui"),Fe,q(e,"class")),f=S(()=>de(e.mode==="hover"?{offsetDistance:0}:{},e.popper,v.value.popper)),[t,m]=ye(f.value),l=h(null);let p=null,r=null;X(()=>{setTimeout(()=>{var n;const o=(n=t.value)==null?void 0:n.$.provides;if(!o)return;const u=Object.getOwnPropertySymbols(o);l.value=u.length&&o[u[0]]},200)});const d=S(()=>{var u,n;const o=((u=e.popper)==null?void 0:u.offsetDistance)||((n=v.value.popper)==null?void 0:n.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${o}px`,paddingBottom:`${o}px`}:{}});function a(){e.mode!=="hover"||!l.value||(r&&(clearTimeout(r),r=null),l.value.menuState!==0&&(p=p||setTimeout(()=>{l.value.openMenu&&l.value.openMenu(),p=null},e.openDelay)))}function c(){e.mode!=="hover"||!l.value||(p&&(clearTimeout(p),p=null),l.value.menuState!==1&&(r=r||setTimeout(()=>{l.value.closeMenu&&l.value.closeMenu(),r=null},e.closeDelay)))}return{ui:v,attrs:y,popper:f,trigger:t,container:m,containerStyle:d,onMouseOver:a,onMouseLeave:c,omit:ge,NuxtLink:ne}}}),Ue=["disabled"],ze={class:"truncate"};function Ke(e,v,y,f,t,m){const l=$("HMenuButton"),p=W,r=Y,d=Z,a=$("HMenuItem"),c=$("HMenuItems"),s=$("HMenu");return I(),P(s,A({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:R(({open:o})=>[H(l,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:R(()=>[x(e.$slots,"default",{open:o,disabled:e.disabled},()=>[L("button",{disabled:e.disabled}," Open ",8,Ue)])]),_:2},1032,["disabled","onMouseover"]),o&&e.items.length?(I(),w("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:pe(e.containerStyle),onMouseover:v[0]||(v[0]=(...u)=>e.onMouseOver&&e.onMouseOver(...u))},[H(ce,A({appear:""},e.ui.transition),{default:R(()=>[L("div",null,[e.popper.arrow?(I(),w("div",{key:0,"data-popper-arrow":"",class:T(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):N("",!0),H(c,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:R(()=>[(I(!0),w(F,null,j(e.items,(u,n)=>(I(),w("div",{key:n,class:T(e.ui.padding)},[(I(!0),w(F,null,j(u,(i,k)=>(I(),P(a,{key:k,disabled:i.disabled},{default:R(({active:C,disabled:ae})=>[(I(),P(ve(i.to?e.NuxtLink:"button"),A(e.omit(i,["label","slot","icon","iconClass","avatar","shortcuts","disabled","click"]),{class:[e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,C?e.ui.item.active:e.ui.item.inactive,ae&&e.ui.item.disabled],onClick:i.click}),{default:R(()=>[x(e.$slots,i.slot||"item",{item:i},()=>{var z;return[i.icon?(I(),P(p,{key:0,name:i.icon,class:T([e.ui.item.icon.base,C?e.ui.item.icon.active:e.ui.item.icon.inactive,i.iconClass])},null,8,["name","class"])):i.avatar?(I(),P(r,A({key:1},{size:e.ui.item.avatar.size,...i.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):N("",!0),L("span",ze,Q(i.label),1),(z=i.shortcuts)!=null&&z.length?(I(),w("span",{key:2,class:T(e.ui.item.shortcuts)},[(I(!0),w(F,null,j(i.shortcuts,K=>(I(),P(d,{key:K},{default:R(()=>[me(Q(K),1)]),_:2},1024))),128))],2)):N("",!0)]})]),_:2},1040,["class","onClick"]))]),_:2},1032,["disabled"]))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):N("",!0)]),_:3},16,["class","onMouseleave"])}const st=re(je,[["render",Ke]]);export{st as default};
