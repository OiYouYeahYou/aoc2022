const { readFileSync } = require('fs')

const values = readFileSync('day-01/input.txt', 'utf8')
	.split(/\n\n/)
	.map((lines) =>
		lines
			.split(/\n/)
			.filter((arr) => arr.length)
			.reduce((acc, val) => acc + parseInt(val), 0)
	)
const top = values.sort((a, b) => a === b ? 0 : a > b ? -1 : 1)

console.log('Answer 1:', Math.max(...values))
console.log('Answer 2:', top.slice(0, 3).reduce((acc, val) => acc + val, 0))
