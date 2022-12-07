import React, { FC } from 'react'
import { TimerButtonIcon } from './TimerButtonIcon'

import './TimerButton.scss'

export const TimerButton: FC = () => {
	return (
		<div className='timer__time'>
			<TimerButtonIcon />
		</div>
	)
}
