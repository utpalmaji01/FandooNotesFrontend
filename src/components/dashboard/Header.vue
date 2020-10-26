<template>
  <v-card color="grey lighten-4" flat tile >
    <v-toolbar dense height="60">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title><v-icon title="refresh">mdi-google-keep</v-icon>FundooNotes</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-text-field
        outlined
        dense
        prepend-inner-icon="mdi-magnify"
        label="Search"
        autocomplete="off"
        class="mt-7 mx-5 pa-1"
      >
      </v-text-field>
      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon title="refresh">mdi-reload</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon title="list view">mdi-view-stream</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon title="settins">mdi-wrench</v-icon>
      </v-btn>

      <v-btn icon disabled>
        <v-icon></v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon title="all apps">mdi-apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon title="account">mdi-account-circle</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
