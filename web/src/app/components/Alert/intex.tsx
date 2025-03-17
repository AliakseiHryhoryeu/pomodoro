import React, { FC } from 'react'
import { AlertIcon } from './AlertIcon'

import './Alert.css'

type AlertProps = {
	text: string
}

export const Alert: FC<AlertProps> = ({ text }) => {
	return (
		<div className='alert'>
			<div className='alert__text'>{text}</div>
			<div className='alert__close'>
				<AlertIcon />
			</div>
		</div>
	)
}
