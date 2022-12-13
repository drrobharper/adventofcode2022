import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { pixelRunner, runner } from "./signal";

readInput('./input/day10.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then((data) => [runner(data, [20, 60, 100, 140, 180, 220]), pixelRunner(data)])
  .then(([part1, part2]) => {
    console.log(part1),
    console.log(part2)
  })