import { Promo } from './../src/formation/promo'
import { PromoBuilder } from './../src/formation/promo-builder'
import { StudentBuilder } from './../src/formation/student-builder'

describe('Promo tests suite', () => {
    let promo: Promo
    beforeEach(() => {
        const builder = new PromoBuilder()
        builder.beginAt(new Date('2024-01-01'))
        builder.endAt(new Date('2024-12-31'))
        builder.name('Promo 2024')
        promo = builder.build()

        const studentBuilder: StudentBuilder = new StudentBuilder()
            .name('Doe')
            .firstname('John')
            .email('john.doe@acme.corp')
            .phone('0123456789')
        promo.addStudent(studentBuilder.build())

        studentBuilder
            .name('Smith')
            .firstname('Jane')
            .email('jane.smith@jdoe.com')
            .phone('0987654321')
        promo.addStudent(studentBuilder.build())

        studentBuilder
            .name('Brown')
            .firstname('Charlie')
            .email('charlie.brown@peanuts.comics')
            .phone('1231231234')
        promo.addStudent(studentBuilder.build())
    })

    it('Should have 3 students initially', () => {
        expect(promo.getStudentsNumber()).toBe(3)
    })

    it('Should have 2 students after removing a student', () => {
        const studentBuilder: StudentBuilder = new StudentBuilder()
        studentBuilder
            .name('Smith')
            .firstname('Jane')
            .email('jane.smith@jdoe.com')
            .phone('0987654321')
        promo.removeStudent(studentBuilder.build())

        expect(promo.getStudentsNumber()).toBe(2)
    })
})