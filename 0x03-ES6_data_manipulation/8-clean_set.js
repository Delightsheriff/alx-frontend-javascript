export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((temp) => (temp !== undefined ? temp.startsWith(startString) : ''))
    .map((temp) => (temp !== undefined ? temp.slice(startString.length) : ''))
    .join('-');
}
