export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  if (!Array.isArray(getListStudents)) return [];
  //   if (!Array.isArray(newGrades)) newGrades = [];

  const gradeMap = new Map(
    newGrades.map(({ studentId, grade }) => [studentId, grade]),
  );

  return getListStudents
    .filter((i) => i.location === city)
    .map((i) => ({
      ...i,
      grade: gradeMap.get(i.id) ? gradeMap.get(i.id) : 'N/A',
    }));
}
