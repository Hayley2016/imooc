<template lang="pug">
  <!-- <div>
    <nuxt/>
    <my-footer/>
  </div> -->
  #app
    #main
      nuxt
    v-nav
</template>

<script>
import vNav from '../components/nav.vue'

export default {
  components: {
    vNav
  }
}
</script>
