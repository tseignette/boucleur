<template>
<div class="text-center">
  <button
    :disabled="!paused && looperPaused"
    :style="looperButtonStyle"
    :title="looperPaused ? 'Start looper' : 'Stop looper'"
    @click="toggleLooper()"
    class="btn btn-xl s-circle mr-2"
  >
    <i :class="{ 'paused': looperPaused }" class="icon icon-refresh"></i>
  </button>

  <button
    :disabled="!looperPaused"
    :title="paused ? 'Play' : 'Pause'"
    @click="togglePaused()"
    class="btn btn-xl btn-primary s-circle"
  >
    <i :class="{ 'paused': paused }" class="icon icon-arrow-right"></i>
  </button>
</div>
</template>

<style lang="scss" scoped>
button {
  &:last-child {
    i {
      transition: transform 0.2s ease;

      &:not(.paused) {
        transform: rotate(-180deg);
      }
    }
  }
}
</style>

<script lang="ts">
import { Player } from '@/classes/player.class'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    player: Player
  }
})
export default class PlayerButtons extends Vue {
  player!: Player

  get looperButtonStyle () {
    if (this.looperPaused) {
      return null
    }

    return { animation: `loading ${1000 * this.player.looper.loopDuration}ms infinite linear` }
  }

  get looperPaused () {
    return this.player.looper.paused.value
  }

  get paused () {
    return this.player.paused.value
  }

  toggleLooper () {
    this.player.looper.togglePaused()
  }

  togglePaused () {
    this.player.togglePaused()
  }
}
</script>
