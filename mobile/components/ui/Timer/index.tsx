import React, { FC, useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { TimerButton } from './components/TimerButton'
import { ChangeTime } from './components/ChangeTime'

import { useActions } from '@/hooks/useActions'
import { RootState } from '@/store'

import { colors } from '@/constants/Colors.ts'
import { useSelector } from 'react-redux'

// import { Alert } from '../Alert/intex'

// import './Timer.scss'
// import { TimerButton } from './TimerButton'

export const Timer: FC = (props) => {
	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	const allActions = useActions()
	useEffect(() => {
		setInterval(() => {
			allActions.updateTime({})
		}, 1000)
	}, [])
	return (
		<View style={currentStyles.timer}>
			<TimerButton />
			<ChangeTime />
		</View>
	)
}

const ScreenWight = Dimensions.get('window').height

const lightStyles = StyleSheet.create({
	timer: {
		flex: 1,
		width: ScreenWight,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light.backgroundWhite,
	},
})

const darkStyles = StyleSheet.create({
	timer: {
		flex: 1,
		width: ScreenWight,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.dark.backgroundWhite,
	},
})
