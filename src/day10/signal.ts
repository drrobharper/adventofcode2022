const noop = (x: number): number => x
const add = (val: number) => (x: number): number => x + val

export class Executor {
  private functions: ((x: number) => number)[]
  constructor(program: string[]) {
    this.functions = []
    for (const line of program) {
      if (line === 'noop') {
        this.functions.push(noop)
      } else {
        const [,val] = line.split(' ')
        this.functions.push(noop)
        this.functions.push(add(parseInt(val, 10)))
      }
    }
  }

  public execute(cycles: number) {
    let x = 1;
    for (let i = 0; i < cycles - 1; i++) {
      x = this.functions[i](x)
    }
    return x * cycles
  }

  public getPixels(): string[] {
    const width = 40;
    const height = 6;
    const pixels: string[][] = []
    let x = 1;
    for ( let i = 0; i < height; i++) {
      const rowOfPixels: string[] = []
      pixels.push(rowOfPixels) 
      for ( let j = 0; j < width; j ++) {
        rowOfPixels[j] = j >= x - 1 && j <= x + 1 ? '#' : '.'
        x = this.functions[(i * width) + j](x)
      }
    }

    return pixels.map((row) => row.join('')) ;
  }
}

export const runner = (program: string[], cycles: number[]) => {
  const executor = new Executor(program);
  return cycles.reduce((prev, val) => {
    return prev + executor.execute(val);
  }, 0)
}

export const pixelRunner = (program: string[]) => {
  const executor = new Executor(program);
  return executor.getPixels();
}