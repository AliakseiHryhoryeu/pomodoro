import React, { FC } from 'react'
import { Svg, Path } from 'react-native-svg'

export const MenuBurgerIcon: FC = props => {
	return (
		<Svg width='36' height='36' viewBox='0 0 44 38' fill='none'>
			<Path d='M0 2H44' stroke='black' stroke-width='3' />
			<Path d='M0 36H44' stroke='black' stroke-width='3' />
			<Path d='M0 19H44' stroke='black' stroke-width='3' />
		</Svg>
	)
}
