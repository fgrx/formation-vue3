import { computed, ref } from "vue";

export default function() {
  const ressource = ref();

  const mediaInFrench = computed(() => {
    switch (ressource.value.media) {
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
    new Date(ressource.value.date).toLocaleDateString()
  );

  return { ressource, mediaInFrench, dateInFrench };
}
