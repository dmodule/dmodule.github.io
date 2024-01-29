import{l as s}from"./index.msLzbWef.js";import{k as l,r as d,h as n,o as i,c as u}from"./entry.RTXGjyIc.js";const m={__name:"RadarPolygon",props:["dark","title","height"],setup(r){const a=r,o=l(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=d(null);return n(()=>{s(["https://miniwidget.com/modules/chart-radar.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
			<chart-radar 
			dark='${!!a.dark}'
			polygon='true'
			background='true'
			colors='["#008FFB"]'
			title='Work Productivity'
			height='${o.value}'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='true'
			markers='3'
			data-labels='true'
			table='false'
			table-width='auto'
			categories='["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]'
			series='[{"name":"Working", "data":[18,70,100,57,45,86,33]}]' />
			`)})}),(e,c)=>(i(),u("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{m as default};
