import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { removeBlankLines } from "../utils/remove-blank-lines";
import { highestScenicScore, treesVisibleFromOutside } from "./tree";

readInput('./input/day8.txt')
  .then(inputToArray)
  .then(removeBlankLines)
  .then((data) => [treesVisibleFromOutside(data), highestScenicScore(data)])
  .then(console.log)