<template>
<div class="text-center">
  <button :title="paused ? 'Play' : 'Pause'" @click="togglePaused()" class="btn btn-xl btn-primary s-circle">
    <i :class="{ 'paused': paused }" class="icon icon-arrow-right"></i>
  </button>
</div>
</template>

<style lang="scss" scoped>
button {
  i {
    transition: transform 0.2s ease;

    &:not(.paused) {
      transform: rotate(-180deg);
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

  get paused () {
    return this.player.paused.value
  }

  togglePaused () {
    this.player.togglePaused()
  }
}
</script>
