import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { validateFields, validateForm } from './validate-fields'
import './sign-up-form.styles.scss'
import { signUpStart } from '../../redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import {
	selectSignUpError,
	selectSignUpLoadingFlag,
} from '../../redux/user/user.selectors'
import clenDto from './clenDto'

const SignUpForm = ({ signUpStart, error, loading }) => {
	const [formFields, setFormFields] = useState({
		email: {
			value: '',
			dirty: false,
		},
		name: {
			value: '',
			dirty: false,
		},
		password: {
			value: '',
			dirty: false,
		},
		passwordConfirm: {
			value: '',
			dirty: false,
		},
	})

	const [formErrors, setFormErrors] = useState({
		email: '',
		name: '',
		password: '',
		passwordConfirm: '',
	})

	const [isFormValid, setIsFormValid] = useState(false)

	const handleChange = ({ target: { name, value } }) => {
		setFormFields({ ...formFields, [name]: { value, dirty: true } })
	}

	useEffect(() => {
		setFormErrors(validateFields(formFields))
	}, [formFields])

	useEffect(() => {
		setIsFormValid(validateForm(formErrors))
	}, [formErrors])

	const handleSubmit = e => {
		e.preventDefault()
		signUpStart(clenDto(formFields))
	}

	return (
		<form id='sign_up_form' onSubmit={handleSubmit}>
			{loading ? (
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			) : null}

			<div className='form-group'>
				{error.message ? (
					<div className='alert alert-danger' role='alert'>
						{error.message}
					</div>
				) : null}

				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					id='sign_up_form__email'
					className='form-control sign_up_form__input'
					onChange={handleChange}
					value={formFields.email.value}
				/>
				<small id='emailError' className='form-text text-muted'>
					{formFields.email.dirty && formErrors.email}
				</small>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='sign_up_form__name'
					className='form-control sign_up_form__input'
					onChange={handleChange}
					value={formFields.name.value}
				/>
				<small id='nameError' className='form-text text-muted'>
					{formFields.name.dirty && formErrors.name}
				</small>
				<label htmlFor='name'>
					Password {`${formFields.password.value.length || '0'}/8`}
				</label>
				<input
					type='password'
					name='password'
					id='sign_up_form__password'
					className='form-control sign_up_form__input'
					onChange={handleChange}
					value={formFields.password.value}
				/>
				<small id='passwordError' className='form-text text-muted'>
					{formFields.password.dirty && formErrors.password}
				</small>
				<label htmlFor='name'>Confirm your password</label>
				<input
					type='password'
					name='passwordConfirm'
					id='sign_up_form__passwordConfirm'
					className='form-control sign_up_form__input'
					onChange={handleChange}
					value={formFields.passwordConfirm.value}
				/>
				<small id='passwordConfirmError' className='form-text text-muted'>
					{formFields.passwordConfirm.dirty && formErrors.passwordConfirm}
				</small>

				<button
					type='submit'
					disabled={!isFormValid}
					className='btn btn-primary'
				>
					Submit
				</button>
			</div>
		</form>
	)
}

const mapStateToProps = createStructuredSelector({
	error: selectSignUpError,
	loading: selectSignUpLoadingFlag,
})

const mapDispatchToProps = dispatch => ({
	signUpStart: dto => dispatch(signUpStart(dto)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpForm)
