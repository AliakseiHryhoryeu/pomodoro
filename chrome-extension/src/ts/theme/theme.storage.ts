import { getThemeState } from './theme.state'
import { IThemeState } from './theme.types'

const storageFolder = 'Theme'

//  Get data from storage
export async function getStorageData(): Promise<IThemeState> {
	return new Promise<IThemeState>(
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
	const promise = new Promise<IThemeState>(
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
	promise.then((val: IThemeState) => {
		return val
	})
	return promise
}
