import { IExamBuilder } from "./IExamBuilder";

export class ExamDirector {
  public constructEasyMathExam(builder: IExamBuilder): void {
    builder.reset();
    builder.setSubject("Math 101 (Easy)");
    builder.addMultipleChoice("What is 1 + 1?");
    builder.addMultipleChoice("What is 2 * 2?");
  }

  public constructAdvancedMathExam(builder: IExamBuilder): void {
    builder.reset();
    builder.setSubject("Calculus 202 (Advanced)");
    builder.addMultipleChoice("Solve the integral of x^2");
    builder.addEssaySection();
  }
}
