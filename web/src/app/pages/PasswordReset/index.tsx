import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useFormik } from 'formik'

import { RootState } from 'app/store'
import { Header } from 'app/components'

import { passwordResetSchema } from './validation'

import './PasswordReset.scss'

export const PasswordReset: FC = () => {
	const navigate = useNavigate()

	const { trialMode } = useTypedSelector((state: RootState) => {
		return {
			trialMode: state.user.trialMode,
		}
	})
	if (!trialMode) {
		navigate('/', { replace: true })
	}

	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: passwordResetSchema,
		onSubmit: values => {
			navigate('/', { replace: true })
		},
	})
	return (
		<div className='passwordreset'>
			<Header />
			<div className='passwordreset__container'>
				<div className='passwordreset__form'>
					<div className='passwordreset__title'>Forgot your password?</div>
					<div className='passwordreset__input'>
						<label htmlFor='passwordreset__input-password'>Email</label>
						<input
							className='passwordreset__input-input passwordreset__input-password'
							placeholder='Enter your email...'
							name='email'
							type='email'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
					</div>
					<div className='passwordreset__button'>
						<a href=''>Reset my password</a>
					</div>
					<div className='passwordreset__text'>
						<Link to='/auth' className=''>
							Go to login
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
