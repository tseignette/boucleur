<template>
<div class="text-center py-1">
  <p class="text-small text-gray mb-0">
    <template v-if="quota && usage">
      {{ usage }} / {{ quota }}
      <template v-if="persisted !== null">
        (<template v-if="!persisted">not </template>persistent)
      </template>
      •
    </template>

    <a class="text-gray" href="https://github.com/tseignette/boucleur" target="_blank">GitHub</a>
  </p>

</div>
</template>

<script lang="ts">
import { database } from '@/classes/database.class'
import { Utils } from '@/classes/utils.class'
import { Vue } from 'vue-class-component'

export default class Details extends Vue {
  persisted = database.persisted

  get quota () {
    if (database.quota.value !== null) {
      return Utils.formatSize(database.quota.value)
    }

    return null
  }

  get usage () {
    if (database.usage.value !== null) {
      return Utils.formatSize(database.usage.value)
    }

    return null
  }
}
</script>
