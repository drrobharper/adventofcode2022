const buildCrates = (rawCrates: string[]) => {
  const stackNumbers = rawCrates.pop();
  if (!stackNumbers) throw new Error('Stack numbers wrong!');
  const lastStackStr = stackNumbers.split(' ').filter(Boolean).pop();
  if (!lastStackStr) throw new Error('Last stack wrong!');
  const lastStack = parseInt(lastStackStr, 10)
  const stacks: string[][] = [];
  for (let i = 0; i < lastStack; i++) {
    stacks[i] = []
  }

  const stackIdxes = stacks.map((stack, idx) => stack && stackNumbers.split('').indexOf(`${idx + 1}`))

  do {
    const row = rawCrates.pop();
    for (let i = 0; i < lastStack; i++) {
      const crate = row?.substring(stackIdxes[i], stackIdxes[i] + 1);
      if (crate?.match(/[A-Z]/)) stacks[i].push(crate);
    }
  } while (rawCrates.length > 0)
  return stacks;
}

type Mover = (crates: string[][], numberToMove: number, moveFrom: number, moveTo: number) => string[][];

const cratemover9000: Mover = (crates: string[][], numberToMove: number, moveFrom: number, moveTo: number) => {
  for (let i = 0; i < numberToMove; i++) {
    const crate = crates[moveFrom - 1].pop();
    if (!crate) throw new Error('Wrong crate!');
    crates[moveTo - 1].push(crate);
  }
  return crates;
}

const cratemover9001: Mover = (crates: string[][], numberToMove: number, moveFrom: number, moveTo: number) => {
  const cratesToMove = crates[moveFrom - 1].slice(crates[moveFrom - 1].length - numberToMove)
  crates[moveFrom - 1] = crates[moveFrom - 1].slice(0, crates[moveFrom - 1].length - numberToMove)
  crates[moveTo - 1] = [...crates[moveTo - 1], ...cratesToMove]
  return crates;
}

const moveCrates = (crates: string[][], instructions: string[], mover: Mover) => {
  return instructions.reduce((prev, instruction) => {
    const match = instruction.match(/^move (\d+) from (\d+) to (\d+)/)
    if (match) {
      const [,number,from,to] = match
      prev = mover(prev, parseInt(number, 10), parseInt(from, 10), parseInt(to, 10))
    }
    return prev;
  }, crates);
}

export const rearrange = (data: string[]): string => {
  const splitIdx = data.findIndex((line) => !line);
  const crates = buildCrates(data.filter((_, idx) => idx < splitIdx));

  const instructions = data.filter((_, idx) => idx > splitIdx);

  const movedCrates = moveCrates(crates, instructions, cratemover9000)

  return movedCrates.map((stack) => stack.pop()).join('')
}

export const rearrange9001 = (data: string[]): string => {
  const splitIdx = data.findIndex((line) => !line);
  const crates = buildCrates(data.filter((_, idx) => idx < splitIdx));

  const instructions = data.filter((_, idx) => idx > splitIdx);

  const movedCrates = moveCrates(crates, instructions, cratemover9001)

  return movedCrates.map((stack) => stack.pop()).join('')
}