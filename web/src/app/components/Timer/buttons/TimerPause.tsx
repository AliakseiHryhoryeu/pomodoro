import React, { FC } from 'react'

export const TimerPause: FC = props => {
	return (
		<div
			className='timer__buttons-button'
			onClick={() => {
				// startTimer()
			}}
		>
			<svg
				width='36'
				height='40'
				viewBox='0 0 36 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='15' height='40' fill='white' />
				<rect x='21' width='15' height='40' fill='white' />
			</svg>
		</div>
	)
}
