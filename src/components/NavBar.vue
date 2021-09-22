<template>
  <va-navbar text-color="navTextColor" color="dark" class="mb-2">
    <template #left>
      <va-navbar-item class="title-site">
        <router-link class="link" :to="{ name: 'Home' }">
          <va-icon name="devices"></va-icon>
          DevWall</router-link
        ></va-navbar-item
      >
    </template>

    <template #right>
      <va-navbar-item>
        <va-button :rounded="false" class="link" flat :to="{ name: 'About' }"
          >A propos</va-button
        ></va-navbar-item
      >

      <va-navbar-item
        ><va-button
          :rounded="false"
          class="link"
          flat
          :to="{ name: 'AdminValidation' }"
          >Administration</va-button
        ></va-navbar-item
      >

      <va-navbar-item v-if="isAuth">
        <va-button :rounded="false" class="link" flat @click="deconnexionAction"
          >Déconnexion</va-button
        >
      </va-navbar-item>

      <va-navbar-item
        ><va-button
          @click="openFormAddRessourceAction"
          icon="add_circle_outline"
          :rounded="false"
          >Ajouter</va-button
        >
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
import eventBus from "@/plugins/eventBus";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const openFormAddRessourceAction = () =>
      eventBus.emit("open-ressource-form");

    const store = useStore();

    const isAuth = computed(() => store.state.auth.user.accessToken);

    const router = useRouter();
    const deconnexionAction = () => {
      store.dispatch("updateUserAction", {});
      router.push({ name: "Home" });
    };

    return { openFormAddRessourceAction, isAuth, deconnexionAction };
  },
};
</script>

<style scoped></style>
