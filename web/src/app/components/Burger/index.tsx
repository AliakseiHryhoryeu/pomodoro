import React, { FC } from 'react'

// import accountIcon from 'assets/img/Account-icon.svg'
// import ThemeIcon from 'assets/img/Theme-icon.svg'

import { useDispatch } from 'react-redux'
import { useActions } from 'app/hooks/useActions'

// import cross from 'assets/img/remove.svg'

import './Burger.scss'
import { Link } from 'react-router-dom'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

export const Burger: FC = props => {
	const dispatch = useDispatch()

	const { isAuth, username } = useTypedSelector((state: RootState) => {
		return {
			username: state.user.activeUser.username,
			isAuth: !state.user.trialMode,
		}
	})

	const allActions = useActions()
	return (
		<div className='burger'>
			<div className='burger__main'>
				<ul>
					{!isAuth && (
						<li>
							<Link
								to='/login'
								className=''
								onClick={() => dispatch(allActions.burgerHide())}
							>
								Sign in
							</Link>
						</li>
					)}
					{isAuth && <li>Hi, {username}</li>}
				</ul>
			</div>
			<div
				className='burger__bg'
				onClick={() => dispatch(allActions.burgerHide())}
			></div>
		</div>
	)
}
