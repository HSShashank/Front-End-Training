const student = {
  firstName: "ABC",
  age: 20,
  "last Name": "XYZ"
};
//Accessing the properties
console.log(student.firstName); //dot notation
console.log(student["age"]); //  bracket notation
student.salary = 100;
console.log(student);

//Deleting a property
delete student.age;

//Checking if a property exists
console.log("age" in student);
console.log("firstName" in student);

//for...in loop
//Iterating through the student object
for (let key in student) {
  console.log("The property is", key + " and the value is", student[key]);
}
