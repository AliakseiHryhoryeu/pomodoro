/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native'

import { colors } from '@/constants/Colors'
import { useColorScheme } from './useColorScheme'

type ThemeProps = {
	lightColor?: string
	darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof colors.light & keyof typeof colors.dark
) {
	const theme = useColorScheme() ?? 'light'
	const colorFromProps = props[theme]

	if (colorFromProps) {
		return colorFromProps
	} else {
		return colors[theme][colorName]
	}
}

export function Text(props: TextProps) {
	const { style, lightColor, darkColor, ...otherProps } = props
	const color = useThemeColor(
		{ light: lightColor, dark: darkColor },
		'fontColor'
	)

	return <DefaultText style={[{ color }, style]} {...otherProps} />
}

export function View(props: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		'backgroundWhite'
	)

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}
