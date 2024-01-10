interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'Iro',
  lastName: 'Claire',
  age: 20,
  location: 'Choba',
};
let student2: Student = {
  firstName: 'Ebube',
  lastName: 'Nwanze',
  age: 22,
  location: 'Aluu',
};

let studentsList = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Iterate over the studentsList array
studentsList.forEach((student) => {
  // Create a new row for each student
  const row = document.createElement('tr');

  // Create a cell for the student's first name
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  // Create a cell for the student's location
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
