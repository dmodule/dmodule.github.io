import { pic, linkTitle, description, btnStarted, btnMore, author, keyWords } from '@/utils/attrs';

export const PhotoFull = {
	custom: { hue: '', className: 'card-full' },
	design: {
		dir: 'ltr',
		horizontal: false,
		rounded: true,
		shadow: 'shadow-xl hover:shadow',
		aspectRatio: '5x8',
	},
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
