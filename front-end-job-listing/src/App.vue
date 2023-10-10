<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';


</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <NavBar v-if="!$route.meta.hideNavbar" />
    </header>

    <RouterView />

  </div>
</template>
