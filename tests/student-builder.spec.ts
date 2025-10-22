import { Student } from '../src/formation/student'
import { StudentBuilder } from './../src/formation/student-builder'

describe('Student builder test suite', () => {
    let studentBuilder: StudentBuilder
    
    beforeEach(() => {
        studentBuilder = new StudentBuilder()
    })

    it('Should raised an exception if a required attribute is missing', () => {
        expect(() => studentBuilder.build()).toThrow()
    })

    it('Should return a Student instance', () => {
        studentBuilder.setName('Aubert')
        studentBuilder.setFirstname('Jean-Luc')
        studentBuilder.setEmail('jean-luc.aubert@aelion.fr')
        studentBuilder.setPhone('05 23 45 78 89')

        expect(studentBuilder.build()).toBeInstanceOf(Student)
    })
})