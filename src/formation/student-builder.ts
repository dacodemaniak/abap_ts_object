import type { BuilderInterface } from "../core/builder.interface";
import  { Student } from "../student";

export class StudentBuilder implements BuilderInterface<Student> {
    build(): Student {
        throw new Error("Method not implemented.");
    }
}