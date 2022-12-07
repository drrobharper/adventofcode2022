export const findMarker = (datastream: string) : number => {
  const datastreamArr = datastream.split('');
  let markerIdx = 0;
  for (let i = 3; i < datastreamArr.length; i ++) {
    if (datastreamArr[i-3] !== datastreamArr[i-2] && datastreamArr[i-3] !== datastreamArr[i-1] && datastreamArr[i-3] !== datastreamArr[i] &&
      datastreamArr[i-2] !== datastreamArr[i-1] && datastreamArr[i-2] !== datastreamArr[i] &&
      datastreamArr[i-1] !== datastreamArr[i]) {
        markerIdx = i;
        break;
      }
  }
  return markerIdx + 1;
}