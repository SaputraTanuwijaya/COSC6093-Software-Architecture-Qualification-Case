import { MidtermExamBuilder } from "./MidtermExamBuilder";
import { ExamDirector } from "./ExamDirector";

// =====================
//      CLIENT CODE
// =====================

console.log("Initializing Exam System...");

const director = new ExamDirector();
const builder = new MidtermExamBuilder();

// Create an Easy Exam
director.constructEasyMathExam(builder);
const easyExam = builder.getResult();
easyExam.show();

// Create a Hard Exam
director.constructAdvancedMathExam(builder);
const hardExam = builder.getResult();
hardExam.show();
