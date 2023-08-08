import {Request, Response, Router} from "express";
import {boxesRepository} from "../repositories/boxes-repository";
import {authMiddleware} from "../middlewares/auth-middleware";

export const boxesRouter = Router({})

boxesRouter.get('/', authMiddleware, (req: Request, res: Response) => {
	const user = req["user"]
	const boxes = boxesRepository.getBoxes()
	if (boxes) {
		res.status(200).send({boxes, user})
	} else {
		res.status(400).send("Невозможно загрузить информацию")
	}
})
boxesRouter.put('/:boxId', authMiddleware, (req: Request, res: Response) => {
	let isUpdatedBox = boxesRepository.updateBox(req.params.boxId, req.body)
	if (isUpdatedBox) {
		res.send(isUpdatedBox)
	} else {
		res.status(400).send("Бокс не обновлен")
	}
})