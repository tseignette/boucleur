import { ref } from 'vue'
import { Music } from './music.class'

export class Player {
  currentTime = ref(0)
  duration = ref(0)
  paused = ref(true)
  progress = ref(0)
  private audio: HTMLAudioElement

  constructor (music: Music) {
    const blob = new Blob([music.file], { type: music.type })

    this.audio = new Audio()
    this.handleListeners('add')
    this.audio.src = window.URL.createObjectURL(blob)
  }

  destroy () {
    this.audio.src = ''
    this.audio.removeAttribute('src')
    this.handleListeners('remove')
  }

  setProgress (progress: number) {
    this.audio.currentTime = progress * this.audio.duration
  }

  togglePaused () {
    this.paused.value = !this.paused.value

    if (this.paused.value) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
  }

  private handleError () {
    let message

    switch (this.audio.error?.code) {
      case MediaError.MEDIA_ERR_ABORTED:
        message = 'Audio playing aborted'
        break
      case MediaError.MEDIA_ERR_DECODE:
        message = 'Audio decoding error'
        break
      case MediaError.MEDIA_ERR_NETWORK:
        message = 'Network error'
        break
      case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
        message = 'Source not supported'
        break
      default:
        message = 'Audio playing error'
        break
    }

    alert(message)
  }

  handleListeners (action: 'add' | 'remove') {
    const functionName = action === 'add' ? 'addEventListener' : 'removeEventListener'

    this.audio[functionName]('durationchange', this.updateDuration.bind(this))
    this.audio[functionName]('error', this.handleError.bind(this))
    this.audio[functionName]('pause', this.updatePaused.bind(this))
    this.audio[functionName]('play', this.updatePaused.bind(this))
    this.audio[functionName]('timeupdate', this.updateCurrentTime.bind(this))
  }

  private updateCurrentTime () {
    this.currentTime.value = this.audio.currentTime
    this.updateProgress()
  }

  private updateDuration () {
    this.duration.value = this.audio.duration
    this.updateProgress()
  }

  private updatePaused () {
    this.paused.value = this.audio.paused
  }

  private updateProgress () {
    this.progress.value = 100 * this.audio.currentTime / this.audio.duration
  }
}
