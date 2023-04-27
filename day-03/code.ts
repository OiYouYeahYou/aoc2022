import { readFileSync } from 'fs'

const values = readFileSync('day-03/input.txt', 'utf8').split(/\n/)

const convertToPoints = (char: string) => char.charCodeAt(0) - 64
const splitLine = (line: string) => {
	const center = Math.ceil(line.length / 2)
	return [line.slice(0, center), line.slice(center)]
}

console.log(
	splitLine(''),
	splitLine('a'),
	splitLine('ab'),
	splitLine('abc'),
	splitLine('abcd'),
	splitLine('abcde'),
	splitLine('abcdef'),
	splitLine('abcdefg'),
	splitLine('abcdefgh'),
)

const shared = values.map((ln) => {
	const [left, right] = splitLine(ln.trim())

	for (let i = 0; i < left.length; i++) {
		for (let j = 0; j < right.length; j++) {
			const char = left[i]
			if (char === right[j]) {
				// return char
				return convertToPoints(char)
			}
		}
	}

	return 0
})

// too high: 8262, 8836

console.log(shared)
const a1 = shared.reduce((acc, val) => acc + val, 0)
const a2 = 0

console.log('Answer 1:', a1)
console.log('Answer 2:', a2)
