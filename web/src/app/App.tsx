import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Page404, Signup, Login, PasswordReset, Main } from 'app/pages'
import { useAuthQuery } from './store/user/user.api'
function App() {
	useAuthQuery({})
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/password-reset' element={<PasswordReset />} />
			<Route path='*' element={<Page404 />} />
		</Routes>
	)
}

export default App
