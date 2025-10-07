import { Note } from '../src/note'
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
        const note: Note = new Note()
        note.setNote(15)
        note.setMatiere('Algo')
        student.addNote(note)

        expect(student.getNotes().length).toEqual(1)
    })

    it('Should have the correct note average', () => {
        const student = new Student()

        let note: Note = new Note()
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

        expect(student.getGeneralAverage()).toBeCloseTo(12.3, 1)

    })
})