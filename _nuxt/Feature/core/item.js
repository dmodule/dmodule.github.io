import { pic, linkTitle, description, btnMore } from '@/utils/attrs';

export const item = (key = 'center') => {
	const className = key === 'card' ? 'border-base' : 'card-padding-0';
	const picSrc = `/static/svg/${key === 'card' ? 'light-2' : 'chart'}.svg`;
	const iconSize = key === 'card' ? '' : '5rem';
	const design = {
		center: {
			dir: 'auto',
			iconSize,
			addon: {
				type: 'carousel',
			},
		},
		left: {
			dir: 'ltr',
			iconSize,
		},
		right: {
			dir: 'rtl',
			iconSize,
		},
		flat: {
			dir: 'ltr',
			horizontal: true,
		},
		card: {
			dir: 'ltr',
			rounded: true,
		},
	};

	return {
		custom: { hue: '', className },
		design: design[key],
		attrs: {
			pic: pic([, , [picSrc]]),
			linkTitle: linkTitle(['lg', 'none', 'none', 'flipInTopRight']),
			description: description(['md']),
			btnMore: btnMore(['sm', 'none', 'none']),
		},
	};
};
