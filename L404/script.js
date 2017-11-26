var students = [
    {
        id: 1,
        name: 'გოგი'
    },
    {
     id: 2,
     name:'დემეტრე'
    },
    {
     id: 3,
     name:'ზაქრო'
     },
     {
   
      id: 4,
      name: 'პუშო'
     }

    

    
];

function calculate(studentsList, studentsName){
    
        var nameCount = {};
    
       for(var i=0; i < studentsList.length; i++){
            if(nameCount[studentsList[i].name]== null){
                nameCount[studentsList[i].name] = 0;
            }

            nameCount[studentsList[i].name]++;
        }
    
        return nameCount;
    }
    
    

    
    
    var names = calculate(students);

    for(name in names){
        document.write(name + ": " + names[name] + "<br>");
    }