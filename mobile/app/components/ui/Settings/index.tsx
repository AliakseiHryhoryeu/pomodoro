import React, { FC } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { useActions } from 'app/hooks/useActions'
// import { RootState } from 'app/store'

import { SettingsHeader } from './components/SettingsHeader'
import { Durations } from './components/Durations'
import { Breaks } from './components/Breaks'
import { Themes } from './components/Themes'

// import './Settings.scss'

export const SettingsUI: FC = props => {
	// const { theme } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		theme: state.theme.theme,
	// 	}
	// })

	// const allActions = useActions()
	return (
		<View style={styled.settings}>
			<SettingsHeader />
			<Durations />
			<Breaks />
			<Themes />
		</View>
	)
}
let ScreenHeight = Dimensions.get('window').height

const styled = StyleSheet.create({
	settings: {
		minHeight: ScreenHeight,
		backgroundColor: '#e6faff',
	},
})
