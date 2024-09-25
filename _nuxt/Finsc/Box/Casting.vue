<template>
	<div
		class="rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 p-2 flex flex-col justify-between">
		<div class="px-6 py-3 text-2xl flex items-center justify-between">
			Casting
			<div>
				<UButton
					icon="i-ri-arrow-left-s-line"
					size="md"
					color="white"
					variant="ghost"
					square
					:ui="{ rounded: 'rounded-full' }" />
				<UButton
					icon="i-ri-arrow-right-s-line"
					size="md"
					color="white"
					variant="ghost"
					square
					:ui="{ rounded: 'rounded-full' }" />
			</div>
		</div>

		<div class="rounded-finsc flex-1 bg-white/5"></div>
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
