import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Page404, Signup, Login, PasswordReset, Main } from 'app/pages'
import { useAuthQuery } from 'app/store/user/user.api'

export const App: FC = props => {
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
