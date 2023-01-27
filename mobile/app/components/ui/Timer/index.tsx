import React, { FC, useEffect, useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import { TimerButton } from './TimerButton'

// import { useActions } from 'app/hooks/useActions'
// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { RootState } from 'app/store'

// import { Alert } from '../Alert/intex'

// import './Timer.scss'
// import { ChangeTime } from './ChangeTime/intex'
// import { TimerButton } from './TimerButton'

export const Timer: FC = props => {
	// const { theme, showAlert } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		theme: state.theme.theme,
	// 		showAlert: state.settings.showAlert,
	// 	}
	// })
	// const allActions = useActions()
	// useEffect(() => {
	// 	setInterval(() => {
	// 		allActions.updateTime({})
	// 	}, 1000)
	// }, [])
	return (
		<View style={styled.timer}>
			<TimerButton />
			{/* <ChangeTime /> */}
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
