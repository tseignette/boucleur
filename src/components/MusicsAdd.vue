<template>
<div class="text-center">
  <input @change="addMusic()" class="d-none" ref="fileInput" type="file">

  <button :class="{ loading: adding || musics === null }" @click="$refs.fileInput.click()" class="btn btn-lg btn-primary btn-action s-circle" title="Add a music" type="button">
    <i class="icon icon-plus"></i>
  </button>
</div>
</template>

<script lang="ts">
import { database } from '@/classes/database.class'
import { Music } from '@/classes/music.class'
import { Utils } from '@/classes/utils.class'
import { Vue } from 'vue-class-component'

export default class MusicsAdd extends Vue {
  adding = database.adding
  musics = database.musics
  $refs!: {
    fileInput: HTMLInputElement;
  }

  async addMusic (): Promise<void> {
    if (!this.$refs.fileInput.files?.length) {
      return
    }

    const file = this.$refs.fileInput.files[0]
    const music = new Music(file.name, await Utils.arrayBuffer(file), file.type)

    this.$refs.fileInput.value = ''
    await database.addMusic(music)
  }
}
</script>
