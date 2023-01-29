import React, { FC } from 'react'

import { useNavigation } from '@react-navigation/native'

// import { useTypedSelector } from 'app/hooks/useTypedSelector'
// import { useActions } from 'app/hooks/useActions'
// import { RootState } from 'app/store'

// import { Settings, Burger } from 'app/components'
// import { ToggleTheme } from 'app/components/'

// import mainLogo from 'assets/img/pomodoro.png'

import { SettingsIcon } from './img/SettionsIcon'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ToggleTheme } from './ToggleTheme'
import { Tomato } from './img/Tomato'

export const Header: FC = () => {
	const { navigate } = useNavigation()
	// const dispatch = useDispatch()

	// const allActions = useActions()

	// const { settingsVisible, BurgerVisible, theme } = useTypedSelector(
	// 	(state: RootState) => {
	// 		return {
	// 			settingsVisible: state.user.settingsVisible,
	// 			BurgerVisible: state.user.burgerVisible,
	// 			theme: state.theme.theme,
	// 		}
	// 	}
	// )
	return (
		<View style={styled.header}>
			<TouchableOpacity style={styled.logo}>
				<Tomato />
				<Text style={styled.title}>Pomodoro</Text>
			</TouchableOpacity>

			<View style={styled.nav}>
				<View style={styled.theme}>
					<ToggleTheme />
				</View>
				<TouchableOpacity
					onPress={() => {
						navigate('Settings')
					}}
				>
					<SettingsIcon />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styled = StyleSheet.create({
	header: {
		paddingTop: 34,
		paddingBottom: 12,
		paddingHorizontal: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#e6faff',
	},
	logo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	theme: {
		paddingRight: 8,
	},
})
