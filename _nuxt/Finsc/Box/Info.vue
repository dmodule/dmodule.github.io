<template>
	<div
		class="rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col justify-between">
		<div class="px-6 pt-6">
			<div class="flex items-center justify-between">
				<div class="text-center">
					<p class="text-xs text-base-200">Oct, 2024</p>
					<p class="text-5xl font-bold">02</p>
				</div>
				<div class="flex-1 text-center">
					<p class="text-5xl font-extrabold tracking-wide">Dungeon</p>
					<p class="text-5xl font-extrabold tracking-wide text-purple-500">Dragon</p>
				</div>
			</div>
		</div>

		<div class="flex justify-between">
			<ZiBtnWave :scale="0.6" pos="bl">
				<button
					class="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mr-20 mb-12"></button>
			</ZiBtnWave>
			<div class="flex-1 flex items-end pb-3">
				<div
					class="bg-white/5 rounded-full flex items-center text-center p-4 gap-0 divide-x divide-dashed divide-base-neutral">
					<div class="px-3">
						<UIcon name="i-ri-heart-line" />
						<div>32,190</div>
					</div>
					<div class="px-3">
						<UIcon name="i-ri-star-line" />
						<div>9,571</div>
					</div>
					<div class="px-3">
						<UIcon name="i-ri-bookmark-2-line" />
						<div>21,688</div>
					</div>
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
