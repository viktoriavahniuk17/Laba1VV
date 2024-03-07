var btn = document.querySelector('.nds__btn')

function searchNDS(a, b) {
	while (b !== 0) {
		let temp = b
		b = a % b
		a = temp
	}
	return a
}

btn.addEventListener('click', () => {
	var n = parseInt(document.querySelector('.nsdN').value)
	var m = parseInt(document.querySelector('.nsdM').value)
	var output = document.querySelector('.output')

	if (m <= 0 || n <= 0) {
		alert('Будь ласка, введіть натуральні числа.')
		return
	}
	let nds = searchNDS(m, n)
	output.innerHTML = `Найбільший спільний дільник ${n} i ${m} : ${nds}`
})

var inputDate = document.querySelector('.input__date')
var err = document.querySelector('.err')

inputDate.addEventListener('input', function () {
	var input = this.value
	let numberArray = input.split('').map(function (item) {
		return parseInt(item.trim(), 10)
	})

	let uniqNumber = new Set(numberArray)

	if (uniqNumber.size !== numberArray.length) {
		err.style.visibility = 'visible'
	} else {
		err.style.visibility = 'hidden'
	}
})

var inputText = document.querySelector('.text')
var btnResult = document.querySelector('.result')
var outputs = document.querySelector('.outputs')

btnResult.addEventListener('click', function () {
	outputs.innerHTML = inputText.value.split(',').length
})
