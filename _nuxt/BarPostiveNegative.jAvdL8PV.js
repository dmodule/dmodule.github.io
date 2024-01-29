import{l as o}from"./index.msLzbWef.js";import{k as i,r as l,h as n,o as u,c}from"./entry.RTXGjyIc.js";const m={__name:"BarPostiveNegative",props:["dark","title","height"],setup(r){const t=r,s=i(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),a=l(null);return n(()=>{o(["https://miniwidget.com/modules/chart-bar.js"],"module",e=>{e.length===0&&(a.value.innerHTML=`
      <chart-bar 
			dark='${!!t.dark}'
			horizontal='true'
			stacked='true'
			background='true'
			title='Mauritius population pyramid 2011 (Percent)'
			height='${s.value}'
			stroke-width='0'
			stroke-dashes='0'
			fill-solid='true'
			table='false'
			table-width='auto'
			xaxis='undefined'
			categories='["85+","80-84","75-79","70-74","65-69","60-64","55-59","50-54","45-49","40-44","35-39","30-34","25-29","20-24","15-19","10-14","5-9","0-4"]'
			series='[ {"name":"Males","data":[0.4,0.65,0.76,0.88,1.5,2.1,2.9,3.8,3.9,4.2,4,4.3,4.1,4.2,4.5,3.9,3.5,3]}, {"name":"Females","data":[-0.8,-1.05,-1.06,-1.18,-1.4,-2.2,-2.85,-3.7,-3.96,-4.22,-4.3,-4.4,-4.1,-4,-4.1,-3.4,-3.1,-2.8]} ]' />
      `)})}),(e,d)=>(u(),c("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{m as default};
