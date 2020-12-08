<template>
<Layout>
  <router-view/>
</Layout>
</template>

<style lang="scss">
@import "@/styles/spectre.css.scss";
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Layout from './components/Layout.vue'

@Options({
  components: {
    Layout
  }
})
export default class App extends Vue { }
</script>
