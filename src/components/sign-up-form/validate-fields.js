function validateEmail(email) {
	const validEmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	if (validEmailRegex.test(email)) return ''
	else return 'Invalid email.'
}

function validateName(name) {
	const validNameRegex = /^[ñA-Za-z _]*[ñA-Za-zÀ-ÿ][ñA-Za-z _]*$/
	if (name.length >= 8 && validNameRegex.test(name)) return ''
	else
		return 'Name must be at least 8 characters long and contain only alphabetic values.'
}

function validatePassword(password) {
	const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/
	if (mediumRegex.test(password)) return ''
	else
		return 'Password is not strong enough. Make it at least 8 characters long and include numbers, uppercase letters and special characters.'
}

function validatePasswordConfirm(password, passwordConfirm) {
	if (password === passwordConfirm) return ''
	else return 'Passwords do not match.'
}

export function validateFields({
	email: { value: email },
	name: { value: name },
	password: { value: password },
	passwordConfirm: { value: passwordConfirm },
}) {
	const errors = {
		email: '',
		name: '',
		password: '',
		passwordConfirm: '',
	}

	errors.email = validateEmail(email)
	errors.name = validateName(name)
	errors.password = validatePassword(password)
	errors.passwordConfirm = validatePasswordConfirm(password, passwordConfirm)

	return errors
}

export function validateForm(formErrors) {
	return Object.values(formErrors).every(error => error === '')
}
