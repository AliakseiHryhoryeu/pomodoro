import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useFormik } from 'formik'

import { Header } from 'app/components'
import { RootState } from 'app/store'
import { useLoginMutation } from 'app/store/user/user.api'

import googleIcon from 'assets/img/Google-icon.svg'
import facebookIcon from 'assets/img/Facebook-icon.svg'
import appleIcon from 'assets/img/Apple-icon.svg'
import { loginSchema } from './validation'

import './Login.scss'

export const Login: FC = () => {
	const navigate = useNavigate()
	const [loginRequest, { isLoading: isLoading }] = useLoginMutation()

	const { trialMode } = useTypedSelector((state: RootState) => {
		return {
			trialMode: state.user.trialMode,
		}
	})

	if (!trialMode) {
		navigate('/', { replace: false })
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginSchema,
		onSubmit: values => {
			loginRequest({
				email: values.email,
				password: values.password,
			})
		},
	})

	return (
		<div className='login'>
			<Header />
			<div className='login__container'>
				<form className='login__form' onSubmit={formik.handleSubmit} noValidate>
					<div className='login__title'>Log in</div>
					{/* <div className='login__social'>
						<img
							className='login__social-icon'
							src={googleIcon}
							alt='google-icon'
						/>
						<div className='login__social-text'>Continue with Google</div>
					</div> */}
					{/* <div className='login__social'>
						<img
							className='login__social-icon'
							src={facebookIcon}
							alt='facebook-icon'
						/>
						<div className='login__social-text'>Continue with Facebook</div>
					</div>
					<div className='login__social login__social-last'>
						<img
							className='login__social-icon'
							src={appleIcon}
							alt='apple-icon'
						/>
						<div className='login__social-text'>Continue with Apple</div>
					</div> */}
					<div className='login__input'>
						<label className='login__input-label' htmlFor='login__input-email'>
							Email
						</label>
						<input
							className='login__input-input login__input-email'
							placeholder='Enter your email...'
							name='email'
							type='email'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
					</div>
					<div className='login__input'>
						<label htmlFor='login__input-password'>Password</label>
						<input
							className='login__input-input login__input-password'
							placeholder='Enter your password...'
							name='password'
							type='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
					</div>
					<button type='submit' className='login__button btn-login submit'>
						Log in
					</button>
					<div className='login__text'>
						<Link to='/password-reset' className=''>
							Forgot your password?
						</Link>
					</div>
					<div className='login__text'>
						By continuing with Google, Apple, or Email, you agree to Todolist’s
						<span className='login__text-underline'>Terms of Service</span>
						and
						<span className='login__text-underline'>Privacy Policy</span>.
					</div>
					<div className='login__text'>
						Don’t have an account?
						<Link to='/signup' className='login__text-ml5'>
							Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
