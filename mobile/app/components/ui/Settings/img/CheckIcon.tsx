import React, { FC } from 'react'
import { Svg, Stop, Path, LinearGradient } from 'react-native-svg'

export const CheckIcon: FC = props => {
	return (
		<Svg viewBox='0 0 48 48' width='40px' height='40px'>
			<LinearGradient
				id='HoiJCu43QtshzIrYCxOfCa'
				x1='21.241'
				x2='3.541'
				y1='39.241'
				y2='21.541'
				gradientUnits='userSpaceOnUse'
			>
				<Stop offset='.108' stopColor='#0d7044' />
				<Stop offset='.433' stopColor='#11945a' />
			</LinearGradient>
			<Path
				fill='url(#HoiJCu43QtshzIrYCxOfCa)'
				d='M16.599,41.42L1.58,26.401c-0.774-0.774-0.774-2.028,0-2.802l4.019-4.019	c0.774-0.774,2.028-0.774,2.802,0L23.42,34.599c0.774,0.774,0.774,2.028,0,2.802l-4.019,4.019	C18.627,42.193,17.373,42.193,16.599,41.42z'
			/>
			<LinearGradient
				id='HoiJCu43QtshzIrYCxOfCb'
				x1='-15.77'
				x2='26.403'
				y1='43.228'
				y2='43.228'
				gradientTransform='rotate(134.999 21.287 38.873)'
				gradientUnits='userSpaceOnUse'
			>
				<Stop offset='0' stopColor='#2ac782' />
				<Stop offset='1' stopColor='#21b876' />
			</LinearGradient>
			<Path
				fill='url(#HoiJCu43QtshzIrYCxOfCb)'
				d='M12.58,34.599L39.599,7.58c0.774-0.774,2.028-0.774,2.802,0l4.019,4.019	c0.774,0.774,0.774,2.028,0,2.802L19.401,41.42c-0.774,0.774-2.028,0.774-2.802,0l-4.019-4.019	C11.807,36.627,11.807,35.373,12.58,34.599z'
			/>
		</Svg>
	)
}
