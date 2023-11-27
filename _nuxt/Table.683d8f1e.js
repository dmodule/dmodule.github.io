import M from"./Checkbox.f383ff64.js";import{_ as W,bN as X,bO as R,g as Y,j as P,m as Q,bQ as x,ba as N,U as m,bR as _,r as ee,bZ as F,cc as $,o,c as r,a as u,q as n,b as q,s as S,F as I,k as j,v as k,l as D,y as E,t as v,bD as te,d as ae,b9 as L}from"./entry.dd57515c.js";import"./useFormGroup.9469e0b5.js";import"./uid.12f507af.js";const oe={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"",tbody:"divide-y divide-gray-200 dark:divide-gray-800",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-3 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-3 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function ne(e){return e?e[0].toUpperCase()+e.slice(1):""}const p=X(R.ui.strategy,R.ui.table,oe);function le(e,d){return e===d}const se=Y({components:{UButton:P,UIcon:Q,UCheckbox:M},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>le},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortButton:{type:Object,default:()=>p.default.sortButton},sortAscIcon:{type:String,default:()=>p.default.sortAscIcon},sortDescIcon:{type:String,default:()=>p.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>p.default.loadingState},emptyState:{type:Object,default:()=>p.default.emptyState},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","update:sort"],setup(e,{emit:d,attrs:w}){const{ui:g,attrs:U}=x("table",N(e,"ui"),p,N(e,"class")),O=m(()=>e.columns??Object.keys(_(e.rows[0]??{},["click"])).map(t=>({key:t,label:ne(t),sortable:!1}))),l=ee(F({},e.sort,{column:null,direction:"asc"})),C={column:l.value.column,direction:null},f=m(()=>{var c;if(!((c=l.value)!=null&&c.column))return e.rows;const{column:t,direction:s}=l.value;return e.rows.slice().sort((J,K)=>{const B=$(J,t),A=$(K,t);return B===A?0:s==="asc"?B<A?-1:1:B>A?-1:1})}),a=m({get(){return e.modelValue},set(t){d("update:modelValue",t)}}),y=m(()=>a.value&&a.value.length>0&&a.value.length<e.rows.length),i=m(()=>e.emptyState===null?null:{...g.value.default.emptyState,...e.emptyState}),V=m(()=>e.loadingState===null?null:{...g.value.default.loadingState,...e.loadingState});function b(t,s){if(typeof e.by=="string"){const c=e.by;return(t==null?void 0:t[c])===(s==null?void 0:s[c])}return e.by(t,s)}function h(t){return e.modelValue?a.value.some(s=>b(L(s),L(t))):!1}function T(t){if(l.value.column===t.key){const s=!t.direction||t.direction==="asc"?"desc":"asc";l.value.direction===s?l.value=F({},C,{column:null,direction:"asc"}):l.value.direction=l.value.direction==="asc"?"desc":"asc"}else l.value={column:t.key,direction:t.direction||"asc"};d("update:sort",l.value)}function Z(t){w.onSelect&&w.onSelect(t)}function z(){e.rows.forEach(t=>{h(t)||a.value.push(t)})}function G(t){t.target.checked?z():a.value=[]}function H(t,s,c="Failed to get cell value"){return $(t,s,c)}return{ui:g,attrs:U,sort:l,columns:O,rows:f,selected:a,indeterminate:y,emptyState:i,loadingState:V,isSelected:h,onSort:T,onSelect:Z,onChange:G,getRowData:H}}}),re={key:1},ie={key:0},ue=["colspan"],de={key:1},ce=["colspan"],ye=["onClick"];function me(e,d,w,g,U,O){const l=M,C=P,f=Q;return o(),r("div",E({class:e.ui.wrapper},e.attrs),[u("table",{class:n([e.ui.base,e.ui.divide])},[u("thead",{class:n(e.ui.thead)},[u("tr",{class:n(e.ui.tr.base)},[e.modelValue?(o(),r("th",{key:0,scope:"col",class:n(e.ui.checkbox.padding)},[q(l,{checked:e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate,"aria-label":"Select all",onChange:e.onChange},null,8,["checked","indeterminate","onChange"])],2)):S("",!0),(o(!0),r(I,null,j(e.columns,(a,y)=>(o(),r("th",{key:y,scope:"col",class:n([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class])},[k(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(o(),D(C,E({key:0},{...e.ui.default.sortButton,...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:i=>e.onSort(a)}),null,16,["icon","label","onClick"])):(o(),r("span",re,v(a[e.columnAttribute]),1))])],2))),128))],2)],2),u("tbody",{class:n(e.ui.tbody)},[e.loadingState&&e.loading?(o(),r("tr",ie,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[k(e.$slots,"loading-state",{},()=>[u("div",{class:n(e.ui.loadingState.wrapper)},[e.loadingState.icon?(o(),D(f,{key:0,name:e.loadingState.icon,class:n(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):S("",!0),u("p",{class:n(e.ui.loadingState.label)},v(e.loadingState.label),3)],2)])],8,ue)])):e.emptyState&&!e.rows.length?(o(),r("tr",de,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[k(e.$slots,"empty-state",{},()=>[u("div",{class:n(e.ui.emptyState.wrapper)},[e.emptyState.icon?(o(),D(f,{key:0,name:e.emptyState.icon,class:n(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):S("",!0),u("p",{class:n(e.ui.emptyState.label)},v(e.emptyState.label),3)],2)])],8,ce)])):(o(!0),r(I,{key:2},j(e.rows,(a,y)=>(o(),r("tr",{key:y,class:n([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(o(),r("td",{key:0,class:n(e.ui.checkbox.padding)},[q(l,{modelValue:e.selected,"onUpdate:modelValue":d[0]||(d[0]=i=>e.selected=i),value:a,"aria-label":"Select row",onClick:d[1]||(d[1]=te(()=>{},["stop"]))},null,8,["modelValue","value"])],2)):S("",!0),(o(!0),r(I,null,j(e.columns,(i,V)=>{var b;return o(),r("td",{key:V,class:n([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(b=a[i.key])==null?void 0:b.class])},[k(e.$slots,`${i.key}-data`,{column:i,row:a,index:y,getRowData:h=>e.getRowData(a,i.key,h)},()=>[ae(v(e.getRowData(a,i.key)),1)])],2)}),128))],10,ye))),128))],2)],2)],16)}const he=W(se,[["render",me]]);export{he as default};
