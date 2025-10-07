import { Note } from './../src/note'

describe('Note', () => {
    let note: Note

    beforeEach(() => {
        note = new Note()
    })

    test('setNote devrait définir la note', () => {
        note.setNote(15)
        expect(note.getNote()).toBe(15)
    })

    test('getNote devrait retourner la note', () => {
        note.setNote(18)
        expect(note.getNote()).toBe(18)
    })

    test('setMatiere devrait définir la matière', () => {
        note.setMatiere('Mathématiques')
        expect(note.getMatiere()).toBe('Mathématiques')
    })

    test('getMatiere devrait retourner la matière', () => {
        note.setMatiere('Physique')
        expect(note.getMatiere()).toBe('Physique')
    })
})