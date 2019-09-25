import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
	return (
		<nav id='header'>
			<Link to='/'>Home</Link>
			<Link to='/signUp'>Sign Up</Link>
			<Link to='/login'>Login</Link>
		</nav>
	)
}

export default Header
