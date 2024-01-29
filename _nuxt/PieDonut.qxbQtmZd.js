import{l as r}from"./index.msLzbWef.js";import{k as l,r as n,h as i,o as c,c as u}from"./entry.RTXGjyIc.js";const f={__name:"PieDonut",props:["dark","title","height"],setup(s){const t=s,a=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),o=n(null);return i(()=>{r(["https://miniwidget.com/modules/chart-pie.js"],"module",e=>{e.length===0&&(o.value.innerHTML=`
      <chart-pie 
			dark='${!!t.dark}'
			type='donut'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			monochrome='false'
			title=''
			height='${a.value}'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='false'
			data-labels='true'
			table='false'
			table-width='auto'
			categories='["Rose A","Rose B","Rose C","Rose D","Rose E"]'
			values='[34, 25, 71, 57, 72]' />
			`)})}),(e,d)=>(c(),u("div",{ref_key:"box",ref:o,class:"w-full"},null,512))}};export{f as default};
