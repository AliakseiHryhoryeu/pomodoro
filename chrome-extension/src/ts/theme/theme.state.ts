import { getStorageData, updateStorageData } from './theme.storage'
import { IThemeState } from './theme.types'

const state: IThemeState = {
	theme: 'dark',
}
async function updateState() {
	await getStorageData().then(data => {
		elementsClearTheme()
		state.theme = data.Theme
		elementsAddTheme()
	})
}
updateState()
export const toggleThemeState = () => {
	if (state.theme === 'dark') {
		state.theme = 'light'
	} else {
		state.theme = 'dark'
	}
	updateStorageData()
}

export const changeThemeToLight = () => {
	state.theme = 'light'
	updateStorageData()
}
export const changeThemeToDark = () => {
	state.theme = 'dark'
	updateStorageData()
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
