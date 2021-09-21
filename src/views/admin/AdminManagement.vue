<template>
  <div>
    <h2 class="display-2">Gestion</h2>

    <va-card>
      <va-card-content>
        <ul>
          <li v-for="ressource in validRessources" :key="ressource.id">
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
import useAdminRessources from "@/composables/useAdminRessources";

export default {
  setup() {
    const { validRessources, deleteRessourceAction } = useAdminRessources();

    return {
      validRessources,
      deleteRessourceAction,
    };
  },
};
</script>

<style scoped></style>
