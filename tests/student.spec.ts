import { Note } from '../src/note'
import { Student } from './../src/student'

describe ('Student test suite', () => {
    let student: Student
    let note: Note

    beforeEach(() => {
        student = new Student()

        note= new Note()
        note.setNote(15)
        note.setMatiere('Algo')
        student.addNote(note)

        note = new Note()
        note.setNote(10)
        note.setMatiere('SQL')
        student.addNote(note)

        note = new Note()
        note.setNote(12)
        note.setMatiere('SQL')
        student.addNote(note)
    })

    it('Should make a Student instance', () => {
        expect(student).toBeInstanceOf(Student)
    })

    it('Should have an empty lastname and firstname', () => {
        expect(student.getLastname()).toBe('')
        expect(student.getFirstname()).toBe('')
    })

    it('Should have Aubert Jean-Luc as last and firstname', () => {

        student.setLastname('Aubert')
        student.setFirstname('Jean-Luc')

        expect(student.getLastname()).toBe('Aubert')
        expect(student.getFirstname()).toBe('Jean-Luc')
    })

    it ('Should have three items in notes', () => {

        expect(student.getNotes().length).toEqual(3)
    })

    it('Should have the correct note average', () => {


        expect(student.getGeneralAverage()).toBeCloseTo(12.3, 1)

    })

    it ('Should return average by theme', () => {
        /**
         * expected : [15, 11]
         */
        const expected: Array<number> = [15, 11]

        expect(student.averageByTheme()).toStrictEqual(expected)
    })
})