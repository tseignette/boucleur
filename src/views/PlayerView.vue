<template>
<div v-if="music" class="player">
  <p class="text-center mb-1">{{ music.name }}</p>

  <div @click="setProgress($event)" class="bar c-hand" ref="progressBar">
    <div :style="{ width: progress }" class="bar-item bg-gray-dark"></div>
  </div>

  <div class="d-flex justify-between text-small text-muted mb-2">
    <span>{{ currentTime }}</span>
    <span>{{ duration }}</span>
  </div>

  <div class="text-center">
    <button :title="playing ? 'Pause' : 'Play'" @click="togglePlaying()" class="btn btn-xl btn-primary s-circle">
      <i :class="{ 'playing': playing }" class="icon icon-arrow-right"></i>
    </button>
  </div>
</div>

<div v-else class="empty">
  <p class="empty-title h5">You have no music playing</p>

  <div class="empty-action">
    <router-link class="btn btn-primary" title="Select a music" to="/">Select a music</router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
.player {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  .bar {
    height: 2.0rem;
  }

  button {
    i {
      transition: transform 0.2s ease;

      &.playing {
        transform: rotate(-180deg);
      }
    }
  }
}
</style>

<script lang="ts">
import { player } from '@/classes/player.class'
import { Utils } from '@/classes/utils.class'
import { Vue } from 'vue-class-component'

export default class PlayerView extends Vue {
  music = player.music
  playing = player.playing
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

  togglePlaying () {
    player.togglePlaying()
  }
}
</script>
