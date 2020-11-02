// setting tup the canvas
const canvas = document.querySelector('.htmlImage')
const ctx = canvas.getContext('2d')	

ctx.strokeRect(50, 35, 50, 50)
ctx.fillRect(125, 35, 50, 50)
ctx.fillText('hi', 250, 35)

console.log(ctx)
// the download
const btn = document.querySelector('.download')

btn.addEventListener('click', e=> {
	e.preventDefault()

	const dataURI = canvas.toDataURL()
	console.log(dataURI)

	a = document.createElement('a')

	document.body.appendChild(a)

	a.href = dataURI
	a.download = "hellow.png"

	a.click()

	document.body.removeChild(a);


})