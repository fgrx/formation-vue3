import axios from "axios";

class RessourceService {
  async getRessources() {
    let res = null;
    try {
      res = await axios.get(
        `${process.env.VUE_APP_API_SERVER}/ressources?_sort=date&_order=desc`
      );
    } catch (error) {
      alert("Une erreur s'est produite !");
      console.log(error);
    }

    return res.data;
  }

  async getRessourceById(id) {
    let res = null;
    try {
      res = await axios.get(
        `${process.env.VUE_APP_API_SERVER}/ressources/${id}`
      );
    } catch (error) {
      alert("Une erreur s'est produite !");
      console.log(error);
    }

    return res.data;
  }

  async addRessource(ressource) {
    let res = null;
    try {
      res = await axios.post(
        `${process.env.VUE_APP_API_SERVER}/ressources`,
        ressource
      );
    } catch (error) {
      alert("Une erreur s'est produite !");
      console.log(error);
    }

    return res.data;
  }

  async deleteRessource(ressource) {
    let res = null;
    try {
      res = await axios.delete(
        `${process.env.VUE_APP_API_SERVER}/ressources/${ressource.id}`
      );
    } catch (error) {
      alert("Une erreur s'est produite !");
      console.log(error);
    }

    return res;
  }

  async updateRessource(ressource) {
    let res = null;
    try {
      res = await axios.put(
        `${process.env.VUE_APP_API_SERVER}/ressources/${ressource.id}`,
        ressource
      );
    } catch (error) {
      alert("Une erreur s'est produite !");
      console.log(error);
    }

    return res.data;
  }
}

export default RessourceService;
