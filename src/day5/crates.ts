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

export const rearrange = (data: string[]): string => {
  const splitIdx = data.findIndex((line) => !line);
  const crates = buildCrates(data.filter((_, idx) => idx < splitIdx));

  const instructions = data.filter((_, idx) => idx > splitIdx);

  const movedCrates = instructions.reduce((prev, instruction) => {
    const match = instruction.match(/^move (\d+) from (\d+) to (\d+)/)
    if (match) {
      const [,number,from,to] = match
      for (let i = 0; i < parseInt(number, 10); i++) {
        const crate = prev[parseInt(from, 10) - 1].pop();
        if (!crate) throw new Error('Wrong crate!');
        prev[parseInt(to, 10) - 1].push(crate);
      }
    }
    return prev;
  }, crates);

  console.log(movedCrates)
  return movedCrates.map((stack) => stack.pop()).join('')
}