import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { calculateScore } from "./rps";

readInput('./input/day2.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then(calculateScore)
  .then(console.log)