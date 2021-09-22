<template>
  <div class="row my-4">
    <div class="flex xs12 offset--md2 md8">
      <h3 class="display-3 mb-3">
        Description de
        <slot name="title"></slot>"
      </h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
