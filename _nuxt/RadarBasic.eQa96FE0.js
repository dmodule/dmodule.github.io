import{l as o}from"./index.msLzbWef.js";import{k as l,r as d,h as i,o as n,c}from"./entry.RTXGjyIc.js";const m={__name:"RadarBasic",props:["dark","title","height"],setup(r){const a=r,s=l(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=d(null);return i(()=>{o(["https://miniwidget.com/modules/chart-radar.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
      <chart-radar 
			dark='${!!a.dark}'
			background='true'
			colors='["#008FFB"]'
			title='Work Productivity'
			height='${s.value}'
			stroke-width='2'
			stroke-dashes='0'
			fill-solid='true'
			markers='5'
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]'
			series='[{"name":"Working", "data":[18,70,100,57,45,86,33]}]' />
			`)})}),(e,u)=>(n(),c("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{m as default};
