<template>
<div v-if="musics === null" class="empty">
  <div class="loading"></div>
</div>

<div v-else-if="musics.length === 0" class="empty">
  <p class="empty-title h5">You have no music</p>
</div>

<div v-else>
  <MusicTile v-for="(music, index) in musics" :class="{ 'mt-1': index !== 0 }" :key="music.id" :music="music"/>
</div>
</template>

<script lang="ts">
import { database } from '@/classes/database.class'
import { Options, Vue } from 'vue-class-component'
import MusicTile from './MusicTile.vue'

@Options({
  components: {
    MusicTile
  }
})
export default class MusicsList extends Vue {
  musics = database.musics
}
</script>
