const getRange = (range: string) => {
  const [start, end] = range.split('-');
  return { 
    start: parseInt(start, 10),
    end: parseInt(end, 10)
  }
}

const transform = (assignment: string) => {
  const [one, two] = assignment.split(',');
  return {
    one: getRange(one),
    two: getRange(two)
  }
}

export const fullyContained = (assignments: string[]): number => {
  return assignments
    .map(transform)
    .filter(({ one, two }) => {
      return one.start >= two.start && one.end <= two.end ||
        two.start >= one.start && two.end <= one.end
    }).length
}

export const overlapping = (assignments: string[]): number => {
  return assignments
  .map(transform)
  .filter(({ one, two }) => {
    return one.start <= two.start && two.start <= one.end ||
      two.start <= one.start && one.start <= two.end
  }).length
}