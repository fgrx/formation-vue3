<template>
  <va-navbar text-color="navTextColor" color="dark" class="mb-2">
    <template #left>
      <va-navbar-item class="title-site">
        <router-link class="link" :to="{ name: 'Home' }"
          >DevWall</router-link
        ></va-navbar-item
      >
    </template>

    <template #right>
      <va-navbar-item
        ><router-link class="link" :to="{ name: 'About' }"
          >A propos</router-link
        ></va-navbar-item
      >
      <va-navbar-item
        ><router-link class="link" :to="{ name: 'AdminValidation' }"
          >Administration</router-link
        ></va-navbar-item
      >
      <va-navbar-item
        ><va-button
          size="small"
          @click="openFormAddRessourceAction"
          icon="add_circle_outline"
          >Ajouter</va-button
        >
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
import eventBus from "@/plugins/eventBus";

export default {
  setup() {
    const openFormAddRessourceAction = () =>
      eventBus.emit("open-ressource-form");

    return { openFormAddRessourceAction };
  },
};
</script>

<style scoped></style>
