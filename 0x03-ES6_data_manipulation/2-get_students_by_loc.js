export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents)) return [];
  const cityList = getListStudents.filter((i) => i.location === city);
  return cityList;
}
