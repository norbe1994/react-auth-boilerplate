import React, { useState, useEffect } from 'react'
import validateFields from './validate-fields'
import './sign-up-form.styles.scss'

const SignUpForm = () => {
	const [formFields, setFormFields] = useState({
		username: '',
		password: '',
	})
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		setIsFormValid(validateFields(formFields))
	}, [formFields])

	const handleSubmit = () => {
		console.log(formFields)
	}

	const handleChange = ({ target: { name, value } }) => {
		setFormFields({ ...formFields, [name]: value })
	}

	return (
		<div id='sign_up_form'>
			<label htmlFor='name'>Username</label>
			<input
				type='text'
				name='username'
				id='sign_up_form__username'
				className='sign_up_form__input'
				onChange={handleChange}
				value={formFields.username}
			/>
			<label htmlFor='name'>Password</label>
			<input
				type='password'
				name='password'
				id='sign_up_form__password'
				className='sign_up_form__input'
				onChange={handleChange}
				value={formFields.password}
			/>
			<button onClick={handleSubmit} disabled={!isFormValid}>
				Submit
			</button>
		</div>
	)
}

export default SignUpForm
