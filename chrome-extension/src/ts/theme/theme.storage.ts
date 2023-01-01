import { getThemeState } from './theme.state'
import { IThemeStorageState } from './theme.types'
import { storageFolder } from './theme.types'

//  Get data from storage
export async function getStorageData(): Promise<IThemeStorageState> {
	return new Promise<IThemeStorageState>(
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
	const themeState = getThemeState()
	const promise = new Promise<IThemeStorageState>(
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
	promise.then((val: IThemeStorageState) => {
		return val
	})
	return promise
}
