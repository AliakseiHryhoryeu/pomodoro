import React, { FC } from 'react'

import { HeaderTask, AddTask, Task, AddList } from 'app/components'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { RootState } from 'app/store'

import './Tasks.scss'

export const Tasks: FC = () => {
	const { allLists, showAllLists, activeListId } = useTypedSelector(
		(state: RootState) => {
			return {
				allLists: state.list.allLists,
				showAllLists: state.list.showAllLists,
				activeListId: state.list.activeListId,
			}
		}
	)

	if (allLists.length == 0) {
		return (
			<>
				<div className='tasks__item'>Folders not found</div>
				<AddList />
			</>
		)
	}

	if (!showAllLists && activeListId != '') {
		const activeList = allLists.find(item => item._id === activeListId)
		return (
			<div className='tasks__item' key={activeList._id}>
				<HeaderTask listId={activeList._id} />
				<Task listId={activeList._id} />
				<AddTask listId={activeList._id} />
			</div>
		)
	}

	return (
		<div className='tasks'>
			{allLists.map(list => {
				return (
					<div className='tasks__item' key={list._id}>
						<HeaderTask listId={list._id} />
						<Task listId={list._id} />
						<AddTask listId={list._id} />
					</div>
				)
			})}
		</div>
	)
}
