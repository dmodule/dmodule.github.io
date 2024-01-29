import{l}from"./index.msLzbWef.js";import{k as n,r as o,h as i,o as c,c as u}from"./entry.RTXGjyIc.js";const f={__name:"AreaNullValues",props:["dark","title","height"],setup(s){const e=s,r=n(()=>{const a=e.height??"256px";return parseInt(a)-68+"px"}),t=o(null);return i(()=>{l(["https://miniwidget.com/modules/chart-area.js"],"module",a=>{a.length===0&&(t.value.innerHTML=`
      <chart-area 
			dark='${!!e.dark}'
			background='true'
			colors='["#008FFB"]'
			title='Page Statistics'
			height='${r.value}'
			stroke='straight'
			stroke-width='4'
			stroke-dashes='0'
			fill-solid='false'
			markers="5"
			data-labels='false'
			table='false'
			table-width='480px'
			categories='["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]'
			series='[ {"name":"Session Duration","data":[15,22,18,null,16,26,21,20,null,null,15,18]} ]' />
			`)})}),(a,d)=>(c(),u("div",{ref_key:"box",ref:t,class:"w-full"},null,512))}};export{f as default};
