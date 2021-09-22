<template>
  <div>
    <va-alert v-if="message" color="danger" class="my-3">{{
      message
    }}</va-alert>
    <p><va-input label="Adresse email" v-model="email"></va-input></p>
    <p>
      <va-input
        label="Mot de passe"
        type="password"
        v-model="password"
      ></va-input>
    </p>
    <p><va-button @click="connectAction">Connexion</va-button></p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import AuthService from "@/services/authService";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const email = ref("admin@gmail.com");
    const password = ref("12345");
    const message = ref(null);

    const authService = new AuthService();

    const connectAction = async () => {
      const res = await authService.signIn(email.value, password.value);
      if (!res) {
        message.value = "Mauvais couple email/mot de passe";
      } else {
        store.dispatch("updateUserAction", res);
        router.push({ name: "AdminValidation" });
      }
    };

    return { email, password, message, connectAction };
  },
};
</script>

<style lang="scss" scoped></style>
