import React, { FC } from 'react'
import backArrow from 'assets/img/backArrow.svg'
import { useDispatch } from 'react-redux'

import { useActions } from 'app/hooks/useActions'

export const SettingsHeader: FC = props => {
	const dispatch = useDispatch()

	const allActions = useActions()

	return (
		<div
			className='settings__header'
			onClick={() => dispatch(allActions.settingsHide)}
		>
			<div className='settings__header-icon'>
				<img src={backArrow} alt='backArrow' height='40px' width='40px' />
			</div>
			<div className='settings__header-title'>Settings</div>
		</div>
	)
}
