import { QuizAttempt } from "./QuizAttempt";

// =====================
//      CLIENT CODE
// =====================

console.log("--- State Pattern Simulation ---");

const attempt = new QuizAttempt();

// 1. Student works on the quiz (Draft Mode)
attempt.writeAnswer("Option A");
attempt.writeAnswer("Option C"); // Change of mind

// 2. Student submits
attempt.submitQuiz();

// 3. Student tries to change answer after submission
attempt.writeAnswer("Option B");
