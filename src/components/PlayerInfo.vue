<template>
<div class="d-flex justify-content-between align-items-end">
  <span class="text-small text-muted">{{ currentTime }}</span>
  <span :title="music.name" class="ellipsis px-2">{{ music.name }}</span>
  <span class="text-small text-muted">{{ duration }}</span>
</div>
</template>

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
export default class PlayerInfo extends Vue {
  music!: Music
  player!: Player

  get currentTime () {
    return Utils.formatTime(this.player.currentTime.value)
  }

  get duration () {
    return Utils.formatTime(this.player.duration.value)
  }
}
</script>
