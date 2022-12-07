import readInput from "../utils/read-input";
import { findMarker } from "./comms";

readInput('./input/day6.txt')
  .then((data) => [findMarker(data, 4), findMarker(data, 14)])
  .then(console.log)