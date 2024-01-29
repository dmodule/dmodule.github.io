import{l as o}from"./index.msLzbWef.js";import{k as l,r,h as i,o as c,c as d}from"./entry.RTXGjyIc.js";const f={__name:"LineBasic",props:["dark","title","height"],setup(s){const a=s,n=l(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=r(null);return i(()=>{o(["https://miniwidget.com/modules/chart-line.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
      <chart-line 
			dark='${!!a.dark}'
			background='true'
			colors='["#50CAD3"]'
			title='Page Statistics'
			height='${n.value}'
			stroke='smooth'
			stroke-width='4'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Total Visits","data":[87,57,74,99,75,38,62,47,82,56,45,47]} ]' />
      `)})}),(e,u)=>(c(),d("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{f as default};
