<template>
  <Loading v-if="isLoading" />
  <div v-if="!isLoading">
    <div class="row">
      <div class="flex md4 xs12 mb-4">
        <va-image
          :src="ressource.image || require('@/assets/default-image.png')"
        ></va-image>
      </div>
      <div class="flex md8 xs12 pl-4">
        <h1 class="display-1">{{ ressource.title }}</h1>
        <p class="my-2">
          <va-rating v-model="ressource.rating"></va-rating>
        </p>

        <va-button class="my-2" :href="ressource.url" target="blank" icon="link"
          >Voir la ressource</va-button
        >

        <p>{{ ressource.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

import RessourceService from "@/services/ressourceService";

import Loading from "@/components/Loading";

export default {
  components: { Loading },

  setup() {
    const ressourceId = useRoute().params.id;
    const ressource = ref();
    const isLoading = ref(false);

    const ressourceService = new RessourceService();

    const getDatas = async () => {
      isLoading.value = true;
      ressource.value = await ressourceService.getRessourceById(ressourceId);
      isLoading.value = false;
    };

    getDatas();

    return { ressource, ressourceId, isLoading };
  },
};
</script>

<style scoped></style>
