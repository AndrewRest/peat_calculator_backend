type userType = {
	user: string
	password: string
}

const users: userType[] = [{
	user: "operator",
	password: "123"
}, {
	user: "master",
	password: "1415",
}, {
	user: "free",
	password: "showApp"
}]

export const authRepository = {
	authUser(userData: userType) {
		let userIncoming = users.find(u => u.user === userData.user)
		if (userIncoming && userIncoming.password === userData.password) {
			return {
				user: userIncoming,
				auth: true
			}
		} else return false
	}
}