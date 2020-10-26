<template>
  <v-app>
    <app-header></app-header>
  </v-app>
</template>

<script>
import AppHeader from "./Header.vue";
export default {
  name: "MainDashBoard",
  components: {
    "app-header": AppHeader,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>