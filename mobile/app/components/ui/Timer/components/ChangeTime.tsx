import React, { FC, useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Dimensions,
	Switch,
} from 'react-native'

import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'
import { RootState } from '../../../../store'
// import './ChangeTime.scss'

import { ChangeTimeIcon } from './img/ChangeTimeIcon'

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
		<TouchableOpacity
			style={styled.button}
			onPress={() => allActions.changeTimer({})}
		>
			<ChangeTimeIcon />
			<Text style={styled.title}>{currentTimer}: </Text>
			<Text style={styled.time}>
				{formatedTime(minutes)}:{formatedTime(seconds)}
			</Text>
		</TouchableOpacity>
	)
}

const styled = StyleSheet.create({
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
		color: '#000000',
	},
	time: {
		fontSize: 24,
		color: '#000000',
	},
})
