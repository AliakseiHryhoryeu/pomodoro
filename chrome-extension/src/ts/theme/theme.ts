import {
	getThemeState,
	toggleThemeState,
	elementsClearTheme,
	elementsAddTheme,
} from './theme.state'

document.addEventListener('DOMContentLoaded', function (event) {
	// need updage gulp, need compile typescript into 1 file
	const toggleThemeCheckbox: HTMLInputElement = document.getElementById(
		'toggleThemeCheckbox'
	)! as HTMLInputElement

	// *******************************
	// ****  toggleTheme Checkbox ****
	// *******************************
	// set default state checkbox
	toggleThemeCheckbox.checked = getThemeState() === 'light' || false
	elementsAddTheme()
	// add event listener for change theme and save it in storage
	toggleThemeCheckbox.addEventListener(
		'click',
		e => {
			elementsClearTheme()
			toggleThemeState()
			elementsAddTheme()
		},
		false
	)
})
