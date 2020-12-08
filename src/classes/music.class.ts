export class Music {
  addedOn: Date
  file: ArrayBuffer
  id?: number
  name: string

  constructor (
    name: string,
    file: ArrayBuffer
  ) {
    this.addedOn = new Date()
    this.file = file
    this.name = name
  }
}
