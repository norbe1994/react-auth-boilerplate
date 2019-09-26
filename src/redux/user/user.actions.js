import userActionTypes from './user.types'

const {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	LOG_OUT,
} = userActionTypes

export const loginStart = loginDto => ({
	type: LOGIN_START,
	payload: loginDto,
})

export const loginSuccess = user => ({
	type: LOGIN_SUCCESS,
	payload: user,
})
export const loginFailure = errorMessage => ({
	type: LOGIN_FAILURE,
	payload: errorMessage,
})
export const signUpStart = signUpDto => ({
	type: SIGN_UP_START,
	payload: signUpDto,
})
export const signUpSuccess = user => ({
	type: SIGN_UP_SUCCESS,
	payload: user,
})
export const signUpFailure = errorMessage => ({
	type: SIGN_UP_FAILURE,
	payload: errorMessage,
})
export const logOut = () => ({
	type: LOG_OUT,
})
