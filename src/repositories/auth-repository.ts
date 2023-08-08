import {userType} from "../types/types";


const users: userType[] = [{
	user: "operator",
	password: "123",
}, {
	user: "master",
	password: "1415",
}, {
	user: "free",
	password: "showApp",
}]

export const authRepository = {
	authUser(userData: {user: string, password: string}) {
		let userIncoming = users.find(u => u.user === userData.user)
		if (userIncoming && userIncoming.password === userData.password) {
			return userIncoming
		} else return false
	}
}