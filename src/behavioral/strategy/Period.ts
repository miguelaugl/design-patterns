export default class Period {
  constructor (readonly startDate: Date, readonly endDate: Date) {}

  getDiffInMilli (): number {
    return this.endDate.getTime() - this.startDate.getTime()
  }

  getDiffInHours (): number {
    return ((this.getDiffInMilli()) / (1000 * 60 * 60))
  }

  getDiffInDays (): number {
    return ((this.getDiffInMilli()) / (1000 * 60 * 60 * 24))
  }
}
