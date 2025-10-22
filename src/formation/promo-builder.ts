import type { BuilderInterface } from "../core/builder.interface";
import { Promo } from "./promo";

export class PromoBuilder implements BuilderInterface<Promo> {
    private _name: string = ''
    private _beginAt: Date = new Date()
    private _endAt: Date = new Date()
    
    public name(name: string): PromoBuilder {
        this._name = name
        return this
    }

    public beginAt(date: Date): PromoBuilder {
        this._beginAt = date
        return this
    }

    public endAt(date: Date): PromoBuilder {
        this._endAt = date
        return this
    }

    build(): Promo {
        if (this._name === '') {
            throw new Error('Promo name is required')
        }

        if (this._beginAt > this._endAt) {
            throw new Error("Incorrect dates");
        }
        
        const promo = new Promo()
        promo.setName(this._name)
        promo.setBeginAt(this._beginAt)
        promo.setEndAt(this._endAt)

        return promo
    }
    
}