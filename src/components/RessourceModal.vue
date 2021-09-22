<template>
  <va-modal v-model="isOpen" hide-default-actions>
    <template #header>
      <h3 class="display-3">Ajouter un document</h3>
    </template>

    <va-alert v-if="message.text" :color="message.type">{{
      message.text
    }}</va-alert>

    <va-input
      class="mt-3"
      label="Titre"
      v-model="ressourceForm.title"
    ></va-input>
    <va-input class="mt-3" label="URL" v-model="ressourceForm.url"></va-input>
    <va-input
      class="mt-3"
      label="Image URL"
      v-model="ressourceForm.image"
    ></va-input>
    <va-input
      class="mt-3"
      label="Description"
      type="textarea"
      v-model="ressourceForm.description"
    ></va-input>
    <p class="mt-3">
      Note : <va-rating v-model="ressourceForm.rating"></va-rating>
    </p>
    <va-select
      class="mt-3"
      label="Langue"
      v-model="ressourceForm.lang"
      :options="langOptions"
    ></va-select>
    <va-select
      class="mt-3"
      label="Type de média"
      v-model="ressourceForm.media"
      :options="mediaOptions"
    ></va-select>

    <template #footer>
      <va-button
        @click="addRessourceAction"
        class="mr-3"
        icon="add_circle_outline"
        :disabled="isDisabled"
        >Ajouter</va-button
      >
      <va-button color="secondary" @click="closeAndReinitAction" icon="close"
        >Fermer</va-button
      >
    </template>
  </va-modal>
</template>

<script setup>
import eventBus from "@/plugins/eventBus";
import { computed, ref } from "@vue/reactivity";
import RessourceService from "@/services/ressourceService";
import { useStore } from "vuex";

const isOpen = ref(false);
const message = ref({});
const store = useStore();

const isDisabled = computed(() =>
  ressourceForm.value.title && ressourceForm.value.url ? false : true
);

const langOptions = [
  { text: "Français", value: "fr" },
  { text: "Anglais", value: "en" },
];
const mediaOptions = [
  { text: "Article", value: "post" },
  { text: "Livre", value: "book" },
  { text: "Vidéo", value: "video" },
];

eventBus.on("open-ressource-form", () => (isOpen.value = true));

const ressourceForm = ref({
  title: "",
  description: "",
  url: "",
  image: "",
  rating: 0,
  lang: "fr",
  media: "post",
});

const addRessourceAction = async () => {
  const {
    title,
    description,
    url,
    image,
    rating,
    lang,
    media,
  } = ressourceForm.value;

  const currentDate = new Date();

  const ressource = {
    title,
    description,
    url,
    image,
    rating,
    lang,
    media,
    isValid: false,
    date: currentDate.toISOString(),
  };

  const ressourceService = new RessourceService();
  const ressourceAdded = await ressourceService.addRessource(ressource);

  if (ressourceAdded) {
    message.value = {
      type: "success",
      text: "Document ajouté avec succès.",
    };

    store.dispatch("addRessourceAction", ressourceAdded);
    closeAndReinitAction();
  } else {
    message.value = {
      type: "warning",
      text: "Echec de l'ajout du document",
    };
  }
};

const closeAndReinitAction = () => {
  ressourceForm.value = {
    title: "",
    description: "",
    url: "",
    image: "",
    rating: 0,
    lang: "fr",
    media: "post",
  };

  isOpen.value = false;

  message.value = {};
};
</script>

<style scoped></style>
