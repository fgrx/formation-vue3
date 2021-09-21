import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

import RessourceService from "@/services/ressourceService";

export default function useRessource() {
  const store = useStore();
  const ressourceService = new RessourceService();

  const validRessources = computed(() => store.getters["getValidRessources"]);
  const notValidRessources = computed(
    () => store.getters["getNotValidRessources"]
  );

  const deleteRessourceAction = (ressource) => {
    const result = window.confirm(
      "Voulez-vous vraiment supprimer ce document ?"
    );

    if (result) {
      ressourceService.deleteRessource(ressource);
      store.dispatch("deleteRessourceAction", ressource);
    }
  };

  const validateRessourceAction = (ressource) => {
    const updatedRessource = ressource;
    updatedRessource.isValid = true;

    ressourceService.updateRessource(updatedRessource);

    store.dispatch("updateRessourceAction", updatedRessource);
  };

  return {
    validRessources,
    notValidRessources,
    deleteRessourceAction,
    validateRessourceAction,
  };
}
