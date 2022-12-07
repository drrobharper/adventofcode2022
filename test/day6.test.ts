import { findMarker } from "../src/day6/comms";

describe('Day 6 Part 1', () => {
  it('Find the position of the first marker', () => {
    expect(findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 4)).toBe(7);
    expect(findMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 4)).toBe(5);
    expect(findMarker('nppdvjthqldpwncqszvftbrmjlhg', 4)).toBe(6);
    expect(findMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 4)).toBe(10);
    expect(findMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 4)).toBe(11);
  })
})

describe('Day 6 Part 2', () => {
  it('Find the position of the first marker', () => {
    expect(findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14)).toBe(19);
    expect(findMarker('bvwbjplbgvbhsrlpgdmjqwftvncz', 14)).toBe(23);
    expect(findMarker('nppdvjthqldpwncqszvftbrmjlhg', 14)).toBe(23);
    expect(findMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14)).toBe(29);
    expect(findMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 14)).toBe(26);
  })
})