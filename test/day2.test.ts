import { calculateScore } from "../src/day2/rps"

describe('Day 2', () => {
  it('Calculates the RPS game score correctly', () => {
    const game = ['A Y', 'B X', 'C Z']
    expect(calculateScore(game)).toBe(15)
  })
})