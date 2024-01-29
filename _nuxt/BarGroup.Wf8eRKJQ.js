import{l as s}from"./index.msLzbWef.js";import{k as l,r as n,h as i,o as u,c}from"./entry.RTXGjyIc.js";const m={__name:"BarGroup",props:["dark","title","height"],setup(r){const t=r,o=l(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),a=n(null);return i(()=>{s(["https://miniwidget.com/modules/chart-bar.js"],"module",e=>{e.length===0&&(a.value.innerHTML=`
			<chart-bar 
			dark='${!!t.dark}'
			horizontal='false'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			title='Product ABC (Unit: thousands $)'
			height='${o.value}'
			stroke-width='0'
			stroke-dashes='0'
			fill-solid='true'
			table='false'
			table-width='450px'
			categories='["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]'
			series='[ {"name":"Net Profit","data":[44,55,57,56,61,58,63,60,66]},{"name":"Revenue","data":[76,85,101,98,87,105,91,114,94]}, {"name":"Free Cash Flow","data":[35,41,36,26,45,48,52,53,41]} ]' />
      `)})}),(e,d)=>(u(),c("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{m as default};
