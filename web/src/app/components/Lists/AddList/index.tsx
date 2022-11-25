import React, { FC, useState } from 'react'

import { Badge } from 'app/components'
import { RootState } from 'app/store'
import { useTypedSelector } from 'app/hooks/useAppSelector'
import { useActions } from 'app/hooks/useActions'
import { useCreateListMutation } from 'app/store/list/list.api'

import closeSvg from 'assets/img/close.svg'

import './AddList.scss'

export const AddList: FC = () => {
	const [visiblePopup, setVisiblePopup] = useState(false)
	const [selectedColor, setSelectedColor] = useState('purple')
	const [inputFolderName, setInputFolderValue] = useState('')

	const [addListMutation, { isLoading: isLoadingCreateList }] =
		useCreateListMutation()

	const { colors, isTrialMode } = useTypedSelector((state: RootState) => {
		return {
			colors: state.list.colors,
			isTrialMode: state.user.trialMode,
		}
	})
	const allActions = useActions()
	const changeColor = (color: string) => {
		setSelectedColor(color)
	}
	const createList = (title: string, color: string) => {
		setVisiblePopup(false)
		setInputFolderValue('')
		if (!isTrialMode) {
			addListMutation({ title: title, color: color })
		} else {
			allActions.createLocalList({ title: title, color: color })
		}
	}

	return (
		<div className='add-list'>
			<ul
				onClick={() => {
					setVisiblePopup(!visiblePopup)
				}}
				className='main__list'
			>
				<li>
					<i>
						<svg
							width='16'
							height='12'
							viewBox='0 0 12 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='listIconPlus'
						>
							<path
								d='M8 1V15'
								stroke='black'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M1 8H15'
								stroke='black'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</i>
					<span>Add Folder</span>
				</li>
			</ul>

			{visiblePopup && (
				<div className='add-list__popup'>
					<img
						onClick={() => setVisiblePopup(false)}
						src={closeSvg}
						alt='Close button'
						className='add-list__popup-close-btn'
					/>
					<input
						onChange={e => setInputFolderValue(e.target.value)}
						value={inputFolderName}
						className='field'
						type='text'
						placeholder='Folder Name'
					/>
					<div className='add-list__popup-colors'>
						{colors.map((color, index) => (
							<div onClick={() => changeColor(color)} key={index}>
								<Badge
									color={color}
									className={selectedColor === color && 'active'}
								/>
							</div>
						))}
					</div>
					<button
						className='button'
						onClick={() => createList(inputFolderName, selectedColor)}
					>
						Add New Folder
					</button>
				</div>
			)}
		</div>
	)
}
