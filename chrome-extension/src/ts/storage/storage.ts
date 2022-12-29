type IPromiseResult = {
	test: boolean
}

export const getServerData = (key: string) => {
	let promise = new Promise<IPromiseResult>(
		(resolve: (result: any) => void, reject: (reason: any) => void) => {
			setTimeout(() => {
				console.log('test')
				const test = chrome.storage.local.get([key]).then(
					onfulfilled => {
						debugger
						resolve(onfulfilled)
					},
					error => {
						reject(error)
					}
				)
				// resolve(true)
			}, 4000)
		}
	)
	promise.then((val: IPromiseResult) => {
		console.log('resolve success', val)
	})
}

export const setServerData = (key: string, data: any) => {
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
