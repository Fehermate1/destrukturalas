function printStudentInfo()
{
    let student = {
        name: 'John Doe',
        age: 20,
        grade: 'B',
        subjects: ['Math', 'English', 'History']
    };

    let {name, age, grade} = student

    let [first, second, third] = subjects
    console.log("Name: "+ name); //Name
    console.log("Age: "+age); //Age
    console.log("Grade: "+grade); //Grade
    console.log("Subjects: "+first+", "+second+", "+third); //Subjects
}