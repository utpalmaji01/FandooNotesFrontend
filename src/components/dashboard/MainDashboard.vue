<template>
  <v-app>
    <app-header></app-header>
    <v-layout row wrap>
      <v-flex xs2>
        <div class="ma-3">
          <v-navigation-drawer permanent expand-on-hover>
            <v-list>

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-lightbulb-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Notes</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-bell-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Reminders</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-label-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Labels</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-package-down</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Archive</v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-delete-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Trash</v-list-item-title>
              </v-list-item>

            </v-list>
          </v-navigation-drawer>
        </div>
      </v-flex>
      <v-flex xs10>
        <p>maji</p>
      </v-flex>
    </v-layout>
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