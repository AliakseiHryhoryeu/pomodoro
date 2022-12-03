import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { Settings, Burger } from 'app/components'
import { ToggleTheme } from './ToggleTheme'

import mainLogo from 'assets/img/pomodoro.png'
import settingsIcon from 'assets/img/settingsIcon.svg'
import menuBurgerIcon from 'assets/img/menuBurger.svg'

import './Header.scss'

export const Header: FC = () => {
	const dispatch = useDispatch()

	const allActions = useActions()

	const { settingsVisible, BurgerVisible } = useTypedSelector(
		(state: RootState) => {
			return {
				settingsVisible: state.user.settingsVisible,
				BurgerVisible: state.user.burgerVisible,
			}
		}
	)

	return (
		<>
			<header className='header'>
				<div className='header__wrapper'>
					<img
						className='header__burger'
						onClick={() => dispatch(allActions.burgerShow)}
						src={menuBurgerIcon}
						alt='menu-burger'
						height='36px'
						width='36px'
					/>

					<Link to='/' className='header__logo'>
						<img src={mainLogo} alt='mainLogo' height='30px' width='30px' />
						Pomodoro
					</Link>

					<nav className='header__nav'>
						<ul>
							<li>
								<ToggleTheme />
							</li>
							<li onClick={() => dispatch(allActions.settingsShow)}>
								<img
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
			{settingsVisible && <Settings />}
			{BurgerVisible && <Burger />}
		</>
	)
}
