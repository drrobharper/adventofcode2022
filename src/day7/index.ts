import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { findDirectorySizes } from "./filesystem";

readInput('./input/day7.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then(findDirectorySizes)
  .then(console.log)