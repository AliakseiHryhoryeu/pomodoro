import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// import { useActions } from 'app/hooks/useActions'
import { BackArrowIcon } from './img/BackArrowIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { colors } from '../../../constants/Colors'

export const SettingsHeader: FC = (props) => {
	const { navigate } = useNavigation()
	const theme = useSelector((state: RootState) => state.theme.theme)
	const currentStyles = theme === 'dark' ? darkStyles : lightStyles

	return (
		<TouchableOpacity
			style={currentStyles.header}
			onPress={() => navigate('Root')}
		>
			<BackArrowIcon />
			<Text style={currentStyles.title}>Settings</Text>
		</TouchableOpacity>
	)
}
const lightStyles = StyleSheet.create({
	header: {
		paddingTop: 34,
		paddingBottom: 12,
		paddingHorizontal: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: colors.light.backgroundWhite,
		color: colors.light.fontColor,
	},

	title: {
		fontSize: 20,
		fontWeight: '600',
		paddingLeft: 6,
		color: colors.light.fontColor,
	},
})

const darkStyles = StyleSheet.create({
	header: {
		paddingTop: 34,
		paddingBottom: 12,
		paddingHorizontal: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: colors.dark.backgroundWhite,
	},

	title: {
		fontSize: 20,
		fontWeight: '600',
		paddingLeft: 6,
		color: colors.dark.fontColor,
	},
})
