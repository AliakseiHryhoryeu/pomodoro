import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { settingsActions } from '../store/settings/settings.slice'
import { themeActions } from '../store/theme/theme.slice'

const allActions = {
	...settingsActions,
	...themeActions,
}
export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
