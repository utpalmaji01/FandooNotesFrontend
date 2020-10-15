<template>
  <div class="d-flex justify-center align-center ma-6 mt-16 pa-5 pt-8">
    <div class="sign-up-page">
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12 class="main-container">
          <v-layout row wrap>
            <v-flex xs12 sm12 md7 lg7 xl7>
              <div class="ma-5 mx-7 px-3 main-module">
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12>
                    <div class="my-2 mx-1">
                      <div class="mb-1">
                        <b class="blue--text">F</b><b class="red--text">u</b
                        ><b class="orange--text">n</b><b class="blue--text">d</b
                        ><b class="green--text">o</b><b class="red--text">o</b>
                      </div>
                      <div class="mb-3">
                        <b>Create your Google Account</b>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="input">
                    <v-text-field
                      outlined
                      dense
                      label="First Name"
                      autocomplete="off"
                      v-model="firstName"
                      :rules="rulesForFirstName"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="input">
                    <v-text-field
                      outlined
                      dense
                      label="Last Name"
                      autocomplete="off"
                      v-model="lastName"
                      :rules="rulesForLastName"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg12 class="input">
                    <v-text-field
                      outlined
                      dense
                      hint="You can use letters, numbers & periods"
                      label="UserName"
                      autocomplete="off"
                      suffix="@gmail.com"
                      v-model="email"
                      :rules="rulesForEmail"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="input">
                    <v-text-field
                      outlined
                      dense
                      v-model="password"
                      :rules="rulesForPass"
                      :type="passwordShow ? 'text' : 'password'"
                      label="Password"
                      autocomplete="off"
                      @click:append="passwordShow = !passwordShow"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="input">
                    <v-text-field
                      outlined
                      dense
                      v-model="confirmPassword"
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="rulesForConfirmPass"
                      :type="passwordShow ? 'text' : 'password'"
                      label="Confirm Password"
                      autocomplete="off"
                      @click:append="passwordShow = !passwordShow"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg12 class="pl-1">
                    <span style="font-size: 13px">
                      Use 8 or more characters with a mix of uppercase,
                      lowercase, number and special character
                    </span>
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg12 class="mt-10 pt-3">
                    <v-btn text color="primary" class="px-0 sign-in-instead">
                      <router-link to="/log-in" style="text-decoration: none"
                        >Sign In Instead</router-link
                      >
                    </v-btn>
                    <v-btn
                      color="primary"
                      class="sign-up-next"
                      @click="addPerson"
                    >
                      Next
                    </v-btn>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>

            <v-flex md5 lg5 xl5 class="pa-15 my-10 sconndery-module">
              <v-flex>
                <img
                  src="../../assets/account.png"
                  alt=""
                  class="account-image"
                />
                <span>One account. All of Google working for you.</span>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12 md12 lg12 xl12 class="mt-3 footer"> </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstNameFlag: false,
      lastNameFlag: false,
      userNameFlag: false,
      passwordFlag: false,
      passwordShow: false,
      rulesForFirstName: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 3 || "Min 3 characters",
        (value) => {
          const pattern = /^[A-Za-z]{3,}$/;
          return pattern.test(value)
            ? (this.firstNameFlag = true)
            : "Invalid name.";
        },
      ],
      rulesForLastName: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 3 || "Min 3 characters",
        (value) => {
          const pattern = /^[A-Za-z]{3,}$/;
          return pattern.test(value)
            ? (this.lastNameFlag = true)
            : "Invalid name.";
        },
      ],
      rulesForEmail: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^[0-9a-z]+[+_.-]?[0-9a-z]{1,}$/;
          return pattern.test(value)
            ? (this.userNameFlag = true)
            : "Invalid e-main";
        },
      ],
      rulesForPass: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$/;
          return pattern.test(value) || "Invalid Password";
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
    addPerson: function () {
      if (
        this.firstNameFlag &&
        this.lastNameFlag &&
        this.userNameFlag &&
        this.passwordFlag
      ) {
        axios
          .post(
            "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email + "@gmail.com",
              password: this.password,
              service: "advance",
            }
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style src="../../css/SignUp.css" scoped>
</style>