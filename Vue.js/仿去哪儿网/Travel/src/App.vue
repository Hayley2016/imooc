<template>
  <div id="app1">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style></style>
