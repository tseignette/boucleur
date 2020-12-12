<template>
<form @change="onFormChange" class="form-horizontal">
  <div class="form-group justify-content-between">
    <div class="col-4">
      <label class="form-label" for="tempo">Tempo</label>
    </div>

    <div class="col-8">
      <div class="input-group">
        <input
          v-model.number="tempo"
          :disabled="looperOn"
          required
          class="form-input"
          id="tempo"
          min="1"
          step="1"
          type="number"
        >
        <span class="input-group-addon">bpm</span>
      </div>
    </div>
  </div>

  <div class="form-group columns">
    <div class="column">
      <label for="startBar" class="form-label">Start bar{{ startBarInterval }}</label>
      <input
        v-model.number="startBar"
        :disabled="looperOn"
        :max="startBarMax"
        required
        class="form-input"
        id="startBar"
        min="1"
        step="1"
        type="number"
      >
    </div>

    <div class="column">
      <label for="endBar" class="form-label">End bar{{ endBarInterval }}</label>
      <input
        v-model.number="endBar"
        :disabled="looperOn"
        :max="endBarMax"
        :min="endBarMin"
        required
        class="form-input"
        id="endBar"
        step="1"
        type="number"
      >
    </div>
  </div>
</form>
</template>

<script lang="ts">
import { database } from '@/classes/database.class'
import { Music } from '@/classes/music.class'
import { Player } from '@/classes/player.class'
import { Validator } from '@/classes/validator.class'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    music: Music,
    player: Player
  }
})
export default class PlayerOptions extends Vue {
  endBar: number | string = ''
  music!: Music
  player!: Player
  startBar: number | string = ''
  tempo: number | string = ''

  beforeMount () {
    this.endBar = this.music.endBar
    this.startBar = this.music.startBar
    this.tempo = this.music.tempo
  }

  get endBarInterval () {
    if (this.endBarMax !== null && this.endBarMin !== null) {
      return ` (${this.endBarMin}-${this.endBarMax})`
    }

    return ''
  }

  get endBarMax () {
    return this.nbBars === 0 ? null : this.nbBars
  }

  get endBarMin () {
    const startBar = Validator.startBar(this.startBar, this.nbBars)

    return startBar === null ? null : (startBar + 1)
  }

  get looperOn () {
    return !this.player.looper.paused.value
  }

  get nbBars () {
    return this.player.looper.nbBars
  }

  get startBarInterval () {
    if (this.startBarMax !== null) {
      return ` (1-${this.startBarMax})`
    }

    return ''
  }

  get startBarMax () {
    return this.nbBars === 0 ? null : (this.nbBars - 1)
  }

  onFormChange () {
    const startBar = Validator.startBar(this.startBar, this.nbBars)
    const tempo = Validator.tempo(this.tempo)

    if (tempo !== null) {
      this.music.tempo = tempo
      this.player.looper.tempo.value = tempo
    }

    if (startBar !== null) {
      const endBar = Validator.endBar(this.endBar, startBar, this.nbBars)

      this.music.startBar = startBar
      this.player.looper.startBar.value = startBar

      if (endBar !== null) {
        this.music.endBar = endBar
        this.player.looper.endBar.value = endBar
      }
    }

    database.updateMusic(this.music)
  }
}
</script>
