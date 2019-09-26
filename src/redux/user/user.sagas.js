import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {
	loginSuccess,
	loginFailure,
	signUpSuccess,
	signUpFailure,
} from './user.actions'
import Auth from '../../api/auth'

const { LOGIN_START, SIGN_UP_START } = UserActionTypes
const auth = new Auth()

export function* login({ payload }) {
	try {
		const {
			data: {
				token,
				data: { user },
			},
		} = yield auth.login(payload)
		user.token = token
		yield put(loginSuccess(user))
	} catch (error) {
		yield put(loginFailure(error))
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

export function* onLoginStart() {
	yield takeLatest(LOGIN_START, login)
}

export function* onSignUpStart() {
	yield takeLatest(SIGN_UP_START, signUp)
}

export function* userSagas() {
	yield all([call(onLoginStart), call(onSignUpStart)])
}
