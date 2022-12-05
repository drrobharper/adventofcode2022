function intersection(arrayA: string[], arrayB: string[]): string[] {
  const _intersection = new Set<string>();
  const setA = new Set(arrayA);
  const setB = new Set(arrayB);
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return [..._intersection];
}

function getPriority(char: string) : number {
  if (char === char.toLowerCase()) {
    return char.charCodeAt(0) - 96
  }
  return char.charCodeAt(0) - 64 + 26
}

export const sumOfPriorities = (rucsacs: string[]) : number => {
  return rucsacs.reduce((prev, rucsac) => {
    const length = rucsac.length
    const firstCompartment = rucsac.substring(0, length / 2).split('');
    const secondCompartment = rucsac.substring(length / 2).split('');
    const intersec = intersection(firstCompartment, secondCompartment);
    const sharedItem = intersec[0];
    return prev + getPriority(sharedItem);
  }, 0)
}

export const sumOfBadgePriorities = (rucsacs: string[]) : number => {
  const chunkSize = 3;
  let sum = 0
  for (let i = 0; i < rucsacs.length; i += chunkSize) {
    const chunk = rucsacs.slice(i, i + chunkSize);
    const sharedItem = intersection(intersection(chunk[0].split(''), chunk[1].split('')), chunk[2].split(''))[0]
    sum += getPriority(sharedItem);
  }
  return sum;
}
