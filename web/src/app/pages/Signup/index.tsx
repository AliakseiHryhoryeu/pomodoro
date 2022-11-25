import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useFormik } from 'formik'

import { Header } from 'app/components'
import { RootState } from 'app/store'
import { useSignUpMutation } from 'app/store/user/user.api'

import googleIcon from 'assets/img/Google-icon.svg'
import facebookIcon from 'assets/img/Facebook-icon.svg'
import appleIcon from 'assets/img/Apple-icon.svg'

import { signupSchema } from './validation'

import './Signup.scss'

export const Signup: FC = () => {
	const navigate = useNavigate()

	const { trialMode } = useTypedSelector((state: RootState) => {
		return {
			trialMode: state.user.trialMode,
		}
	})

	if (!trialMode) {
		navigate('/', { replace: true })
	}

	const [signupRequest, { isLoading: isLoading }] = useSignUpMutation()

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: signupSchema,
		onSubmit: values => {
			signupRequest({
				email: values.email,
				password: values.password,
			})
		},
	})
	return (
		<div className='signup'>
			<Header />
			<div className='signup__container'>
				<form
					className='signup__form'
					onSubmit={formik.handleSubmit}
					noValidate
				>
					<div className='signup__title'>Sign up</div>
					{/* <div className='signup__social'>
						<img
							className='signup__social-icon'
							src={googleIcon}
							alt='google-icon'
						/>
						<div className='signup__social-text'>Continue with Google</div>
					</div>
					<div className='signup__social'>
						<img
							className='signup__social-icon'
							src={facebookIcon}
							alt='facebook-icon'
						/>
						<div className='signup__social-text'>Continue with Facebook</div>
					</div>
					<div className='signup__social signup__social-last'>
						<img
							className='signup__social-icon'
							src={appleIcon}
							alt='apple-icon'
						/>
						<div className='signup__social-text'>Continue with Apple</div>
					</div> */}
					<div className='signup__input'>
						<label
							className='signup__input-label'
							htmlFor='signup__input-email'
						>
							Email
						</label>
						<input
							className='signup__input-input signup__input-email'
							placeholder='Enter your email...'
							name='email'
							type='email'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
					</div>

					<div className='signup__input'>
						<label htmlFor='signup__input-password'>Password</label>
						<input
							className='signup__input-input signup__input-password'
							placeholder='Enter your password...'
							name='password'
							type='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
					</div>

					<button type='submit' className='signup__button btn-signup submit'>
						Sign up with Email
					</button>

					<div className='signup__text'>
						By continuing with Google, Apple, or Email, you agree to Todolist’s
						<span className='signup__text-underline'>Terms of Service</span>
						and
						<span className='signup__text-underline'>Privacy Policy</span>.
					</div>

					<div className='signup__text'>
						Already have account?
						<Link to='/login' className='signup__text-ml5'>
							Go to login
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
