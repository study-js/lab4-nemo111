var students = [
    {
        id: 1,
        name: 'მალხაზი',
        gpa: 3.3

    },
    {
        id: 2,
        name: 'გოგია',
        gpa: 1.2

    },
    {
        id: 3,
        name: 'ბექა',
        gpa: 2.2
    },
    {

        id: 4,
        name: 'სარდიონი',
        gpa: 4
    }




];

function calculate(studentsList, gpa) {
    var gpaTarget = gpa || 2.0;

    var studs = studentsList.filter(s => s.gpa >= gpaTarget);

    var sum = 0;
    for (var i = 0; i < studs.length; i++) {
        sum += studs[i].gpa;
    }

    var avg = sum / studs.length;

    return avg;

}





alert(calculate(students, 3));
alert(calculate(students));