const scorer: Record<string, (arg0: string) => number> = {
  A: (opponent: string) => 1 + (opponent === 'A' ? 3 : opponent === 'B' ? 0 : 6) ,
  B: (opponent: string) => 2 + (opponent === 'B' ? 3 : opponent === 'C' ? 0 : 6),
  C: (opponent: string) => 3 + (opponent === 'C' ? 3 : opponent === 'A' ? 0 : 6) 
}

const winningMoves: Record<string, string> = {
  A: 'B',
  B: 'C',
  C: 'A'
}

const losingMoves: Record<string, string> = {
  A: 'C',
  B: 'A',
  C: 'B'
}

const decryptMove: Record<string, string> = {
  X: 'A',
  Y: 'B',
  Z: 'C'
}

const calculateScoreOfRound = (decrypt: boolean) => (round: string) : number => {
  const [opponent, me] = round.split(' ');
  const myMove = decrypt ? decryptMove[me] : me;
  return scorer[myMove](opponent)
}

const workOutMove = (round: string) : string => {
  const [opponent, outcome] = round.split(' ');
  let me: string;
  if (outcome === 'X') {
    me = losingMoves[opponent];
  } else if (outcome === 'Y') {
    me = opponent;
  } else if (outcome === 'Z') {
    me = winningMoves[opponent];
  } else {
    throw new Error('Unexpected outcome');
  }
  return `${opponent} ${me}`;
}

export const calculateScore = (data: string[]): number => {
  return data
    .map(calculateScoreOfRound(true))
    .reduce((prev, val) => prev + val, 0)
}

export const calculateScorePart2 = (data: string[]): number => {
  return data
    .map(workOutMove)
    .map(calculateScoreOfRound(false))
    .reduce((prev, val) => prev + val, 0)
}