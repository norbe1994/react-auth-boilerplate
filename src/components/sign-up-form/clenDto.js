function cleanDto(dto) {
	const dtoCopy = { ...dto }
	delete dtoCopy.email.dirty
	delete dtoCopy.name.dirty
	delete dtoCopy.password.dirty
	delete dtoCopy.passwordConfirm.dirty
	dtoCopy.email = dtoCopy.email.value
	dtoCopy.name = dtoCopy.name.value
	dtoCopy.password = dtoCopy.password.value
	dtoCopy.passwordConfirm = dtoCopy.passwordConfirm.value
	return dtoCopy
}

export default cleanDto
