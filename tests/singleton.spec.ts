import { Coordinateur } from './../src/formation/coordinateur'

describe('Coordinateur test suite', () => {

    it('Should return a Coordinateur instance', () => {
        expect(Coordinateur.getInstance()).toBeInstanceOf(Coordinateur)
    })

    it('Should have the name Mélanie', () => {
        const melanie = Coordinateur.getInstance()
        melanie.setName('Mélanie')

        const jl = Coordinateur.getInstance()

        expect(jl.getName()).toBe('Mélanie')
    })
})