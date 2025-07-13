// Import all Subject classes and Teacher interface
import { Subjects } from './subjects'; // adjust this path if necessary

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// ----------- Cpp Subject -----------
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ----------- Java Subject -----------
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ----------- React Subject -----------
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
