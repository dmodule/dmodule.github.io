import{l as r}from"./index.msLzbWef.js";import{k as l,r as o,h as i,o as c,c as u}from"./entry.RTXGjyIc.js";const m={__name:"LineStepLine",props:["dark","title","height"],setup(s){const a=s,n=l(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=o(null);return i(()=>{r(["https://miniwidget.com/modules/chart-line.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
      <chart-line 
			dark='${!!a.dark}'
			background='true'
			colors='["#50CAD3"]'
			title='Page Statistics'
			height='${n.value}'
			stroke='stepline'
			stroke-width='4'
			stroke-dashes='0'
			fill-solid='true'
			markers="5"
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Page Views","data":[35,41,62,42,13,18,29,5,39,51,32,25]} ]' />
      `)})}),(e,d)=>(c(),u("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{m as default};
