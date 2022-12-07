export const findMarker = (datastream: string, markerSize: number) : number => {
  const datastreamArr = datastream.split('');
  let markerIdx = 0;
  for (let i = markerSize - 1; i < datastreamArr.length; i ++) {
    const chars = [datastreamArr[i - (markerSize - 1)]];
    for (let j = markerSize - 2; j >= 0 ; j--) {
      if (chars.indexOf(datastreamArr[i-j]) >= 0) continue;
      chars.push(datastreamArr[i-j]);
    }
    if (chars.length === markerSize) {
      markerIdx = i;
      break;
    }
  }
  return markerIdx + 1;
}