import { Howl } from 'howler'
import { ref } from 'vue'
import { Looper } from './looper.class'
import { Music } from './music.class'

export class Player {
  currentTime = ref(0)
  duration = ref(0)
  loading = ref(true)
  looper: Looper
  paused = ref(true)
  progress = ref(0)
  private interval?: number
  private player: Howl

  constructor (music: Music) {
    const blob = new Blob([music.file])

    this.looper = new Looper(this, music)
    this.player = new Howl({
      format: ['mp3'],
      src: window.URL.createObjectURL(blob)
    })
    this.handleListeners('add')
    this.player.once('load', this.onLoad.bind(this))
  }

  destroy () {
    this.player.unload()
    this.clearInterval()
    this.handleListeners('remove')
  }

  setCurrentTime (currentTime: number) {
    this.player.seek(currentTime)
    this.updateCurrentTime()
  }

  setProgress (progress: number) {
    this.setCurrentTime(progress * this.duration.value)
  }

  togglePaused (forceValue?: boolean) {
    if (forceValue === undefined) {
      this.paused.value = !this.paused.value
    } else {
      this.paused.value = forceValue
    }

    if (this.paused.value) {
      this.player.pause()
      this.clearInterval()
    } else {
      this.player.play()
      this.setInterval()
    }
  }

  private clearInterval () {
    clearInterval(this.interval)
  }

  private errorHandler (soundId: number, error: unknown) {
    alert(error)
  }

  private handleListeners (action: 'add' | 'remove') {
    const fn = action === 'add' ? 'on' : 'off'

    this.player[fn]('end', this.onEnd.bind(this))
    this.player[fn]('loaderror', this.errorHandler)
    this.player[fn]('playerror', this.errorHandler)
  }

  private onEnd () {
    this.clearInterval()
    this.paused.value = true
  }

  private onLoad () {
    this.updateCurrentTime()
    this.updateDuration()
    this.loading.value = false
  }

  private setInterval () {
    this.interval = setInterval(() => {
      this.updateCurrentTime()
    }, 100)
  }

  private updateCurrentTime () {
    this.currentTime.value = this.player.seek() as number
    this.updateProgress()
  }

  private updateDuration () {
    this.duration.value = this.player.duration()
    this.updateProgress()
  }

  private updateProgress () {
    this.progress.value = 100 * this.currentTime.value / this.duration.value
  }
}
