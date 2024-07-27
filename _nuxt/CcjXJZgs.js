import{g as B,r as w,B as T,ab as me,h as oe,N as fe,l as ge,a8 as A,ac as be,ad as Me,aV as Ie,ae as Z,_ as ye,s as ue,D as le,ag as he,L as Y,aw as Se,O as x,aW as ke,ak as we,al as Te,ai as $,o as S,z as N,w as R,b as L,q as P,T as ee,a as K,c as D,aF as Pe,a2 as Re,m as H,G as F,H as z,W as J,X as De,t as te,d as Ce,e as se}from"./CK5d3MQh.js";import re from"./BCTY03xV.js";import{u as Oe}from"./DoSHHGPH.js";import{o as I,u as Ne,A as U,I as q,N as ae,a as b,l as Ae}from"./BFKQxsH8.js";import{w as Be}from"./ByZKupdY.js";import{s as Ee}from"./CDzbEHWk.js";import{p as $e}from"./X-oxiXM3.js";import{i as Le,u as He,f as Fe,c as k}from"./DHTBjlOR.js";import{t as je,i as j,l as Ue}from"./CrJHp-Pz.js";import{w as _e,h as Ke,v as ze,N as ne,_ as ie,O as Je}from"./D4GacT3T.js";import{u as Ve}from"./CYZMZs_g.js";var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{}),We=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(We||{});function Qe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let de=Symbol("MenuContext");function _(e){let f=be(de,null);if(f===null){let g=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(g,_),g}return f}let Ge=B({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:f,attrs:g}){let M=w(1),v=w(null),m=w(null),t=w([]),o=w(""),r=w(null),p=w(1);function y(a=s=>s){let s=r.value!==null?t.value[r.value]:null,u=Je(a(t.value.slice()),l=>I(l.dataRef.domRef)),i=s?u.indexOf(s):null;return i===-1&&(i=null),{items:u,activeItemIndex:i}}let d={menuState:M,buttonRef:v,itemsRef:m,items:t,searchQuery:o,activeItemIndex:r,activationTrigger:p,closeMenu:()=>{M.value=1,r.value=null},openMenu:()=>M.value=0,goToItem(a,s,u){let i=y(),l=Fe(a===k.Specific?{focus:k.Specific,id:s}:{focus:a},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",r.value=l,p.value=u??1,t.value=i.items},search(a){let s=o.value!==""?0:1;o.value+=a.toLowerCase();let u=(r.value!==null?t.value.slice(r.value+s).concat(t.value.slice(0,r.value+s)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),i=u?t.value.indexOf(u):-1;i===-1||i===r.value||(r.value=i,p.value=1)},clearSearch(){o.value=""},registerItem(a,s){let u=y(i=>[...i,{id:a,dataRef:s}]);t.value=u.items,r.value=u.activeItemIndex,p.value=1},unregisterItem(a){let s=y(u=>{let i=u.findIndex(l=>l.id===a);return i!==-1&&u.splice(i,1),u});t.value=s.items,r.value=s.activeItemIndex,p.value=1}};return Be([v,m],(a,s)=>{var u;d.closeMenu(),_e(s,Ke.Loose)||(a.preventDefault(),(u=I(v))==null||u.focus())},T(()=>M.value===0)),me(de,d),je(T(()=>Ne(M.value,{0:j.Open,1:j.Closed}))),()=>{let a={open:M.value===0,close:d.closeMenu};return U({ourProps:{},theirProps:e,slot:a,slots:f,attrs:g,name:"Menu"})}}}),Xe=B({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:f,slots:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-button-${q()}`,t=_("MenuButton");M({el:t.buttonRef,$el:t.buttonRef});function o(d){switch(d.key){case b.Space:case b.Enter:case b.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),A(()=>{var a;(a=I(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.First)});break;case b.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),A(()=>{var a;(a=I(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function r(d){switch(d.key){case b.Space:d.preventDefault();break}}function p(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),A(()=>{var a;return(a=I(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),Qe(()=>{var a;return(a=I(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let y=Ee(T(()=>({as:e.as,type:f.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{...s}=e,u={ref:t.buttonRef,id:m,type:y.value,"aria-haspopup":"menu","aria-controls":(d=I(t.itemsRef))==null?void 0:d.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:r,onClick:p};return U({ourProps:u,theirProps:s,slot:a,attrs:f,slots:g,name:"MenuButton"})}}}),Ze=B({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:f,slots:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-items-${q()}`,t=_("MenuItems"),o=w(null);M({el:t.itemsRef,$el:t.itemsRef}),Le({container:T(()=>I(t.itemsRef)),enabled:T(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function r(a){var s;switch(o.value&&clearTimeout(o.value),a.key){case b.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(s=I(u.dataRef.domRef))==null||s.click()}t.closeMenu(),ie(I(t.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>{var u;return(u=I(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>ze(I(t.buttonRef),a.shiftKey?ne.Previous:ne.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case b.Space:a.preventDefault();break}}let y=Ue(),d=T(()=>y!==null?(y.value&j.Open)===j.Open:t.menuState.value===0);return()=>{var a,s;let u={open:t.menuState.value===0},{...i}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(s=I(t.buttonRef))==null?void 0:s.id,id:m,onKeydown:r,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return U({ourProps:l,theirProps:i,slot:u,attrs:f,slots:g,features:ae.RenderStrategy|ae.Static,visible:d.value,name:"MenuItems"})}}}),Ye=B({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:f,attrs:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-item-${q()}`,t=_("MenuItem"),o=w(null);M({el:o,$el:o});let r=T(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===m:!1),p=$e(o),y=T(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));oe(()=>t.registerItem(m,y)),fe(()=>t.unregisterItem(m)),ge(()=>{t.menuState.value===0&&r.value&&t.activationTrigger.value!==0&&A(()=>{var n,c;return(c=(n=I(o))==null?void 0:n.scrollIntoView)==null?void 0:c.call(n,{block:"nearest"})})});function d(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ie(I(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,m)}let s=He();function u(n){s.update(n)}function i(n){s.wasMoved(n)&&(e.disabled||r.value||t.goToItem(k.Specific,m,0))}function l(n){s.wasMoved(n)&&(e.disabled||r.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:n,...c}=e,h={active:r.value,disabled:n,close:t.closeMenu};return U({ourProps:{id:m,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:d,onFocus:a,onPointerenter:u,onMouseenter:u,onPointermove:i,onMousemove:i,onPointerleave:l,onMouseleave:l},theirProps:{...g,...c},slot:h,attrs:g,slots:f,name:"MenuItem"})}}});const V=Me(Z.ui.strategy,Z.ui.dropdown,Ie),xe=B({components:{HMenu:Ge,HMenuButton:Xe,HMenuItems:Ze,HMenuItem:Ye,UIcon:ue,UAvatar:le,UKbd:re},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>V.default.openDelay},closeDelay:{type:Number,default:()=>V.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:f}){const{ui:g,attrs:M}=he("dropdown",Y(e,"ui"),V,Y(e,"class")),v=T(()=>Se(e.mode==="hover"?{offsetDistance:0}:{},e.popper,g.value.popper)),[m,t]=Ve(v.value),o=w(null);let r=null,p=null;oe(()=>{var c,h;const l=(c=m.value)==null?void 0:c.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((h=o.value)==null||h.openMenu())});const y=T(()=>{var h,C,O;if(e.mode!=="hover")return{};const l=((h=e.popper)==null?void 0:h.offsetDistance)||((C=g.value.popper)==null?void 0:C.offsetDistance)||8,n=(O=v.value.placement)==null?void 0:O.split("-")[0],c=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:c,paddingBottom:c}:n==="left"||n==="right"?{paddingLeft:c,paddingRight:c}:{paddingTop:c,paddingBottom:c,paddingLeft:c,paddingRight:c}});function d(l){!l.cancelable||!o.value||(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(r=r||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),r=null},e.openDelay)))}function s(){e.mode!=="hover"||!o.value||(r&&(clearTimeout(r),r=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function u(l,n,{href:c,navigate:h,close:C,isExternal:O}){n.click&&n.click(l),c&&!O&&(h(l),C())}x(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),x(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||f("update:open",l===0)});const i=se;return Ae(()=>Oe("$ctlRmIk4j0")),{ui:g,attrs:M,popper:v,trigger:m,container:t,containerStyle:y,onTouchStart:d,onMouseEnter:a,onMouseLeave:s,onClick:u,getNuxtLinkProps:ke,twMerge:we,twJoin:Te,NuxtLink:i}}}),et=["disabled"];function tt(e,f,g,M,v,m){const t=$("HMenuButton"),o=ue,r=le,p=re,y=$("HMenuItem"),d=se,a=$("HMenuItems"),s=$("HMenu");return S(),N(s,H({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:R(({open:u})=>[L(t,{ref:"trigger",as:"div",disabled:e.disabled,class:P(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:R(()=>[ee(e.$slots,"default",{open:u,disabled:e.disabled},()=>[K("button",{disabled:e.disabled}," Open ",8,et)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),u&&e.items.length?(S(),D("div",{key:0,ref:"container",class:P([e.ui.container,e.ui.width]),style:Pe(e.containerStyle),onMouseenter:f[0]||(f[0]=(...i)=>e.onMouseEnter&&e.onMouseEnter(...i))},[L(Re,H({appear:""},e.ui.transition),{default:R(()=>[K("div",null,[e.popper.arrow?(S(),D("div",{key:0,"data-popper-arrow":"",class:P(Object.values(e.ui.arrow))},null,2)):F("",!0),L(a,{class:P([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:R(()=>[(S(!0),D(z,null,J(e.items,(i,l)=>(S(),D("div",{key:l,class:P(e.ui.padding)},[(S(!0),D(z,null,J(i,(n,c)=>(S(),N(d,H({key:c,ref_for:!0},e.getNuxtLinkProps(n),{custom:""}),{default:R(({href:h,target:C,rel:O,navigate:pe,isExternal:ce,isActive:W})=>[L(y,{disabled:n.disabled},{default:R(({active:Q,disabled:G,close:ve})=>[(S(),N(De(h?"a":"button"),{href:G?void 0:h,rel:O,target:C,class:P(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,Q||W?e.ui.item.active:e.ui.item.inactive,G&&e.ui.item.disabled),n.class)),onClick:E=>e.onClick(E,n,{href:h,navigate:pe,close:ve,isExternal:ce})},{default:R(()=>[ee(e.$slots,n.slot||"item",{item:n},()=>{var E;return[n.icon?(S(),N(o,{key:0,name:n.icon,class:P(e.twMerge(e.twJoin(e.ui.item.icon.base,Q||W?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(S(),N(r,H({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):F("",!0),K("span",{class:P(e.twMerge(e.ui.item.label,n.labelClass))},te(n.label),3),(E=n.shortcuts)!=null&&E.length?(S(),D("span",{key:2,class:P(e.ui.item.shortcuts)},[(S(!0),D(z,null,J(n.shortcuts,X=>(S(),N(p,{key:X},{default:R(()=>[Ce(te(X),1)]),_:2},1024))),128))],2)):F("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):F("",!0)]),_:3},16,["class","onMouseleave"])}const vt=ye(xe,[["render",tt]]);export{vt as default};
