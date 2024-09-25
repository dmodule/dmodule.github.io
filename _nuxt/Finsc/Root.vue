<template>
	<ZiFormPopup v-model="sector" :edit="edit" :loaded="loaded" @onVisibled="onVisibled">
		<template #default="{ key }">
			<component
				v-if="loaded"
				:key="key"
				:is="mode"
				v-bind="{ ...sector.design, ...sector.addon }"
				:categories="sector.categories"
				:series="sector.series"
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
const edit = computed(() => false);
const sector = ref({});
const mode = ref(null);

const onVisibled = async () => {
	const { info } = props.modelValue;
	if (typeof info === 'string') {
		// sample data
		sector.value = pattern[info];
	} else {
		sector.value = { ...info };
		// get sector module & attrsParse data
		// 	const res = await getInfo(id); // id of props.modelValue
		// 	if (res) {
		// 		const { design, custom, attrs } = res;
		// 		sector.value = { ...props.modelValue, info: { ...res, attrs: attrsParse(res.attrs) } };
		// 	}
	}

	if (sector.value?.design?.mode === 'BullBear') {
		mode.value = markRaw(resolveComponent('ZuFinscCardBullBear'));
	} else if (sector.value?.design?.mode === 'Fundamental') {
		mode.value = markRaw(resolveComponent('ZuFinscCardFundamental'));
	} else if (sector.value?.design?.mode === 'Score') {
		mode.value = markRaw(resolveComponent('ZuFinscCardScore'));
	} else if (sector.value?.design?.mode === 'Technical') {
		mode.value = markRaw(resolveComponent('ZuFinscCardTechnical'));
	} else if (sector.value?.design?.mode === 'Volume') {
		mode.value = markRaw(resolveComponent('ZuFinscCardVolume'));
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
