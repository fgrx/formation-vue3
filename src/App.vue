<template>
  <NavBar class="mb-4" />

  <Loading v-if="isLoading" />
  <div class="container">
    <router-view />
  </div>

  <VideoModal />
  <RessourceModal />
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

import RessourceService from "@/services/ressourceService";

import NavBar from "@/components/NavBar";
import VideoModal from "@/components/VideoModal";
import RessourceModal from "@/components/RessourceModal";

import Loading from "@/components/Loading";

export default {
  components: { NavBar, Loading, VideoModal, RessourceModal },

  setup() {
    const store = useStore();

    const isLoading = ref(false);
    const ressourceService = new RessourceService();

    const loadDatas = async () => {
      isLoading.value = true;
      const ressources = await ressourceService.getRessources();
      store.dispatch("updateRessourcesAction", ressources);
      isLoading.value = false;
    };
    loadDatas();

    return {
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

.display-1,
.display-2 {
  margin-bottom: 0.5em;
}

p {
  margin-bottom: 1em !important;
}
</style>
