import React, { FC } from 'react'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'

import './ToggleTheme.scss'

export const ToggleTheme: FC = props => {
	const allActions = useActions()
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	return (
		<label className='toggleTheme'>
			<MoonIcon />
			<input
				type='checkbox'
				checked={theme === 'light' || false}
				onChange={() => allActions.toggleTheme({})}
				className='toggleTheme-checkbox'
			/>
			<span className='toggleTheme-span'></span>
			<SunIcon />
		</label>
	)
}
