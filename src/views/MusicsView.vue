<template>
<MusicsAdd class="music-add music-add-top mb-2" v-MenuPlacement="'top'"/>
<MusicsList class="music-list"/>
<MusicsAdd class="music-add music-add-bottom mt-2" v-MenuPlacement="'bottom'"/>
</template>

<style lang="scss" scoped>
.music-add {
  position: sticky;
  z-index: 1;

  &-top {
    top: 0;
  }

  &-bottom {
    bottom: 0;
  }
}

.music-list {
  margin-bottom: auto;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MusicsAdd from '@/components/MusicsAdd.vue'
import MenuPlacement from '@/directives/MenuPlacement'
import MusicsList from '@/components/MusicsList.vue'

@Options({
  components: {
    MusicsAdd,
    MusicsList
  },
  directives: {
    MenuPlacement
  }
})
export default class MusicsView extends Vue { }
</script>
