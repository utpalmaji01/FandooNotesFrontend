<template>
  <v-app>
    <v-main>
      <v-app>
        <sign-up></sign-up>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import SignUp from "./components/core/SignUp";

export default {
  name: "App",

  components: {
    "sign-up": SignUp,
  },

  data: () => ({
    //
  }),
};
</script>
