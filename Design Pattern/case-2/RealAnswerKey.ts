import { IAnswerKey } from "./IAnswerKey";

export class RealAnswerKey implements IAnswerKey {
  public getAnswers(courseId: string): string[] {
    console.log(`[Database] Fetching strict answer key for ${courseId}...`);
    // Plis jan sebar
    return ["A", "C", "B", "D", "A"];
  }
}
