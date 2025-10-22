import { Person } from "./../person";

export interface NameStrategy {
    /**
     * Transform some string into others
     * @param person: Person
     * @returns string
     */
    transform(person: Person): string
}