import{e as x,f as u}from"./9Ez2jyDG.js";import{bs as a,bq as n,br as t,bB as g,bC as y,bW as c,bQ as h,bD as d,bx as i,c1 as w,bP as p}from"./B5CNXMPg.js";import"./C75rfUIj.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const v={key:0},_={key:0,class:"overflow-x-auto w-full max-h-screen rounded-lg bg-base-300"},N={class:"table text-sm text-center table-pin-rows table-pin-cols"},m={colspan:"4",class:"p-0.5"},T={class:"flex-1 text-left px-2"},k={class:"flex-none w-10"},C=["innerHTML"],L={class:"flex-none w-10 font-semibold"},B=["innerHTML"],q={key:0,class:"flex-1 relative font-semibold"},H={class:"text-right absolute right-0 w-1/2"},M={class:"relative"},S={class:"relative flex items-center justify-center"},V={class:"text-lg leading-4 mr-1"},j={class:"text-left"},z={class:"text-right relative w-1/2"},D={class:"relative"},Q={__name:"BoxList",props:{mode:{type:String,default:"table"},list:{type:Array,default:()=>[]}},setup(o){const b=(s,r="")=>{const e=parseFloat(s);return isNaN(e)?s:e<0?`<span class="w-2">-</span>${s.replace("-","")}`+r:`<span class="w-2">+</span>${s}`+r},f=(s,r,e)=>{let l="";return(s===3&&e===7||s===10&&e===21)&&(l="bg-base-300 text-brightness",r===1?l+=" text-shadow-light":r===5?l+=" text-shadow-light-ce":r===4?l+=" text-shadow-light-fl":r===3?l+=" text-shadow-light-dw":l+=" text-shadow-light-up"),l};return(s,r)=>o.list&&o.list.length?(a(),n("div",v,[o.mode==="table"?(a(),n("div",_,[t("table",N,[t("tbody",null,[(a(!0),n(g,null,y(o.list,(e,l)=>(a(),n("tr",{key:l},[t("td",m,[t("div",{class:c(["flex bg-base-200 relative rounded-md overflow-hidden",[f(l,e.color,o.list.length),e.color===1?"text-yellow-500":e.color===5?"text-purple-500":e.color===4?"text-cyan-500":e.color===3?"text-red-500":"text-green-500"]])},[t("div",{class:c(["absolute bottom-0 left-12 h-full w-full rounded",[e.color===1?"bg-yellow-500/30":e.color===5?"bg-purple-500/30":e.color===4?"bg-cyan-500/30":e.color===3?"bg-red-500/30":"bg-green-500/30"]]),style:h({"max-width":e.percentChange+"%"})},null,6),t("div",{class:c(["flex-none w-12",{"bg-base-300":l===3&&o.list.length===7||l===10&&o.list.length===21}])},d(("formatTextNum"in s?s.formatTextNum:i(x))(e.price,2,1)),3),t("div",T,d(("formatTextNum"in s?s.formatTextNum:i(x))(e.qtty,0,1)),1),t("div",k,[t("div",{class:"flex",innerHTML:b(e.changed)},null,8,C)]),t("div",L,[t("div",{class:"flex",innerHTML:b(e.changedRatio,"%")},null,8,B)])],2)])]))),128))])])])):(a(!0),n(g,{key:1},y(o.list,(e,l)=>(a(),n("div",{key:l,class:c(["flex justify-between leading-4 mb-0.5 rounded",[f(l,e.color,o.list.length),e.color===1?"text-yellow-500":e.color===5?"text-purple-500":e.color===4?"text-cyan-500":e.color===3?"text-red-500":"text-green-500"]])},[(o.list.length===21?l===10:l===3)?(a(),n("div",q,[t("div",H,[t("div",{class:c(["absolute top-0 -right-0.5 w-full h-4 rounded",[e.color===1?"bg-yellow-500/30":e.color===5?"bg-purple-500/30":e.color===4?"bg-cyan-500/30":e.color===3?"bg-red-500/30":"bg-green-500/30"]]),style:h({"max-width":e.percentChange+"%"})},null,6),t("div",M,d(i(u)(e.qtty)),1)]),t("div",S,[t("span",V,d(i(u)(e.price)),1),r[0]||(r[0]=w(" (0.0%) "))])])):(a(),n(g,{key:1},[t("div",j,d(i(u)(e.price)),1),t("div",z,[t("div",{class:c(["absolute top-0 -right-0.5 w-full h-4 rounded",[e.color===1?"bg-yellow-500/30":e.color===5?"bg-purple-500/30":e.color===4?"bg-cyan-500/30":e.color===3?"bg-red-500/30":"bg-green-500/30"]]),style:h({"max-width":e.percentChange+"%"})},null,6),t("div",D,d(i(u)(e.qtty)),1)])],64))],2))),128))])):p("",!0)}};export{Q as default};
