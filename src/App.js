import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import LoginPage from './pages/log-in/log-in.page'
import { selectUser } from './redux/user/user.selectors'

const App = ({ user }) => {
	return (
		<div>
			<Header user={user} />
			<Switch>
				<Route
					exact
					path='/'
					render={() => (user ? <HomePage /> : <Redirect to='/signup' />)}
				/>
				<Route
					exact
					path='/signup'
					render={() => (!user ? <SignUpPage /> : <Redirect to='/' />)}
				/>
				<Route
					exact
					path='/login'
					render={() => (!user ? <LoginPage /> : <Redirect to='/' />)}
				/>
			</Switch>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	user: selectUser,
})

export default connect(mapStateToProps)(App)
