function validateDto(expected, given) {
	const givenKeys = Object.keys(given)
	const expectedKeys = Object.keys(expected)

	return (
		givenKeys.every(key => expectedKeys.includes(key)) &&
		givenKeys.length === expectedKeys.length &&
		givenKeys.every(key => typeof given[key] === typeof expected[key])
	)
}

export default validateDto
