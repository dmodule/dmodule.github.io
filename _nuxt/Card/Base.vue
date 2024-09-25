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
	aspectRatio: {
		type: String,
		default: '', // 8x5 | 5x8 | 1x1
	},
	shadow: {
		type: String,
		default: '',
	},
	rounded: {
		type: Boolean,
		default: false,
	},
	horizontal: {
		type: Boolean,
		default: false,
	},
	dir: {
		type: String,
		default: 'auto', // auto | left | right
	},
	iconSize: {
		type: String,
		default: '',
	},
});

const csm = computed(() => {
	const hue = props.custom?.hue ?? '';
	const className = props.custom?.className ?? '';
	return { hue, className };
});

const info = computed(() => {
	if (isObject(props.modelValue)) return props.modelValue;
	return createObjMod([
		'link',
		'pic',
		'time',
		'keyword',
		'author',
		'linkTitle',
		'description',
		'btnStarted',
		'btnMore',
	]);
});
</script>

<template>
	<article
		class="max-w-xs mx-auto overflow-hidden card"
		:class="[
			csm.className,
			shadow,
			horizontal ? 'card-padding-0' : '',
			rounded ? 'card-rounded' : '',
		]">
		<a
			class="relative"
			:class="{
				'aspect-[8/5]': aspectRatio === '8x5',
				'aspect-[5/8]': aspectRatio === '5x8',
				'aspect-[1]': aspectRatio === '1x1',
			}"
			:href="info.link ? info.link.val : '#'">
			<ZoCommonItemMedia
				:modelValue="info"
				:dir="dir"
				:horizontal="horizontal"
				:iconSize="iconSize">
				<div
					class="flex items-center"
					:class="info.btnStarted && info.btnMore ? 'justify-between' : 'justify-end'">
					<ZeButton :modelValue="info.btnStarted" class="btn-sm text-gray-100/90 rounded-full" />
					<ZeButton class="px-0" :modelValue="info.btnMore">
						<span aria-hidden="true" class="ml-1">→</span>
					</ZeButton>
				</div>
			</ZoCommonItemMedia>
		</a>
	</article>
</template>
