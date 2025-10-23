export class DateUtils {
    constructor() {
        throw new Error('This class cannot be instanciated')
    }
    
    public static isSameOrAfter(date1: Date, date2: Date): boolean {
        return true
    }

    public static deltaInMonth(date1: Date, date2: Date): number {
        return Math.max(
            (date2.getFullYear() - date1.getFullYear()) * 12 +
            date2.getMonth() -
            date1.getMonth()
        )
    }
}