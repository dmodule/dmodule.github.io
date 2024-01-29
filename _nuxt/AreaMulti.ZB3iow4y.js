import{l as n}from"./index.msLzbWef.js";import{k as o,r as l,h as i,o as c,c as u}from"./entry.RTXGjyIc.js";const p={__name:"AreaMulti",props:["dark","title","height"],setup(r){const e=r,s=o(()=>{const a=e.height??"256px";return parseInt(a)-68+"px"}),t=l(null);return i(()=>{n(["https://miniwidget.com/modules/chart-area.js"],"module",a=>{a.length===0&&(t.value.innerHTML=`
      <chart-area
			dark='${!!e.dark}'
			background="true"
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			title='${e.title||""}'
			height='${s.value}'
			stroke="straight"
			stroke-width="4"
			stroke-dashes="0"
			fill-solid="false"
			markers="5"
			data-labels="true"
			table="true"
			table-width="auto"
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Session Duration","data":[45,52,38,24,33,26,21,20,6,8,15,10]}, {"name":"Page Views","data":[35,41,62,42,13,18,29,37,36,51,32,35]} ]' />
      `)})}),(a,d)=>(c(),u("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{p as default};
