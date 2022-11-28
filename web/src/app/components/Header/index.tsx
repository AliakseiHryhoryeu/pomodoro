import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { useActions } from 'app/hooks/useActions'
import { Settings } from 'app/components'
import { RootState } from 'app/store'

import { useTypedSelector } from 'app/hooks/useAppSelector'

import userIcon from 'assets/img/userIcon_1.png'
import mainLogo from 'assets/img/favicon.svg'
import settingsIcon from 'assets/img/settingsIcon.svg'
import exitIcon from 'assets/img/exitIcon.svg'
import themeIcon from 'assets/img/Theme-icon.svg'
import menuBurgerIcon from 'assets/img/hamburger_button_menu_icon_155296.svg'
import './Header.scss'

export const Header: FC = () => {
	const dispatch = useDispatch()

	const allActions = useActions()

	const { isAuth, username, userEmail, settingsVisible } = useTypedSelector(
		(state: RootState) => {
			return {
				userEmail: state.user.activeUser.email,
				username: state.user.activeUser.username,
				isAuth: !state.user.trialMode,
				settingsVisible: state.user.settingsVisible,
			}
		}
	)

	const [isActiveHeaderBurger, setActiveHeaderBurger] = useState(false)
	const [isActiveUsername, setActiveUsername] = useState(false)
	const toggleClassActiveHeaderBurger = () => {
		setActiveHeaderBurger(!isActiveHeaderBurger)
	}
	const toggleClassActiveUsername = () => {
		setActiveUsername(!isActiveUsername)
	}
	return (
		<>
			<header className='header__wrapper'>
				<header className='header'>
					<div className='header__container'>
						<img
							className='header__menuburger'
							src={menuBurgerIcon}
							alt='menu-burger'
							height='40px'
							width='40px'
						/>

						<Link to='/' className='header__link'>
							<img className='header__mainLogo' src={mainLogo} alt='mainLogo' />
							Pomodoro
						</Link>

						<nav
							className={classNames('header__nav', {
								'header__nav-active': isActiveHeaderBurger,
							})}
						>
							<ul className='header__nav__list'>
								<li className='header__nav__item '>
									<Link to='/login' className='header__nav__link '>
										Log in
									</Link>
								</li>
								<li className='header__nav__item '>
									<img
										onClick={() => console.log('test')}
										className='header__menuburger'
										src={menuBurgerIcon}
										alt='menu-burger'
										height='40px'
										width='40px'
									/>
								</li>
							</ul>
						</nav>
					</div>
				</header>
			</header>
			{isAuth && settingsVisible && <Settings />}
		</>
	)
}
