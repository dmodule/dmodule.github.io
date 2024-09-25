<template>
	<div
		class="h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 p-3 sm:p-4 rounded-finsc cursor-pointer"
		@click="isOpen = true">
		<div class="flex justify-center gap-1 sm:gap-2 mb-4 mt-2">
			<span
				v-for="(letter, key) in canSlim"
				:key="key"
				class="flex items-center justify-center h-8 w-8 rounded-full text-lg font-semibold uppercase"
				:class="[
					canslim_style[letter]
						? 'bg-base-primary text-white'
						: 'bg-base-100 text-base-200',
				]">
				{{ letter }}
			</span>
		</div>
		<div class="text-center mb-4">
			<h1 class="text-xl font-bold">{{ data3.macp }} : {{ data3.san }}</h1>
			<h2 class="text-lg">{{ data3.tendn }}</h2>
			<p class="text-sm text-base-neutral">{{ data3.nganh }}</p>
		</div>
		<UPopover mode="hover" :popper="{ placement: 'top' }">
			<template #panel>
				<div class="px-4 py-2">
					<p>Điểm khuyến nghị hành động:</p>
					<p>Giúp NĐT đưa ra quyết định hiệu quả</p>
					<p>dựa trên việc đánh giá tổng thể</p>
					<p>từ trụ FA&TA của cổ phiếu,</p>
					<p>theo thang điểm từ 1 đến 100:</p>
					------------------
					<p>[0-30] Loại khỏi danh mục</p>
					<p>[30-60] Xem xét</p>
					<p>[60-80] Theo dõi thường xuyên</p>
					<p>[80-100] Đưa vào danh mục</p>
				</div>
			</template>
			<div class="text-center mb-2 w-full">
				<p class="text-xl font-semibold">
					Action Score:
					<span class="text-base-primary">{{ data2.diemBinhquan }}</span>
				</p>
			</div>
		</UPopover>

		<UModal v-model="isOpen" :ui="{ width: 'w-full sm:max-w-3xl' }">
			<UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
				<template #header>
					<div class="flex items-center justify-between">
						<div>CANSLIM CHECKLIST</div>
						<UButton
							color="red"
							size="xs"
							icon="i-heroicons-x-mark-20-solid"
							class="-my-1 outline-none"
							@click="isOpen = false" />
					</div>
				</template>

				<UTable :rows="items" :columns="columns">
					<template #letter-data="{ row }">
						<div class="text-base-100 text-center">{{ row.letter.value }}</div>
					</template>
					<template #evaluation-data="{ row }">
						<div
							:class="
								row.evaluation === 'Đạt'
									? 'text-base-primary animate-pulse'
									: 'text-base-secondary'
							">
							{{ row.evaluation }}
						</div>
					</template>
				</UTable>
			</UCard>
		</UModal>
	</div>
</template>

<script setup>
import { useFinscStore } from '@/stores/finsc';
const finscStore = useFinscStore();

const canSlim = ['c', 'a', 'n', 's', 'l', 'i', 'm'];
const canslim_style = computed(() => finscStore.tutru.canslim_style);
const data2 = computed(() => finscStore.tutru.data2);
const data3 = computed(() => finscStore.tutru.data3);

const isOpen = ref(false);
const columns = [
	{
		key: 'letter',
		label: '',
	},
	{
		key: 'name',
		label: 'Tiêu chí',
	},
	{
		key: 'value',
		label: 'Giá trị',
	},
	{
		key: 'evaluation',
		label: 'Đánh giá',
	},
];

const items = [
	{
		letter: {
			value: 'C',
			class: 'bg-yellow-600',
		},
		name: 'Tăng trưởng doanh thu quý gần nhất so với cùng kỳ năm trước',
		value: '20.1%',
		evaluation: 'Không đạt',
	},
	{
		letter: {
			value: 'C',
			class: 'bg-yellow-600',
		},
		name: 'Tăng trưởng EPS cơ bản quý gần nhất so với cùng kỳ năm trước',
		value: '-0.3%',
		evaluation: 'Không đạt',
	},
	{
		letter: {
			value: 'C',
			class: 'bg-yellow-600',
		},
		name: 'Tăng trưởng EPS cơ bản quý gần nhất so với cùng kỳ năm trước',
		value: '6.9%',
		evaluation: 'Không đạt',
	},
	{
		letter: {
			value: 'A',
			class: 'bg-orange-600',
		},
		name: 'Tăng trưởng EPS cơ bản 4 quý gần nhất so với 4 quý trước đó',
		value: '1.9%',
		evaluation: 'Không đạt',
	},
	{
		letter: {
			value: 'A',
			class: 'bg-orange-600',
		},
		name: 'ROE',
		value: '22.2%',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'A',
			class: 'bg-orange-600',
		},
		name: 'Tăng trưởng LNST năm gần nhất',
		value: '22.4%',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'A',
			class: 'bg-orange-600',
		},
		name: 'Có sự tăng tốc về tăng trưởng LNST',
		value: 'Đạt',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'N',
			class: 'bg-pink-600',
		},
		name: 'Doanh nghiệp có sự mở rộng biên lợi nhuận',
		value: '39.5% -> 39.2%',
		evaluation: 'Không đạt',
	},
	{
		letter: {
			value: 'N',
			class: 'bg-pink-600',
		},
		name: 'Cổ phiếu chỉnh phục những mức giá mới',
		value: '-2.5%',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'S',
			class: 'bg-sky-600',
		},
		name: 'Nguồn cung cổ phiếu',
		value: '460.3 tỷ',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'L',
			class: 'bg-blue-600',
		},
		name: 'Vốn hóa',
		value: '86,117 tỷ',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'L',
			class: 'bg-blue-600',
		},
		name: 'Tầm vóc doanh nghiệp',
		value: 'Đầu ngành',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'I',
			class: 'bg-purple-600',
		},
		name: 'Tổ chức, nước ngoài sở hữu',
		value: '49%',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'I',
			class: 'bg-purple-600',
		},
		name: 'Cổ phiếu trôi nổi (Freefloat)',
		value: '78.6%',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'M',
			class: 'bg-green-600',
		},
		name: 'Tỷ lệ cổ phiếu UPTREND ngắn hạn',
		value: '68%',
		evaluation: 'Đạt',
	},
	{
		letter: {
			value: 'M',
			class: 'bg-green-600',
		},
		name: 'Tỷ lệ cổ phiếu UPTREND trung hạn',
		value: '55%',
		evaluation: 'Đạt',
	},
];
</script>
