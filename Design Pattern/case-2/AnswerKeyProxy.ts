import { IAnswerKey } from "./IAnswerKey";
import { RealAnswerKey } from "./RealAnswerKey";

export class AnswerKeyProxy implements IAnswerKey {
  private realAnswerKey: RealAnswerKey | null = null;
  private userRole: string;

  constructor(role: string) {
    this.userRole = role;
  }

  public getAnswers(courseId: string): string[] {
    // Lazy Initialization: We only create the real object if access is granted
    if (this.checkAccess()) {
      if (this.realAnswerKey === null) {
        this.realAnswerKey = new RealAnswerKey();
      }
      return this.realAnswerKey.getAnswers(courseId);
    } else {
      console.log(
        `[Access Denied] User role '${this.userRole}' is not authorized to view answers.`
      );
      return [];
    }
  }

  private checkAccess(): boolean {
    // Only Lecturers and Admins can see answers
    return this.userRole === "Lecturer" || this.userRole === "Admin";
  }
}
