<template>
  <va-card>
    <va-image
      style="height: 220px"
      :src="ressource.image || require('@/assets/default-image.png')"
    />

    <va-card-title
      ><span v-if="ressource.isTop"><va-icon name="star" /> </span>
      {{ mediaInFrench }}</va-card-title
    >
    <va-card-content>
      {{ mediaInFrench }} ajouté(e) le {{ dateInFrench }}</va-card-content
    >
  </va-card>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: {
    ressource: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
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

    return { dateInFrench, mediaInFrench };
  },
};
</script>

<style lang="scss" scoped>
</style>