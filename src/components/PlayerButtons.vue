<template>
<div class="text-center">
  <button :title="playing ? 'Pause' : 'Play'" @click="togglePlaying()" class="btn btn-xl btn-primary s-circle">
    <i :class="{ 'playing': playing }" class="icon icon-arrow-right"></i>
  </button>
</div>
</template>

<style lang="scss" scoped>
button {
  i {
    transition: transform 0.2s ease;

    &.playing {
      transform: rotate(-180deg);
    }
  }
}
</style>

<script lang="ts">
import { player } from '@/classes/player.class'
import { Vue } from 'vue-class-component'

export default class PlayerButtons extends Vue {
  playing = player.playing

  togglePlaying () {
    player.togglePlaying()
  }
}
</script>
