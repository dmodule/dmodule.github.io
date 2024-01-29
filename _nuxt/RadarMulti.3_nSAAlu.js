import{l as o}from"./index.msLzbWef.js";import{k as n,r as d,h as l,o as i,c as u}from"./entry.RTXGjyIc.js";const p={__name:"RadarMulti",props:["dark","title","height"],setup(r){const e=r,s=n(()=>{const a=e.height??"256px";return parseInt(a)-68+"px"}),t=d(null);return l(()=>{o(["https://miniwidget.com/modules/chart-radar.js"],"module",a=>{a.length===0&&(t.value.innerHTML=`
      <chart-radar 
			dark='${!!e.dark}'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
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
			series='[{"name":"Working", "data":[18,70,100,57,45,86,33]}, {"name":"Entertainment", "data":[100,30,20,72,64,80,83]}, {"name":"Living", "data":[73,63,60,45,88,55,68]}]' />
			`)})}),(a,c)=>(i(),u("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{p as default};
