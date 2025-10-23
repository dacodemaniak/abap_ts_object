import { DateUtils } from "./core/utils/date-utils"

(() => {
    const hello = 'Hello TS'
    console.log(hello)
    
    const date1: Date = new Date('2025-10-23T09:25:00,000')
    const date2: Date = new Date('2025-10-23T09:30:00,000')

    if (DateUtils.isSameOrAfter(date1, date2)) {
        console.log('date1 est pareille ou supérieure à date2')
    }
})()