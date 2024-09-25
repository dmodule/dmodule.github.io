<template>
	<div
		class="h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/20 border-green-400/30 border text-base-100 rounded-finsc">
		<template v-if="loaded">
			<UPopover mode="hover" :popper="{ placement: 'top' }">
				<template #panel>
					<div class="flex text-center gap-4 px-4 py-2">
						<div>
							<div>Tổng mua</div>
							<div>{{ formatCurrency(sumBuy) }}</div>
						</div>
						<div>
							<div>Tổng bán</div>
							<div>{{ formatCurrency(sumSell) }}</div>
						</div>
					</div>
				</template>
				<div class="flex justify-between w-full h-7">
					<div
						class="bg-gradient-to-l from-green-400/80 border-green-400 rounded-tl-lg text-center py-1"
						:style="{ width: sumBuyPercentage + '%' }">
						<ZoLazyPic src="/static/svg/bull.svg" class="h-5 mx-auto" alt="Bull" />
					</div>
					<div
						class="bg-gradient-to-r from-red-400/80 border-red-400 rounded-tr-lg text-center py-1"
						:style="{ width: sumSellPercentage + '%' }">
						<ZoLazyPic src="/static/svg/bear.svg" class="h-5 mx-auto" alt="Bear" />
					</div>
				</div>
			</UPopover>
			<div class="overflow-auto flex-1">
				<table class="w-full table-auto text-sm">
					<tbody class="divide-y divide-base-neutral">
						<tr v-for="(item, index) in rows" :key="index" class="relative">
							<td
								class="absolute bottom-0 left-0 h-1 w-full"
								:class="{
									'bg-gradient-to-r from-green-400/80':
										parseInt(item.changed) >= 0,
									'bg-gradient-to-r from-red-400/20': parseInt(item.changed) < 0,
								}"
								:style="{ 'max-width': item.percentQuantity + '%' }"></td>
							<td class="relative py-1 px-4 text-center">
								{{ formatCurrency(item.price) }}
							</td>
							<td class="relative py-1 px-4 text-center">{{ item.quantity }}</td>
							<td
								class="relative py-1 px-4 text-center"
								:class="
									parseInt(item.changed) > 0 ? 'text-green-600' : 'text-red-600'
								">
								{{ item.changed }}
							</td>
							<td
								class="relative py-1 px-4 text-center"
								:class="{
									'text-green-400': parseInt(item.changedRatio) >= 0,
									'text-red-400': parseInt(item.changedRatio) < 0,
								}">
								{{ item.changedRatio }}%
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<UPopover mode="hover" :popper="{ placement: 'top' }">
				<template #panel>
					<div class="text-center px-4 py-2">
						Nước ngoài mua : Nước ngoài bán
						<div>
							{{
								`${formatCurrency(
									buyForeign
								)} (${buyForeignPercentage}%) : ${formatCurrency(
									sellForeign
								)} (${sellForeignPercentage}%)`
							}}
						</div>
						<div>- - - - - -</div>
						Phần trăm biểu thị tỷ lệ mua bán của khối ngoại
						<div>(tính cả thỏa thuận) trên tổng khối lượng khớp.</div>
					</div>
				</template>
				<div class="border-t border-base-neutral w-full">
					<div class="flex justify-between px-2 font-semibold">
						<div>
							Mua
							<span class="text-green-600">{{ buyForeignPercentage }}%</span>
						</div>
						<div>
							<span class="text-red-600">{{ sellForeignPercentage }}%</span>
							Bán
						</div>
					</div>
					<!-- <div class="flex justify-between">
					<div
						class="w-full h-2 bg-gradient-to-l from-green-400/80 border-green-400"
						:style="{ 'max-width': buyForeignPercentage }"></div>
					<div
						class="w-full h-2 bg-gradient-to-r from-red-400/80 border-red-400"
						:style="{ 'max-width': sellForeignPercentage }"></div>
				</div> -->
				</div>
			</UPopover>
		</template>
	</div>
</template>

<script setup>
import { formatCurrency } from '@/utils';

const loaded = ref(false);
const bid = ref([]);
const ask = ref([]);
const matchData = ref({});
const rows = ref([]);

const calculateChange = (price, basicPrice) => {
	const changed = price - basicPrice;
	const changedRatio = (changed / basicPrice) * 100;
	return { changed: changed.toFixed(2), changedRatio: changedRatio.toFixed(1) };
};

const calculateTotalQuantity = (bidData, askData, matchData) => {
	const bidTotal = bidData.reduce((sum, bid) => sum + bid.qtty, 0);
	const askTotal = askData.reduce((sum, ask) => sum + ask.qtty, 0);
	return bidTotal + askTotal + matchData.matchQtty;
};

const generateTableData = (bidData, askData, matchData) => {
	console.log(matchData);
	const tableData = [];
	const totalQuantity = calculateTotalQuantity(bidData, askData, matchData);

	askData.reverse().forEach((ask) => {
		const { changed, changedRatio } = calculateChange(ask.price, matchData.basicPrice);
		tableData.push({
			price: ask.price,
			quantity: ask.qtty,
			changed,
			changedRatio,
			percentQuantity: ((ask.qtty / totalQuantity) * 100).toFixed(2),
		});
	});

	tableData.push({
		price: matchData.matchPrice,
		quantity: matchData.matchQtty,
		changed: matchData.changed.toFixed(2),
		changedRatio: matchData.changedRatio.toFixed(1),
		percentQuantity: ((matchData.matchQtty / totalQuantity) * 100).toFixed(2),
	});

	bidData.forEach((bid) => {
		const { changed, changedRatio } = calculateChange(bid.price, matchData.basicPrice);
		tableData.push({
			price: bid.price,
			quantity: bid.qtty,
			changed,
			changedRatio,
			percentQuantity: ((bid.qtty / totalQuantity) * 100).toFixed(2),
		});
	});

	return tableData;
};

const sumQuantities = (orders) => {
	if (orders.length === 0) return 0;
	return orders.reduce((sum, order) => sum + order.qtty, 0);
};

const sumBuy = computed(() => sumQuantities(bid.value) + (matchData.value.buyForeignQtty || 0));
const sumSell = computed(() => sumQuantities(ask.value) + (matchData.value.sellForeignQtty || 0));

const sumBuyPercentage = computed(() =>
	((sumBuy.value / (sumBuy.value + sumSell.value)) * 100).toFixed(1)
);
const sumSellPercentage = computed(() =>
	((sumSell.value / (sumBuy.value + sumSell.value)) * 100).toFixed(1)
);

const buyForeign = computed(() => matchData.value.buyForeignQtty || 0);
const sellForeign = computed(() => matchData.value.sellForeignQtty || 0);

const buyForeignPercentage = computed(() => ((buyForeign.value / sumBuy.value) * 100).toFixed(1));
const sellForeignPercentage = computed(() =>
	((sellForeign.value / sumSell.value) * 100).toFixed(1)
);

const watchValue = (checkFunction, callback, interval = 1000, maxCount = 10) => {
	let count = 0;

	const intervalId = setInterval(() => {
		const value = checkFunction();
		if (value !== undefined && value !== null) {
			callback(value);
			clearInterval(intervalId);
		} else if (count >= maxCount) {
			console.log('No data received, stopping.');
			clearInterval(intervalId);
		}
		count++;
	}, interval);
};

// watch & cycle
onMounted(() => {
	watchValue(
		() => {
			return window._finSI;
		},
		() => {
			// console return value
			bid.value = window._finTP?.bid || [];
			ask.value = window._finTP?.ask || [];
			matchData.value = window._finSI || {};

			rows.value = generateTableData(bid.value, ask.value, matchData.value);
			loaded.value = true;
		},
		900, // interval in milliseconds
		10 // maximum count
	);
});
</script>
