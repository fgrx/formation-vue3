<template>
  <div>
    <h2 class="display-2">Validation</h2>

    <va-card>
      <va-card-content>
        <ul>
          <li v-for="ressource in notValidRessources" :key="ressource.id">
            <va-button
              @click="validateRessourceAction(ressource)"
              class="mr-2"
              color="success"
              icon="thumb_up"
              size="small"
            ></va-button>

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
    const {
      notValidRessources,
      deleteRessourceAction,
      validateRessourceAction,
    } = useAdminRessources();

    return {
      notValidRessources,
      validateRessourceAction,
      deleteRessourceAction,
    };
  },
};
</script>

<style scoped></style>
