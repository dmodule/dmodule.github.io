import{l as o}from"./index.msLzbWef.js";import{k as l,r as n,h as i,o as c,c as d}from"./entry.RTXGjyIc.js";const m={__name:"BarBasic",props:["dark","title","height"],setup(r){const a=r,s=l(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=n(null);return i(()=>{o(["https://miniwidget.com/modules/chart-bar.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
      <chart-bar 
			dark='${!!a.dark}'
			background='true'
			colors='["#008FFB"]'
			title='THE COUNTRY'
			height='${s.value}'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]'
			series='[ {"name":"Product", "data":[344,355,341,167,222,443,514,725,721,510]} ]' />
      `)})}),(e,u)=>(c(),d("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{m as default};
