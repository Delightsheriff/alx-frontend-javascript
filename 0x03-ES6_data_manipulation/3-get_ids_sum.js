export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) return [];
  const idSum = getListStudents.reduce(
    (accumulator, current) => accumulator + current.id,
    0,
  );
  return idSum;
}
