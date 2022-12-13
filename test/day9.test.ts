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
    expect(moveHead(motions, 2)).toBe(13)
  })
})

describe('Day 9 Part 2', () => {
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
    expect(moveHead(motions, 10)).toBe(1)
  })

  it('Moving the head causes the tail to visit the right number of positions (larger example)', () => {
    const motions = [
      'R 5',
      'U 8',
      'L 8',
      'D 3',
      'R 17',
      'D 10',
      'L 25',
      'U 20'
    ]
    expect(moveHead(motions, 10)).toBe(36)
  })
})