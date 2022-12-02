export interface ISettingsState {
	durations: IDurations
	breaks: IBreaks
	timerTime: number
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
