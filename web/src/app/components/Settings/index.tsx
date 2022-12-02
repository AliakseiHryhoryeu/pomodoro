import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { useActions } from 'app/hooks/useActions'

import backArrow from 'assets/img/backArrow.svg'

import './Settings.scss'

export const Settings: FC = props => {
	const dispatch = useDispatch()

	const allActions = useActions()
	return (
		<div className='settings'>
			<div className='settings__main'>
				<div
					className='settings__header'
					onClick={() => dispatch(allActions.settingsHide)}
				>
					<div className='settings__header-icon'>
						<img src={backArrow} alt='backArrow' height='40px' width='40px' />
					</div>
					<div className='settings__header-title'>Settings</div>
				</div>
				<div className='settings__block'>
					<div className='settings__block-title'>Durations</div>
					<div className='settings__block-wrapper'>
						<div className='settings__durations'>
							<div className='settings__durations-block'>
								<div className='settings__durations-time settings__durations-pomodoro'>
									25
								</div>
								<div className='settings__durations-title'>Pomodoro</div>
							</div>
							<div className='settings__durations-block'>
								<div className='settings__durations-time settings__durations-pomodoro'>
									5
								</div>
								<div className='settings__durations-title'>Break</div>
							</div>
							<div className='settings__durations-block'>
								<div className='settings__durations-time settings__durations-pomodoro'>
									15
								</div>
								<div className='settings__durations-title'>Long break</div>
							</div>
						</div>
					</div>
				</div>
				<div className='settings__block'>
					<div className='settings__block-wrapper'>
						<div className='settings__block-title'>Breaks</div>
						<div className='settings__break'>
							<div className='settings__break-title'>Break</div>
							<label className='settings__break-checkbox'>
								<input type='checkbox' className='settings__break-switch' />
								<span className='settings__break-checkbox-span'></span>
							</label>
						</div>
						<div className='settings__break'>
							<div className='settings__break-title'>Long break</div>
							<label className='settings__break-checkbox'>
								<input type='checkbox' className='settings__break-switch' />
								<span className='settings__break-checkbox-span'></span>
							</label>
						</div>
						<div className='settings__break'>
							<div className='settings__break-title'>Pomodoro counts</div>
							<label className='settings__break-checkbox'>
								<input type='checkbox' className='settings__break-switch' />
								<span className='settings__break-checkbox-span'></span>
							</label>
						</div>
						<div className='settings__break'>
							<div className='settings__break-title'>
								Auto start next pomodoro session
							</div>
							<label className='settings__break-checkbox'>
								<input
									type='checkbox'
									checked={true}
									className='settings__break-checkbox-input'
								/>
								<span className='settings__break-checkbox-span'></span>
							</label>
						</div>
					</div>
				</div>
				<div className='settings__block'>
					<div className='settings__block-wrapper'>
						<div className='settings__block-title'>Themes</div>
						<div className='settings__theme'>
							<div className='settings__theme-title'>Light</div>
							<label className='settings__break-checkbox'>
								<input
									type='checkbox'
									checked={true}
									className='settings__break-checkbox-input'
								/>
								<span className='settings__break-checkbox-span'></span>
							</label>
						</div>
						<div className='settings__theme'>
							<div className='settings__theme-title'>Dark</div>
							<label className='settings__break-checkbox'>
								<input
									type='checkbox'
									checked={false}
									className='settings__break-checkbox-input'
								/>
								<span className='settings__break-checkbox-span'></span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div
				className='settings__bg'
				onClick={() => dispatch(allActions.settingsHide())}
			></div>
		</div>
	)
}
