import { StyleSheet, View, Text } from 'react-native'
import { Header, Timer } from '@/components/ui'
import { colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

export default function main() {
	return (
		<>
			<Header />
			<Stack.Screen options={{ title: 'Oops!' }} />
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
