import{l as n}from"./index.msLzbWef.js";import{k as o,r as l,h as i,o as c,c as d}from"./entry.RTXGjyIc.js";const p={__name:"AreaMultiStacked",props:["dark","title","height"],setup(s){const e=s,r=o(()=>{const a=e.height??"256px";return parseInt(a)-68+"px"}),t=l(null);return i(()=>{n(["https://miniwidget.com/modules/chart-area.js"],"module",a=>{a.length===0&&(t.value.innerHTML=`
      <chart-area 
			dark='${!!e.dark}'
			stacked='true'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			title='Page Statistics'
			height='${r.value}'
			stroke='straight'
			stroke-width='4'
			stroke-dashes='0'
			fill-solid='false'
			markers="5"
			data-labels='false'
			table='false'
			table-width='480px'
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Session Duration","data":[15,22,18,24,13,26,21,20,6,16,25,10]}, {"name":"Page Views","data":[35,41,62,42,43,38,29,37,36,51,32,35]}, {"name":"Total Visits","data":[87,57,74,99,75,38,62,47,82,56,45,47]} ]' />
			`)})}),(a,u)=>(c(),d("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{p as default};
