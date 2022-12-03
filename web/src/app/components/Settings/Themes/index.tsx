import React, { FC } from 'react'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { CheckIcon } from '../CheckIcon'

export const Themes: FC = props => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	const allActions = useActions()
	return (
		<div className='settings__block'>
			<div className='settings__block-wrapper'>
				<div className='settings__block-title'>Themes</div>
				<div
					className='settings__theme'
					onClick={() => allActions.changeThemeToLight({})}
				>
					<div className='settings__theme-title'>Light</div>
					{theme === 'light' && <CheckIcon />}
				</div>
				<div
					className='settings__theme'
					onClick={() => allActions.changeThemeToDark({})}
				>
					<div className='settings__theme-title'>Dark</div>
					{theme === 'dark' && <CheckIcon />}
				</div>
			</div>
		</div>
	)
}
