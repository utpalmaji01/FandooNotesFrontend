<template>
  <div class="reset-password-page">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12 xl12 class="main-container ma-10">
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 class="main-module ma-3">
            <v-flex xs12 sm12 md12>
              <div class="my-2 mx-1 text">
                <div class="mb-3 mt-7">
                  <b class="blue--text">F</b><b class="red--text">u</b>
                  <b class="orange--text">n</b><b class="blue--text">d</b>
                  <b class="green--text">o</b><b class="red--text">o</b>
                </div>
                <div class="mb-3">
                  <b>Reset Your Password</b>
                </div>
                <div class="mb-3">
                  <b class="mx-5" style="text-align: center">
                    Create a new password for your account
                  </b>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="input">
              <v-text-field
                outlined
                dense
                v-model="password"
                :rules="rulesForPassword"
                :type="passwordShow ? 'text' : 'password'"
                label="New Password"
                autocomplete="off"
                @click:append="passwordShow = !passwordShow"
                class="mx-5 mt-4"
              >
                class="mx-5"
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="input">
              <v-text-field
                outlined
                dense
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rulesForConfirmPass"
                :type="passwordShow ? 'text' : 'password'"
                label="Confirm Password"
                autocomplete="off"
                @click:append="passwordShow = !passwordShow"
                class="mx-5"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 class="my-8 mx-5 pt-3">
              <v-btn
                color="primary"
                class="mb-5 submit-buttom"
                @click="resetPassword"
              >
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
//const axios = require("axios");

export default {
  name: "ResetPassword",
  components: {},
  data() {
    return {
      password: "",
      passwordFlag: false,
      passwordShow: false,
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
      rulesForConfirmPass: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$/;
          return pattern.test(value) && this.password == value
            ? (this.passwordFlag = true)
            : "Invalid Password";
        },
      ],
    };
  },
  methods: {
    resetPassword: function () {
        if (this.passwordFlag) {
            console.log(this.password);
            
        }
    },
  },
};
</script>

<style src="../../css/ResetPassword.css" scoped>
</style>