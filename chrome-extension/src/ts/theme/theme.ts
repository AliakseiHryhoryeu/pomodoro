import { getThemeState } from './theme.state'
import { toggleThemeState } from './theme.state'

document.addEventListener('DOMContentLoaded', function (event) {
	// need updage gulp, need compile typescript into 1 file
	const toggleThemeCheckbox: HTMLInputElement = document.getElementById(
		'toggleThemeCheckbox'
	)! as HTMLInputElement

	// ******************************************
	// ****  All elements with custom theme  ****
	// ******************************************
	const toggleTheme = document.getElementById('toggleTheme')
	const header = document.getElementById('header')
	const settings = document.getElementById('settings')
	const timer = document.getElementById('timer')
	const timer_button = document.getElementById('timer_button')

	const elementsClearTheme = () => {
		const theme = getThemeState()
		toggleTheme.classList.remove(`toggleTheme-${theme}`)
		header.classList.remove(`header-${theme}`)
		settings.classList.remove(`settings-${theme}`)
		timer.classList.remove(`timer-${theme}`)
		timer_button.classList.remove(`timer_button-${theme}`)
	}

	const elementsAddTheme = () => {
		console.log('work')
		const theme = getThemeState()
		toggleTheme.classList.add(`toggleTheme-${theme}`)
		header.classList.add(`header-${theme}`)
		settings.classList.add(`settings-${theme}`)
		timer.classList.add(`timer-${theme}`)
		timer_button.classList.add(`timer_button-${theme}`)
	}

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
