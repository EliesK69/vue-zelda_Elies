<script setup>
import { RouterLink, RouterView } from 'vue-router'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'


</script>

<template>
  <div>
    <header>
      <TheNav/>
    </header>
    <TheHeader/>
  <RouterView />
  <TheFooter/>
  </div>
 
</template>

<style scoped>

</style>
