const students = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 70 },
    { name: 'Charlie', score: 85 },
    { name: 'David', score: 60 }
];

// Filter students who scored above 75
const highScorers = students.filter(student => student.score > 75);

// Extract their names
const highScorerNames = highScorers.map(student => student.name);

// Calculate the total score
const totalScore = highScorers.reduce((acc, student) => acc + student.score, 0);

// Calculate the average score
const averageScore = totalScore / highScorers.length;

// Output results to the console
console.log(highScorerNames);  // Output: ['Alice', 'Charlie']
console.log(averageScore);    // Output: 87.5
