import{_}from"./BHKXCVly.js";import{bQ as y,r as n,a_ as v,bq as b,bx as m,bs as V}from"./D-GaXO5H.js";const Y={data:()=>({sliderValue:5}),setup(){const e=n([2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010]),o=n({data:[{year:2024,revenue:5e3,profit:1e3},{year:2023,revenue:4500,profit:900},{year:2022,revenue:4e3,profit:850}]}),f=n(["revenue","profit"]),l=v(()=>{var s;const r={};return(((s=o.value)==null?void 0:s.data)||[]).forEach(c=>{r[c.year]||(r[c.year]={}),f.value.forEach(p=>{r[c.year][p]=c[p]||null})}),r}),a=n(0),t=n(4),u=v(()=>e.value.slice(a.value,t.value)),d=v(()=>{const r=new Set(u.value),i={};for(const s of r)l.value[s]&&(i[s]=l.value[s]);return i});return{years:e,visibleYears:u,startIndex:a,endIndex:t,previousYearSet:()=>{a.value>0&&(a.value-=4,t.value-=4)},nextYearSet:()=>{t.value<e.value.length&&(a.value+=4,t.value+=4)},dataByYear:l,filteredDataByVisibleYears:d}}},x={class:"bg-base-200 flex justify-center"};function S(e,o,f,l,a,t){const u=_;return V(),b("div",x,[m(u,{modelValue:e.sliderValue,"onUpdate:modelValue":o[0]||(o[0]=d=>e.sliderValue=d)},null,8,["modelValue"])])}const E=y(Y,[["render",S],["__scopeId","data-v-8d05ed4c"]]);export{E as default};
