import { ref, Ref } from 'vue'
import { Music } from './music.class'
import { Player } from './player.class'

export class Looper {
  endBar: Ref<number>
  paused = ref(true)
  startBar: Ref<number>
  tempo: Ref<number>
  private interval?: number;
  private player: Player

  constructor (player: Player, music: Music) {
    this.endBar = ref(music.endBar)
    this.player = player
    this.startBar = ref(music.startBar)
    this.tempo = ref(music.tempo)
  }

  get barDuration () {
    return 60 / this.tempo.value
  }

  get endBarTime () {
    return this.barDuration * (this.endBar.value - 1)
  }

  get loopDuration () {
    return this.endBarTime - this.startBarTime
  }

  get nbBars () {
    return Math.floor(this.tempo.value * this.player.duration.value / 60)
  }

  get startBarTime () {
    return this.barDuration * (this.startBar.value - 1)
  }

  togglePaused () {
    this.paused.value = !this.paused.value
    this.player.togglePaused(this.paused.value)
    this.handleInterval()
  }

  private handleInterval () {
    if (this.paused.value) {
      clearInterval(this.interval)
    } else {
      this.player.setCurrentTime(this.startBarTime)
      this.interval = setInterval(() => {
        this.player.setCurrentTime(this.startBarTime)
      }, 1000 * this.loopDuration)
    }
  }
}
