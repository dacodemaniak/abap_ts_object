import { Promo } from '../src/formation/promo'
import { PromoBuilder } from './../src/formation/promo-builder'

describe('Promo builder test suite', () => {
    let builder: PromoBuilder

    beforeEach(() => {
        builder = new PromoBuilder()
    })

    it ('Should raised an error if promo is incorrect', () => {
        builder
            .name('Test')
            .beginAt(new Date('2025-10-03'))
            .endAt(new Date('2024-10-03'));

        expect(() => builder.build()).toThrow('Incorrect dates')
    })

        it ('Should raised an error if no name', () => {
        builder
            .beginAt(new Date('2025-10-03'))
            .endAt(new Date('2026-10-03'));

        expect(() => builder.build()).toThrow('Promo')
    })

    it ('Should get a Promo instance', () => {
        builder
            .name('Test')
            .beginAt(new Date('2025-10-03'))
            .endAt(new Date('2026-08-03'));

        expect(builder.build()).toBeInstanceOf(Promo)
    })
})