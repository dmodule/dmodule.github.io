import{_ as L}from"./DisdArqi.js";import{r as c,C as v,h as N,o as x,c as y,b as a,w as m,K as b,q as s,H as g,I as O,a as i,D as V,s as S,B as Y}from"./Bp7PwLku.js";import{o as F,s as k,_ as T,m as w,r as Z}from"./DqZTuiX6.js";import A from"./CtaF1LsI.js";import D from"./BdaYeh12.js";import{c as H}from"./DHFOe2EN.js";const I={class:"absolute top-0 right-0"},K={class:"flex items-center justify-between relative z-10"},P=i("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Module Editing ",-1),G={class:"w-full md:flex items-stretch"},J={class:"flex-1 md:h-[calc(100vh-64px)] overflow-auto p-4"},se={__name:"Popup",props:{modelValue:{type:Object,default(){return{}}},loaded:{type:Boolean,default:!1},edit:{type:Boolean,default:!1}},emits:["update:modelValue","shut","onVisibled"],setup(C,{expose:B,emit:U}){const u=c(!1),n=c(!1),f=c(0),h=c(null),l=C,p=U,_=v({get:()=>{const t=l.modelValue,e=H(t.attrs);return{...t,state:e}},set:t=>{p("update:modelValue",t),++f.value}}),$=v(()=>{var e;const t=(e=l.modelValue)==null?void 0:e.attrs;if(t){const r={};for(const o in t)o==="title"?r[o]=k("Your title must be a string.",[w(1,"The title must have at least 1 characters.")]):o==="phone"&&(r[o]=k("Your phone must be a number.",[w(10,"The phone number must have at least 10 characters."),Z(/[0-9]/,"Your phone must contain a number.")]));return F(r)}}),z=()=>{n.value=!1,p("shut")},M=t=>{u.value=t},R=()=>{h.value.close()};return N(()=>{u.value=l.edit}),B({setEditor:M}),(t,e)=>{const r=L,o=Y,j=T,q=A,E=D;return x(),y("div",{class:S(["w-full flex items-center relative",{"overflow-hidden":s(u)}])},[a(r,{loaded:l.loaded,onOnVisibled:e[0]||(e[0]=d=>p("onVisibled"))},{default:m(()=>[l.loaded?b(t.$slots,"default",{key:s(f)}):g("",!0)]),_:3},8,["loaded"]),s(u)?(x(),y(O,{key:0},[i("div",I,[a(o,{icon:"i-heroicons-pencil-square",size:"sm",square:"",color:"gray",onClick:e[1]||(e[1]=d=>n.value=!0),class:"ring-0"})]),a(E,{modelValue:s(n),"onUpdate:modelValue":e[3]||(e[3]=d=>V(n)?n.value=d:null),fullscreen:""},{default:m(()=>[a(q,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow overflow-hidden"}}},{header:m(()=>[i("div",K,[P,a(o,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:R})])]),default:m(()=>[i("div",G,[a(j,{ref_key:"formRef",ref:h,class:"form-card md:h-[calc(100vh-64px)]",schema:s($),modelValue:s(_),"onUpdate:modelValue":e[2]||(e[2]=d=>V(_)?_.value=d:null),onShut:z},null,8,["schema","modelValue"]),i("div",J,[b(t.$slots,"default",{key:s(f)})])])]),_:3})]),_:3},8,["modelValue"])],64)):g("",!0)],2)}}};export{se as _};
