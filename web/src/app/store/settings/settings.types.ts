export interface ISettingsState {
	durations: IDurations
	breaks: IBreaks
	timer: ITimer
	showAlert: boolean
}

export interface IDurations {
	pomodoroTime: number
	breakTime: number
	longTime: number
}
export interface IBreaks {
	short: boolean
	long: boolean
	pomodoroCounts: number
	autoStart: boolean
}

export interface ITimer {
	isActive: boolean
	currentTime: number
	currentTimer: 'Pomodoro' | 'Short break' | 'Long break'
}
