import { highestScenicScore, treesVisibleFromOutside } from "../src/day8/tree"

describe('Day 8 Part 1', () => {
  it('Counts the number of visible trees', () => {
    const trees = [
      '30373',
      '25512',
      '65332',
      '33549',
      '35390'
    ]
    expect(treesVisibleFromOutside(trees)).toBe(21);
  })
})

describe('Day 8 Part 2', () => {
  it('Finds highest scenic score', () => {
    const trees = [
      '30373',
      '25512',
      '65332',
      '33549',
      '35390'
    ]
    expect(highestScenicScore(trees)).toBe(8);
  })
})