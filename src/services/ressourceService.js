import axios from "axios";

class RessourceService {
  async getRessources() {
    let res = null;
    try {
      res = await axios.get(`${process.env.VUE_APP_API_SERVER}/ressources`);
    } catch (error) {
      alert("Une erreur s'est produite !");
      console.log(error);
    }

    return res;
  }
}

export default RessourceService;