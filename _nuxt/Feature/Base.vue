<template>
	<section class="relative" :class="[csm.className]">
		<ZoGradientRoot v-bind="gdt" />
		<slot />
		<div class="relative px-4 py-32 lg:flex lg:items-center lg:justify-center">
			<div class="w-full">
				<div class="mx-auto max-w-6xl text-center">
					<ZeH2 :modelValue="info.subject" />
					<ZeH1 :modelValue="info.title" />
					<ZeText :modelValue="info.description" className="mt-4 text-justify" />
				</div>

				<ZiFormMulti
					class="mx-auto max-w-6xl"
					:modelValue="info.series"
					@update:modelValue="updatedData($event, key)"
					v-bind="props.addon" />
			</div>
		</div>
	</section>
</template>

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
	addon: {
		type: Object,
		default() {
			return {};
		},
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
		type: 'Radial2Middle',
		bg: '',
	};
});

const emits = defineEmits(['update:modelValue']);

const info = computed(() => {
	if (isObject(props.modelValue)) return props.modelValue;
	const out = createObjMod(['subject', 'title', 'description']);
	return { ...out, series: [] };
});

const updatedData = (newValue, key) => {
	const data = { ...info };
	data.series[key] = newValue;
	emits('update:modelValue', data);
};
</script>
