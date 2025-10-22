import type { Person } from "../person";
import type { NameStrategy } from "./name-strategy";

export class FirstnameInitialFirstStrategy implements NameStrategy {
    
    transform(person: Person): string {
        return  person.getFirstname().charAt(0) + '. ' + person.getName()
    }
}