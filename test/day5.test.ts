import { rearrange } from "../src/day5/crates";

describe('Day 5 Part 1', () => {
  it('Rearanges the crates correctly', () => {
    const input = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
    `.split('\n');
    input.shift();
    console.log(input)
    expect(rearrange(input)).toBe('CMZ');
  })
})