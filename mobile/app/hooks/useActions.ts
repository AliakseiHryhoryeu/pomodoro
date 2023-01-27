import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { settingsActions } from 'app/store/settings/settings.slice'
import { themeActions } from 'app/store/theme/theme.slice'
import { userActions } from 'app/store/user/user.slice'

const allActions = {
	...settingsActions,
	...themeActions,
	...userActions,
}
export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
