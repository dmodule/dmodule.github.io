import{l as r}from"./index.msLzbWef.js";import{k as l,r as i,h as c,o as n,c as p}from"./entry.RTXGjyIc.js";const f={__name:"PolarBasic",props:["dark","title","height"],setup(t){const o=t,a=l(()=>{const e=o.height??"256px";return parseInt(e)-68+"px"}),s=i(null);return c(()=>{r(["https://miniwidget.com/modules/chart-pie.js"],"module",e=>{e.length===0&&(s.value.innerHTML=`
			<chart-pie 
			dark='${!!o.dark}'
			type='polarArea'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			monochrome='false'
			title=''
			height='${a.value}'
			polar-rings='0'
			polar-spokes='1'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='true'
			data-labels='false'
			table='false'
			table-width='auto'
			categories='["Rose A","Rose B","Rose C","Rose D","Rose E"]'
			values='[42, 47, 52, 58, 65]' />
			`)})}),(e,u)=>(n(),p("div",{ref_key:"box",ref:s,class:"w-full"},null,512))}};export{f as default};
