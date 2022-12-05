import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { fullyContained, overlapping } from "./assignments";

readInput('./input/day4.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then((data) => [fullyContained(data), overlapping(data)])
  .then(console.log)