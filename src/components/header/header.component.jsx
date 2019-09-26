import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { logOut } from '../../redux/user/user.actions'

const Header = ({ user, logOut }) => {
	return (
		<nav id='header'>
			<h3>{user ? user.name : 'no user'}</h3>
			{user ? (
				<React.Fragment>
					<Link to='/'>Home</Link>
					<Link to='/' onClick={logOut}>
						Logout
					</Link>
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

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut()),
})

export default connect(
	null,
	mapDispatchToProps
)(Header)
