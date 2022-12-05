import { sumOfBadgePriorities, sumOfPriorities } from "../src/day3/rucsac"

describe('Day 3 part 1', () => {
  it('Calculates the sum of pritorities correctly', () => {
    const rucsacs = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ]
    expect(sumOfPriorities(rucsacs)).toBe(157);
  })
})

describe('Day 3 part 2', () => {
  it('Calculates the sum of badge pritorities correctly', () => {
    const rucsacs = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ]
    expect(sumOfBadgePriorities(rucsacs)).toBe(70);
  })
})