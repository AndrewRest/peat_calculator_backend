import {Request, Response, Router} from "express";
import {authRepository} from "../repositories/auth-repository";
import {jwtService} from "../application/jwt-service";

export const authRouter = Router({})

authRouter.put('/user', async (req: Request, res: Response) => {
	const authUser = await authRepository.authUser(req.body)
	if (authUser && typeof authUser !== 'boolean') {
		const token = await jwtService.createJWT(authUser)
		res.status(200).send({...authUser, accessToken: token})
	} else {
		res.status(400).send('User is not found. Please check your data.');
	}
})