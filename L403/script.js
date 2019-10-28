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

function diffNames(list) {
    let diffList = {};
    for(let i = 0; i < list.length; i++) {
        let key = list[i].name;
        diffList[key] = null;
    }
    return Object.keys(diffList);
}

console.log(diffNames(students));
 

