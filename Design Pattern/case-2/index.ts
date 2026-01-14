import { AnswerKeyProxy } from "./AnswerKeyProxy";

// =====================
//      CLIENT CODE
// =====================

console.log("--- Proxy Pattern Simulation ---");

// Scenario 1: Student tries to cheat
console.log("\n1. Student requesting answers:");
const studentProxy = new AnswerKeyProxy("Student");
const studentResult = studentProxy.getAnswers("COMP6001");

// Scenario 2: Lecturer grading papers
console.log("\n2. Lecturer requesting answers:");
const lecturerProxy = new AnswerKeyProxy("Lecturer");
const lecturerResult = lecturerProxy.getAnswers("COMP6001");
console.log(`Lecturer received: ${lecturerResult.join(", ")}`);
