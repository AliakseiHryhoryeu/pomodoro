import React, { FC } from 'react'
import { Svg, G, Path } from 'react-native-svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { colors } from '../../../../constants/Colors'

export const BackArrowIcon: FC = (props) => {
	const theme = useSelector((state: RootState) => state.theme.theme)

	const currentIconStyle =
		theme === 'dark' ? colors.dark.fontColor : colors.light.fontColor

	return (
		<Svg
			width='28px'
			height='28px'
			viewBox='0 0 512.000000 512.000000'
			preserveAspectRatio='xMidYMid meet'
		>
			<G
				transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
				fill={currentIconStyle}
				stroke='none'
			>
				<Path
					d='M2058 4727 c-31 -13 -74 -38 -95 -55 -77 -62 -1882 -1878 -1907
-1920 -38 -61 -60 -154 -52 -225 14 -132 -40 -73 1014 -1129 795 -796 975
-971 1020 -994 78 -39 202 -46 285 -14 89 34 153 90 191 169 28 60 31 75 31
161 0 165 16 144 -562 729 -274 278 -534 536 -579 575 -45 40 -118 91 -167
116 l-86 45 1837 5 1837 5 57 23 c81 33 160 108 200 190 30 60 33 75 33 152
-1 70 -5 95 -27 142 -35 76 -99 143 -173 181 l-60 32 -1855 5 -1855 5 95 50
95 49 576 576 c665 664 634 624 634 795 0 89 -3 106 -28 156 -15 31 -50 78
-77 103 -72 68 -126 89 -235 93 -77 3 -98 0 -147 -20z'
				/>
			</G>
		</Svg>
	)
}
