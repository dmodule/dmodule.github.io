import{l}from"./index.msLzbWef.js";import{k as o,r as n,h as i,o as c,c as u}from"./entry.RTXGjyIc.js";const f={__name:"RadialMulti",props:["dark","title","height"],setup(r){const a=r,s=o(()=>{const e=a.height??"256px";return parseInt(e)-68+"px"}),t=n(null);return i(()=>{l(["https://miniwidget.com/modules/chart-radial-bar.js"],"module",e=>{e.length===0&&(t.value.innerHTML=`
      <chart-radial-bar 
			dark='${!!a.dark}'
			background='true'
			colors='["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]'
			monochrome='false'
			title=''
			height='${s.value}'
			radial-total='Total'
			stroke-round='false'
			stroke-dashes='0'
			fill-solid='true'
			table='false'
			table-width='auto'
			categories='["Apples","Oranges","Grapes","Berries","Bananas"]'
			values='[43, 55, 64, 75, 88]' />
			`)})}),(e,d)=>(c(),u("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{f as default};
