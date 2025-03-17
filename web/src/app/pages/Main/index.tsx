import React, { FC } from 'react'

import { Header, Timer } from 'app/components'

import './Main.css'

export const Main: FC = () => {
	return (
		<div className='main'>
			<Header />
			<Timer />
		</div>
	)
}
