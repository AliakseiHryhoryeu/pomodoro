import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

// import { useActions } from 'app/hooks/useActions'
import { BackArrowIcon } from './img/BackArrowIcon'

export const SettingsHeader: FC = props => {
	const { navigate } = useNavigation()

	return (
		<TouchableOpacity style={styled.header} onPress={() => navigate('Root')}>
			<BackArrowIcon />
			<Text style={styled.title}>Settings</Text>
		</TouchableOpacity>
	)
}
const styled = StyleSheet.create({
	header: {
		paddingTop: 34,
		paddingBottom: 12,
		paddingHorizontal: 4,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#e6faff',
	},

	title: {
		fontSize: 20,
		fontWeight: '600',
		paddingLeft: 6,
	},
})
