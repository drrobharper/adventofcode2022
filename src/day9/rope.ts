interface Coord {
  x: number;
  y: number;
}

const notAdjacent = (pos1: Coord, pos2: Coord) => {
  return Math.abs(pos1.x - pos2.x) > 1 || Math.abs(pos1.y - pos2.y) > 1
}

const moveRope = (rope: Coord[]) => {
  for (let i = 1; i < rope.length; i++ ){
    const tail = rope[i];
    const head = rope[i - 1];
    if (notAdjacent(tail, head)) {
      const dx = head.x - tail.x;
      const dy = head.y - tail.y;
      if (dx === 0) {
        tail.y = head.y - dy + (dy > 0 ? 1 : -1);
      } else if (dy === 0) {
        tail.x = head.x - dx + (dx > 0 ? 1 : -1);
      } else {
        tail.x = head.x - dx + (dx > 0 ? 1 : -1);
        tail.y = head.y - dy + (dy > 0 ? 1 : -1);
      }
    }
  }
}

const right = (rope: Coord[]) => {
  rope[0].x = rope[0].x + 1
  moveRope(rope);
}

const left = (rope: Coord[]) => {
  rope[0].x = rope[0].x - 1
  moveRope(rope);
}

const up = (rope: Coord[]) => {
  rope[0].y = rope[0].y + 1
  moveRope(rope);
}

const down = (rope: Coord[]) => {
  rope[0].y = rope[0].y - 1
  moveRope(rope);
}

const moves: Record<string, (rope: Coord[]) => void> = {
  L: left,
  R: right,
  U: up,
  D: down
}

export const moveHead = (motions: string[], length: number): number => {
  const rope: Coord[] = Array.from({ length }, () => ({x: 0, y: 0}))
  const tailIdx = length - 1
  const tailHistory: Coord[] = [{...rope[tailIdx]}]
  for (const motion of motions) {
    const [direction, count] = motion.split(' ');
    for (let i = 0; i < parseInt(count,10); i++ ) {
      moves[direction](rope);
      if (!tailHistory.some(({x, y}) => x === rope[tailIdx].x && y === rope[tailIdx].y)){
        tailHistory.push({...rope[tailIdx]})
      }
    }
  }

  return tailHistory.length
}