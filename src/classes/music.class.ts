import { guess } from 'web-audio-beat-detector'

export class Music {
  addedOn: Date
  file: ArrayBuffer
  id: number
  name: string
  tempo: number

  constructor (name: string, file: ArrayBuffer) {
    this.addedOn = new Date()
    this.file = file
    this.name = name
  }

  async guessTempo () {
    const fileCopy = this.file.slice(0)
    const context = new AudioContext()
    const audioData = await context.decodeAudioData(fileCopy)
    const result = await guess(audioData)

    this.tempo = result.bpm

    return this
  }
}
