<template>
	<div
		class="h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 p-3 sm:p-4 rounded-finsc">
		<div class="mb-2">
			<UPopover mode="hover" :popper="{ placement: 'top' }">
				<template #panel>
					<div class="text-left px-4 py-2 max-w-72">
						Lấy cảm hứng từ triết học tử vi phương Đông, FINSC xây dựng bộ chỉ số đánh
						giá cơ bản dựa trên 4 trụ cột giúp "luận đoán số mệnh cổ phiếu" được gọi là
						"Tứ trụ FA":
						<p>(1) Định giá cổ phiếu</p>
						<p>(2) Sức khỏe tài chính</p>
						<p>(3) Mô hình kinh doanh</p>
						<p>(4) Hiệu quả hoạt động</p>
					</div>
				</template>
				<h1 class="w-full text-center text-lg font-semibold mb-4">
					Tứ trụ FA
					<UIcon name="i-ri-information-fill" />
				</h1>
			</UPopover>
		</div>
		<div class="grid grid-cols-2 gap-4 text-center">
			<div>
				<p class="text-base-neutral">Định Giá</p>
				<p class="text-xl font-bold">{{ data2.DG_bq }}</p>
			</div>
			<div>
				<p class="text-base-neutral">Tài chính</p>
				<p class="text-xl font-bold text-base-primary">{{ data2.skTaichinh }}</p>
			</div>
			<div class="border-t border-base-neutral col-span-2"></div>
			<div>
				<p class="text-base-neutral">Kinh doanh</p>
				<p class="text-xl font-bold text-yellow-500">{{ data2.mohinhKinhdoanh }}</p>
			</div>
			<div>
				<p class="text-base-neutral">Hiệu quả</p>
				<p class="text-xl font-bold text-yellow-500">{{ data2.hieuquaHoatdong }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useFinscStore } from '@/stores/finsc';
const finscStore = useFinscStore();
const data2 = computed(() => finscStore.tutru.data2);
</script>
