import { getSettingsState } from './settings.state'
import { ISettingsStorageState } from './settings.types'
import { storageFolder } from './settings.types'

//  Get data from storage
export async function getStorageData(): Promise<ISettingsStorageState> {
	return new Promise<ISettingsStorageState>(
		(resolve: (result: any) => void, reject: (reason: any) => void) => {
			const test = chrome.storage.local.get([storageFolder]).then(
				onfulfilled => {
					resolve(onfulfilled)
				},
				error => {
					reject(error)
				}
			)
		}
	)
}
//  Save data in storage
export const updateStorageData = () => {
	const themeState = getSettingsState()
	const promise = new Promise<ISettingsStorageState>(
		(resolve: (result: any) => void, reject: (reason: any) => void) => {
			const test = chrome.storage.local
				.set({ [storageFolder]: themeState })
				.then(
					onfulfilled => {
						resolve(onfulfilled)
					},
					error => {
						reject(error)
					}
				)
		}
	)
	promise.then((val: ISettingsStorageState) => {
		return val
	})
	return promise
}
