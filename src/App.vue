<template>
  <NavBar class="mb-4" />
  <div class="container">
    <router-view />
  </div>

  <VideoModal />
</template>

<script>
import NavBar from "@/components/NavBar";
import VideoModal from "@/components/VideoModal";

export default {
  components: { NavBar, VideoModal },

  setup() {},
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
