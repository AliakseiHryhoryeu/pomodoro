import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Header } from 'app/components'

import './Page404.css'

export const Page404: FC = () => {
	return (
		<div className='page404'>
			<Header />
			<div className='page404__main'>
				<div className='page404__text'>
					<span>404</span>
					page not found
				</div>
			</div>
		</div>
	)
}
