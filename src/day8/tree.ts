export const treesVisibleFromOutside = (trees: string[]): number => {
  const treesArr = trees.map((row) => row.split('').map(val => parseInt(val, 10)))
  const visibleArr: boolean[][] = []
  for ( let i = 0; i < treesArr.length; i++ ) {
    const row = Array.from({length: treesArr[i].length}, (x, j) => i === 0 || i === treesArr.length - 1 || j === 0 || j === treesArr[i].length - 1)
    visibleArr.push(row);
  }

  for (let i = 0; i < treesArr.length; i++ ){
    let highest = treesArr[i][0]
    for (let j = 1; j < treesArr[i].length - 1; j++) {
      if (treesArr[i][j] > highest) {
        visibleArr[i][j] = true
        highest = treesArr[i][j]
      }
    }
    highest = treesArr[i][treesArr[i].length - 1]
    for (let j = treesArr[i].length - 2; j > 0; j-- ) {
      if (treesArr[i][j] > highest) {
        visibleArr[i][j] = true
        highest = treesArr[i][j]
      }
    }
  }

  for (let j = 0; j < treesArr[0].length; j++ ){
    let highest = treesArr[0][j]
    for (let i = 1; i < treesArr.length - 1; i++) {
      if (treesArr[i][j] > highest) {
        visibleArr[i][j] = true
        highest = treesArr[i][j]
      }
    }
    highest = treesArr[treesArr.length - 1][j]
    for (let i = treesArr.length - 2; i > 0; i-- ) {
      if (treesArr[i][j] > highest) {
        visibleArr[i][j] = true
        highest = treesArr[i][j]
      }
    }
  }

  return visibleArr.reduce((prev, val) => {
    return val.reduce((prev, val) => {
      return prev + (val ? 1 : 0)
    }, prev)
  }, 0)
}

export const highestScenicScore = (trees: string[]): number => {
  const treesArr = trees.map((row) => row.split('').map(val => parseInt(val, 10)))
  let bestScenicScore = 0;
  for ( let i = 0; i < treesArr.length; i++) {
    for ( let j = 0; j < treesArr[i].length; j++ ) {
      const height = treesArr[i][j];
      //North
      let northView = 0;
      for ( let n = i - 1; n >= 0; n-- ) {
        northView++
        if (treesArr[n][j] >= height) break;
      }
      //East
      let eastView = 0;
      for ( let e = j + 1; e < treesArr[i].length; e++ ) {
        eastView++
        if (treesArr[i][e] >= height) break;
      }
      //South
      let southView = 0;
      for ( let s = i + 1; s < treesArr.length; s++ ) {
        southView++
        if (treesArr[s][j] >= height) break;
      }
      //West
      let westView = 0;
      for ( let w = j - 1; w >= 0; w-- ) {
        westView++
        if (treesArr[i][w] >= height) break;
      }
      const scenicScore = northView * eastView * southView * westView;

      if (scenicScore > bestScenicScore) {
        bestScenicScore = scenicScore
      }
    }
  }
  return bestScenicScore
}