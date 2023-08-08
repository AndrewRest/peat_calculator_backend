import {NextFunction, Request, Response} from "express"
import {jwtService} from "../application/jwt-service"

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.headers.authorization) {
		res.status(401).send('Unauthorized')
	} else {
		const token = req.headers.authorization.split(' ')[1]
		const user = await jwtService.verifyToken(token)
		if (user) {
			req["user"] = user
			next()
		} else {
			res.status(401).send('Unauthorized');
		}
	}
}