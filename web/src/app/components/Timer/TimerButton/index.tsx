import React, { FC } from 'react'
import { TimerRunIcon } from './icons/TimerRunIcon'
import { TimerPauseIcon } from './icons/TimerPauseIcon'
import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useTypedSelector'
import { RootState } from 'app/store'
import './ChangeTime.css'

export const TimerButton: FC = () => {
	const { isActive } = useTypedSelector((state: RootState) => {
		return {
			isActive: state.settings.timer.isActive,
		}
	})
	const allActions = useActions()
	return (
		<div
			className='timer__time'
			onClick={() => {
				allActions.toggleRunTimer({})
			}}
		>
			{isActive && <TimerPauseIcon />}
			{!isActive && <TimerRunIcon />}
		</div>
	)
}
