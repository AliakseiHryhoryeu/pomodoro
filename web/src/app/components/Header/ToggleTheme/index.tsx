import React, { FC } from 'react'
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'

import './ToggleTheme.scss'

export const ToggleTheme: FC = props => {
	return (
		<label className='toggleTheme'>
			<MoonIcon />
			<input type='checkbox' className='toggleTheme-checkbox' />
			<span className='toggleTheme-span'></span>
			<SunIcon />
		</label>
	)
}
