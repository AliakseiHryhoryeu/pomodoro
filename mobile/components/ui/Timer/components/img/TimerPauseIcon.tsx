import React, { FC } from 'react'
import { Svg, Rect } from 'react-native-svg'

export const TimerPauseIcon: FC = () => {
	return (
		<Svg width='80' height='100' viewBox='0 0 80 100' fill='none'>
			<Rect width='30' height='100' fill='#399FFF' />
			<Rect x='50' width='30' height='100' fill='#399FFF' />
		</Svg>
	)
}
