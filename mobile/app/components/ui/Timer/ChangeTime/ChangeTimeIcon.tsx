import React, { FC } from 'react'
import { Svg, Line } from 'react-native-svg'

export const ChangeTimeIcon: FC = props => {
	return (
		<Svg width='18' height='24' viewBox='0 0 18 28' fill='none'>
			<Line
				y1='-0.5'
				x2='11.2473'
				y2='-0.5'
				transform='matrix(0.782719 -0.622376 0.643408 0.765523 1 8)'
				stroke='black'
			/>
			<Line
				y1='-0.5'
				x2='11.2473'
				y2='-0.5'
				transform='matrix(-0.782719 -0.622376 -0.643408 0.765523 17 8)'
				stroke='black'
			/>
			<Line
				y1='-0.5'
				x2='11.2473'
				y2='-0.5'
				transform='matrix(0.782719 0.622376 0.643408 -0.765523 1 20)'
				stroke='black'
			/>
			<Line
				y1='-0.5'
				x2='11.2473'
				y2='-0.5'
				transform='matrix(-0.782719 0.622376 -0.643408 -0.765523 17 20)'
				stroke='black'
			/>
		</Svg>
	)
}
