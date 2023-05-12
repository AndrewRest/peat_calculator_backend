import express, {Request, Response} from 'express'
import bodyParser from "body-parser";

const app = express()
const port = process.env.PORT || 3000

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)
type boxesType = {
	id: string
	peatSize: string
	volumetricWeight: string
	fixedValues: boolean
}
const boxes: boxesType[] = [
	{
		id: "1H",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '2H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '3H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '4H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '5H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '6H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '7H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false,
	},
	{
		id: '8H',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: "1",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '2',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '3',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '4',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '5',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: "6",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '7',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '8',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '9',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: '10',
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
]

app.get('/boxes', (req: Request, res: Response) => {
	if (boxes) {
		res.send(boxes)
		res.send(200)
	} else {
		res.send(400)
	}
})
app.put('/boxes/:boxId', (req: Request, res: Response) => {
let box = boxes.filter(b => b.id === req.params.boxId)
	if (box) {
		Object.assign(box, req.body)
		res.send(box)
	} else {
		res.send(404)
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})