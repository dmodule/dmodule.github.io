<template>
	<div
		class="rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col justify-between">
		<div class="flex justify-between items-start">
			<div class="flex-1 p-2">
				<button class="bg-white/5 hover:bg-base-100 rounded-full px-4 py-2 flex items-center">
					<UIcon name="i-ri-arrow-left-s-line" size="20" class="-ml-2" />
					Back to home
				</button>
			</div>
			<div class="flex-none w-[360px] relative flex justify-center">
				<svg
					class="text-base-bg-300 absolute inset-0"
					width="360"
					height="64"
					viewBox="0 0 360 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.79937 6.43932e-05C-45.3086 -8.04915e-05 398.608 6.43932e-05 357.279 6.43932e-05C315.951 6.43932e-05 297.568 58.6757 251.284 61.7182C205 64.7606 158.5 64.7606 115.629 61.7182C72.7588 58.6757 52.9073 0.000209278 3.79937 6.43932e-05Z"
						fill="currentColor" />
				</svg>
				<div
					class="bg-white/5 rounded-full relative flex items-center text-center py-3 gap-0 divide-x divide-dashed divide-base-neutral">
					<div class="px-3 flex items-center ml-3">
						3
						<UIcon name="i-ri-coupon-3-line" class="ml-1" />
					</div>
					<div class="px-3 flex items-center">
						65
						<UIcon name="i-ri-wallet-3-line" class="ml-1" />
					</div>
					<div class="px-3 flex items-center">
						<UChip inset>
							<UButton
								icon="i-ri-notification-3-line"
								color="gray"
								:ui="{ rounded: 'rounded-full' }" />
						</UChip>
					</div>
				</div>
			</div>
			<div class="flex-1 p-2 ml-2">
				<button
					class="bg-white/5 hover:bg-base-100 rounded-full px-4 py-2 flex items-center float-right">
					Next: The null
					<UIcon name="i-ri-arrow-right-s-line" size="20" class="-mr-2" />
				</button>
			</div>
		</div>
		<div class="flex-1">
			<ZuChartTradingviewFinsc />
		</div>
	</div>
</template>

<script></script>

<style scoped>
.container {
	background-color: #1a1a1a;
}

button:focus {
	outline: none;
}
</style>
