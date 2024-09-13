import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { useActions } from '../../../../hooks/useActions'
import { RootState } from '../../../../store'
// import './ChangeTime.scss'
import { colors } from '../../../../constants/Colors.ts'
import { useSelector } from 'react-redux'

import { ChangeTimeIcon } from './img/ChangeTimeIcon'

export const ChangeTime: FC = () => {
	const currentTimer = useSelector(
		(state: RootState) => state.settings.timer.currentTimer
	)
	const currentTime = useSelector(
		(state: RootState) => state.settings.timer.currentTime
	)

	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

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
		<TouchableOpacity
			style={currentStyles.button}
			onPress={() => allActions.changeTimer({})}
		>
			<ChangeTimeIcon />
			<Text style={currentStyles.title}>{currentTimer}: </Text>
			<Text style={currentStyles.time}>
				{formatedTime(minutes)}:{formatedTime(seconds)}
			</Text>
		</TouchableOpacity>
	)
}

const lightStyles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 14,
	},
	title: {
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 4,
		fontSize: 24,
		paddingVertical: 20,
		color: colors.light.fontColor,
	},
	time: {
		fontSize: 24,
		color: colors.light.fontColor,
	},
})

const darkStyles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 14,
	},
	title: {
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 4,
		fontSize: 24,
		paddingVertical: 20,
		color: colors.dark.fontColor,
	},
	time: {
		fontSize: 24,
		color: colors.dark.fontColor,
	},
})
