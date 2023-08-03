import express, {Request, Response, Router} from "express";
import {authRepository} from "../repositories/auth-repository";
const cookieParser = require('cookie-parser')

export const authRouter = Router({})

const app = express();
// app.use(cookieParser());

authRouter.put('/user', (req: Request, res: Response) => {
	const authUser = authRepository.authUser(req.body)
	if (authUser) {
		res.send(authUser)
		// res.cookie('accessToken', 'some_access_token', {maxAge: 900000, httpOnly: true});
		res.send(200)
	} else {
		res.status(400).send('User is not authorized.');
	}
})