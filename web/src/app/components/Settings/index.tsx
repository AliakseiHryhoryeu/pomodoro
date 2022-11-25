import React, { FC } from 'react'

import { MainSettings } from './MainSettings'

import accountIcon from 'assets/img/Account-icon.svg'
import ThemeIcon from 'assets/img/Theme-icon.svg'

import { useDispatch } from 'react-redux'
import { useActions } from 'app/hooks/useActions'

import cross from 'assets/img/remove.svg'

import './Settings.scss'

export const Settings: FC = props => {
	const dispatch = useDispatch()

	const allActions = useActions()
	return (
		<div className='settings'>
			<div className='settings__main'>
				<div className='settings__left'>
					<div className='settings__title'>Settings</div>
					<div className='settings__category'>
						<div className='settings__category-item settings__category-active'>
							<img src={accountIcon} alt='Account-icon' />
							Account
						</div>
						<div className='settings__category-item'>
							<img src={ThemeIcon} alt='Theme-icon' />
							Theme
						</div>
					</div>
				</div>
				<div className='settings__right'>
					<div className='settings__title'>
						<div className='settings__title__title'>Account</div>
						<img
							className='settings__title__close'
							src={cross}
							alt='close-icon'
							onClick={() => dispatch(allActions.settingsHide())}
						/>
					</div>
					<MainSettings />
				</div>
			</div>
			<div
				className='settings__bg'
				onClick={() => dispatch(allActions.settingsHide())}
			></div>
		</div>
	)
}
