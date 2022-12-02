import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { useActions } from 'app/hooks/useActions'
import { Settings, Burger } from 'app/components'
import { RootState } from 'app/store'

import { useTypedSelector } from 'app/hooks/useAppSelector'

import mainLogo from 'assets/img/pomodoro.png'
import settingsIcon from 'assets/img/settingsIcon.svg'
import menuBurgerIcon from 'assets/img/menuBurger.svg'
import './Header.scss'

export const Header: FC = () => {
	const dispatch = useDispatch()

	const allActions = useActions()

	const { isAuth, username, userEmail, settingsVisible, BurgerVisible } =
		useTypedSelector((state: RootState) => {
			return {
				userEmail: state.user.activeUser.email,
				username: state.user.activeUser.username,
				isAuth: !state.user.trialMode,
				settingsVisible: state.user.settingsVisible,
				BurgerVisible: state.user.burgerVisible,
			}
		})

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
							onClick={() => dispatch(allActions.burgerShow)}
							src={menuBurgerIcon}
							alt='menu-burger'
							height='36px'
							width='36px'
						/>

						<Link to='/' className='header__link'>
							<img
								className='header__mainLogo'
								src={mainLogo}
								alt='mainLogo'
								height='30px'
								width='30px'
							/>
							Pomodoro
						</Link>

						<nav
							className={classNames('header__nav', {
								'header__nav-active': isActiveHeaderBurger,
							})}
						>
							<ul className='header__nav__list'>
								<li
									className='header__nav__item'
									onClick={() => dispatch(allActions.settingsShow)}
								>
									<img
										className='header__menuburger'
										src={settingsIcon}
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
			{settingsVisible && <Settings />}
			{BurgerVisible && <Burger />}
		</>
	)
}
