<template>
  <va-modal v-model="isOpen" hide-default-actions>
    <template #header>
      <h3 class="display-3">{{ ressource.title }}</h3>
    </template>
    <iframe
      width="560"
      height="315"
      :src="embedVideo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <template #footer>
      <va-button @click="isOpen = false" icon="close">Fermer</va-button>
    </template>
  </va-modal>
</template>

<script>
import { computed, ref } from "@vue/reactivity";

import eventBus from "@/plugins/eventBus";

export default {
  setup() {
    const isOpen = ref(false);
    const ressource = ref();

    const embedVideo = computed(() =>
      ressource.value.url.replace(".com/watch?v=", ".com/embed/")
    );

    eventBus.on("open-video-modal", (payload) => {
      ressource.value = payload;
      isOpen.value = true;
    });

    return { ressource, isOpen, embedVideo };
  },
};
</script>

<style scoped></style>
