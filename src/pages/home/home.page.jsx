import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectUser } from '../../redux/user/user.selectors'
import './home.styles.scss'

const Home = ({ user }) => {
	return (
		<div id='home' className='container-fluid'>
			<div className='row p-3'>
				<div className='col-sm col-md-7 pl-2'>One of two columns</div>
				<div className='col-sm col-md-5 pr-2'>
					<div className='card' style={{ width: '18rem' }}>
						<div className='card-body'>
							<h5 className='card-title'>{user.name}</h5>
							<h6 className='card-subtitle mb-2 text-muted'>{user.role}</h6>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							{/* <a href='#' className='card-link'>
								Card link
							</a>
							<a href='#' className='card-link'>
								Another link
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	user: selectUser,
})

export default connect(mapStateToProps)(Home)
