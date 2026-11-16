// #11 Students

const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

function passedStudents(students) {
    const ps = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > 70) ps.push(students[i].name);
    }
    return ps
}
// console.log(passedStudents(students));