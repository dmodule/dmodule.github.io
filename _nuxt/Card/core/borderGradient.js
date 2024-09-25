import { pic, linkTitle, description, btnStarted, btnMore, author, keyWords } from '@/utils/attrs';

export const BorderGradient = {
	custom: { hue: '', className: 'border-base' },
	design: { dir: 'ltr', horizontal: false, rounded: true },
	attrs: {
		pic: pic(),
		linkTitle: linkTitle(['xl', 'gbpColor', 'none', 'flipInTopLeft']),
		description: description(['lg']),
		btnStarted: btnStarted(['sm', 'none', 'blue']),
		btnMore: btnMore(['sm', 'none', 'none']),
		author: author(),
		keyWords: keyWords(),
	},
};
