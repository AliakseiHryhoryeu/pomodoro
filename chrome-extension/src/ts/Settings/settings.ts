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
	updateTime,
	changeTimer,
	getTimerCurrentTimer,
	getTimerCurrentTime,
	getTimerIsActive,
	toggleRunTimer,
	getState,
} from './settings.state'
import { ISettingsState } from './settings.types'

setInterval(() => {
	console.log('working')
}, 1000)

const setServerData = (key: string) => {
	const state = getState()

	chrome.storage.sync.set({ safgasgasgsag: state }).then(e => {
		console.log(e)
	})
}

function getServerData(key: string) {
	const response = chrome.storage.sync
		.get([key])
		.then(e => {
			console.log(e)
		})
		.then(
			onfulfilled => {
				console.log(onfulfilled)
				return onfulfilled
			},
			onrejected => {
				return false
			}
		)
	return response
}
setServerData('safgasgasgsag')
setInterval(() => {
	const test = getServerData('safgasgasgsag')
	console.log(test)
}, 1000)

document.addEventListener('DOMContentLoaded', function (event) {
	const settings = document.getElementById('settings')
	const settingsBgBtn = document.getElementById('settingsBg')
	const headerSettingsBtn = document.getElementById('headerSettingsBtn')
	const settingsHeaderBtn = document.getElementById('settings__header')
	// ==================================
	// ====  Toogle Visible Settings ====
	// ==================================
	let settingsVisible = false
	settings.style.display = 'none'
	const changeSettingsVisible = () => {
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
			changeSettingsVisible()
		},
		false
	)
	headerSettingsBtn.addEventListener(
		'click',
		e => {
			changeSettingsVisible()
		},
		false
	)
	settingsHeaderBtn.addEventListener(
		'click',
		e => {
			changeSettingsVisible()
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
	setInterval(() => {
		updateTime()
	}, 1000)

	const timer = document.getElementById('timer')

	const timerTime = document.getElementById('timer__time')
	const timerTimePause = document.getElementById('timer__time-pause')
	const timerTimeRun = document.getElementById('timer__time-run')

	const timerButtonInitisActive = getTimerIsActive()
	timerTimePause.style.display = timerButtonInitisActive ? 'block' : 'none'
	timerTimeRun.style.display = timerButtonInitisActive ? 'none' : 'block'
	timerTime.addEventListener(
		'click',
		e => {
			toggleRunTimer()
		},
		false
	)
	const timerChangeTimeBtn = document.getElementById('timer__button')
	timerChangeTimeBtn.addEventListener(
		'click',
		e => {
			changeTimer()
		},
		false
	)
	const timerChangeTimeTitle = document.getElementById('timer__button-title')
	timerChangeTimeTitle.textContent = getTimerCurrentTimer()

	const timerChangeTimeTime = document.getElementById('timer__button-time')
	timerChangeTimeTime.textContent = getTimerCurrentTime()
})
