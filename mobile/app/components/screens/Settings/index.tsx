import React, { FC } from 'react'

import { StyleSheet, View, Text, Dimensions } from 'react-native'

import { SettingsHeader, Durations, Breaks, Themes } from '../../ui/Settings/'

// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { useActions } from 'app/hooks/useActions'
// import { RootState } from 'app/store'

export const Settings: FC = () => {
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
