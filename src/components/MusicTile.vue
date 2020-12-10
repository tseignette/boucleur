<template>
<div class="tile tile-centered">
  <div class="tile-content">
    <div class="tile-title">{{ music.name }}</div>
    <small class="tile-subtitle text-gray">{{ music.tempo }} bpm • {{ size }} • {{ addedOn }}</small>
  </div>

  <div class="tile-action">
    <div class="dropdown dropdown-right mr-1">
      <a class="dropdown-toggle btn btn-link btn-action s-circle" tabindex="0">
        <i class="icon icon-more-horiz"></i>
      </a>

      <ul class="menu">
        <li class="menu-item">
          <button @click="deleteMusic()" class="btn btn-block btn-error" title="Delete music" type="button">Delete</button>
        </li>
      </ul>
    </div>

    <button @click="playMusic()" class="btn btn-action s-circle" title="Play">
      <i class="icon icon-arrow-right"></i>
    </button>
  </div>
</div>
</template>

<script lang="ts">
import { database } from '@/classes/database.class'
import { Music } from '@/classes/music.class'
import { player } from '@/classes/player.class'
import { Utils } from '@/classes/utils.class'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    music: Music
  }
})
export default class MusicTile extends Vue {
  music!: Music

  get addedOn () {
    return this.music.addedOn.toLocaleDateString()
  }

  get size () {
    return Utils.formatSize(this.music.file.byteLength)
  }

  deleteMusic () {
    database.deleteMusic(this.music)
  }

  playMusic () {
    player.playMusic(this.music)
    this.$router.push('/player')
  }
}
</script>
