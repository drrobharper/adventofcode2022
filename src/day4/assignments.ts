const getRange = (range: string) => {
  const [start, end] = range.split('-');
  return { 
    start: parseInt(start, 10),
    end: parseInt(end, 10)
  }
}

export const fullyContained = (assignments: string[]): number => {
  return assignments.map((assignment) => {
    const [one, two] = assignment.split(',');
    return {
      one: getRange(one),
      two: getRange(two)
    }
  }).filter(({ one, two }) => {
    return one.start >= two.start && one.end <= two.end ||
      two.start >= one.start && two.end <= one.end
  }).length
}