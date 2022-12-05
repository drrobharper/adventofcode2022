import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { fullyContained } from "./assignments";

readInput('./input/day4.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then(fullyContained)
  .then(console.log)