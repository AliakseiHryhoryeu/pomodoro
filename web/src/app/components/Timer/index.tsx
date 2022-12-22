import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

import { Alert } from '../Alert/intex'

import './Timer.scss'
import { ChangeTime } from './ChangeTime/intex'
import { TimerButton } from './TimerButton'

export const Timer: FC = props => {
	const { theme, showAlert } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
			showAlert: state.settings.showAlert,
		}
	})
	const allActions = useActions()
	useEffect(() => {
		setInterval(() => {
			allActions.updateTime({})
		}, 1000)
	}, [])
	return (
		<>
			<div className={classNames('timer', `timer-${theme}`)} id='timer'>
				<div className='timer__wrapper'>
					<TimerButton />
					<ChangeTime />
				</div>
			</div>
			{/* {showAlert && (
				<div
					className='alert__wrapper'
					onClick={() => allActions.hideAlert({})}
				>
					<Alert text={'Tap to pause'} />
					<Alert text={'Tap and hold to cancel timer'} />
				</div>
			)} */}
		</>
	)
}
