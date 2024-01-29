import{_ as L,ac as B,ad as v,g as D,v as k,Z as h,aV as w,af as M,W as p,k as P,aW as S,ak as _,al as j,o as r,c as s,F as f,n as y,b as F,w as J,A as n,s as l,V as g,z as t,y as c,d as K,t as m,ai as O}from"./entry.RTXGjyIc.js";import $ from"./Divider.sUzveRWe.js";const W={wrapper:"relative",base:"group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-3 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-4 h-4",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"3xs"},badge:{base:"relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5",active:"bg-white dark:bg-gray-900",inactive:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900"},divider:{wrapper:{base:"p-2"}}},E=B(v.ui.strategy,v.ui.verticalNavigation,W),I=D({components:{UIcon:k,UAvatar:h,ULink:w,UDivider:$},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:d}=M("verticalNavigation",p(e,"ui"),E,p(e,"class")),b=P(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:o,attrs:d,sections:b,getULinkProps:S,twMerge:_,twJoin:j}}}),R={key:0,class:"sr-only"};function T(e,o,d,b,Z,q){const C=h,U=k,z=w,N=$;return r(),s("nav",g({class:e.ui.wrapper},e.attrs),[(r(!0),s(f,null,y(e.sections,(A,u)=>(r(),s("ul",{key:`section${u}`},[(r(!0),s(f,null,y(A,(a,V)=>(r(),s("li",{key:`section${u}-${V}`},[F(z,g(e.getULinkProps(a),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:o[0]||(o[0]=O(i=>i.target.blur(),["enter"]))}),{default:J(({isActive:i})=>[n(e.$slots,"avatar",{link:a,isActive:i},()=>[a.avatar?(r(),l(C,g({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):t("",!0)]),n(e.$slots,"icon",{link:a,isActive:i},()=>[a.icon?(r(),l(U,{key:0,name:a.icon,class:c(e.twMerge(e.twJoin(e.ui.icon.base,i?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):t("",!0)]),n(e.$slots,"default",{link:a,isActive:i},()=>[a.label?(r(),s("span",{key:0,class:c(e.twMerge(e.ui.label,a.labelClass))},[i?(r(),s("span",R," Current page: ")):t("",!0),K(" "+m(a.label),1)],2)):t("",!0)]),n(e.$slots,"badge",{link:a,isActive:i},()=>[a.badge?(r(),s("span",{key:0,class:c([e.ui.badge.base,i?e.ui.badge.active:e.ui.badge.inactive])},m(a.badge),3)):t("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),u<e.sections.length-1?(r(),l(N,{key:0,ui:e.ui.divider},null,8,["ui"])):t("",!0)]))),128))],16)}const H=L(I,[["render",T]]);export{H as default};
