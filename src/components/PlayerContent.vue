<template>
<div class="player">
  <PlayerProgressBar :music="music" :player="player" class="mb-2"/>
  <PlayerButtons :player="player"/>
</div>
</template>

<style lang="scss" scoped>
.player {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
</style>

<script lang="ts">
import { Music } from '@/classes/music.class'
import { Player } from '@/classes/player.class'
import { Options, Vue } from 'vue-class-component'
import PlayerButtons from './PlayerButtons.vue'
import PlayerProgressBar from './PlayerProgressBar.vue'

@Options({
  components: {
    PlayerButtons,
    PlayerProgressBar
  },
  props: {
    music: Music
  }
})
export default class PlayerContent extends Vue {
  music!: Music
  player!: Player

  beforeMount () {
    this.player = new Player(this.music)
  }

  unmounted () {
    this.player.destroy()
  }
}
</script>
