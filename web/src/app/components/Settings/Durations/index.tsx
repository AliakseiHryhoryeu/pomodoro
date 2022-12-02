import React, { FC, useState } from 'react'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'
import { useActions } from 'app/hooks/useActions'

export const Durations: FC = () => {
	const [pomodoroInputVisible, setPomodoroInputVisible] = useState(false)
	const [breakInputVisible, setBreakInputVisible] = useState(false)
	const [longBreakInputVisible, setLongBreakInputVisible] = useState(false)

	const { pomodoroTime, breakTime, longBreak } = useTypedSelector(
		(state: RootState) => {
			return {
				pomodoroTime: state.settings.durations.pomodoroTime,
				breakTime: state.settings.durations.breakTime,
				longBreak: state.settings.durations.longTime,
			}
		}
	)

	const allActions = useActions()

	return (
		<div className='settings__block'>
			<div className='settings__block-title'>Durations</div>
			<div className='settings__block-wrapper'>
				<div className='settings__durations'>
					<div
						className='settings__durations-block'
						onClick={() => setPomodoroInputVisible(true)}
					>
						{!pomodoroInputVisible && (
							<div className='settings__durations-time'>{pomodoroTime}</div>
						)}
						{pomodoroInputVisible && (
							<input
								type='number'
								className='settings__durations-time'
								value={pomodoroTime}
								onChange={e =>
									allActions.changePomodoroTime({
										newPomodoroTime: Number(e.target.value),
									})
								}
							/>
						)}
						<div className='settings__durations-title'>Pomodoro</div>
					</div>
					<div
						className='settings__durations-block'
						onClick={() => setBreakInputVisible(true)}
					>
						{!breakInputVisible && (
							<div className='settings__durations-time'>{breakTime}</div>
						)}
						{breakInputVisible && (
							<input
								type='number'
								className='settings__durations-time'
								value={breakTime}
								onChange={e =>
									allActions.changeBreakTime({
										newShortTime: Number(e.target.value),
									})
								}
							/>
						)}
						<div className='settings__durations-title'>Break</div>
					</div>
					<div
						className='settings__durations-block'
						onClick={() => setLongBreakInputVisible(true)}
					>
						{!longBreakInputVisible && (
							<div className='settings__durations-time'>{longBreak}</div>
						)}
						{longBreakInputVisible && (
							<input
								type='number'
								className='settings__durations-time'
								value={longBreak}
								onChange={e =>
									allActions.changeBreakTime({
										newShortTime: Number(e.target.value),
									})
								}
							/>
						)}
						<div className='settings__durations-title'>Long break</div>
					</div>
				</div>
			</div>
		</div>
	)
}
