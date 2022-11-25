import * as Yup from 'yup'

export const passwordResetSchema = Yup.object({
	email: Yup.string()
		.min(2, 'Must be 2 characters at minimum')
		.max(20, 'Must be 20 characters or less')
		.matches(/^[a-zA-Z0-9_]+$/, 'Invalid characters in username')
		.required('Required'),
})
