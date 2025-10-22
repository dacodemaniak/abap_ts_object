import type { Person } from "../person";
import type { NameStrategy } from "./name-strategy";

export class NameFirstStrategy implements NameStrategy {
    
    transform(person: Person): string {
        return person.getName() + ' ' + person.getFirstname()
    }
}