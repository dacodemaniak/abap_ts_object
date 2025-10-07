import { Student } from './../src/student'

describe ('Student test suite', () => {
    it('Should make a Student instance', () => {
        const student = new Student()
        expect(student).toBeInstanceOf(Student)
    })

    it('Should have an empty lastname and firstname', () => {
        const student = new Student()
        expect(student.getLastname()).toBe('')
        expect(student.getFirstname()).toBe('')
    })

    it('Should have Aubert Jean-Luc as last and firstname', () => {
        const student = new Student()

        student.setLastname('Aubert')
        student.setFirstname('Jean-Luc')

        expect(student.getLastname()).toBe('Aubert')
        expect(student.getFirstname()).toBe('Jean-Luc')
    })

    it ('Should have one item in notes', () => {
        const student = new Student()
        student.addNote(15)

        expect(student.getNotes().length).toEqual(1)
    })
})