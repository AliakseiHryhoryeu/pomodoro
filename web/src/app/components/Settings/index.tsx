import React, { FC } from 'react'
import classNames from 'classnames'

import { useTypedSelector } from 'app/hooks/useTypedSelector'
import { useActions } from 'app/hooks/useActions'
import { RootState } from 'app/store'

import { SettingsHeader } from './SettingsHeader'
import { Durations } from './Durations'
import { Breaks } from './Breaks'
import { Themes } from './Themes'

import './Settings.css'

export const Settings: FC = (props) => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	const allActions = useActions()
	return (
		<div className={classNames('settings', `settings-${theme}`)} id='settings'>
			<div className='settings__main'>
				<SettingsHeader />
				<Durations />
				<Breaks />
				<Themes />
			</div>
			<div
				className='settings__bg'
				onClick={() => allActions.settingsHide()}
			></div>
		</div>
	)
}
