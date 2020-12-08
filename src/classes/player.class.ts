import { Ref, ref } from 'vue'
import { Music } from './music.class'

export class Player {
  audio: HTMLAudioElement
  currentTime: Ref<null | number> = ref(null)
  duration: Ref<null | number> = ref(null)
  music: Ref<null | Music> = ref(null)
  playing: Ref<boolean> = ref(false)
  progress: Ref<null | number> = ref(null)

  constructor () {
    this.audio = new Audio()
    this.audio.addEventListener('durationchange', this.updateProgress.bind(this))
    this.audio.addEventListener('error', this.handleError.bind(this))
    this.audio.addEventListener('pause', this.updatePlaying.bind(this))
    this.audio.addEventListener('play', this.updatePlaying.bind(this))
    this.audio.addEventListener('timeupdate', this.updateProgress.bind(this))
    window.addEventListener('keypress', this.handleKeyPress.bind(this))
  }

  playMusic (music: Music) {
    const blob = new Blob([music.file], { type: 'audio/mp3' })

    this.audio.src = window.URL.createObjectURL(blob)
    this.music.value = music
    this.togglePlaying(true)
  }

  setProgress (progress: number) {
    this.audio.currentTime = progress * this.audio.duration
  }

  togglePlaying (forceValue?: boolean) {
    if (forceValue !== undefined) {
      this.playing.value = forceValue
    } else {
      this.playing.value = !this.playing.value
    }

    if (this.playing.value) {
      this.audio.play()
    } else {
      this.audio.pause()
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

  private handleKeyPress ($event: KeyboardEvent) {
    if ($event.key === ' ' && this.music.value) {
      this.togglePlaying()
    }
  }

  private updatePlaying () {
    this.playing.value = !this.audio.paused
  }

  private updateProgress () {
    if (!isNaN(this.audio.currentTime) && !isNaN(this.audio.duration)) {
      this.currentTime.value = this.audio.currentTime
      this.duration.value = this.audio.duration
      this.progress.value = 100 * this.audio.currentTime / this.audio.duration
    } else {
      this.progress.value = null
    }
  }
}

export const player = new Player()
