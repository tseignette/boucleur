<template>
<nav class="bg-gray">
  <ul class="tab tab-block">
    <li class="tab-item" title="Music list">
      <router-link active-class="active" to="/">
        <i class="icon icon-menu"></i>
      </router-link>
    </li>

    <li class="tab-item" title="Player">
      <router-link active-class="active" to="/player">
        <i class="icon icon-arrow-right"></i>
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Nav extends Vue { }
</script>
