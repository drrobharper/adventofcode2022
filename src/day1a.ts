import readInput from './utils/read-input'
import inputToArray from './utils/input-to-array'

const caloriesPerElf = (data: string[]) : number[] => {
  const accumulator: number[] = [0]
  return data.reduce((prev: number[], val: string) => {
    if (!val) {
      prev.push(0)
    } else {
      prev[prev.length - 1] = prev[prev.length - 1] + parseInt(val, 10);
    }
    return prev;
  }, accumulator)
}

const findElfWithMostCalories = (elfCalories: number[]) : number => {
  return elfCalories.reduce((prev, val) => {
    return val > prev ? val : prev;
  }, 0)
}

readInput('./input/day1.txt')
    .then(inputToArray)
    .then(caloriesPerElf)
    .then(findElfWithMostCalories)
    .then(console.log)