import { Student } from '../src/formation/student'
import { StudentBuilder } from './../src/formation/student-builder'
import { FirstnameFirstStrategy } from './../src/formation/strategies/firstname-first-strategy'
import { FirstnameInitialFirstStrategy } from './../src/formation/strategies/firstname-intial-first-strategy'

describe('Student builder test suite', () => {
    let studentBuilder: StudentBuilder
    
    beforeEach(() => {
        studentBuilder = new StudentBuilder()
    })

    it('Should raised an exception if a required attribute is missing', () => {
        expect(() => studentBuilder.build()).toThrow()
    })

    it('Should return a Student instance', () => {
        studentBuilder
            .name('Aubert')
            .firstname('Jean-Luc')
            .email('jean-luc.aubert@aelion.fr')
            .phone('05 23 45 78 89')

        expect(studentBuilder.build()).toBeInstanceOf(Student)
    })

    it('Should get Aubert Jean-Luc', () => {
        studentBuilder
            .name('Aubert')
            .firstname('Jean-Luc')
            .email('jean-luc.aubert@aelion.fr')
            .phone('05 23 45 78 89')
        const student = studentBuilder.build()

        expect(student.getDisplayName()).toBe('Aubert Jean-Luc')
    })

    it('Should get Jean-Luc Aubert', () => {
        studentBuilder
            .name('Aubert')
            .firstname('Jean-Luc')
            .email('jean-luc.aubert@aelion.fr')
            .phone('05 23 45 78 89')
        const student = studentBuilder.build()
        student.setStrategy(new FirstnameFirstStrategy())
        expect(student.getDisplayName()).toBe('Jean-Luc Aubert')
    })

    it('Should get J. Aubert', () => {
        studentBuilder
            .name('Aubert')
            .firstname('Jean-Luc')
            .email('jean-luc.aubert@aelion.fr')
            .phone('05 23 45 78 89')
        const student = studentBuilder.build()
        student.setStrategy(new FirstnameInitialFirstStrategy())
        expect(student.getDisplayName()).toBe('J. Aubert')
    })
})