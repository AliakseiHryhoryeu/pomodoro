import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { TimerRunIcon } from './img/TimerRunIcon'
import { TimerPauseIcon } from './img/TimerPauseIcon'

import { useActions } from '@/hooks/useActions'
import { RootState } from '@/store'

export const TimerButton: FC = () => {
	const isActive = useSelector(
		(state: RootState) => state.settings.timer.isActive
	)

	const allActions = useActions()
	return (
		<TouchableOpacity
			style={styled.timer}
			onPress={() => {
				allActions.toggleRunTimer({})
			}}
		>
			{isActive && <TimerPauseIcon />}
			{!isActive && <TimerRunIcon />}
		</TouchableOpacity>
	)
}

const styled = StyleSheet.create({
	timer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 300,
		width: 300,
		marginBottom: 20,
		borderWidth: 6,
		borderRadius: 500,
		borderStyle: 'solid',
		borderColor: '#399fff',
	},
})
