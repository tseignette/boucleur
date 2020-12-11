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
</form>
</template>

<script lang="ts">
import { database } from '@/classes/database.class'
import { Music } from '@/classes/music.class'
import { Validator } from '@/classes/validator.class'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    music: Music
  }
})
export default class PlayerOptions extends Vue {
  music!: Music
  tempo!: number

  beforeMount () {
    this.tempo = this.music.tempo
  }

  onFormChange () {
    const tempo = Validator.tempo(this.tempo)

    if (tempo !== null) {
      this.music.tempo = this.tempo
      database.updateMusic(this.music)
    }
  }
}
</script>
