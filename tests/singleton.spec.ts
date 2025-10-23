import { Coordinateur } from './../src/formation/coordinateur'

describe('Coordinateur test suite', () => {
    it('Should have 0 instanciations', () => {
        expect(Coordinateur.getInstanciations()).toBe(0)
    })

    it('Should return a Coordinateur instance', () => {
        expect(Coordinateur.getInstance()).toBeInstanceOf(Coordinateur)
    })

    it('Should give 1 instance max', () => {
        const melanie = Coordinateur.getInstance()
        melanie.setName('Mélanie')

        const jl = Coordinateur.getInstance()

        expect(Coordinateur.getInstanciations()).toBe(1)
    })

        it('Should have the name Mélanie', () => {
        const melanie = Coordinateur.getInstance()
        melanie.setName('Mélanie')

        const jl = Coordinateur.getInstance()

        expect(jl.getName()).toBe('Mélanie')
    })
})