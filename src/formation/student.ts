import { Person } from "./person";

export class Student extends Person {
    public sayHello(): void {
        throw new Error("Method not implemented.");
    }
}