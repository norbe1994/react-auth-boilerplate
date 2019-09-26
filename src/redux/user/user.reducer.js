import userActionTypes from './user.types'

const {
	SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} = userActionTypes

const INITIAL_STATE = {
	user: null,
	errors: {
		signIn: '',
		signUp: '',
	},
	loadingFlags: {
		signIn: false,
		signUp: false,
	},
}

const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case SIGN_IN_START:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					signIn: true,
				},
			}
		case SIGN_IN_SUCCESS:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					signIn: false,
				},
				user: payload,
			}
		case SIGN_IN_FAILURE:
			return {
				...state,
				loadingFlags: {
					...state.loadingFlags,
					signIn: false,
				},
				errors: {
					...state.errors,
					signIn: payload,
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

		default:
			return state
	}
}

export default userReducer
