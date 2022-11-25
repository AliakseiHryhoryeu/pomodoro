import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing, Page404, Signup, Login, PasswordReset, Main } from 'app/pages'
import { useAuthQuery } from './store/user/user.api'

function App() {
	useAuthQuery({})

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/password-reset' element={<PasswordReset />} />
				<Route path='/landing' element={<Landing />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</div>
	)
}

export default App
