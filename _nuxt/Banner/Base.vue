<script setup>
import { isObject, createObjMod } from '@/utils';

const props = defineProps({
	custom: {
		type: Object,
	},
	modelValue: {
		type: Object,
		default() {
			return {};
		},
	},
	dir: {
		type: String, // direction html
		default: 'auto', // auto | left | right
	},
});

const csm = computed(() => {
	const hue = props.custom?.hue ?? '';
	const className = props.custom?.className ?? '';
	return { hue, className };
});

const gdt = computed(() => {
	if (csm.value.hue) {
		return {
			type: 'Simple',
			bg: csm.value.hue,
		};
	}
	return {
		type: props.dir === 'auto' ? 'Rotate45' : 'LTR',
		bg: props.dir === 'rtl' ? 'dark' : 'light',
	};
});

const info = computed(() => {
	if (isObject(props.modelValue)) return props.modelValue;
	return createObjMod(['subject', 'title', 'description', 'btnStarted', 'btnMore', 'pic']);
});
</script>
<template>
	<section
		:dir="dir"
		:class="['bg-cover bg-center bg-no-repeat', csm.className]"
		:style="{ backgroundImage: info.pic ? `url(${info.pic?.ext?.src})` : '' }">
		<ZoGradientRoot v-bind="gdt" />
		<div class="relative px-4 py-32">
			<div class="mx-auto max-w-screen-3xl lg:flex lg:items-center">
				<div
					class="text-center ltr:sm:text-left rtl:sm:text-right"
					:class="dir === 'auto' ? 'mx-auto max-w-6xl' : 'max-w-3xl'">
					<ZeH2 :modelValue="info.subject" />
					<ZeH1 :modelValue="info.title" />
					<ZeText :modelValue="info.description" className="mt-4 text-justify" />

					<div class="mt-8 flex gap-4 flex-wrap" :class="{ 'justify-center': dir === 'auto' }">
						<ZeButton :modelValue="info.btnStarted" class="text-gray-100/90 rounded-full" />
						<ZeButton
							:modelValue="info.btnMore"
							class="rounded-full border hover:bg-base-300 hover:text-base-neutral" />
					</div>
				</div>
			</div>
			<slot />
		</div>
	</section>
</template>
