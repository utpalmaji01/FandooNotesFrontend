<template>
  <v-app>
    <app-header></app-header>
    <v-layout row wrap>
      <v-flex xs2>
        <side-navbar></side-navbar>
      </v-flex>
      <v-flex xs10>
        <p>maji</p>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import AppHeader from "./Header.vue";
import SideNavBar from "./SideNavBar.vue";
export default {
  name: "MainDashBoard",
  components: {
    "app-header": AppHeader,
    "side-navbar": SideNavBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>