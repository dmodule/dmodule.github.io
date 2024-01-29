import{l as n}from"./index.msLzbWef.js";import{k as o,r as l,h as i,o as c,c as d}from"./entry.RTXGjyIc.js";const f={__name:"AreaStepLine",props:["dark","title","height"],setup(s){const a=s,r=o(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=l(null);return i(()=>{n(["https://miniwidget.com/modules/chart-area.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
			<chart-area 
			dark='${!!a.dark}'
			background='true'
			colors='["#50CAD3"]'
			title='Page Statistics'
			height='${r.value}'
			stroke='stepline'
			stroke-width='4'
			stroke-dashes='0'
			fill-solid='false'
			markers="5"
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Page Views","data":[35,41,62,42,13,18,29,5,39,51,32,25]} ]' />
			`)})}),(e,u)=>(c(),d("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{f as default};
