<script setup>
  import { RouterView } from 'vue-router'
  import HeaderApp from '@/components/commun/HeaderApp/HeaderApp.vue'
</script>

<template>
  <div class="interface">

    <HeaderApp />
    <RouterView class="contenu"/>

  </div>
</template>

<style scoped>

</style>
