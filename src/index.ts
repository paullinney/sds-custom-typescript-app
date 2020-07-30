// Models
import Person  from './models/Person';
// Classes
import Student  from './Student/Student';

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Paul LLLLL", "M.", "Linney");

document.body.innerHTML = greeter(user);