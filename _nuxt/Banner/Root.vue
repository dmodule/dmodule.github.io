<template>
	<ZiFormPopup v-model="sector" :edit="edit" :loaded="loaded" @onVisibled="onVisibled">
		<template #default="{ key }">
			<ZuBannerBase
				v-if="loaded"
				:key="key"
				v-bind="sector.design"
				:custom="sector.custom"
				:model-value="sector.attrs" />
		</template>
	</ZiFormPopup>
</template>

<script setup>
// import { attrsParse } from '@/utils/attrs';
import * as pattern from './core';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: { type: Object, default: () => {} },
});

const loaded = ref(false);
const edit = computed(() => true);
const sector = ref({});

const onVisibled = async () => {
	const { info } = props.modelValue;
	if (typeof info === 'string') {
		// sample data
		const { design, custom, attrs } = pattern[info];
		sector.value = { design, custom, attrs };
	} else {
		sector.value = { ...info };
		// get sector module & attrsParse data
		// 	const res = await getInfo(id); // id of props.modelValue
		// 	if (res) {
		// 		const { design, custom, attrs } = res;
		// 		sector.value = { ...props.modelValue, info: { design, custom, attrs: attrsParse(attrs) } };
		// 	}
	}
	loaded.value = true;
};

watch(
	() => sector.value,
	(val) => {
		emits('update:modelValue', { ...props.modelValue, info: val });
	},
	{ deep: true }
);
</script>
