import React, { FC, useState } from 'react'
import classNames from 'classnames'

import { useTypedSelector } from 'app/hooks/useTypedSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { ChangeTimeIcon } from './ChangeTimeIcon'

import './ChangeTime.css'

export const ChangeTime: FC = () => {
	const { theme, currentTimer, currentTime } = useTypedSelector(
		(state: RootState) => {
			return {
				theme: state.theme.theme,
				currentTimer: state.settings.timer.currentTimer,
				currentTime: state.settings.timer.currentTime,
			}
		}
	)
	const minutes = Math.floor(currentTime / 60)
	const seconds = currentTime - Math.floor(currentTime / 60) * 60

	const formatedTime = (time: number) => {
		if (time < 10) {
			return `0${time}`
		}
		return `${time}`
	}
	const allActions = useActions()

	return (
		<div
			className={classNames('timer__button', `timer__button-${theme}`)}
			id='timer__button'
			onClick={() => allActions.changeTimer({})}
		>
			<ChangeTimeIcon />
			<div className='timer__button-title'>{currentTimer}:</div>
			<div className='timer__button-time'>
				{formatedTime(minutes)}:{formatedTime(seconds)}
			</div>
		</div>
	)
}
