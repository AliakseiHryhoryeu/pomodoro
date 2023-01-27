import React, { FC } from 'react'

import { useActions } from 'app/hooks/useActions'
import { BackArrowIcon } from '../img/BackArrowIcon'

export const SettingsHeader: FC = props => {
	const allActions = useActions()

	return (
		<div
			className='settings__header'
			id='settings__header'
			onClick={() => allActions.settingsHide()}
		>
			<BackArrowIcon />
			<div className='settings__header-title'>Settings</div>
		</div>
	)
}
