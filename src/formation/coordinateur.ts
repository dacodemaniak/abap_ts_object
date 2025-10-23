import { Person } from "./person"

export class Coordinateur extends Person {

    private static instance: Coordinateur | undefined = undefined
    private static instanciations: number = 0

    private constructor() {
        super()
        Coordinateur.instanciations++
    }

    public static getInstance(): Coordinateur {
        if (Coordinateur.instance === undefined) {
            Coordinateur.instance = new Coordinateur()
        }

        return Coordinateur.instance
    }

    public static getInstanciations(): number {
        return Coordinateur.instanciations
    }

    public sayHello(): void {
        throw new Error("Method not implemented.")
    }
}