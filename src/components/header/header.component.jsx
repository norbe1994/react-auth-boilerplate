import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = ({ user }) => {
	return (
		<nav id='header'>
			<h3>{user ? user.name : 'no user'}</h3>
			{user ? (
				<React.Fragment>
					<Link to='/'>Home</Link>
					<Link to='/'>Logout</Link>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Link to='/signUp'>Sign Up</Link>
					<Link to='/login'>Login</Link>
				</React.Fragment>
			)}
		</nav>
	)
}

export default Header
