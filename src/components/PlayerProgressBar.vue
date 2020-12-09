<template>
<div>
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
import { player } from '@/classes/player.class'
import { Utils } from '@/classes/utils.class'
import { Vue } from 'vue-class-component'

export default class PlayerProgressBar extends Vue {
  $refs!: {
    progressBar: HTMLDivElement;
  }

  get currentTime () {
    if (player.currentTime.value !== null) {
      return Utils.formatTime(player.currentTime.value)
    }

    return null
  }

  get duration () {
    if (player.duration.value !== null) {
      return Utils.formatTime(player.duration.value)
    }

    return null
  }

  get progress () {
    if (player.progress.value === null) {
      return ''
    } else {
      return `${player.progress.value.toFixed(2)}%`
    }
  }

  setProgress ($event: MouseEvent) {
    player.setProgress($event.offsetX / this.$refs.progressBar.clientWidth)
  }
}
</script>
