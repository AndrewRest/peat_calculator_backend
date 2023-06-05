type boxType = {
	id: string
	peatSize: string
	volumetricWeight: string
	fixedValues: boolean
}
const boxes: boxType[] = [
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
	{
		id: "A",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: "B",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: "C",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: "D",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
	{
		id: "K",
		peatSize: 'пустой',
		volumetricWeight: '',
		fixedValues: false
	},
]

export const boxesRepository = {
	getBoxes() {
		return boxes
	},
	updateBox(boxId: string, newBoxDate: boxType) {
		let box = boxes.find(b => b.id === boxId)
		if (box) {
			return Object.assign(box, newBoxDate)
		} else return false
	}
}