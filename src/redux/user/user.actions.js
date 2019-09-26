import userActionTypes from './user.types'

const {
	SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
	LOG_OUT,
} = userActionTypes

export const signInStart = signInDto => ({
	type: SIGN_IN_START,
	payload: signInDto,
})

export const signInSuccess = user => ({
	type: SIGN_IN_SUCCESS,
	payload: user,
})
export const signInFailure = errorMessage => ({
	type: SIGN_IN_FAILURE,
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
