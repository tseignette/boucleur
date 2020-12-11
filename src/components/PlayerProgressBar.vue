<template>
<div>
  <p class="text-center mb-1">{{ music.name }}</p>
  <div @click="setProgress($event)" class="bar c-hand" ref="progressBar">
    <div :style="{ width: progress }" class="bar-item bg-gray-dark"></div>
  </div>

  <div class="d-flex justify-between text-small text-muted">
    <span>{{ currentTime }}</span>
    <span>{{ duration }}</span>
  </div>
</div>
</template>

<style lang="scss" scoped>
.bar {
  height: 2.0rem;
}
</style>

<script lang="ts">
import { Music } from '@/classes/music.class'
import { Player } from '@/classes/player.class'
import { Utils } from '@/classes/utils.class'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    music: Music,
    player: Player
  }
})
export default class PlayerProgressBar extends Vue {
  music!: Music
  player!: Player
  $refs!: {
    progressBar: HTMLDivElement;
  }

  get currentTime () {
    return Utils.formatTime(this.player.currentTime.value)
  }

  get duration () {
    return Utils.formatTime(this.player.duration.value)
  }

  get progress () {
    return `${this.player.progress.value.toFixed(2)}%`
  }

  setProgress ($event: MouseEvent) {
    this.player.setProgress($event.offsetX / this.$refs.progressBar.clientWidth)
  }
}
</script>
