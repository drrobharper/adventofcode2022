import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { sumOfBadgePriorities, sumOfPriorities } from "./rucsac";

readInput('./input/day3.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then((data) => [sumOfPriorities(data), sumOfBadgePriorities(data)])
  .then(console.log)