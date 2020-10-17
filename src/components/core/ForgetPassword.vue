<template>
  <div class="forget-password-page">
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
                  <b>Forgot Your Password</b>
                </div>
                <div class="mb-3">
                  <b class="mx-5" style="text-align: center"
                    >Enter your email address and we'll send you a link to reset
                    your password</b
                  >
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
              <span class="blue--text mx-5"
                ><router-link
                  to="/log-in"
                  style="text-decoration: none; text-transform: none"
                  >Remember Password</router-link
                ></span
              >
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="my-8 mx-5 pt-3">
              <v-btn
                color="primary"
                class="mb-5 submit-buttom"
                @click="sendResetLink"
              >
                <!-- <router-link to="/reset-password" style="text-decoration: none; text-transform: none"
                        >Submit</router-link> -->
                Submit
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "ForgetPassword",
  components: {},
  data() {
    return {
      email: "",
      emailFlag: false,
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
    };
  },
  methods: {
    sendResetLink: function () {
      if (this.emailFlag) {
        axios
          .post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset", {
            email: this.email,
          })
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              console.log("email sent successfully")
            } else {
              alert("email address not currect");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style src="../../css/ForgetPassword.css" scoped>
</style>