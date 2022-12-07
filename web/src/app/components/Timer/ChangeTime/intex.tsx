import React, { FC } from 'react'
import { ChangeTimeIcon } from './ChangeTimeIcon'

export const ChangeTime: FC = props => {
	return (
		<div className='button'>
			<ChangeTimeIcon />
			<div className='button__title'>Pomodoro time:</div>
			<div className='button__time'>25:00</div>
		</div>
	)
}
