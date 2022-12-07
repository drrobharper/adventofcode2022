import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { findDirectorySizes, findDirectoryToDelete } from "./filesystem";

readInput('./input/day7.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then((data) => [findDirectorySizes(data), findDirectoryToDelete(data)])
  .then(console.log)