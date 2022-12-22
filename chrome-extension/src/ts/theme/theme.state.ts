import { IThemeState } from './theme.types'

const LocalStorageFolder = 'Theme'
const LocalStorage_theme = JSON.parse(
	localStorage.getItem(LocalStorageFolder) || '{}'
)

const state: IThemeState = {
	theme: LocalStorage_theme || 'light',
}

export const getThemeState = () => {
	return state.theme
}

export const toggleThemeState = () => {
	if (state.theme === 'dark') {
		state.theme = 'light'
	} else {
		state.theme = 'dark'
	}
	localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
	console.log('set theme', state.theme)
}
