<template>
  <va-card>
    <router-link :to="{ name: 'Ressource', params: { id: ressource.id } }">
      <va-image
        style="height: 220px"
        :src="ressource.image || require('@/assets/default-image.png')"
      />
    </router-link>

    <va-card-title
      ><span v-if="ressource.isTop"><va-icon name="star" /> </span>
      {{ mediaInFrench }}</va-card-title
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

<script>
import { computed } from "@vue/reactivity";
import eventBus from "../plugins/eventBus";
export default {
  props: {
    ressource: {
      type: Object,
      default: null,
    },
    isBookmark: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const mediaInFrench = computed(() => {
      switch (props.ressource.media) {
        case "video":
          return "Vidéo";
        case "book":
          return "Livre";
        case "post":
          return "Article";
        default:
          return "Ressource";
      }
    });

    const dateInFrench = computed(() =>
      new Date(props.ressource.date).toLocaleDateString()
    );

    const bookmarkAction = (ressource) => {
      context.emit("add-to-bookmarks", ressource);
    };

    const removeBookmarkAction = (ressource) => {
      context.emit("remove-from-bookmarks", ressource);
    };

    const openVideoAction = (ressource) => {
      eventBus.emit("open-video-modal", ressource);
    };

    return {
      dateInFrench,
      mediaInFrench,
      bookmarkAction,
      removeBookmarkAction,
      openVideoAction,
    };
  },
};
</script>

<style lang="scss" scoped></style>
