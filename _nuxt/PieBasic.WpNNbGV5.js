import{l as r}from"./index.msLzbWef.js";import{k as l,r as i,h as c,o as n,c as u}from"./entry.RTXGjyIc.js";const f={__name:"PieBasic",props:["dark","title","height"],setup(o){const t=o,a=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),s=i(null);return c(()=>{r(["https://miniwidget.com/modules/chart-pie.js"],"module",e=>{e.length===0&&(s.value.innerHTML=`
      <chart-pie 
			dark='${!!t.dark}'
			type='pie'
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
			`)})}),(e,p)=>(n(),u("div",{ref_key:"box",ref:s,class:"w-full"},null,512))}};export{f as default};
