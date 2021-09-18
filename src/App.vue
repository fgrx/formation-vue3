<template>
  <NavBar />
  <div class="container">
    <h1 class="display-1">Bienvenue sur DevWall</h1>

    <Loading v-if="isLoading" />

    <va-card v-if="bookmarks.length">
      <va-card-title><h2 class="display-2">Mes bookmarks</h2></va-card-title>
      <va-card-content>
        <div class="row">
          <div
            v-for="ressource in bookmarks"
            :key="ressource.id"
            class="flex lg3 md4 sm12 pa-3"
          >
            <RessourceItem
              @remove-from-bookmarks="removeFromBookmarksAction($event)"
              isBookmark
              :ressource="ressource"
            />
          </div>
        </div>
      </va-card-content>
    </va-card>

    <div class="row">
      <div
        v-for="ressource in ressources"
        :key="ressource.id"
        class="flex lg3 md4 sm12 pa-3"
      >
        <RessourceItem
          @add-to-bookmarks="addToBookmarksAction($event)"
          :ressource="ressource"
        />
      </div>
    </div>
  </div>

  <VideoModal />
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import RessourceService from "@/services/ressourceService";

import NavBar from "@/components/NavBar";
import RessourceItem from "@/components/RessourceItem";
import VideoModal from "@/components/VideoModal";
import Loading from "@/components/Loading";

export default {
  components: { NavBar, RessourceItem, VideoModal, Loading },

  setup() {
    const isLoading = ref(false);
    const ressourceService = new RessourceService();

    onMounted(async () => {
      isLoading.value = true;
      const results = await ressourceService.getRessources();
      ressources.value = results.data;
      isLoading.value = false;
    });

    const ressources = ref([]);

    const bookmarks = ref([]);

    const addToBookmarksAction = (ressource) => {
      if (!bookmarks.value.includes(ressource)) bookmarks.value.push(ressource);
    };

    const removeFromBookmarksAction = (ressource) => {
      bookmarks.value = bookmarks.value.filter(
        (bookmark) => bookmark.id !== ressource.id
      );
    };

    return {
      ressources,
      bookmarks,
      addToBookmarksAction,
      removeFromBookmarksAction,
      isLoading,
    };
  },
};
</script>

<style>
#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  font-size: 16px;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  max-width: 1185px;
}

.title-site {
  font-size: 1.4em;
  text-transform: uppercase;
}
</style>
