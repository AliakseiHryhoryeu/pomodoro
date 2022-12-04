import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

import Play from 'assets/img/Play.svg'
import Pause from 'assets/img/Pause.svg'
import doubleArrorLeft from 'assets/img/doubleArrorLeft.svg'
import doubleArrorRight from 'assets/img/doubleArrorRight.svg'

import './Timer.scss'
import { TimerRun } from './img/TimerRun'
import { TimerBack } from './img/TimerBack'
import { TimerNext } from './img/TimerNext'
import { TimerPause } from './img/TimerPause'

export const Timer: FC = props => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	const allActions = useActions()
	return (
		<div className={classNames('timer', `timer-${theme}`)}>
			<div className='timer__wrapper'>
				<div className='timer__time'>
					<div className='timer__time-title'>Start to focus</div>
					<div className='timer__time-time'>25:00</div>
					<div className='timer__time-count'>1 of 4</div>
				</div>
				<div className='timer__buttons'>
					<div className='timer__buttons-button'>
						<TimerBack />
					</div>
					<div className='timer__buttons-button'>
						<TimerRun />
						{/* <TimerPause /> */}
					</div>
					<div className='timer__buttons-button'>
						<TimerNext />
					</div>
				</div>
			</div>
		</div>
	)
}
