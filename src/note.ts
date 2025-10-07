export class Note {
    private note: number = 0
    private matiere: string = ''

    setNote(note: number): void {
        this.note = note
    }

    getNote(): number {
        return this.note
    }

    setMatiere(matiere: string): void {
        this.matiere = matiere
    }

    getMatiere(): string {
        return this.matiere
    }
}