import {Request, Response, Router} from "express";
import {boxesRepository} from "../repositories/boxes-repository";

export const boxesRouter = Router({})


boxesRouter.get('/boxes', (req: Request, res: Response) => {
	const boxes = boxesRepository.getBoxes()
	if (boxes) {
		res.send(boxes)
		res.send(200)
	} else {
		res.status(400).send("Не возможно загрузить информацию")
	}
})
boxesRouter.put('/:boxId', (req: Request, res: Response) => {
	let isUpdatedBox = boxesRepository.updateBox(req.params.boxId, req.body)
	if (isUpdatedBox) {
		res.send(isUpdatedBox)
	} else {
		res.send(404)
	}
})