import { ExamPaper } from "./ExamPaper";

export interface IExamBuilder {
  reset(): void;
  setSubject(subject: string): void;
  addMultipleChoice(question: string): void;
  addEssaySection(): void;
  getResult(): ExamPaper;
}
