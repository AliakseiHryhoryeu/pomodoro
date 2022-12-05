import React, { FC } from 'react'

export const TimerStop: FC = props => {
	return (
		<div
			className='timer__buttons-button'
			onClick={() => {
				// startTimer()
			}}
		>
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='40' height='40' fill='white' />
			</svg>
		</div>
	)
}