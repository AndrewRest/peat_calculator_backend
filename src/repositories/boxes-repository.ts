const fs = require('fs')
const path = require('path');

type boxType = {
	id: string
	peatSize: string
	volumetricWeight: string
	fixedValues: boolean
}

const filePath = path.join(__dirname, '..', 'fs', 'boxes.json');

let boxes: boxType[]

fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
	if (err) throw err;
	boxes = JSON.parse(data.toString());
	console.log(boxes);
});

export const boxesRepository = {
	getBoxes() {
		return boxes
	},
	updateBox(boxId: string, newBoxDate: boxType) {
		let box = boxes.find(b => b.id === boxId)
		if (box) {
			Object.assign(box, newBoxDate)
			fs.writeFile(filePath, JSON.stringify(boxes), (err: NodeJS.ErrnoException | null) => {
				if (err) throw err;
			})
			return box
		} else return false
	}
}