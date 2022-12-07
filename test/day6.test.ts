import { findMarker } from "../src/day6/comms";

describe('Day 6 Part 1', () => {
  it('Find the position of the first marker', () => {
    expect(findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(7);
    expect(findMarker('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
    expect(findMarker('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
    expect(findMarker('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
    expect(findMarker('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
  })
})