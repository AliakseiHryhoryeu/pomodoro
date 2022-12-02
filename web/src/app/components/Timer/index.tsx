import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { useActions } from 'app/hooks/useActions'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

import Play from 'assets/img/Play.svg'
import Pause from 'assets/img/Pause.svg'
import doubleArrorLeft from 'assets/img/doubleArrorLeft.svg'
import doubleArrorRight from 'assets/img/doubleArrorRight.svg'

import './Timer.scss'

export const Timer: FC = props => {
	const dispatch = useDispatch()

	const { isAuth, username } = useTypedSelector((state: RootState) => {
		return {
			username: state.user.activeUser.username,
			isAuth: !state.user.trialMode,
		}
	})

	const allActions = useActions()
	return (
		<div className='timer'>
			<div className='timer__wrapper'>
				<div className='timer__time'>
					<div className='timer__time-title'>Start to focus</div>
					<div className='timer__time-time'>25:00</div>
					<div className='timer__time-count'>1 of 4</div>
				</div>
				<div className='timer__buttons'>
					<div className='timer__buttons-button'>
						<img src={doubleArrorLeft} alt='doubleArrorLeft' />
					</div>
					<div className='timer__buttons-button'>
						<img src={Play} alt='backArrow' />
						{/* <img src={Pause} alt='backArrow' /> */}
					</div>
					<div className='timer__buttons-button'>
						<img src={doubleArrorRight} alt='doubleArrorRight' />
					</div>
				</div>
			</div>
		</div>
	)
}
