import jwt from 'jsonwebtoken'
import {userType} from "../types/types";

export const settings = {
	JWT_SECRET: process.env.JWT_SECRET || '123'
}


export const jwtService = {
	async createJWT(user: userType) {
		return jwt.sign({ user: user.user }, settings.JWT_SECRET, {expiresIn: '5m'})
	},
	verifyToken(token: string): any | null {
		try {
			return jwt.verify(token, settings.JWT_SECRET) as userType
		} catch (error) {
			return null
		}
	}
}