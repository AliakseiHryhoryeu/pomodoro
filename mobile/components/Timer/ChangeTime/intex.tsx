import { StyleSheet, View } from 'react-native'

import React, { FC, useState } from 'react'

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useActions'
import { RootState } from '../../../store'

import { ChangeTimeIcon } from './ChangeTimeIcon'

// import './ChangeTime.scss'

export const ChangeTime: FC = () => {
	const { theme, currentTimer, currentTime } = useTypedSelector(
		(state: RootState) => {
			return {
				theme: state.theme.theme,
				currentTimer: state.settings.timer.currentTimer,
				currentTime: state.settings.timer.currentTime,
			}
		}
	)
	const minutes = Math.floor(currentTime / 60)
	const seconds = currentTime - Math.floor(currentTime / 60) * 60

	const formatedTime = (time: number) => {
		if (time < 10) {
			return `0${time}`
		}
		return `${time}`
	}
	const allActions = useActions()

	return (
		<View
			style={styles.button}
			onPointerDown={() => allActions.changeTimer({})}
		>
			<ChangeTimeIcon />
			<View style={styles.title}>{currentTimer}:</View>
			<View style={styles.time}>
				{formatedTime(minutes)}:{formatedTime(seconds)}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		border: '4px solid transparent',
	},
	title: {
		fontSize: 24,
		paddingVertical: 10,
	},
	time: {
		// fontSize: 24,
		// fontWeight: '600',
	},
})
