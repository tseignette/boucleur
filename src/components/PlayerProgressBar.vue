<template>
<div @click="setProgress($event)" class="bar c-hand" ref="progressBar">
  <div :style="{ width: progress }" class="bar-item bg-gray-dark"></div>
</div>
</template>

<style lang="scss" scoped>
.bar {
  height: 2.0rem;
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
export default class PlayerProgressBar extends Vue {
  player!: Player
  $refs!: {
    progressBar: HTMLDivElement;
  }

  get progress () {
    return `${this.player.progress.value.toFixed(2)}%`
  }

  setProgress ($event: MouseEvent) {
    this.player.setProgress($event.offsetX / this.$refs.progressBar.clientWidth)
  }
}
</script>
