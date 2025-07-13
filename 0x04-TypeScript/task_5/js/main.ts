// Define MajorCredits interface
export interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Test (optional)
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };
console.log('Sum of MajorCredits:', sumMajorCredits(major1, major2));

const minor1: MinorCredits = { credits: 2, brand: 'Minor' };
const minor2: MinorCredits = { credits: 5, brand: 'Minor' };
console.log('Sum of MinorCredits:', sumMinorCredits(minor1, minor2));
