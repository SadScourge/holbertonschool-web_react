interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Harry",
    lastName: "Potter",
    age: 24,
    location: "Hogwarts",
}
let student2: Student = {
    firstName: "Ronald",
    lastName: "Weasley",
    age: 23,
    location: "Hogwarts",
}

let studentsList: Student[] = [student1, student2]
const table = document.createElement('table');
const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement('tr');

    const firstName = document.createElement('td');
    firstName.textContent = student.firstName;
    row.appendChild(firstName);

    const location = document.createElement('td');
    location.textContent = student.location;
    row.appendChild(location);

    table.appendChild(row);
});

document.body.appendChild(table);
