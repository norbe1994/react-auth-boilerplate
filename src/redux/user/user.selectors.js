import { createSelector } from 'reselect'

const selectUserReducer = state => state.user

export const selectUser = createSelector(
	[selectUserReducer],
	({ user }) => user
)

export const selectSignUpError = createSelector(
	[selectUserReducer],
	({ errors: { signUp } }) => signUp
)

export const selectSignUpLoadingFlag = createSelector(
	[selectUserReducer],
	({ loadingFlags: { signUp } }) => signUp
)
