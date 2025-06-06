import React, { FC } from 'react'

import { Svg, G, Path } from 'react-native-svg'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

import { colors } from '@/constants/Colors.ts'

export const SettingsIcon: FC = (props) => {
	const theme = useSelector((state: RootState) => state.theme.theme)

	const currentStyles =
		theme === 'dark' ? colors.dark.fontColor : colors.light.fontColor

	return (
		<Svg
			width='40px'
			height='40px'
			viewBox='0 0 512.000000 512.000000'
			preserveAspectRatio='xMidYMid meet'
		>
			<G
				transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
				fill={currentStyles}
				stroke='none'
			>
				<Path
					d='M2205 5106 c-41 -18 -82 -68 -94 -114 -5 -20 -37 -152 -72 -292 -34
-140 -65 -262 -70 -270 -4 -9 -38 -26 -76 -40 -37 -13 -111 -43 -163 -67 -52
-24 -102 -42 -110 -40 -8 2 -120 68 -248 145 -128 78 -248 144 -267 148 -71
13 -97 -6 -337 -244 -125 -124 -235 -241 -244 -260 -34 -72 -21 -105 144 -380
l151 -252 -33 -73 c-18 -39 -43 -103 -57 -141 -15 -43 -31 -72 -44 -77 -11 -5
-148 -40 -304 -78 -287 -70 -315 -80 -355 -135 -20 -27 -21 -40 -21 -376 0
-336 1 -349 21 -376 40 -54 68 -65 355 -135 156 -38 293 -73 304 -78 13 -5 29
-33 44 -77 14 -38 43 -110 67 -161 l42 -91 -136 -226 c-112 -188 -136 -235
-140 -275 -3 -31 1 -58 11 -77 26 -48 478 -492 510 -500 67 -16 106 0 336 138
l224 135 91 -42 c50 -23 122 -53 160 -66 43 -15 72 -31 77 -44 5 -11 40 -148
78 -304 70 -287 81 -315 135 -355 27 -20 40 -21 376 -21 336 0 349 1 376 21
54 40 65 68 135 355 38 156 73 293 78 304 5 13 33 29 77 45 38 13 111 43 163
67 l94 44 235 -141 c222 -132 238 -140 287 -140 70 0 85 12 341 271 222 225
243 254 230 322 -3 18 -69 137 -147 266 l-140 234 45 101 c24 56 52 125 63
155 11 32 26 57 38 62 11 5 148 40 304 78 287 70 315 81 355 135 20 27 21 40
21 376 0 336 -1 349 -21 376 -40 54 -68 65 -355 135 -156 38 -293 73 -304 78
-13 5 -29 34 -44 77 -14 38 -42 107 -63 154 -22 46 -37 92 -35 101 3 9 62 112
131 228 151 250 160 270 151 325 -7 37 -29 63 -234 269 -124 126 -239 238
-255 250 -21 15 -45 21 -81 22 -49 0 -64 -8 -289 -142 -131 -79 -241 -143
-246 -143 -4 0 -46 17 -92 38 -45 21 -114 49 -152 63 -43 15 -72 31 -77 44 -5
11 -40 148 -78 304 -70 287 -80 315 -135 355 -26 20 -42 21 -364 23 -265 2
-344 0 -367 -11z m498 -1507 c415 -62 750 -354 865 -754 160 -552 -165 -1132
-723 -1293 -552 -160 -1132 165 -1293 723 -190 657 309 1325 996 1334 46 1
116 -4 155 -10z'
				/>
			</G>
		</Svg>
	)
}
