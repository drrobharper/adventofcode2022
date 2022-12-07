import { rearrange, rearrange9001 } from "../src/day5/crates";

describe('Day 5 Part 1', () => {
  it('Rearranges the crates correctly', () => {
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
    expect(rearrange(input)).toBe('CMZ');
  })
})

describe('Day 5 Part 2', () => {
  it('Rearranges the crates correctly with the CrateMover 9001', () => {
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
    expect(rearrange9001(input)).toBe('MCD');
  })
})