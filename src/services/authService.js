import axios from "axios";

export default class AuthService {
  async signIn(email, password) {
    let result = null;
    const credentials = {
      email,
      password,
    };

    try {
      const req = await axios.post(
        `${process.env.VUE_APP_API_SERVER}/signin`,
        credentials
      );
      result = req.data;
    } catch (error) {
      console.log(error);
    }

    return result;
  }
}
