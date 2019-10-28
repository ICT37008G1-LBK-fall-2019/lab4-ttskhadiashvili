function countByName(list, firstName) {
    let count = 0;
    for(let i = 0; i < list.length; i++) {
        if(list[i].name == firstName)
            count++;
    }
    return count;
}

let students = [
    {id: 1,  name: 'Andrei'},
    {id: 2,  name: 'Giorgi'},
    {id: 3,  name: 'Tornike'},
    {id: 4,  name: 'Daviti'},
    {id: 5,  name: 'Tamari'},
    {id: 6,  name: 'Andrei'},
    {id: 7,  name: 'Giorgi'},
    {id: 8,  name: 'Giorgi'},
];

let name1 = 'Andrei';
let name2 = 'Giorgi';

console.log(countByName(students, name1));
console.log(countByName(students, name2));


