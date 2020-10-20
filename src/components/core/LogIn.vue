<template>
  <div class="log-in-page">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 class="main-container ma-10">
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 class="main-module ma-3">
            <v-flex xs12 sm12 md12>
              <div class="my-2 mx-1 text">
                <div class="mb-3 mt-7">
                  <b class="blue--text">F</b><b class="red--text">u</b
                  ><b class="orange--text">n</b><b class="blue--text">d</b
                  ><b class="green--text">o</b><b class="red--text">o</b>
                </div>
                <div class="mb-3">
                  <b>Sign In</b>
                </div>
                <div class="mb-3">
                  <b>to continue to Fundoo Notes</b>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="input">
              <v-text-field
                outlined
                dense
                hint="You can use letters, numbers & periods"
                label="Email"
                autocomplete="off"
                v-model="email"
                :rules="rulesForEmail"
                class="mx-5 mt-5"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="input">
              <v-text-field
                outlined
                dense
                v-model="password"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rulesForPassword"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                autocomplete="off"
                @click:append="passwordShow = !passwordShow"
                class="mx-5"
              ></v-text-field>
              <span class="blue--text mx-5"
                ><router-link
                  to="/reset"
                  style="text-decoration: none; text-transform: none"
                  >Forget Password</router-link
                ></span
              >
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="my-8 mx-5 pt-3">
              <v-btn text color="primary" class="px-0 sign-in-instead">
                <router-link
                  to="/"
                  style="text-decoration: none; text-transform: none"
                  >Create New Account</router-link
                >
              </v-btn>
              <v-btn color="primary" class="sign-in-next" @click="singIn">
                SignIn
              </v-btn>
            </v-flex>
            <v-snackbar text v-model="snackbarShow" :timeout="timeout">
              <span>{{ text }}</span>
            </v-snackbar>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import apiService from "../../servece/APIService.js";
import { apiResultBus } from "../../main";

export default {
  name: "LogIn",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      timeout: 1500,
      text: "LogIn SuccessFull",
      passwordShow: false,
      emailFlag: false,
      passwordFlag: false,
      snackbarShow: false,
      rulesForEmail: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value)
            ? (this.emailFlag = true)
            : "Invalid e-main";
        },
      ],
      rulesForPassword: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$/;
          return pattern.test(value)
            ? (this.passwordFlag = true)
            : "Password must have upper and lower case, number & special character";
        },
      ],
    };
  },
  methods: {
    singIn: function () {
      if (this.emailFlag && this.passwordFlag) {
        let logInObject = {
          "username": this.email,
          "password": this.password
        }
        apiService.userLogIn(logInObject);
        apiResultBus.$on("apiResultBus", (data) => {
          this.snackbarShow = data;
        });
      }
    },
  },
};
</script>

<style src="../../css/LogIn.css" scoped>
</style>