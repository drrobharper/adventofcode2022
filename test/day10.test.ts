import { Executor, runner } from "../src/day10/signal"

const program = `
addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop
`.split('\n').filter((line) => line.match(/^(?:noop|addx)/))

const smallProgram = ['noop', 'addx 3', 'addx -5']

describe('Day 10 Part 1', () => {
  let executor: Executor
  describe('Small program', () => {
    beforeAll(() => {
      executor = new Executor(smallProgram);
    })
    it('Calculates the signal strength', () => {
      expect(executor.execute(1)).toBe(1)
      expect(executor.execute(2)).toBe(2)
      expect(executor.execute(3)).toBe(3)
      expect(executor.execute(4)).toBe(16)
      expect(executor.execute(5)).toBe(20)
    })
  })
  describe('Bigger program', () => {
    beforeAll(() => {
      executor = new Executor(program);
    })
    it('Calculates the signal strength during the 20th cycle', () => {
      expect(executor.execute(20)).toBe(420)
    })
    it('Calculates the signal strength during the 60th cycle', () => {
      expect(executor.execute(60)).toBe(1140)
    })
    it('Calculates the signal strength during the 100th cycle', () => {
      expect(executor.execute(100)).toBe(1800)
    })
    it('Calculates the signal strength during the 140th cycle', () => {
      expect(executor.execute(140)).toBe(2940)
    })
    it('Calculates the signal strength during the 180th cycle', () => {
      expect(executor.execute(180)).toBe(2880)
    })
    it('Calculates the signal strength during the 220th cycle', () => {
      expect(executor.execute(220)).toBe(3960)
    })
    it('Calculates the sum of signal strengths', () => {
      expect(runner(program, [20, 60, 100, 140, 180, 220])).toBe(13140)
    })
  })
})

describe('Day 10 Part 2', () => {
  let executor: Executor;
  beforeAll(() => {
    executor = new Executor(program);
  })
  it('Draws the pixel image', () => {
    expect(executor.getPixels()).toEqual([
      '##..##..##..##..##..##..##..##..##..##..',
      '###...###...###...###...###...###...###.',
      '####....####....####....####....####....',
      '#####.....#####.....#####.....#####.....',
      '######......######......######......####',
      '#######.......#######.......#######.....'
    ])
  })
})