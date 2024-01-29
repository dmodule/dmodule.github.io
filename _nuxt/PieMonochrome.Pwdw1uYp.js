import{l as a}from"./index.msLzbWef.js";import{k as l,r as i,h as c,o as n,c as u}from"./entry.RTXGjyIc.js";const m={__name:"PieMonochrome",props:["dark","title","height"],setup(s){const t=s,r=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),o=i(null);return c(()=>{a(["https://miniwidget.com/modules/chart-pie.js"],"module",e=>{e.length===0&&(o.value.innerHTML=`
			<chart-pie 
			dark='${!!t.dark}'
			type='pie'
			background='true'
			colors='["#008FFB"]'
			monochrome='true'
			title=''
			height='${r.value}'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='true'
			table='false'
			table-width='auto'
			categories='["Rose A","Rose B","Rose C","Rose D","Rose E"]'
			values='[34, 25, 71, 57, 72]' />
			`)})}),(e,p)=>(n(),u("div",{ref_key:"box",ref:o,class:"w-full"},null,512))}};export{m as default};
