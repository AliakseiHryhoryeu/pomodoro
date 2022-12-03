import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import './Burger.scss'

export const Burger: FC = props => {
	const dispatch = useDispatch()
	const allActions = useActions()

	const { isAuth, username, theme } = useTypedSelector((state: RootState) => {
		return {
			username: state.user.activeUser.username,
			isAuth: !state.user.trialMode,
			theme: state.theme.theme,
		}
	})

	return (
		<div className='burger'>
			<div className={classNames('burger__main', `burger__main-${theme}`)}>
				<ul>
					{!isAuth && (
						<>
							<li>
								<Link
									to='/login'
									className=''
									onClick={() => allActions.burgerHide()}
								>
									Log in
								</Link>
							</li>
							<li>
								<Link
									to='/signup'
									className=''
									onClick={() => allActions.burgerHide()}
								>
									Sign up
								</Link>
							</li>
						</>
					)}
					{isAuth && <li>Hi, {username}</li>}
				</ul>
			</div>
			<div className='burger__bg' onClick={() => allActions.burgerHide()}></div>
		</div>
	)
}
