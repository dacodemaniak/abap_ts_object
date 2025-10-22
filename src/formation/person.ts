export abstract class Person {
    protected name: string = '';
    protected firstname: string = '';
    protected email: string = '';
    protected phone: string = '';
    public birthdate: Date = new Date();
    public gender: string = '';

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        if (this.name === '') {
            this.name = name;
        }
    }

    public getFirstname(): string {
        return this.firstname;
    }

    public setFirstname(firstname: string): void {
        if (this.firstname === '') {
            this.firstname = firstname;
        }
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        if (this.email === '') {
            this.email = email;
        }
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        if (this.phone === '') {
            this.phone = phone;
        }
    }

    public abstract sayHello(): void;
}