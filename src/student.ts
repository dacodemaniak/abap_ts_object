import type { Note } from "./note"

/**
 * @class Student
 * @version 1.0.0
 *  - Two attributes : lastname, firstname + getters and setters
 * @version 1.0.1 (7 oct. 2025)
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 *  - Added notes array attributes with methods that push and get array
 */
export class Student {

    private lastname: string = ''
    private firstname: string = ''
    private notes: Array<Note> = []

    /**
     * 
     * @param lastname 
     */
    setLastname(lastname: string): void {
        this.lastname = lastname
    }

    /**
     * 
     * @returns string
     */
    getLastname(): string {
        return this.lastname
    }

    /**
     * 
     * @param firstname 
     */
    setFirstname(firstname: string): void {
        this.firstname = firstname
    }

    /**
     * 
     * @returns string
     */
    getFirstname(): string {
        return this.firstname
    }

    getNotes(): Array<Note> {
        return this.notes
    }

    /**
     * Push a new note in 
     * @param note 
     */
    addNote(note: Note): void {
        this.notes.push(note)
    }

    getGeneralAverage(): number {
        let cumul: number = 0
        for (const note of this.notes) {
            cumul = cumul + note.getNote()
        }
        return cumul / this.notes.length
    }
}