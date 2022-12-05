import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

import { TimerActive } from './buttons/TimerActive'
import { TimerBack } from './buttons/TimerBack'
import { TimerNext } from './buttons/TimerNext'
import { TimerPause } from './buttons/TimerPause'

import './Timer.scss'
import { TimerStop } from './buttons/TimerStop'

export const Timer: FC = props => {
	const { theme, isActiveTimer, currentTimer } = useTypedSelector(
		(state: RootState) => {
			return {
				theme: state.theme.theme,
				isActiveTimer: state.settings.timer.isActive,
				currentTimer: state.settings.timer.currentTimer,
			}
		}
	)
	const [isPause, setPause] = useState(false)

	const [minutes, setMinutes] = useState(25)
	const [seconds, setSeconds] = useState(0)
	const [displayMessage, setDisplayMessage] = useState(false)

	// привести в нормальный вид таймер завтра,
	// начать делать версию для хрома,
	// верстку логина, регистрации, 404 стр, и т.д. поправить
	// упаковать серверную часть to do list в докер

	const startTimer = () => {
		let interval = setInterval(() => {
			if (isPause) {
				clearInterval(interval)
			}
			console.log('work')
			if (seconds === 0) {
				if (minutes !== 0) {
					setSeconds(59)
					setMinutes(minutes - 1)
				} else {
					let minutes = displayMessage ? 24 : 4
					let seconds = 59

					setSeconds(seconds)
					setMinutes(minutes)
					setDisplayMessage(!displayMessage)
				}
			} else {
				setSeconds(seconds - 1)
			}
		}, 1000)
	}

	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

	const allActions = useActions()
	return (
		<>
			<>
				<div className='test'>
					<div className='message'>
						{displayMessage && <div>Break time! New session starts in:</div>}
					</div>
					<div className='timer'>
						{timerMinutes}:{timerSeconds}
					</div>
				</div>
			</>
			<div className={classNames('timer', `timer-${theme}`)}>
				<div className='timer__wrapper'>
					<div className='timer__time'>
						<div className='timer__time-title'>Start to focus</div>
						{/* {isActiveTimer && <div className='timer__time-title'>Be focus</div>} */}
						<div className='timer__time-time'>25:00</div>
						<div className='timer__time-count'>1 of 4</div>
					</div>
					<div className='timer__buttons'>
						<TimerBack />
						<TimerActive />
						<TimerStop />
						<TimerPause />
						{isActiveTimer && <TimerPause />}
						<TimerNext />
					</div>
				</div>
			</div>
		</>
	)
}
