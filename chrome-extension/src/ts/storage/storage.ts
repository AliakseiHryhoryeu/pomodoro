type IPromiseResult = {
	test: boolean
}

//  Get data from storage
export const getServerData = (key: string) => {
	let promise = new Promise<IPromiseResult>(
		(resolve: (result: any) => void, reject: (reason: any) => void) => {
			const test = chrome.storage.local.get([key]).then(
				onfulfilled => {
					resolve(onfulfilled)
				},
				error => {
					reject(error)
				}
			)
		}
	)
	promise.then((val: IPromiseResult) => {
		console.log('resolve success', val)
	})
}
//  Save data in storage
export const setServerData = (key: string, data: any) => {
	let promise = new Promise<IPromiseResult>(
		(resolve: (result: any) => void, reject: (reason: any) => void) => {
			const test = chrome.storage.local.set({ [key]: data }).then(
				onfulfilled => {
					console.log('data saved success ')
					return onfulfilled
				},
				onrejected => {
					return onrejected
				}
			)
		}
	)
	promise.then((val: IPromiseResult) => {
		console.log('resolve success', val)
	})
}
