const serverPath = 'https://crm-server-sa9k.onrender.com';

const status = [
	{ id: 1, title: 'Все', titleOne: 'Все', value: 'all' },
	{ id: 2, title: 'Новые', titleOne: 'Новый', value: 'new' },
	{ id: 3, title: 'В работе', titleOne: 'В работе', value: 'inwork' },
	{ id: 4, title: 'Завершенные', titleOne: 'Завершенный', value: 'complete' },
];

const course = [
	{
		id: 0,
		title: 'Все продукты',
		value: 'all',
	},
	{
		id: 1,
		title: 'Курс по верстке',
		value: 'course-html',
	},
	{
		id: 2,
		title: 'Курс по JavaScript',
		value: 'course-js',
	},
	{
		id: 3,
		title: 'Курс по VUE JS',
		value: 'course-vue',
	},
	{
		id: 4,
		title: 'Курс по PHP',
		value: 'course-php',
	},
	{
		id: 5,
		title: 'Курс по WordPress',
		value: 'course-wordpress',
	},
];

export { serverPath, status, course };
