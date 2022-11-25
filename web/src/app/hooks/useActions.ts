import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { taskActions } from 'app/store/task/task.slice'
import { listActions } from 'app/store/list/list.slice'
import { userActions } from 'app/store/user/user.slice'

const allActions = {
	...taskActions,
	...listActions,
	...userActions,
}
export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
