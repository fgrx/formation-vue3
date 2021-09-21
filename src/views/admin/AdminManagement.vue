<template>
  <div>
    <h2 class="display-2">Gestion</h2>

    <va-card>
      <va-card-content>
        <ul>
          <li v-for="ressource in ressources" :key="ressource.id">
            <va-button
              @click="deleteRessourceAction(ressource)"
              class="mr-2"
              color="warning"
              icon="thumb_down"
              size="small"
            ></va-button>
            <a :href="ressource.url" target="blank">{{ ressource.title }}</a>
          </li>
        </ul>
      </va-card-content>
    </va-card>
  </div>
</template>

<script>
import RessourceService from "@/services/ressourceService";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const ressources = computed(() => store.getters["getValidRessources"]);
    const ressourceService = new RessourceService();

    const deleteRessourceAction = (ressource) => {
      ressourceService.deleteRessource(ressource);
      store.dispatch("deleteRessourceAction", ressource);
    };

    return {
      ressources,
      deleteRessourceAction,
    };
  },
};
</script>

<style scoped></style>
