let time = 3000
const redLight = () => {
	console.log('redlight')
	return new Promise((res) => setTimeout(() => res(orangeLight()), time))
}

const orangeLight = () => {
	console.log('orangeLight')
	return new Promise((res) => setTimeout(() => res(greenLight()), time))
}

const greenLight = () => {
	console.log('greenLight')
	return new Promise((res) => setTimeout(() => res(redLight()), time))
}

async function main() {
	return redLight()
}

main()
