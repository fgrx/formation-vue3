<template>
  <div>
    <h1 class="display-1">Bienvenue sur DevWall</h1>

    <transition name="fade">
      <va-card v-if="bookmarks.length">
        <va-card-title><h2 class="display-2">Mes bookmarks</h2></va-card-title>
        <va-card-content>
          <transition-group name="bookmarks" tag="div" class="row">
            <div
              v-for="ressource in bookmarks"
              :key="ressource.id"
              class="flex lg3 md4 sm12 pa-3"
            >
              <RessourceItem
                @remove-from-bookmarks="removeFromBookmarksAction($event)"
                isBookmark
                :ressourceDatas="ressource"
              />
            </div>
          </transition-group>
        </va-card-content>
      </va-card>
    </transition>

    <div class="row">
      <div
        v-for="ressource in ressources"
        :key="ressource.id"
        class="flex lg3 md4 sm12 pa-3"
      >
        <RessourceItem
          @add-to-bookmarks="addToBookmarksAction($event)"
          :ressourceDatas="ressource"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";

import RessourceItem from "@/components/RessourceItem";
import { useStore } from "vuex";

export default {
  components: { RessourceItem },
  setup() {
    const store = useStore();

    const ressources = computed(() => store.getters["getValidRessources"]);

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
    };
  },
};
</script>

<style scoped>
.bookmarks-enter-from {
  opacity: 0;
  transform: scale(0px);
}

.bookmarks-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.bookmarks-enter-active,
.bookmarks-leave-active {
  transition: all 0.5s ease-out;
}
</style>
