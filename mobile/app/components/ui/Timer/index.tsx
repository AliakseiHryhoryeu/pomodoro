import React, { FC, useEffect, useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import { TimerButton } from './components/TimerButton'
import { ChangeTime } from './components/ChangeTime'

import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { RootState } from '../../../store'

// import { Alert } from '../Alert/intex'

// import './Timer.scss'
// import { TimerButton } from './TimerButton'

export const Timer: FC = props => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})
	const allActions = useActions()
	useEffect(() => {
		setInterval(() => {
			allActions.updateTime({})
		}, 1000)
	}, [])
	return (
		<View style={styled.timer}>
			<TimerButton />
			<ChangeTime />
		</View>
	)
}

const ScreenWight = Dimensions.get('window').height

const styled = StyleSheet.create({
	timer: {
		flex: 1,
		width: ScreenWight,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f0feff',
	},
})
