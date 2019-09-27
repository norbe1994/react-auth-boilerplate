import React from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { logOut } from '../../redux/user/user.actions'

const Header = ({ user, logOut, history }) => {
	const currentPath = history.location.pathname

	const noAuth = (
		<React.Fragment>
			<li className='nav-item'>
				<Link
					className={`nav-link ${currentPath === '/signUp' ? 'active' : ''}`}
					to='/signUp'
				>
					Sign Up
				</Link>
			</li>
			<li className='nav-item'>
				<Link
					className={`nav-link ${currentPath === '/login' ? 'active' : ''}`}
					to='/login'
				>
					Login
				</Link>
			</li>
		</React.Fragment>
	)

	const withAuth = (
		<React.Fragment>
			<li className='nav-item'>
				<Link
					className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
					to='/'
				>
					Me
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/' onClick={logOut}>
					Logout
				</Link>
			</li>
		</React.Fragment>
	)

	return (
		<nav id='header'>
			<ul className='nav nav-tabs'>{user ? withAuth : noAuth}</ul>
		</nav>
	)
}

const mapDispatchToProps = dispatch => ({
	logOut: () => dispatch(logOut()),
})

export default compose(
	connect(
		null,
		mapDispatchToProps
	),
	withRouter
)(Header)
