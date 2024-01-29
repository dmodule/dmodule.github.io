import{l}from"./index.msLzbWef.js";import{k as o,r as i,h as c,o as n,c as u}from"./entry.RTXGjyIc.js";const f={__name:"RadialBasic",props:["dark","title","height"],setup(r){const t=r,s=o(()=>{const e=t.height??"256px";return parseInt(e)-68+"px"}),a=i(null);return c(()=>{l(["https://miniwidget.com/modules/chart-radial-bar.js"],"module",e=>{e.length===0&&(a.value.innerHTML=`
      <chart-radial-bar 
			dark='${!!t.dark}'
			background='true'
			colors='["#008FFB"]'
			title=''
			height='${s.value}'
			radial-total=''
			stroke-round='true'
			stroke-dashes='0'
			fill-solid='true'
			table='false'
			table-width='auto'
			categories='["Apples"]'
			values='[43]' />
			`)})}),(e,d)=>(n(),u("div",{ref_key:"box",ref:a,class:"w-full"},null,512))}};export{f as default};
