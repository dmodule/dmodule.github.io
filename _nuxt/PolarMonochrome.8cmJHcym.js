import{l as a}from"./index.msLzbWef.js";import{k as l,r as n,h as c,o as i,c as p}from"./entry.RTXGjyIc.js";const m={__name:"PolarMonochrome",props:["dark","title","height"],setup(r){const o=r,s=l(()=>{const e=o.height??"256px";return parseInt(e)-68+"px"}),t=n(null);return c(()=>{a(["https://miniwidget.com/modules/chart-pie.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
			<chart-pie 
			dark='${!!o.dark}'
			type='polarArea'
			background='true'
			colors='["#008FFB"]'
			monochrome='true'
			title=''
			height='${s.value}'
			polar-rings='0'
			polar-spokes='0'
			stroke-width='1'
			stroke-dashes='0'
			fill-solid='true'
			data-labels='true'
			table='false'
			table-width='auto'
			categories='["Rose A","Rose B","Rose C","Rose D","Rose E"]'
			values='[42, 47, 52, 58, 65]' />
			`)})}),(e,u)=>(i(),p("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{m as default};
