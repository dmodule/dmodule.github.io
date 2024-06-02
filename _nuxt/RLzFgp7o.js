import{_ as r,o as s,A as a,w as l,d as f,B as d,v as B,b as n,E as v,q as c,g as T,r as k,D,c as g,a as i,t as b,s as S,H as L,J as z,i as P,C,I}from"./DeuvRX2B.js";import V from"./BuwH0_-h.js";import G from"./gdTWeAiW.js";import{_ as O}from"./CG8E31RL.js";import H from"./BF8oAuq9.js";import{d as j}from"./CAf-0z2Z.js";import U from"./BEuI_y2-.js";import Y from"./D7LmesOh.js";import q from"./DiBLpRjA.js";import $ from"./D1z4wb2C.js";import y from"./DrZJ7xE-.js";import w from"./CG4prUGf.js";import"./DYom9OWZ.js";import"./ClyZIH_o.js";import"./RrVta6Jm.js";import"./BA5lt-uR.js";import"./ChJpigYi.js";import"./CE_J2f_t.js";import"./BKK34w6v.js";import"./Bw6wRl9P.js";import"./DBU6bFYo.js";import"./DPjvhxRa.js";import"./D2UfmPWN.js";import"./DGk07Z2y.js";import"./o0Lo3ePE.js";import"./CxIZtCgj.js";const N={};function F(o,e){const t=d;return s(),a(t,{color:"black",variant:"solid"},{default:l(()=>[f("Button Black")]),_:1})}const E=r(N,[["render",F]]),M={};function R(o,e){const t=d;return s(),a(t,{color:"white",variant:"solid"},{default:l(()=>[f("Button Solid")]),_:1})}const W=r(M,[["render",R]]),J={};function Z(o,e){const t=d;return s(),a(t,{color:"primary",variant:"outline"},{default:l(()=>[f("Button Outline")]),_:1})}const K=r(J,[["render",Z]]),Q={};function X(o,e){const t=d;return s(),a(t,{variant:"soft"},{default:l(()=>[f("Button Soft")]),_:1})}const tt=r(Q,[["render",X]]),et={};function nt(o,e){const t=d;return s(),a(t,{size:"xs",variant:"ghost"},{default:l(()=>[f("Button Ghost")]),_:1})}const ot=r(et,[["render",nt]]),st={};function ct(o,e){const t=d;return s(),a(t,{size:"2xs",padded:!1,variant:"link",truncate:"",to:"https://volta.net",target:"_blank",class:"w-20",label:"Button link with a long text"})}const at=r(st,[["render",ct]]),it={};function rt(o,e){const t=B;return s(),a(t,{name:"i-heroicons-light-bulb"})}const lt=r(it,[["render",rt]]),ut={};function _t(o,e){const t=d;return s(),a(t,{icon:"i-heroicons-pencil-square",size:"md",color:"primary",square:"",variant:"solid",ui:{rounded:"rounded-full"}})}const mt=r(ut,[["render",_t]]),dt={};function pt(o,e){const t=d;return s(),a(t,{icon:"i-heroicons-pencil-square",size:"lg",color:"primary",variant:"solid",label:"Button Trailing",trailing:!0})}const ht=r(dt,[["render",pt]]),ft={};function gt(o,e){const t=d;return s(),a(t,{loading:"",disabled:"",size:"xl"},{default:l(()=>[f("Button Loading")]),_:1})}const bt=r(ft,[["render",gt]]),xt={};function vt(o,e){const t=V,m=d,u=G;return s(),a(u,{size:"sm",orientation:"horizontal"},{default:l(()=>[n(t),n(m,{icon:"i-heroicons-clipboard-document",color:"gray"})]),_:1})}const $t=r(xt,[["render",vt]]),yt={};function Bt(o,e){const t=v,m=d;return s(),a(m,{label:"Button",color:"gray"},{leading:l(()=>[n(t,{src:"https://avatars.githubusercontent.com/u/739984?v=4",size:"3xs"})]),_:1})}const Ut=r(yt,[["render",Bt]]),wt={__name:"DatePicker",props:{modelValue:{type:[Date,Object],default:null}},emits:["update:model-value"],setup(o,{emit:e}){const t=e,m=u=>{t("update:model-value",u)};return(u,_)=>{const p=d,h=O,x=H;return s(),a(x,{popper:{placement:"bottom-start"}},{panel:l(({close:A})=>[n(h,{"model-value":o.modelValue,"onUpdate:modelValue":m,onClose:A},null,8,["model-value","onClose"])]),default:l(()=>[n(p,{icon:"i-ri-calendar-line",label:c(j)(o.modelValue).format("DD/MM/YYYY")},null,8,["label"])]),_:1})}}},At=T({__name:"Base",setup(o){const e=k(new Date);return(t,m)=>{const u=wt;return s(),a(u,{modelValue:c(e),"onUpdate:modelValue":m[0]||(m[0]=_=>D(e)?e.value=_:null)},null,8,["modelValue"])}}}),qt={class:"relative"},Tt=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Btn",-1),Dt={__name:"Btn",setup(o){return(e,t)=>(s(),g("div",qt,[Tt,n(c(E)),n(c(W)),n(c(K)),n(c(tt)),n(c(ot)),n(c(at)),n(c(lt)),n(c(mt)),n(c(ht)),n(c(bt)),n(c($t)),n(c(Ut)),n(c(At))]))}},kt=Dt,St={};function Lt(o,e){const t=U;return s(),a(t,{color:"black",variant:"solid"},{default:l(()=>[f("Badge Black")]),_:1})}const zt=r(St,[["render",Lt]]),Pt={};function Ct(o,e){const t=U;return s(),a(t,{color:"white",variant:"solid"},{default:l(()=>[f("Badge Solid")]),_:1})}const It=r(Pt,[["render",Ct]]),Vt={};function Gt(o,e){const t=U;return s(),a(t,{color:"primary",variant:"outline"},{default:l(()=>[f("Badge Outline")]),_:1})}const Ot=r(Vt,[["render",Gt]]),Ht={};function jt(o,e){const t=U;return s(),a(t,{color:"blue",variant:"soft"},{default:l(()=>[f("Badge Soft")]),_:1})}const Yt=r(Ht,[["render",jt]]),Nt={class:"relative"},Ft=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Badge",-1),Et={__name:"Badge",setup(o){return(e,t)=>(s(),g("div",Nt,[Ft,n(c(zt)),n(c(It)),n(c(Ot)),n(c(Yt))]))}},Mt=Et,Rt={};function Wt(o,e){const t=v;return s(),a(t,{src:"https://avatars.githubusercontent.com/u/739984?v=4",alt:"Avatar"})}const Jt=r(Rt,[["render",Wt]]),Zt={};function Kt(o,e){const t=v;return s(),a(t,{alt:"Benjamin Canac",size:"sm"})}const Qt=r(Zt,[["render",Kt]]),Xt={};function te(o,e){const t=v;return s(),a(t,{icon:"i-heroicons-photo",size:"sm"})}const ee=r(Xt,[["render",te]]),ne={};function oe(o,e){const t=v;return s(),a(t,{"chip-color":"primary","chip-text":"","chip-position":"top-right",size:"sm",src:"https://avatars.githubusercontent.com/u/739984?v=4",alt:"Avatar"})}const se=r(ne,[["render",oe]]),ce={};function ae(o,e){const t=v,m=Y;return s(),a(m,{size:"sm",max:2},{default:l(()=>[n(t,{src:"https://avatars.githubusercontent.com/u/739984?v=4",alt:"benjamincanac"}),n(t,{src:"https://avatars.githubusercontent.com/u/904724?v=4",alt:"Atinux"}),n(t,{src:"https://avatars.githubusercontent.com/u/7547335?v=4",alt:"smarroufin"})]),_:1})}const ie=r(ce,[["render",ae]]),re={class:"relative"},le=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Avatar",-1),ue={__name:"Avatar",setup(o){return(e,t)=>(s(),g("div",re,[le,n(c(Jt)),n(c(Qt)),n(c(ee)),n(c(se)),n(c(ie))]))}},_e=ue,me={__name:"Base",setup(o){const e=[[{label:"Profile",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"}}],[{label:"Edit",icon:"i-heroicons-pencil-square-20-solid",shortcuts:["E"],click:()=>{console.log("Edit")}},{label:"Duplicate",icon:"i-heroicons-document-duplicate-20-solid",shortcuts:["D"],disabled:!0}],[{label:"Archive",icon:"i-heroicons-archive-box-20-solid"},{label:"Move",icon:"i-heroicons-arrow-right-circle-20-solid"}],[{label:"Delete",icon:"i-heroicons-trash-20-solid",shortcuts:["⌘","D"]}]];return(t,m)=>{const u=d,_=q;return s(),a(_,{items:e,popper:{placement:"bottom-start"}},{default:l(()=>[n(u,{color:"white",label:"Options","trailing-icon":"i-heroicons-chevron-down-20-solid"})]),_:1})}}},de={__name:"Hover",setup(o){const e=[[{label:"Profile",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"}}]];return(t,m)=>{const u=d,_=q;return s(),a(_,{mode:"hover",items:e,popper:{placement:"bottom",offsetDistance:0}},{default:l(()=>[n(u,{color:"white",label:"Options","trailing-icon":"i-heroicons-chevron-down-20-solid"})]),_:1})}}},pe={class:"text-left"},he=i("p",null,"Signed in as",-1),fe={class:"truncate font-medium text-gray-900 dark:text-white"},ge={class:"truncate"},be={__name:"Avatar",setup(o){const e=[[{label:"ben@example.com",slot:"account",disabled:!0}],[{label:"Settings",icon:"i-heroicons-cog-8-tooth"}],[{label:"Documentation",icon:"i-heroicons-book-open"},{label:"Changelog",icon:"i-heroicons-megaphone"},{label:"Status",icon:"i-heroicons-signal"}],[{label:"Sign out",icon:"i-heroicons-arrow-left-on-rectangle"}]];return(t,m)=>{const u=v,_=B,p=q;return s(),a(p,{items:e,ui:{item:{disabled:"cursor-text select-text"}},popper:{placement:"bottom-end"}},{account:l(({item:h})=>[i("div",pe,[he,i("p",fe,b(h.label),1)])]),item:l(({item:h})=>[i("span",ge,b(h.label),1),n(_,{name:h.icon,class:"flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"},null,8,["name"])]),default:l(()=>[n(u,{src:"https://avatars.githubusercontent.com/u/739984?v=4"})]),_:1})}}},xe={class:"relative"},ve=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Dropdown",-1),$e={__name:"Dropdown",setup(o){return(e,t)=>(s(),g("div",xe,[ve,n(c(me)),n(c(de)),n(c(be))]))}},ye=$e,Be={};function Ue(o,e){const t=$;return s(),a(t,{icon:"i-heroicons-command-line",description:"You can add components to your app using the cli.",title:"Heads up!"})}const we=r(Be,[["render",Ue]]),Ae={};function qe(o,e){const t=$;return s(),a(t,{icon:"i-heroicons-command-line",color:"green",variant:"solid",title:"Heads up!",description:"You can add components to your app using the cli."})}const Te=r(Ae,[["render",qe]]),De={};function ke(o,e){const t=$;return s(),a(t,{icon:"i-heroicons-command-line",color:"orange",variant:"outline",title:"Heads up!",description:"You can add components to your app using the cli."})}const Se=r(De,[["render",ke]]),Le={};function ze(o,e){const t=$;return s(),a(t,{icon:"i-heroicons-command-line",color:"red",variant:"soft",title:"Heads up!",description:"You can add components to your app using the cli."})}const Pe=r(Le,[["render",ze]]),Ce={};function Ie(o,e){const t=$;return s(),a(t,{description:"You can add components to your app using the cli.",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"},title:"Heads up!"},null,8,["avatar"])}const Ve=r(Ce,[["render",Ie]]),Ge={class:"relative"},Oe=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Alert",-1),He={__name:"Alert",setup(o){return(e,t)=>(s(),g("div",Ge,[Oe,n(c(we)),n(c(Te)),n(c(Se)),n(c(Pe)),n(c(Ve))]))}},je=He,Ye={};function Ne(o,e){const t=y;return s(),a(t,{color:"primary",variant:"solid",size:"sm",items:[{label:"1. What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"2. Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"3. Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"4. Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},null,8,["items"])}const Fe=r(Ye,[["render",Ne]]),Ee={};function Me(o,e){const t=y;return s(),a(t,{variant:"outline",multiple:"",items:[{label:"What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]})}const Re=r(Ee,[["render",Me]]),We={};function Je(o,e){const t=y;return s(),a(t,{variant:"soft","open-icon":"i-heroicons-plus","close-icon":"i-heroicons-minus",items:[{label:"1. What is Nuxt UI?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"2. Getting Started",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"3. Theming",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{label:"4. Components",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},null,8,["items"])}const Ze=r(We,[["render",Je]]),Ke={class:"w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"},Qe={class:"truncate"},Xe={__name:"Link",setup(o){const e=[{label:"Getting Started",icon:"i-heroicons-information-circle",defaultOpen:!0,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Installation",icon:"i-heroicons-arrow-down-tray",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Theming",icon:"i-heroicons-eye-dropper",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Layouts",icon:"i-heroicons-rectangle-group",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Components",icon:"i-heroicons-square-3-stack-3d",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Utilities",icon:"i-heroicons-wrench-screwdriver",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."}];return(t,m)=>{const u=B,_=d,p=y;return s(),a(p,{variant:"link",items:e,ui:{wrapper:"flex flex-col w-full"}},{default:l(({item:h,index:x,open:A})=>[n(_,{color:"gray",variant:"ghost",class:"ani-none border-b border-gray-200 dark:border-gray-700",ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{leading:l(()=>[i("div",Ke,[n(u,{name:h.icon,class:"w-4 h-4 text-white dark:text-gray-900"},null,8,["name"])])]),trailing:l(()=>[n(u,{name:"i-heroicons-chevron-right-20-solid",class:S(["w-5 h-5 ms-auto transform transition-transform duration-200",[A&&"rotate-90"]])},null,8,["class"])]),default:l(()=>[i("span",Qe,b(x+1)+". "+b(h.label),1)]),_:2},1024)]),_:1})}}},tn={class:"italic text-gray-900 dark:text-white text-center"},en=i("div",{class:"text-gray-900 dark:text-white text-center"},[i("p",{class:"text-sm text-gray-500 dark:text-gray-400 mt-2"}," Fully styled and customizable components for Nuxt. ")],-1),nn={class:"flex flex-col justify-center items-center gap-1 mb-4"},on=i("h3",{class:"text-xl font-bold text-gray-900 dark:text-white"},"Installation",-1),sn=i("p",{class:"text-sm text-gray-500 dark:text-gray-400"},[f(" Install "),i("code",null,"@nuxt/ui"),f(" dependency to your project: ")],-1),cn=i("div",{class:"flex flex-col items-center"},[i("code",null,"$ npm i @nuxt/ui"),i("code",null,"$ yarn add @nuxt/ui"),i("code",null,"$ pnpm add @nuxt/ui")],-1),an={__name:"Ghost",setup(o){const e=[{label:"Getting Started",icon:"i-heroicons-information-circle",defaultOpen:!0,slot:"getting-started"},{label:"Installation",icon:"i-heroicons-arrow-down-tray",defaultOpen:!0,slot:"installation"},{label:"Theming",icon:"i-heroicons-eye-dropper",defaultOpen:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Layouts",icon:"i-heroicons-rectangle-group",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Components",icon:"i-heroicons-square-3-stack-3d",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."},{label:"Utilities",icon:"i-heroicons-wrench-screwdriver",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate."}];return(t,m)=>{const u=y;return s(),a(u,{variant:"ghost",items:e},{item:l(({item:_})=>[i("p",tn,b(_.description),1)]),"getting-started":l(()=>[en]),installation:l(({description:_})=>[i("div",nn,[on,sn,i("p",null,b(_),1)]),cn]),_:1})}}},rn={class:"relative"},ln=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Accordion",-1),un={__name:"Accordion",setup(o){return(e,t)=>(s(),g("div",rn,[ln,n(c(Fe)),n(c(Re)),n(c(Ze)),n(c(Xe)),n(c(an))]))}},_n=un,mn={__name:"Base",setup(o){const e=[{label:"Tab1",content:"This is the content shown for Tab1"},{label:"Tab2",disabled:!0,content:"And, this is the content for Tab2"},{label:"Tab3",content:"Finally, this is the content for Tab3"}];return(t,m)=>{const u=w;return s(),a(u,{items:e})}}},dn={__name:"Vertical",setup(o){const e=[{label:"Tab1",content:"This is the content shown for Tab1"},{label:"Tab2",content:"And, this is the content for Tab2"},{label:"Tab3",content:"Finally, this is the content for Tab3"}];return(t,m)=>{const u=w;return s(),a(u,{items:e,orientation:"vertical","default-index":1,ui:{wrapper:"flex items-center gap-4",list:{width:"w-48"}}})}}},pn={class:"flex items-center gap-2 relative truncate"},hn={class:"truncate"},fn={key:0,class:"absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"},gn={__name:"Slot",setup(o){const e=[{label:"Getting Started",icon:"i-heroicons-information-circle",content:"This is the content shown for Tab1"},{label:"Installation",icon:"i-heroicons-arrow-down-tray",content:"And, this is the content for Tab2"},{label:"Theming",icon:"i-heroicons-eye-dropper",content:"Finally, this is the content for Tab3"}];return(t,m)=>{const u=B,_=w;return s(),a(_,{items:e,class:"w-full"},{default:l(({item:p,index:h,selected:x})=>[i("div",pn,[n(u,{name:p.icon,class:"w-4 h-4 flex-shrink-0"},null,8,["name"]),i("span",hn,b(h+1)+". "+b(p.label),1),x?(s(),g("span",fn)):L("",!0)])]),_:1})}}},bn={__name:"Hash",setup(o){const e=[{label:"Tab1",content:"This is the content shown for Tab1"},{label:"Tab2",content:"And, this is the content for Tab2"},{label:"Tab3",content:"Finally, this is the content for Tab3"}],t=z(),m=P(),u=C({get(){const _=e.findIndex(p=>p.label===t.query.tab);return _===-1?0:_},set(_){m.replace({query:{tab:e[_].label},hash:"#control-the-selected-index"})}});return(_,p)=>{const h=w;return s(),a(h,{modelValue:c(u),"onUpdate:modelValue":p[0]||(p[0]=x=>D(u)?u.value=x:null),items:e},null,8,["modelValue"])}}},xn={class:"relative bg-base-100 px-4 py-6 mb-3"},vn=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TabsBase",-1),$n={class:"relative bg-base-100 px-4 py-6 mb-3"},yn=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TabsVertical",-1),Bn={class:"relative bg-base-100 px-4 py-6 mb-3"},Un=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TabsSlot",-1),wn={class:"relative bg-base-100 px-4 py-6 mb-3"},An=i("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TabsHash",-1),qn={__name:"Tabs",setup(o){return(e,t)=>(s(),g(I,null,[i("div",xn,[vn,n(c(mn))]),i("div",$n,[yn,n(c(dn))]),i("div",Bn,[Un,n(c(gn))]),i("div",wn,[An,n(c(bn))])],64))}},Tn=qn,eo=T({__name:"index",setup(o){return(e,t)=>(s(),g("div",null,[n(kt,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),n(Mt,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),n(_e,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),n(ye,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),n(je,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),n(_n,{class:"flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"}),n(Tn)]))}});export{eo as default};