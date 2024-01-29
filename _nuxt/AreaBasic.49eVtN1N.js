import{l as o}from"./index.msLzbWef.js";import{k as n,r as l,h as i,o as c,c as d}from"./entry.RTXGjyIc.js";const f={__name:"AreaBasic",props:["dark","title","height"],setup(s){const e=s,r=n(()=>{const a=e.height??"256px";return parseInt(a)-68+"px"}),t=l(null);return i(()=>{o(["https://miniwidget.com/modules/chart-area.js"],"module",a=>{a.length===0&&(t.value.innerHTML=`
      <chart-area 
			dark='${!!e.dark}'
			background='true'
			colors='["#50CAD3"]'
			title='Page Statistics'
			height='${r.value}'
			stroke='smooth'
			stroke-width='4'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Total Visits","data":[87,57,74,99,75,38,62,47,82,56,45,47]} ]' />
			`)})}),(a,u)=>(c(),d("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{f as default};
