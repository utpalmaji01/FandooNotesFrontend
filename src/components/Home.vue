<template>
  <v-app>
    <sign-up></sign-up>
  </v-app>
</template>

<script>
import SignUp from "./sign-up/SignUp";
export default {
  name: "Home",
  components: {
    "sign-up": SignUp,
  },

  data: () => ({}),
};
</script>
<style scoped>
</style>
