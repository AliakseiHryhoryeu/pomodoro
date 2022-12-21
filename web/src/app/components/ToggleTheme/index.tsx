import React, { FC } from 'react'
import classNames from 'classnames'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { SunIcon } from './img/SunIcon'
import { MoonIcon } from './img/MoonIcon'

import './ToggleTheme.scss'

export const ToggleTheme: FC = props => {
	const allActions = useActions()
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	return (
		<label
			className={classNames('toggleTheme', `toggleTheme-${theme}`)}
			id='toggleTheme'
		>
			<MoonIcon />
			<input
				id='toggleThemeCheckbox'
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
