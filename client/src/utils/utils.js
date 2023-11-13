async function getUsers() {
	const response = await fetch('./src/utils/users.json')
	const users = await response.json().then((data) => data)
	return users
}

function ellipsis(text, maxLength) {
	if (text.length > maxLength) {
		return text.slice(0, maxLength) + '...'
	}
	return text
}

export { getUsers, ellipsis }
