import { readFileSync } from 'fs'

enum Types {
	rock = 'rock',
	paper = 'paper',
	scissors = 'scissors',
}

const convertion = new Map()

enum Outcomes {
	Win = 6,
	Draw = 3,
	Loss = 0,
}

const sdfasdf: {
	[type in Types]: { beats: Types; loses: Types; points: number }
} = {
	[Types.rock]: {
		beats: Types.scissors,
		loses: Types.paper,
		points: 1,
	},
	[Types.paper]: {
		beats: Types.rock,
		loses: Types.scissors,
		points: 2,
	},
	[Types.scissors]: {
		beats: Types.paper,
		loses: Types.rock,
		points: 3,
	},
}

function aaa(symbol: Types, left: string, right: string) {
	convertion.set(left, symbol)
	convertion.set(right, symbol)
}

aaa(Types.rock, 'A', 'X')
aaa(Types.paper, 'B', 'Y')
aaa(Types.scissors, 'C', 'Z')

function ughhhh(A: Types, B: Types) {
	const { beats, points } = sdfasdf[B]
	const outcome =
		A === B ? Outcomes.Draw : beats === A ? Outcomes.Win : Outcomes.Loss
	console.log({ points, outcome })
	return points + outcome
}

const test = []

const values = readFileSync('day-02/input.txt', 'utf8')
	// 	`A Y
	// B X
	// C Z`
	.split(/\n/)

// const a1 = values
// 	.map((line) => {
// 		const [A, B] = line.split(/\s/).map((key) => convertion.get(key))
// 		return ughhhh(A, B)
// 	})
// 	.reduce((acc, val): number => acc + val, 0)
const a2 = values
	.map((line) => {
		const [a, b] = line.split(/\s/)
		const A = convertion.get(a)
		const { loses, beats } = sdfasdf[A]

		let fff: Types
		switch (b) {
			case 'X':
				fff = beats
				break
			case 'Y':
				fff = A
				break
			case 'Z':
				fff = loses
				break
		}

		return ughhhh(A, fff!)
	})
	.reduce((acc, val): number => acc + val, 0)

// console.log('Answer 1:', a1)

// Too High: 12958
console.log(0 < a2, a2 < 12958)
console.log('Answer 2:', a2)
