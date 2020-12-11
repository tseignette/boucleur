import { guess } from 'web-audio-beat-detector'
import { Utils } from './utils.class'

export class Music {
  addedOn = new Date()
  endBar = 2
  file: ArrayBuffer
  id!: number
  name: string
  startBar = 1
  tempo!: number
  type: string

  constructor (name: string, file: ArrayBuffer, type: string) {
    this.file = file
    this.name = name
    this.type = type
  }

  async guessTempo () {
    const fileCopy = this.file.slice(0)
    const audioData = await Utils.decodeAudioData(fileCopy)

    if (audioData) {
      const result = await guess(audioData)

      this.tempo = result.bpm
    } else {
      this.tempo = 120
    }

    return this
  }
}
