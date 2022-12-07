import readInput from "../utils/read-input";
import { findMarker } from "./comms";

readInput('./input/day6.txt')
  .then(findMarker)
  .then(console.log)