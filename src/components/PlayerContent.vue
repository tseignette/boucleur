<template>
<div class="player">
  <div v-if="loading" class="loading"></div>

  <template v-else>
    <PlayerInfo :music="music" :player="player" class="mb-1"/>
    <PlayerProgressBar :player="player" class="mb-2"/>
    <PlayerOptions :music="music" :player="player" class="mb-2"/>
    <PlayerButtons :player="player"/>
  </template>
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
import PlayerInfo from './PlayerInfo.vue'
import PlayerOptions from './PlayerOptions.vue'
import PlayerProgressBar from './PlayerProgressBar.vue'

@Options({
  components: {
    PlayerButtons,
    PlayerInfo,
    PlayerOptions,
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

  get loading () {
    return this.player.loading.value
  }
}
</script>
