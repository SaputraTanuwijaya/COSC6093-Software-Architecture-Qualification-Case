import { IExamBuilder } from "./IExamBuilder";
import { ExamPaper } from "./ExamPaper";

export class MidtermExamBuilder implements IExamBuilder {
  private exam: ExamPaper;

  constructor() {
    this.exam = new ExamPaper();
  }

  public reset(): void {
    this.exam = new ExamPaper();
  }

  public setSubject(subject: string): void {
    this.exam.subject = subject;
  }

  public addMultipleChoice(question: string): void {
    this.exam.questions.push(`[MCQ] ${question}`);
  }

  public addEssaySection(): void {
    this.exam.hasEssay = true;
    this.exam.questions.push("[ESSAY] Please explain in detail...");
  }

  public getResult(): ExamPaper {
    const result = this.exam;
    this.reset();
    return result;
  }
}
