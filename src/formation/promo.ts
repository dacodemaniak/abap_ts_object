export class Promo {
    private name: string = ''
    private beginAt: Date = new Date()
    private endAt: Date = new Date()

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        if (this.name === '')
            this.name = name;
    }

    public getBeginAt(): Date {
        return this.beginAt;
    }

    public setBeginAt(beginAt: Date): void {
        this.beginAt = beginAt;
    }

    public getEndAt(): Date {
        return this.endAt;
    }

    public setEndAt(endAt: Date): void {
        this.endAt = endAt;
    }
}