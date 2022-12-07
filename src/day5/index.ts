import inputToArray from "../utils/input-to-array";
import readInput from "../utils/read-input";
import { rearrange, rearrange9001 } from "./crates";

readInput('./input/day5.txt')
  .then(inputToArray)
  .then((data) => [rearrange(data), rearrange9001(data)])
  .then(console.log)