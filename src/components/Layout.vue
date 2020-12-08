<template>
<div :style="{ height }" class="container grid-xs">
  <Details v-DetailsPlacement="'top'"/>
  <Nav v-MenuPlacement="'top'"/>

  <div class="content p-2">
    <slot></slot>
  </div>

  <Details v-DetailsPlacement="'bottom'"/>
  <Nav v-MenuPlacement="'bottom'"/>
</div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
}
</style>

<script lang="ts">
import DetailsPlacement from '@/directives/DetailsPlacement'
import MenuPlacement from '@/directives/MenuPlacement'
import { Options, Vue } from 'vue-class-component'
import Details from './Details.vue'
import Nav from './Nav.vue'

@Options({
  components: {
    Details,
    Nav
  },
  directives: {
    DetailsPlacement,
    MenuPlacement
  }
})
export default class Layout extends Vue {
  breakpoint = 'lg'
  height = ''

  created () {
    this.updateHeight()
    window.addEventListener('resize', this.updateHeight)
  }

  beforeUnmount () {
    window.removeEventListener('resize', this.updateHeight)
  }

  private updateHeight () {
    this.height = `${window.innerHeight}px`
  }
}
</script>
