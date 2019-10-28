let students = [
    {id: 1,  name: 'Andrei', gpa = 2.5},
    {id: 2,  name: 'Giorgi', gpa = 2.1},
    {id: 3,  name: 'Tornike', gpa = 2.95},
    {id: 4,  name: 'Daviti', gpa = 1.8},
    {id: 5,  name: 'Tamari', gpa = 2.5},
    {id: 6,  name: 'Andrei', gpa = 1.78},
    {id: 7,  name: 'Giorgi', gpa = 1.2},
    {id: 8,  name: 'Giorgi', gpa = 1.8},
];
function averageGpa(list, compGpa = 2) {
    let gpaSum = 0;
    let gpaCount = 0;

    for(let i = 0; i < list.length; i++) {
        if(list[i].gpa >= compGpa) {
            gpaSum += list[i].gpa;
            gpaCount ++;
        }
    }

    return gpaSum/gpaCount;
}

console.log(averageGpa(students, 3));
console.log(averageGpa(students));
