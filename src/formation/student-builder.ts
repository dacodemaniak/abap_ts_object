import type { BuilderInterface } from "../core/builder.interface";
import  { Student } from "./student";

export class StudentBuilder implements BuilderInterface<Student> {
    private _name: string ='';
    private _firstname: string = '';
    private _email: string = '';
    private _phone: string = '';
    private _birthdate: Date = new Date();
    private _gender: string = '';


    public name(name: string): StudentBuilder {
        this._name = name;
        return this;
    }



    public firstname(firstname: string): StudentBuilder {
        this._firstname = firstname;
        return this
    }



    public email(email: string): StudentBuilder {
        this._email = email;
        return this
    }



    public phone(phone: string): StudentBuilder {
        this._phone = phone;
        return this
    }


    public birthdate(birthdate: Date): StudentBuilder {
        this._birthdate = birthdate;
        return this
    }


    public gender(gender: string): StudentBuilder {
        this._gender = gender;
        return this
    }


    build(): Student {
        if (
            this._name !== '' &&
            this._firstname !== '' &&
            this._email !== '' &&
            this._phone !== '') {
                const student = new Student()
                student.setName(this._name)
                student.setFirstname(this._firstname)
                student.setEmail(this._email)
                student.setPhone(this._phone)
                student.birthdate = this._birthdate
                student.gender = this._gender

                return student
            }
        throw new Error('Some required attributes are missing')
    }
}