import type { BuilderInterface } from "../core/builder.interface";
import  { Student } from "./student";

export class StudentBuilder implements BuilderInterface<Student> {
    private name: string ='';
    private firstname: string = '';
    private email: string = '';
    private phone: string = '';
    private birthdate: Date = new Date();
    private gender: string = '';


    public setName(name: string): void {
        this.name = name;
    }



    public setFirstname(firstname: string): void {
        this.firstname = firstname;
    }



    public setEmail(email: string): void {
        this.email = email;
    }



    public setPhone(phone: string): void {
        this.phone = phone;
    }


    public setBirthdate(birthdate: Date): void {
        this.birthdate = birthdate;
    }


    public setGender(gender: string): void {
        this.gender = gender;
    }


    build(): Student {
        if (
            this.name !== '' &&
            this.firstname !== '' &&
            this.email !== '' &&
            this.phone !== '') {
                const student = new Student()
                student.setName(this.name)
                student.setFirstname(this.firstname)
                student.setEmail(this.email)
                student.setPhone(this.phone)
                student.birthdate = this.birthdate
                student.gender = this.gender

                return student
            }
        throw new Error('Some required attributes are missing')
    }
}