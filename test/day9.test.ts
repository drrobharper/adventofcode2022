import { moveHead } from "../src/day9/rope"

describe('Day 9 Part 1', () => {
  it('Moving the head causes the tail to visit the right number of positions', () => {
    const motions = [
      'R 4',
      'U 4',
      'L 3',
      'D 1',
      'R 4',
      'D 1',
      'L 5',
      'R 2'
    ]
    expect(moveHead(motions)).toBe(13)
  })
})