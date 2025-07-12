// Existing Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra props
}

// Directors extends Teacher and adds numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage:
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Interface describing the instance methods and properties of StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor signature for StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implementation of the class following the interface contracts
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Faithia', 'Olusegun');
console.log(student.displayName());      // Output: Faithia
console.log(student.workOnHomework());   // Output: Currently working
