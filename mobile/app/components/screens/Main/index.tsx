import React, { FC } from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { Header, Timer } from '../../ui'
import { colors } from '../../../constants/Colors'

export const Main: FC = () => {
	return (
		<>
			<Header />
			<View style={styles.container}>
				<Timer />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light.backgroundWhite,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: colors.light.fontColor,
	},
})
