import React, { FC } from 'react'

import { useActions } from 'app/hooks/useActions'

import closebtn from 'assets/img/remove.svg'

import './Alert.scss'

type AlertProps = {
	text: string
}

export const Alert: FC<AlertProps> = ({ text }) => {
	const allActions = useActions()
	return (
		<div className='alert'>
			<div className='alert__wrapper'>
				<div className='alert__message'>{text}</div>
				<img
					src={closebtn}
					alt='Remove icon'
					className='alert__close'
					onClick={() => {
						allActions.alertHide()
					}}
				/>
			</div>
		</div>
	)
}
