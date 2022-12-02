import React, { FC } from 'react'

import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'
import { CheckIcon } from '../CheckIcon'

export const Breaks: FC = props => {
	const { shortBreak, longBreak, pomodoroCounts, autoStart } = useTypedSelector(
		(state: RootState) => {
			return {
				shortBreak: state.settings.breaks.short,
				longBreak: state.settings.breaks.long,
				autoStart: state.settings.breaks.autoStart,
				pomodoroCounts: state.settings.breaks.pomodoroCounts,
			}
		}
	)
	const allActions = useActions()
	return (
		<div className='settings__block'>
			<div className='settings__block-wrapper'>
				<div className='settings__block-title'>Breaks</div>
				<div
					className='settings__break'
					onClick={() => allActions.toggleBreak({})}
				>
					<div className='settings__break-title'>Break</div>
					{shortBreak && <CheckIcon />}
				</div>
				<div
					className='settings__break'
					onClick={() => allActions.toggleLongBreak({})}
				>
					<div className='settings__break-title'>Long break</div>
					{longBreak && <CheckIcon />}
				</div>
				<div className='settings__break'>
					<div className='settings__break-title'>Pomodoro counts</div>
					<input
						className='settings__break-input'
						type='number'
						value={pomodoroCounts}
						onChange={e =>
							allActions.changePomodoroCount({ newCount: e.target.value })
						}
					/>
				</div>
				<div
					className='settings__break'
					onClick={() => allActions.toggleAutoStart({})}
				>
					<div className='settings__break-title'>
						Auto start next pomodoro session
					</div>
					{autoStart && <CheckIcon />}
				</div>
			</div>
		</div>
	)
}
