import{l as o}from"./index.msLzbWef.js";import{k as l,r as n,h as c,o as i,c as d}from"./entry.RTXGjyIc.js";const m={__name:"StackedBasic",props:["dark","title","height"],setup(r){const t=r,s=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),a=n(null);return c(()=>{o(["https://miniwidget.com/modules/chart-bar.js"],"module",e=>{e.length===0&&(a.value.innerHTML=`
      <chart-bar 
			dark='${!!t.dark}'
			horizontal='false'
			stacked='true'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			title='Product ABC (Unit: thousands $)'
			height='${s.value}'
			stroke-width='0'
			stroke-dashes='0'
			fill-solid='true'
			data-labels='true'
			table='false'
			table-width='450px'
			categories='["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"]'
			series='[ {"name":"PRODUCT A","data":[44,55,41,67,22,43,21,49]}, {"name":"PRODUCT B","data":[13,23,20,8,13,27,33,12]} ]' />
			`)})}),(e,u)=>(i(),d("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{m as default};
