<template>
	<div
		class="h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 p-3 sm:p-4 rounded-finsc">
		<div class="mb-2">
			<UPopover mode="hover" :popper="{ placement: 'top' }">
				<template #panel>
					<div class="text-left px-4 py-2 max-w-72">
						Xếp hạng sức mạnh giá (RS) là chỉ số đo lường sức mạnh của một cổ phiếu so
						với tất cả cổ phiếu trên thị trường. RS Rating bằng 80 tương ứng cổ phiếu
						thuộc top 20% mạnh nhất thị trường.
					</div>
				</template>
				<h1 class="w-full text-center text-lg font-semibold mb-4">
					Tứ trụ TA
					<UIcon name="i-ri-information-fill" />
				</h1>
			</UPopover>
		</div>
		<div class="grid grid-cols-2 gap-4 text-center">
			<div>
				<p class="text-base-neutral">RS</p>
				<p class="text-xl font-bold text-base-primary">{{ data2.RS }}</p>
			</div>
			<div>
				<p class="text-base-neutral">Xu hướng</p>
				<p class="text-xl font-bold text-base-primary">{{ data2.SUCMANH }}</p>
			</div>
			<div class="border-t border-base-neutral col-span-2"></div>
			<div>
				<p class="text-base-neutral">Dòng tiền</p>
				<div class="text-sm">
					<div class="text-base-primary caret-up">{{ formatCurrency(data2.bulVol) }}</div>
					<div class="text-base-secondary caret-down">
						{{ formatCurrency(data2.bearVol) }}
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<button class="btn btn-sm btn-outline" @click="isOpen = true">Mẫu hình</button>
				<UModal v-model="isOpen" :ui="{ width: 'w-full sm:max-w-6xl' }">
					<UCard
						:ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
						<template #header>
							<div class="flex items-center justify-between">
								<div>Phân tích mẫu hình tự động</div>
								<UButton
									color="red"
									size="xs"
									icon="i-heroicons-x-mark-20-solid"
									class="-my-1 outline-none"
									@click="isOpen = false" />
							</div>
						</template>
						<img :src="img64" class="pic-box h-full" />
					</UCard>
				</UModal>
			</div>
		</div>
	</div>
</template>

<script setup>
import { formatCurrency } from '@/utils';
import { useFinscStore } from '@/stores/finsc';
const finscStore = useFinscStore();
const data2 = computed(() => finscStore.tutru.data2);

const img64 = ref(null);
const isOpen = ref(false);
onMounted(async () => {
	const data = await $fetch(`${useEnv().API_URI}/chartimg?sb=${finscStore.symbol}`);
	if (data) {
		img64.value = 'data:image/png;base64,' + data?.imgcode;
	}
});
</script>
