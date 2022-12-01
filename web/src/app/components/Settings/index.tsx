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
					<div className='settings__block-title'>Durations</div>
					<div className='settings__break'>
						<div className='settings__break-title'>Short break</div>
						<input type='checkbox' className='settings__break-switch'></input>
					</div>
					<div className='settings__break'></div>
					<div className='settings__block-setting'></div>
					<div className='settings__block-setting'>Long break</div>
					<div className='settings__block-setting'>Pomodoro count</div>
					<div className='settings__block-setting'>
						Auto start next pomodoro session
					</div>
					<div className='settings__block-setting'>Short break</div>
				</div>
			</div>
			<div
				className='settings__bg'
				onClick={() => dispatch(allActions.settingsHide())}
			></div>
		</div>
	)
}
