export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) return [];
  const listId = getListStudents.map((i) => i.id);
  return listId;
}
