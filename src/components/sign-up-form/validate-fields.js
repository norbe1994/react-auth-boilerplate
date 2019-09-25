const validate = ({ username, password }) =>
	username.length >= 6 && password.length >= 8

export default validate
