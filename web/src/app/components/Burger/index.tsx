import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import './Burger.scss'

export const Burger: FC = props => {
	const dispatch = useDispatch()
	const allActions = useActions()

	const { isAuth, username } = useTypedSelector((state: RootState) => {
		return {
			username: state.user.activeUser.username,
			isAuth: !state.user.trialMode,
		}
	})

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
