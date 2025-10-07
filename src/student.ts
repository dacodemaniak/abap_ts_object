/**
 * @class Student
 * @version 1.0.0
 *  - Two attributes : lastname, firstname + getters and setters
 */
export class Student {
    private lastname: string = ''
    private firstname: string = ''

    setLastname(lastname: string): void {
        this.lastname = lastname
    }

    getLastname(): string {
        return this.lastname
    }

    setFirstname(firstname: string): void {
        this.firstname = firstname
    }

    getFirstname(): string {
        return this.firstname
    }
}