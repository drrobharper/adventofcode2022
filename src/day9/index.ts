import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { moveHead } from "./rope";

readInput('./input/day9.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then((data) => [moveHead(data, 2), moveHead(data, 10)])
  .then(console.log)