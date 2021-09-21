<template>
  <div>
    <h1 class="display-1">Administration</h1>
    <va-button-group class="mb-4">
      <va-button :to="{ name: 'AdminManagement' }"
        >Gestion des ressources</va-button
      >
      <va-button :to="{ name: 'AdminValidation' }"> Validation</va-button>
    </va-button-group>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
