import React, { FC } from 'react'
import { TimerButtonIcon } from './TimerButtonIcon'
import { useActions } from 'app/hooks/useActions'
import './TimerButton.scss'

export const TimerButton: FC = () => {
	const allActions = useActions()
	return (
		<div
			className='timer__time'
			onClick={() => {
				allActions.toggleRunTimer()
			}}
		>
			<TimerButtonIcon />
		</div>
	)
}
