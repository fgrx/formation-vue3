<template>
  <va-card>
    <router-link :to="{ name: 'Ressource', params: { id: ressource.id } }">
      <va-image
        style="height: 220px"
        :src="ressource.image || require('@/assets/default-image.png')"
      />
    </router-link>

    <va-card-title>
      <span v-if="ressource.isTop"><va-icon name="star" /> </span>
      {{ ressource.title }}</va-card-title
    >
    <va-card-content>
      {{ mediaInFrench }} ajouté(e) le {{ dateInFrench }}</va-card-content
    >

    <div class="px-3 py-3">
      <va-button
        v-if="!isBookmark"
        color="#3ac93e"
        gradient
        @click="bookmarkAction(ressource)"
        icon="bookmark"
        round
      />
      <va-button
        v-else
        color="#3ac93e"
        gradient
        @click="removeBookmarkAction(ressource)"
        icon="bookmark_remove"
        round
      />
      <va-button
        v-if="ressource.media === 'video'"
        color="#3ac93e"
        gradient
        @click="openVideoAction(ressource)"
        icon="play_circle_filled"
        round
        class="ml-2"
      />
    </div>
  </va-card>
</template>

<script setup>
import useRessource from "@/composables/useRessource";
import eventBus from "@/plugins/eventBus";
import { toRefs, defineProps, defineEmits } from "vue";

const props = defineProps({ ressourceDatas: Object, isBookmark: Boolean });
const emit = defineEmits(["add-to-bookmarks", "remove-from-bookmarks"]);

const { ressource, dateInFrench, mediaInFrench } = useRessource();

const { ressourceDatas } = toRefs(props);

ressource.value = ressourceDatas.value;

const bookmarkAction = (ressource) => {
  emit("add-to-bookmarks", ressource);
};

const removeBookmarkAction = (ressource) => {
  emit("remove-from-bookmarks", ressource);
};

const openVideoAction = (ressource) => {
  eventBus.emit("open-video-modal", ressource);
};
</script>

<style lang="scss" scoped></style>
