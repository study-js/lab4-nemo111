var students = [
    {
        id: 1,
        name: 'გიო',
    },
    {
        id: 2,
        name: 'მარი',
    },
   {
       id: 3,
       name: 'ანი',
   },
   {
    id: 4,
    name: 'ნიკა',
    }
];

function change(studentsList,studentsName) {
    var changedName = [];

    for(var i = 0; i < studentsList.length; ++i){
        if(changedName.indexOf(studentsList[i].name) == -1){
            changedName.push(studentsList[i].name);
        }
    }

    return changedName;
}

var names = change(students);

document.write(names);