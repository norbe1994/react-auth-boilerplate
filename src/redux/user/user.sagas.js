import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
	signInSuccess,
	signInFailure,
	signUpSuccess,
	signUpFailure,
} from './user.actions'
import Auth from '../../api/auth'

const { SIGN_IN_START, SIGN_UP_START } = UserActionTypes
const auth = new Auth()

export function* signIn({ payload: { email, password } }) {
	try {
		const {
			token,
			data: { user },
		} = yield auth.signIn(email, password)
		user.token = token

		yield signInSuccess(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* signUp({ payload }) {
	try {
		const {
			data: {
				token,
				data: { user },
			},
		} = yield auth.signUp(payload)
		user.token = token
		yield put(signUpSuccess(user))
	} catch (error) {
		yield put(signUpFailure(error))
	}
}

export function* onSignInStart() {
	yield takeLatest(SIGN_IN_START, signIn)
}

export function* onSignUpStart() {
	yield takeLatest(SIGN_UP_START, signUp)
}

export function* userSagas() {
	yield all([call(onSignInStart), call(onSignUpStart)])
}
