import {Request, Response, Router} from "express";
import {boxesRepository} from "../repositories/boxes-repository";

export const boxesRouter = Router({})


boxesRouter.get('/', (req: Request, res: Response) => {
	const boxes = boxesRepository.getBoxes()
	if (boxes) {
		res.send(boxes)
		res.send(200)
	} else {
		res.send(400)
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