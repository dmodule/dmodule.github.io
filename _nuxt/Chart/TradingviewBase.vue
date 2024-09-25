<template>
	<div class="tradingview-widget-container w-full h-full flex">
		<div :id="tvId" class="trader flex-1"></div>
	</div>
</template>

<script setup>
import { uuid } from '@/utils';
const tvId = ref(uuid());

const initWidget = () => {
	if (tvId.value) {
		new TradingView.widget({
			container_id: tvId.value,
			autosize: true,
			symbol: 'NASDAQ:AAPL',
			interval: 'D',
			timezone: 'Etc/UTC',
			theme: 'dark', // light | dark
			style: '1',
			locale: 'en',
			toolbar_bg: '#f1f3f6',
			enable_publishing: false,
			withdateranges: true,
			hide_side_toolbar: false,
			allow_symbol_change: true,
			details: true,
			hotlist: true,
			calendar: true,
			news: ['headlines'],
		});
	}
};

useHead({
	script: [
		{
			src: 'https://s3.tradingview.com/tv.js', // URL to the external script
			async: true,
			defer: true,
			onload: () => {
				initWidget();
			},
		},
	],
});
</script>
