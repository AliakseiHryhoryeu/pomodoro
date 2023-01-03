import React, { FC } from 'react'
import { TimerRunIcon } from './icons/TimerRunIcon'
import { TimerPauseIcon } from './icons/TimerPauseIcon'
import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'
import './ChangeTime.scss'

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
