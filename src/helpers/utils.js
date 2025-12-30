function createNewBid(course, name, mail, phone) {
	return {
		id: Date.now() + Math.random(),
		date: new Date().toLocaleString('ru', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		}),
		course: course,
		name: name,
		mail: mail,
		phone: phone,
		status:'new'
	};
}

export { createNewBid };
