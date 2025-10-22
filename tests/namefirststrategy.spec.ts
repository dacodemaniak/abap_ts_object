import { Student } from './../src/formation/student'
import { NameFirstStrategy } from './../src/formation/strategies/name-first-strategy'

describe('NameFirstStrategy tests suite', () => {
    it ('Should return Aubert Jean-Luc', () => {
        const student = new Student()
        student.setName('Aubert')
        student.setFirstname('Jean-Luc')

        const strategy = new NameFirstStrategy()

        expect(strategy.transform(student)).toBe('Aubert Jean-Luc')
    })
})