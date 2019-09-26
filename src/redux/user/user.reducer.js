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

const INITIAL_STATE = {
	user: null,
	errors: {
		login: '',
		signUp: '',
	},
	loadingFlags: {
		login: false,
		signUp: false,
	},
}

const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case LOGIN_START:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					login: true,
				},
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					login: false,
				},
				user: payload,
			}
		case LOGIN_FAILURE:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					login: false,
				},
				errors: {
					...state.errors,
					login: payload,
				},
			}
		case SIGN_UP_START:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					signUp: true,
				},
			}
		case SIGN_UP_SUCCESS:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					signUp: false,
				},
				user: payload,
			}
		case SIGN_UP_FAILURE:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					signUp: false,
				},
				errors: {
					...state.errors,
					signUp: payload,
				},
			}

		case LOG_OUT:
			return {
				...state,
				user: null,
			}

		default:
			return state
	}
}

export default userReducer
