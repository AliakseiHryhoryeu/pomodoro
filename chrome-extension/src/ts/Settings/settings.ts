import {
	changeThemeToDark,
	changeThemeToLight,
	elementsAddTheme,
	elementsClearTheme,
	getThemeState,
	toggleThemeState,
} from '../theme/theme.state'
import {
	getDurationsPomodoroTime,
	getDurationsBreakTime,
	getDurationsLongTime,
	changePomodoroTime,
	changeBreakTime,
	changeLongTime,
	changePomodoroCount,
	getBreaksPomodoroCounts,
	getBreaksShort,
	getBreaksLong,
	toggleBreak,
	toggleLongBreak,
	toggleAutoStart,
	getBreaksAutoStart,
} from './settings.state'

document.addEventListener('DOMContentLoaded', function (event) {
	const settings = document.getElementById('settings')
	const settingsBgBtn = document.getElementById('settingsBg')
	const headerSettingsBtn = document.getElementById('headerSettingsBtn')
	const settingsHeaderBtn = document.getElementById('settings__header')
	// ==================================
	// ====  Toogle Visible Settings ====
	// ==================================
	let settingsVisible = true
	const changeVisible = () => {
		settingsVisible = !settingsVisible
		if (settings) {
			if (settingsVisible) {
				settings.style.display = 'flex'
			} else {
				settings.style.display = 'none'
			}
		}
	}
	settingsBgBtn.addEventListener(
		'click',
		e => {
			changeVisible()
		},
		false
	)
	headerSettingsBtn.addEventListener(
		'click',
		e => {
			changeVisible()
		},
		false
	)
	settingsHeaderBtn.addEventListener(
		'click',
		e => {
			changeVisible()
		},
		false
	)
	// =======================================
	// =====  Settings Data change/load  =====
	// =======================================

	//** Durations
	const durationPomodoro = document.getElementById(
		'settingsDurations-Pomodoro'
	)! as HTMLInputElement
	const durationBreak = document.getElementById(
		'settingsDurations-Break'
	)! as HTMLInputElement
	const durationLong = document.getElementById(
		'settingsDurations-LongBreak'
	)! as HTMLInputElement

	durationPomodoro.value = String(getDurationsPomodoroTime())
	durationBreak.value = String(getDurationsBreakTime())
	durationLong.value = String(getDurationsLongTime())

	durationPomodoro.onchange = e => {
		const target = e.target as HTMLInputElement
		changePomodoroTime(Number(target.value))
	}
	durationBreak.onchange = e => {
		const target = e.target as HTMLInputElement
		changeBreakTime(Number(target.value))
	}
	durationLong.onchange = e => {
		const target = e.target as HTMLInputElement
		changeLongTime(Number(target.value))
	}
	//** Breaks
	// Break
	const breakShortBreak = document.getElementById('settingsBreaks-Break')
	const breakShortBreakIcon = document.getElementById(
		'settingsBreaks-BreakIcon'
	)
	breakShortBreakIcon.style.visibility = getBreaksShort() ? 'visible' : 'hidden'
	breakShortBreak.addEventListener(
		'click',
		e => {
			toggleBreak()
			breakShortBreakIcon.style.visibility = getBreaksShort()
				? 'visible'
				: 'hidden'
		},
		false
	)

	// Long break
	const breakLongBreak = document.getElementById('settingsBreaks-LongBreak')
	const breakLongBreakIcon = document.getElementById(
		'settingsBreaks-LongBreakIcon'
	)

	breakLongBreakIcon.style.visibility = getBreaksLong() ? 'visible' : 'hidden'
	breakLongBreak.addEventListener(
		'click',
		e => {
			toggleLongBreak()
			breakLongBreakIcon.style.visibility = getBreaksLong()
				? 'visible'
				: 'hidden'
		},
		false
	)

	// Pomodoro counts
	const breakPomodoroCounts = document.getElementById(
		'settingsBreaks-PomodoroCounts'
	)! as HTMLInputElement
	breakPomodoroCounts.value = String(getBreaksPomodoroCounts())

	breakPomodoroCounts.onchange = e => {
		const target = e.target as HTMLInputElement
		changePomodoroCount(target.value)
		breakPomodoroCounts.value = String(getBreaksPomodoroCounts())
	}

	// Auto start next pomodoro
	const breakAutoStart = document.getElementById('settingsBreaks-AutoStart')
	const breakAutoStartIcon = document.getElementById(
		'settingsBreaks-AutoStartIcon'
	)
	breakAutoStartIcon.style.visibility = getBreaksAutoStart()
		? 'visible'
		: 'hidden'

	breakAutoStart.addEventListener(
		'click',
		e => {
			toggleAutoStart()
			breakAutoStartIcon.style.visibility = getBreaksAutoStart()
				? 'visible'
				: 'hidden'
		},
		false
	)

	//** Themes
	const themesLight = document.getElementById('settingsThemes-Light')
	const themesLightIcon = document.getElementById('settingsThemes-LightIcon')
	const isLight = getThemeState() === 'light' ? true : false
	themesLightIcon.style.visibility = isLight ? 'visible' : 'hidden'
	themesLight.addEventListener(
		'click',
		e => {
			elementsClearTheme()
			changeThemeToLight()
			elementsAddTheme()
		},
		false
	)
	const themesDark = document.getElementById('settingsThemes-Dark')
	const themesDarkIcon = document.getElementById('settingsThemes-DarkIcon')
	const isDark = getThemeState() === 'dark' ? true : false
	themesDarkIcon.style.visibility = isDark ? 'visible' : 'hidden'
	themesDark.addEventListener(
		'click',
		e => {
			elementsClearTheme()
			changeThemeToDark()
			elementsAddTheme()
		},
		false
	)

	// =================
	// ====  Timer  ====
	// =================
})
