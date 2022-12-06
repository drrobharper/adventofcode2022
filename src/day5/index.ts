import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { rearrange } from "./crates";

readInput('./input/day5.txt')
  .then(inputToArray)
  .then(rearrange)
  .then(console.log)