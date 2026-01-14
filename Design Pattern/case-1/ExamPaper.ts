export class ExamPaper {
  public subject: string = "";
  public questions: string[] = [];
  public hasEssay: boolean = false;

  public show(): void {
    console.log(`\n--- Exam Paper: ${this.subject} ---`);
    console.log(`Questions: ${this.questions.join(", ")}`);
    console.log(`Includes Essay Section: ${this.hasEssay ? "Yes" : "No"}\n`);
  }
}
