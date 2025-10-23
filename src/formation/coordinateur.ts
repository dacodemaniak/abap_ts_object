import { Person } from "./person"

export class Coordinateur {

    private static instance: Coordinateur | undefined = undefined
    private static instanciations: number = 0
    private name: string = ''

    private constructor() {
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

    public setName(name: string): void {
        this.name = name
    }

    public getName(): string {
        return this.name
    }
}