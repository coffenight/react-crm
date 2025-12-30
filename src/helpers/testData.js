const testData = [
	{
		name: 'Иван',
		phone: '+78945624568',
		email: 'gdddgfdg@mail.ru',
		course: 'course-html',
	},
	{
		name: 'Евгений',
		phone: '+78456987878',
		email: 'sdcccvcv@rambler.ru',
		course: 'course-vue',
	},
	{
		name: 'Сергей',
		phone: '+79111111111',
		email: 'qwerty@gmail.com',
		course: 'course-php',
	},
	{
		name: 'Владимир',
		phone: '+74596854245',
		email: 'fddfdfdf@yandex.ru',
		course: 'course-wordpress',
	},
];

function testDataFn() {
	const randomNumber = Math.floor(Math.random() * testData.length);
	return testData[randomNumber];
}

export { testDataFn };
