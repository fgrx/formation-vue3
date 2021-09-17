<template>
  <va-navbar text-color="#73ef71" color="dark" class="mb-2">
    <template #left>
      <va-navbar-item class="title-site">DevWall</va-navbar-item>
    </template>

    <template #right>
      <va-navbar-item></va-navbar-item>
    </template>
  </va-navbar>

  <div class="container">
    <h1 class="display-1">Bienvenue sur DevWall</h1>

    <div class="row">
      <div
        v-for="ressource in ressources"
        :key="ressource.id"
        class="flex lg3 md4 sm12 pa-3"
      >
        <RessourceItem :ressource="ressource" />
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/data/db";

import { ref } from "@vue/reactivity";

import RessourceItem from "@/components/RessourceItem.vue";

export default {
  components: { RessourceItem },

  setup() {
    const ressources = ref(db);

    return {
      ressources,
    };
  },
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  font-size: 16px;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  max-width: 1185px;
}

.title-site {
  font-size: 1.4em;
  text-transform: uppercase;
}
</style>