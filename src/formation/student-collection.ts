import { Collection } from "../core/collection/collection";
import { Student } from "./student";

export class StudentCollection extends Collection<Student> {
    constructor() {
        super()
        this.collection = new Array<Student>()
    }

    add(t: Student): StudentCollection {
        (this.collection as Array<Student>).push(t)

        return this
    }
    remove(t: Student): StudentCollection {
        (this.collection as Array<Student>).splice(
            (this.collection as Array<Student>).findIndex((obj: Student) => obj.getName() === t.getName() && obj.getFirstname() === t.getFirstname()),
            1
        )
       return this
    }

    public getLength(): number {
        return (this.collection as Array<Student>).length
    }
    
}