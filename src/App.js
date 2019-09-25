import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import LoginPage from './pages/log-in/log-in.page'

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/signUp' component={SignUpPage} />
				<Route exact path='/login' component={LoginPage} />
			</Switch>
		</div>
	)
}

export default App
