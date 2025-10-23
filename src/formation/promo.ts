import type { CollectionInterface } from "../core/collection/collection-interface";
import type { Student } from "./student";
import { StudentCollection } from "./student-collection";

export class Promo {
    private name: string = ''
    private beginAt: Date = new Date()
    private endAt: Date = new Date()
    private students: CollectionInterface<Student> = new StudentCollection()

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        if (this.name === '')
            this.name = name;
    }

    public getBeginAt(): Date {
        return this.beginAt;
    }

    public setBeginAt(beginAt: Date): void {
        this.beginAt = beginAt;
    }

    public getEndAt(): Date {
        return this.endAt;
    }

    public setEndAt(endAt: Date): void {
        this.endAt = endAt;
    }

    public addStudent(student: Student): void {
        this.students.add(student)
    }

    public removeStudent(student: Student): void {
        this.students.remove(student)
    }

    public getStudentsNumber(): number {
        return this.students.getLength()
    }
}