import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { useActions } from 'app/hooks/useActions'

import { SettingsHeader } from './Header'
import { Durations } from './Durations'
import { Breaks } from './Breaks'
import { Themes } from './Themes'

import './Settings.scss'

export const Settings: FC = props => {
	const dispatch = useDispatch()

	const allActions = useActions()
	return (
		<div className='settings'>
			<div className='settings__main'>
				<SettingsHeader />
				<Durations />
				<Breaks />
				<Themes />
			</div>
			<div
				className='settings__bg'
				onClick={() => dispatch(allActions.settingsHide())}
			></div>
		</div>
	)
}
