import { fullyContained, overlapping } from "../src/day4/assignments"

describe('Day 4 Part 1', () => {
  it('Gives the correct number of assignments that fully contain the other', () => {
    const input = [
      '2-4,6-8',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8'
    ];
    expect(fullyContained(input)).toBe(2);
  })
})

describe('Day 4 Part 2', () => {
  it('Gives the correct number of assignments that overlap', () => {
    const input = [
      '2-4,6-8',
      '2-3,4-5',
      '5-7,7-9',
      '2-8,3-7',
      '6-6,4-6',
      '2-6,4-8'
    ];
    expect(overlapping(input)).toBe(4);
  })
})