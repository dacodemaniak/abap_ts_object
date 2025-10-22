import type { Person } from "../person";
import type { NameStrategy } from "./name-strategy";

export class FirstnameFirstStrategy implements NameStrategy {
    
    transform(person: Person): string {
        return  person.getFirstname() + ' ' + person.getName()
    }
}