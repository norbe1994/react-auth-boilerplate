import axios from 'axios'
import { signUpDto, loginDto } from './helpers/dtos'
import validateDto from './helpers/validateDto'

class Auth {
	signUp(dto) {
		if (!validateDto(dto, signUpDto)) throw new Error('Invalid sign up dto.')

		return axios
			.post('/api/v1/users/signup', dto)
			.then(response => response)
			.catch(error => {
				throw new Error(error.message)
			})
	}

	login(dto) {
		if (!validateDto(dto, loginDto)) throw new Error('Invalid sign up dto.')

		return axios
			.post('/api/v1/users/login', dto)
			.then(response => response)
			.catch(error => {
				throw new Error(error.message)
			})
	}
}

export default Auth
