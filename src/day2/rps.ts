const scorer: Record<string, (arg0: string) => number> = {
  X: (opponent: string) => 1 + (opponent === 'A' ? 3 : opponent === 'B' ? 0 : 6) ,
  Y: (opponent: string) => 2 + (opponent === 'B' ? 3 : opponent === 'C' ? 0 : 6),
  Z: (opponent: string) => 3 + (opponent === 'C' ? 3 : opponent === 'A' ? 0 : 6) 
}

const calculateScoreOfRound = (round: string) : number => {
  const [opponent, me] = round.split(' ');
  return scorer[me](opponent)
}

export const calculateScore = (data: string[]): number => {
  return data
    .map(calculateScoreOfRound)
    .reduce((prev, val) => prev + val, 0)
}