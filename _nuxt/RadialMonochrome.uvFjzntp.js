import{l as s}from"./index.msLzbWef.js";import{k as l,r as n,h as i,o as c,c as u}from"./entry.RTXGjyIc.js";const m={__name:"RadialMonochrome",props:["dark","title","height"],setup(t){const a=t,o=l(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),r=n(null);return i(()=>{s(["https://miniwidget.com/modules/chart-radial-bar.js"],"module",e=>{e.length===0&&(r.value.innerHTML=`
      <chart-radial-bar 
			dark='${!!a.dark}'
			background='true'
			colors='["#008FFB"]'
			monochrome='true'
			title=''
			height='${o.value}'
			radial-total='Total'
			stroke-round='true'
			stroke-dashes='0'
			fill-solid='false'
			table='false'
			table-width='auto'
			categories='["Apples","Oranges","Grapes","Berries","Bananas"]'
			values='[43, 55, 64, 75, 88]' />
			`)})}),(e,d)=>(c(),u("div",{ref_key:"box",ref:r,class:"w-full"},null,512))}};export{m as default};
