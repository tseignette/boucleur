<template>
<div v-if="music" class="player">
  <p class="text-center mb-1">{{ music.name }}</p>

  <PlayerProgressBar class="mb-2"/>
  <PlayerButtons/>
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
}
</style>

<script lang="ts">
import { player } from '@/classes/player.class'
import PlayerButtons from '@/components/PlayerButtons.vue'
import PlayerProgressBar from '@/components/PlayerProgressBar.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    PlayerButtons,
    PlayerProgressBar
  }
})
export default class PlayerView extends Vue {
  music = player.music
}
</script>
