import React, { FC } from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { Header, Timer } from '../../ui'

// import { Text, View } from './components/Themed'
// import { RootTabScreenProps } from '../../../../types'

export function Main({ navigate }) {
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
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
})
