export interface ISettingsState {
	durations: IDurations
	breaks: IBreaks
	timerTime: number
}

export interface IDurations {
	pomodoroCount: number
	pomodoroTime: number
	shortTime: number
	longTime: number
}
export interface IBreaks {
	short: boolean
	long: boolean
	autoStart: boolean
}
