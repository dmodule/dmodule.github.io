import { pic, linkTitle, description, btnMore } from '@/utils/attrs';

export const Border = {
	custom: { hue: '', className: 'border-base' },
	design: { dir: 'ltr', horizontal: false, rounded: true },
	attrs: {
		pic: pic(),
		linkTitle: linkTitle(['xl', 'none', 'none', 'flipInTopLeft']),
		description: description(['lg']),
		btnMore: btnMore(['sm', 'none', 'none']),
	},
};
