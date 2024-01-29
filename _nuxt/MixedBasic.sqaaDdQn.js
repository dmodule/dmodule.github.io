import{l as o}from"./index.msLzbWef.js";import{k as l,r as i,h as n,o as c,c as d}from"./entry.RTXGjyIc.js";const m={__name:"MixedBasic",props:["dark","title","height"],setup(s){const t=s,r=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),a=i(null);return n(()=>{o(["https://miniwidget.com/modules/chart-mixed.js"],"module",e=>{e.length===0&&(a.value.innerHTML=`
      <chart-bar 
			dark='${!!t.dark}'
			horizontal='false'
			stacked='true'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			title='Product ABC (Unit: thousands $)'
			height='${r.value}'
			stroke-width='0'
			stroke-dashes='0'
			fill-solid='true'
			data-labels='true'
			table='false'
			table-width='450px'
			categories='["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"]'
			series='[ {"name":"PRODUCT A","data":[44,55,41,67,22,43,21,49]}, {"name":"PRODUCT B","data":[13,23,20,8,13,27,33,12]} ]' />
			`)})}),(e,u)=>(c(),d("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{m as default};
