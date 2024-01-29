import{l as o}from"./index.msLzbWef.js";import{k as l,r as n,h as c,o as d,c as i}from"./entry.RTXGjyIc.js";const p={__name:"StackedHorizontal",props:["dark","title","height"],setup(r){const e=r,s=l(()=>{const t=e.height??"256px";return parseInt(t)-68+"px"}),a=n(null);return c(()=>{o(["https://miniwidget.com/modules/chart-bar.js"],"module",t=>{t.length===0&&(a.value.innerHTML=`
      <chart-bar 
			dark='${!!e.dark}'
			horizontal='true'
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
			table-width='520px'
			categories='["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"]'
			series='[ {"name":"PRODUCT A","data":[44,55,41,67,22,43,21,49]}, {"name":"PRODUCT B","data":[13,23,20,8,13,27,33,12]}, {"name":"PRODUCT C","data":[11,17,15,15,21,14,15,13]}, {"name":"PRODUCT D","data":[17,35,41,37,22,53,21,69]} ]' />
			`)})}),(t,u)=>(d(),i("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{p as default};
