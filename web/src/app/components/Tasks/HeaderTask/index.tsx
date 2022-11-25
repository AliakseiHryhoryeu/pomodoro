import React, { FC } from 'react'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'
import editListSvg from 'assets/img/editList.svg'
import { useUpdateListMutation } from 'app/store/list/list.api'
import { useActions } from 'app/hooks/useActions'
type TaskHeaderProps = {
	listId: string
}

export const HeaderTask: FC<TaskHeaderProps> = ({ listId }) => {
	const { list, isTrialMode } = useTypedSelector((state: RootState) => {
		return {
			list: state.list.allLists.filter(item => item._id === listId)[0],
			isTrialMode: state.user.trialMode,
		}
	})

	const [updateListRequest, { isLoading: isLoadingUpdate }] =
		useUpdateListMutation()

	const allActions = useActions()

	const editTitle = () => {
		const newTitle = window.prompt(`New list title`, list.title)
		if (newTitle) {
			if (!isTrialMode) {
				updateListRequest({ listId: listId, title: newTitle })
			} else {
				allActions.updateLocalList({ listId: listId, title: newTitle })
			}
		}
	}

	if (!list) {
		return <></>
	}

	return (
		<div>
			<h2 className={`tasks__title title--${list.color}`}>
				{list.title}
				<img src={editListSvg} alt='Edit icon' onClick={() => editTitle()} />
			</h2>
		</div>
	)
}
