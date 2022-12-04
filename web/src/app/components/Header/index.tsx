import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { Settings, Burger } from 'app/components'
import { ToggleTheme } from './ToggleTheme'

import mainLogo from 'assets/img/pomodoro.png'
import settingsIcon from 'assets/img/settingsIcon.svg'
import menuBurgerIcon from 'assets/img/menuBurger.svg'

import './Header.scss'
import { MenuBurgerIcon } from './img/MenuBurgerIcon'
import { SettingsIcon } from './img/SettionsIcon'

export const Header: FC = () => {
	const dispatch = useDispatch()

	const allActions = useActions()

	const { settingsVisible, BurgerVisible, theme } = useTypedSelector(
		(state: RootState) => {
			return {
				settingsVisible: state.user.settingsVisible,
				BurgerVisible: state.user.burgerVisible,
				theme: state.theme.theme,
			}
		}
	)
	return (
		<>
			<header className={classNames('header', `header-${theme}`)}>
				<div className='header__wrapper'>
					<div
						className='header__burger'
						onClick={() => dispatch(allActions.burgerShow)}
					>
						<MenuBurgerIcon />
					</div>
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
								<SettingsIcon />
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
