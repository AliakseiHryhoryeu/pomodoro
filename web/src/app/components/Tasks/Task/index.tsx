import React, { FC } from 'react'

import { RootState } from 'app/store'

import {
	useUpdateTaskMutation,
	useDeleteTaskMutation,
} from 'app/store/task/task.api'

import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'

import editTaskSvg from 'assets/img/editTask.svg'
import deleteTaskSvg from 'assets/img/deleteTask.svg'

import './Task.scss'

type TaskProps = {
	listId: string
}

export const Task: FC<TaskProps> = ({ listId }) => {
	const { tasks, isTrialMode } = useTypedSelector((state: RootState) => {
		return {
			tasks: state.task.allTasks.filter(item => item.listId === listId),
			isTrialMode: state.user.trialMode,
		}
	})
	const [updateTaskRequest, { isLoading: isLoadingUpdate }] =
		useUpdateTaskMutation()
	const [deleteTaskRequest, { isLoading: isLoadingDelete }] =
		useDeleteTaskMutation()

	const allTasks = useActions()

	const updateText = ({ taskId, text, completed }) => {
		const newText = window.prompt(`New task text`, text)
		if (newText) {
			if (!isTrialMode) {
				updateTaskRequest({
					taskId: taskId,
					text: newText,
					completed: completed,
				})
			} else {
				allTasks.updateLocalTask({
					taskId: taskId,
					text: newText,
					completed: completed,
				})
			}
		}
	}

	const checkTask = ({ taskId, text, completed }) => {
		if (!isTrialMode) {
			updateTaskRequest({
				taskId: taskId,
				text: text,
				completed: !completed,
			})
		} else {
			allTasks.updateLocalTask({
				taskId: taskId,
				text: text,
				completed: !completed,
			})
		}
	}

	const delTask = taskId => {
		if (window.confirm('Are you sure you want delete this task?')) {
			if (!isTrialMode) {
				deleteTaskRequest({
					taskId: taskId,
				})
			} else {
				allTasks.deleteLocalTask({ taskId: taskId })
			}
		}
	}

	if (!tasks) {
		return <></>
	}

	return (
		<>
			{tasks.map(task => {
				return (
					<div className='tasks__items-row' key={task._id}>
						<div className='checkbox'>
							<input
								onChange={() =>
									checkTask({
										taskId: task._id,
										text: task.text,
										completed: task.completed,
									})
								}
								id={`task-${task._id}`}
								type='checkbox'
								checked={task.completed}
							/>
							<label htmlFor={`task-${task._id}`}>
								<svg
									width='11'
									height='8'
									viewBox='0 0 11 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
										stroke='#000'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</label>
						</div>
						<p>{task.text}</p>
						<div className='tasks__items-row-actions'>
							<div
								onClick={() =>
									updateText({
										taskId: task._id,
										text: task.text,
										completed: task.completed,
									})
								}
							>
								<img src={editTaskSvg} alt='Edit icon' />
							</div>
							<div onClick={() => delTask(task._id)}>
								<img src={deleteTaskSvg} alt='Delete icon' />
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
