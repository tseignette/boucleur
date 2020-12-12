<template>
<div @click="setProgress($event)" class="bar c-hand" ref="progressBar">
  <div :style="{ width: progress }" class="bar-item bg-gray-dark"></div>
  <div v-if="startBarPosition !== null" :style="{ left: startBarPosition }" class="start-bar bg-primary"></div>
  <div v-if="endBarPosition !== null" :style="{ left: endBarPosition }" class="end-bar bg-primary"></div>
</div>
</template>

<style lang="scss" scoped>
.bar {
  height: 4.0rem;
  overflow: hidden;
  position: relative;

  .end-bar, .start-bar {
    height: 100%;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    transform: translateX(-1px);
    width: 2px;
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
export default class PlayerProgressBar extends Vue {
  barWidth: null | number = null
  player!: Player
  $refs!: {
    progressBar: HTMLDivElement;
  }

  mounted () {
    this.barWidth = this.$refs.progressBar.clientWidth
  }

  get endBarPosition () {
    return this.computeBarPosition(this.player.looper.endBarTime)
  }

  get progress () {
    return `${this.player.progress.value.toFixed(2)}%`
  }

  get startBarPosition () {
    return this.computeBarPosition(this.player.looper.startBarTime)
  }

  setProgress ($event: MouseEvent) {
    if (this.barWidth !== null) {
      this.player.setProgress($event.offsetX / this.barWidth)
    }
  }

  private computeBarPosition (barTime: number) {
    if (this.barWidth !== null && this.player.duration.value > 0) {
      return `${this.barWidth * barTime / this.player.duration.value}px`
    }

    return null
  }
}
</script>
