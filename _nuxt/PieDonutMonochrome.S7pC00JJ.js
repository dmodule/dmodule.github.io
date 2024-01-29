import{l as r}from"./index.msLzbWef.js";import{k as l,r as n,h as c,o as i,c as u}from"./entry.RTXGjyIc.js";const m={__name:"PieDonutMonochrome",props:["dark","title","height"],setup(s){const t=s,a=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),o=n(null);return c(()=>{r(["https://miniwidget.com/modules/chart-pie.js"],"module",e=>{e.length===0&&(o.value.innerHTML=`
      <chart-pie 
			dark='${!!t.dark}'
			type='donut'
			background='true'
			colors='["#008FFB"]'
			monochrome='true'
			title=''
			height='${a.value}'
			donut-total='Total'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='true'
			table='false'
			table-width='auto'
			categories='["Rose A","Rose B","Rose C","Rose D","Rose E"]'
			values='[34, 25, 71, 57, 72]' />
			`)})}),(e,d)=>(i(),u("div",{ref_key:"box",ref:o,class:"w-full"},null,512))}};export{m as default};
