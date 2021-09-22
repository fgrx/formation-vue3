import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

import RessourceService from "@/services/ressourceService";

export default function useRessource() {
  const store = useStore();
  const ressourceService = new RessourceService();

  const { accessToken } = store.state.auth.user;

  const validRessources = computed(() => store.getters["getValidRessources"]);
  const notValidRessources = computed(
    () => store.getters["getNotValidRessources"]
  );

  const deleteRessourceAction = async (ressource) => {
    const result = window.confirm(
      "Voulez-vous vraiment supprimer ce document ?"
    );

    if (result) {
      const deleteRessource = async () =>
        await ressourceService.deleteRessource(ressource, accessToken);

      const resDelete = await deleteRessource();

      if (resDelete) store.dispatch("deleteRessourceAction", ressource);
    }
  };

  const validateRessourceAction = async (ressource) => {
    const updatedRessource = { ...ressource };
    updatedRessource.isValid = true;

    const updateRessource = async () =>
      await ressourceService.updateRessource(updatedRessource, accessToken);

    const resUpdate = await updateRessource();

    if (resUpdate) store.dispatch("updateRessourceAction", updatedRessource);
  };

  return {
    validRessources,
    notValidRessources,
    deleteRessourceAction,
    validateRessourceAction,
  };
}
