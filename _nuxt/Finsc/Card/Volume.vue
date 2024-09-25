<template>
	<div
		class="h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 rounded-finsc cursor-pointer"
		@click="isOpen = true">
		<div class="overflow-auto flex-1">
			<UTable
				:rows="items"
				:columns="columns"
				:ui="{
					th: { padding: 'py-1 px-4' },
					td: { padding: 'py-1 px-4' },
					divide: '',
					tbody: 'divide-y divide-base-neutral',
				}">
				<template #type-data="{ row }">
					<div
						class="font-semibold"
						:class="{
							'text-yellow-400': row.type === 'DK',
							'text-green-400': row.type === 'M',
							'text-red-400': row.type === 'B',
						}">
						{{ row.type }}
					</div>
				</template>
			</UTable>
		</div>
	</div>
</template>

<script setup>
const columns = [
	{
		key: 'time',
		label: 'Khớp lệnh',
	},
	{
		key: 'price',
		label: 'Giá',
	},
	{
		key: 'volume',
		label: 'KL',
	},
	{
		key: 'type',
		label: 'Lệnh',
	},
];

const items = [
	{ time: '14:45:00', price: '131.00', volume: '493,900', type: 'DK' },
	{ time: '14:30:00', price: '131.30', volume: '100', type: 'DK' },
	{ time: '14:29:00', price: '131.40', volume: '1,300', type: 'M' },
	{ time: '14:29:00', price: '131.20', volume: '100', type: 'M' },
	{ time: '14:29:00', price: '131.20', volume: '5,200', type: 'B' },
	{ time: '14:29:00', price: '131.30', volume: '200', type: 'B' },
	{ time: '14:29:00', price: '131.30', volume: '1,400', type: 'B' },
	{ time: '14:29:00', price: '131.30', volume: '4,000', type: 'B' },
];
</script>
