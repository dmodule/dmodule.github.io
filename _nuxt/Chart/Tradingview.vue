<template>
	<div class="zu-tabs h-full flex flex-col rounded-finsc overflow-hidden">
		<div class="flex items-center bg-base-200 border-b border-base-300 px-0.5">
			<UButton icon="i-ri-add-line" size="xs" color="primary" square variant="soft" />
			<ul class="flex flex-wrap -mb-px text-sm text-center">
				<li class="me-2">
					<a class="inline-block px-4 py-1.5 border-b-2 border-base-primary hover:border-gray-300">
						Default
					</a>
				</li>
			</ul>
		</div>

		<div class="zu-tabs-content flex flex-1">
			<div class="flex-1"><ZuChartTradingviewFinsc /></div>
		</div>
	</div>
</template>

<script setup></script>
