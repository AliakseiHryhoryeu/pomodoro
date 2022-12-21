import { getThemeState } from './theme.state'

document.addEventListener('DOMContentLoaded', function (event) {
	const toggleTheme = document.getElementById('toggleTheme')
	// need updage gulp, need compile typescript into 1 file
	const toggleThemeCheckbox: HTMLInputElement = document.getElementById(
		'toggleThemeCheckbox'
	)! as HTMLInputElement

	// *************************************
	// ****  toggleTheme Checkbox Start ****
	// *************************************
	let theme = getThemeState()
	if (toggleThemeCheckbox != null) {
		console.log(theme === 'light' || false)
		toggleThemeCheckbox.checked = theme === 'light' || false
	}
	// ***********************************
	// ****  toggleTheme Checkbox End ****
	// ***********************************
})
