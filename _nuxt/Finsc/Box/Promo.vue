<template>
	<div
		class="rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col justify-between">
		<div class="flex justify-between">
			<div class="text-sm h-full flex flex-wrap gap-2 items-center pl-4">
				<span class="border border-base-neutral rounded-full p-2 text-xs">20% off</span>
				<span class="border border-base-neutral rounded-full p-2 text-xs">5% off</span>
			</div>
			<ZiBtnWave :scale="0.4" pos="tr">
				<UButton
					icon="i-ri-bookmark-3-line"
					size="md"
					color="white"
					class="mr-6"
					square
					:ui="{ rounded: 'rounded-full' }" />
			</ZiBtnWave>
		</div>

		<div class="px-6 pb-6">
			<div class="text-base-200">
				<div>Promo</div>
				<div class="flex">
					<div class="text-4xl text-base-100">24</div>
					<div class="text-xs ml-1">ready</div>
				</div>
			</div>
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
