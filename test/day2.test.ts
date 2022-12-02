import { calculateScore, calculateScorePart2 } from "../src/day2/rps"

describe('Day 2 Part 1', () => {
  it('Calculates the RPS game score correctly', () => {
    const game = ['A Y', 'B X', 'C Z']
    expect(calculateScore(game)).toBe(15)
  })
})

describe('Day 2 Part 2', () => {
  it('Calculates the RPS game score correctly', () => {
    const game = ['A Y', 'B X', 'C Z']
    expect(calculateScorePart2(game)).toBe(12)
  })
})