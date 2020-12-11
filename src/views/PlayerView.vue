<template>
<div v-if="music === null" class="empty">
  <p class="empty-title h5">You have no music playing</p>

  <div class="empty-action">
    <router-link class="btn btn-primary" title="Select a music" to="/">Select a music</router-link>
  </div>
</div>

<PlayerContent v-else :music="music"/>
</template>

<script lang="ts">
import { state } from '@/classes/state.class'
import PlayerContent from '@/components/PlayerContent.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    PlayerContent
  }
})
export default class PlayerView extends Vue {
  music = state.music
}
</script>
