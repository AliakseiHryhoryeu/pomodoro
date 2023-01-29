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

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useActions'
import { RootState } from '../../../store'

import { CheckIcon } from './img/CheckIcon'

export const Themes: FC = props => {
	const [longBreak, toggleLong] = useState(true)

	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})
	const allActions = useActions()

	return (
		<View style={styled.block}>
			<View style={styled.wrapper}>
				<Text style={styled.title}>Themes</Text>
				<TouchableOpacity
					style={styled.inputBlock}
					onPress={() => {
						allActions.changeThemeToLight({})
					}}
					// onClick={() => allActions.changeThemeToLight({})}
				>
					<Text style={styled.inputTitle}>Light</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={longBreak ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={styled.switch}
						onValueChange={() => {
							allActions.changeThemeToLight({})
						}}
						value={theme === 'light' ? true : false}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styled.inputBlock}
					onPress={() => allActions.changeThemeToDark({})}
				>
					<Text style={styled.inputTitle}>Dark</Text>
					<Switch
						trackColor={{ false: '#092c3e', true: '#0083ff' }}
						thumbColor={longBreak ? '#f4f3f4' : '#f4f3f4'}
						ios_backgroundColor='grey'
						style={styled.switch}
						onValueChange={() => {
							allActions.changeThemeToDark({})
						}}
						value={theme === 'dark' ? true : false}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

let ScreenWidht = Dimensions.get('window').width

const styled = StyleSheet.create({
	block: {
		paddingTop: 10,
		paddingBottom: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: ScreenWidht,
		backgroundColor: '#e6faff',
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: ScreenWidht,
	},
	title: {
		alignSelf: 'center',
		fontSize: 22,
		fontWeight: '600',
	},
	break: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0083ff',
		borderRadius: 6,
		height: 90,
		width: 90,
	},
	durationsTitle: {
		fontSize: 16,
		color: '#000000',
		fontWeight: '700',
	},
	inputBlock: {
		width: ScreenWidht,
		paddingHorizontal: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	inputTitle: {
		fontSize: 20,
		maxWidth: 200,
		paddingVertical: 6,
		// fontColor: '#000000',
	},

	switch: {
		transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
	},
})
