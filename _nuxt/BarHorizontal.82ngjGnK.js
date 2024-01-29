import{l as s}from"./index.msLzbWef.js";import{k as l,r as n,h as i,o as d,c}from"./entry.RTXGjyIc.js";const m={__name:"BarHorizontal",props:["dark","title","height"],setup(r){const t=r,o=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),a=n(null);return i(()=>{s(["https://miniwidget.com/modules/chart-bar.js"],"module",e=>{e.length===0&&(a.value.innerHTML=`
      <chart-bar 
			dark='${!!t.dark}'
			horizontal='true'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			distributed='true'
			title='THE COUNTRY'
			height='${o.value}'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]'
			series='[ {"name":"Product", "data":[344,355,341,167,222,443,514,725,721,510]} ]' />
      `)})}),(e,u)=>(d(),c("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{m as default};
