import { pic, linkTitle, description, btnMore } from '@/utils/attrs';

export const Simple = {
	custom: { hue: '', className: 'border-base' },
	design: { dir: 'ltr', horizontal: true, rounded: true },
	attrs: {
		pic: pic(),
		linkTitle: linkTitle(['lg', 'none', 'none']),
		description: description(['md']),
		btnMore: btnMore(['sm', 'none', 'none']),
	},
};
