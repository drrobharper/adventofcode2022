import { uptime } from "process";

interface Coord {
  x: number;
  y: number;
}

const notAdjacent = (head: Coord, tail: Coord) => {
  return Math.abs(head.x - tail.x) > 1 || Math.abs(head.y - tail.y) > 1
}

const right = (head: Coord, tail: Coord) => {
  head.x = head.x + 1
  if (notAdjacent(head, tail)) {
    tail.x = tail.x + 1
    if (tail.y !== head.y) tail.y = head.y
  }
}

const left = (head: Coord, tail: Coord) => {
  head.x = head.x - 1
  if (notAdjacent(head, tail)) {
    tail.x = tail.x - 1
    if (tail.y !== head.y) tail.y = head.y
  }
}

const up = (head: Coord, tail: Coord) => {
  head.y = head.y + 1
  if (notAdjacent(head, tail)) {
    tail.y = tail.y + 1
    if (tail.x !== head.x) tail.x = head.x
  }
}

const down = (head: Coord, tail: Coord) => {
  head.y = head.y - 1
  if (notAdjacent(head, tail)) {
    tail.y = tail.y - 1
    if (tail.x !== head.x) tail.x = head.x
  }
}

const moves: Record<string, (head: Coord, tail: Coord) => void> = {
  L: left,
  R: right,
  U: up,
  D: down
}

export const moveHead = (motions: string[]): number => {
  const head: Coord = {x: 0, y: 0}
  const tail: Coord = {x: 0, y: 0}
  const tailHistory: Coord[] = [{...tail}]
  for (const motion of motions) {
    const [direction, count] = motion.split(' ');
    for (let i = 0; i < parseInt(count,10); i++ ) {
      moves[direction](head, tail)
      if (!tailHistory.some(({x, y}) => x === tail.x && y === tail.y)){
        tailHistory.push({...tail})
      }
    }
  }

  return tailHistory.length
}