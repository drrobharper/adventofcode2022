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

const comparator = (a: number, b: number) : number => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

const findCaloriesOfElfWithMost = (elfCalories: number[]) : number => {
  const [most,] = elfCalories.sort(comparator);
  return most;
}

const findCaloriesOfThreeElvesWithMost = (elfCalories: number[]) : number => {
  const [first,second,third,] = elfCalories.sort(comparator);
  return first + second + third;
}

readInput('./input/day1.txt')
    .then(inputToArray)
    .then(caloriesPerElf)
    .then((data) => Promise.all([findCaloriesOfElfWithMost(data), findCaloriesOfThreeElvesWithMost(data)]))
    .then(console.log)