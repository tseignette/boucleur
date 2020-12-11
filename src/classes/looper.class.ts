import { ref, Ref } from 'vue'
import { Music } from './music.class'
import { Player } from './player.class'

export class Looper {
  endBar: Ref<number>
  startBar: Ref<number>
  tempo: Ref<number>
  private player: Player

  constructor (player: Player, music: Music) {
    this.endBar = ref(music.endBar)
    this.player = player
    this.startBar = ref(music.startBar)
    this.tempo = ref(music.tempo)
  }

  get nbBars () {
    return Math.floor(this.tempo.value * this.player.duration.value / 60)
  }
}
