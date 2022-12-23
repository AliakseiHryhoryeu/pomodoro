import { IThemeState } from './theme.types'

const LocalStorageFolder = 'Theme'
const LocalStorage_theme = JSON.parse(
	localStorage.getItem(LocalStorageFolder) || '{}'
)

const state: IThemeState = {
	theme: LocalStorage_theme || 'dark',
}

export const toggleThemeState = () => {
	if (state.theme === 'dark') {
		state.theme = 'light'
	} else {
		state.theme = 'dark'
	}
	localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
}

export const changeThemeToLight = () => {
	state.theme = 'light'
	localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
}
export const changeThemeToDark = () => {
	state.theme = 'dark'
	localStorage.setItem(LocalStorageFolder, JSON.stringify(state.theme))
}

export const getThemeState = () => {
	return state.theme
}

// ******************************************
// ****  All elements with custom theme  ****
// ******************************************
const toggleTheme = document.getElementById('toggleTheme')
const header = document.getElementById('header')
const settings = document.getElementById('settings')
const timer = document.getElementById('timer')
const timer__button = document.getElementById('timer__button')
const themesLightIcon = document.getElementById('settingsThemes-LightIcon')
const themesDarkIcon = document.getElementById('settingsThemes-DarkIcon')
const toggleThemeCheckbox: HTMLInputElement = document.getElementById(
	'toggleThemeCheckbox'
)! as HTMLInputElement

export const elementsClearTheme = () => {
	const theme = getThemeState()
	toggleTheme.classList.remove(`toggleTheme-${theme}`)
	header.classList.remove(`header-${theme}`)
	settings.classList.remove(`settings-${theme}`)
	timer.classList.remove(`timer-${theme}`)
	timer__button.classList.remove(`timer__button-${theme}`)
	themesLightIcon.style.visibility = 'hidden'
	themesDarkIcon.style.visibility = 'hidden'
}

export const elementsAddTheme = () => {
	const theme = getThemeState()
	toggleTheme.classList.add(`toggleTheme-${theme}`)
	header.classList.add(`header-${theme}`)
	settings.classList.add(`settings-${theme}`)
	timer.classList.add(`timer-${theme}`)
	timer__button.classList.add(`timer__button-${theme}`)

	const isLight = getThemeState() === 'light' ? true : false
	const isDark = getThemeState() === 'dark' ? true : false

	themesLightIcon.style.visibility = isLight ? 'visible' : 'hidden'
	themesDarkIcon.style.visibility = isDark ? 'visible' : 'hidden'

	toggleThemeCheckbox.checked = getThemeState() === 'light' || false
}
