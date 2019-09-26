import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import {
	selectLoginLoadingFlag,
	selectLoginError,
} from '../../redux/user/user.selectors'
import { loginStart } from '../../redux/user/user.actions'
import './login-form.styles.scss'

const LoginForm = ({ loginStart, error, loading }) => {
	const [formFields, setFormFields] = useState({
		email: '',
		password: '',
	})

	const handleChange = ({ target: { name, value } }) => {
		setFormFields({ ...formFields, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		loginStart(formFields)
	}

	return (
		<form id='sign_in_form' onSubmit={handleSubmit}>
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

				<label htmlFor='name'>Password</label>
				<input
					type='password'
					name='password'
					id='sign_up_form__password'
					className='form-control sign_up_form__input'
					onChange={handleChange}
					value={formFields.password.value}
				/>

				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</div>
			<small id='loginMessage' className='form-text text-muted formMessage'>
				Don't have an account?&nbsp;
				<Link to='signup' className='formMessage__link'>
					Sign up
				</Link>
			</small>
		</form>
	)
}

const mapStateToProps = createStructuredSelector({
	error: selectLoginError,
	loading: selectLoginLoadingFlag,
})

const mapDispatchToProps = dispatch => ({
	loginStart: dto => dispatch(loginStart(dto)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm)
