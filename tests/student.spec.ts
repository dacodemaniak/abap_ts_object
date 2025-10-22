import { Student } from './../src/formation/student'

describe ('Student test suite', () => {
    it('Should make a Student instance', () => {
        const student = new Student()
        expect(student).toBeInstanceOf(Student)
    })

    it('Should have an empty lastname and firstname', () => {
        const student = new Student()
        expect(student.getName()).toBe('')
        expect(student.getName()).toBe('')
    })

    it('Should have Aubert Jean-Luc as last and firstname', () => {
        const student = new Student()

        student.setName('Aubert')
        student.setFirstname('Jean-Luc')
        
        expect(student.getName()).toBe('Aubert')
        expect(student.getFirstname()).toBe('Jean-Luc')
    })

    it('Shouldnt mutate the name after it was set', () => {
        const student = new Student()

        student.setName('Aubert')
        
        student.setName('Casper le Fantôme')

        expect(student.getName()).toBe('Aubert')
    })
})