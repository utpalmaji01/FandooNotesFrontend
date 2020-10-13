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
                        <b class="blue--text heading">Google</b>
                      </div>
                      <div class="mb-3">
                        <b class="heading">Create your Google Account</b>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="input">
                    <v-text-field
                      outlined
                      dense
                      label="First Name"
                      autocomplete="off"
                      :rules="rulesForName"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6 class="input">
                    <v-text-field
                      outlined
                      dense
                      label="Last Name"
                      autocomplete="off"
                      :rules="rulesForName"
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
                      Sign In Instead
                    </v-btn>
                    <v-btn color="primary" class="sign-up-next"> Next </v-btn>
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

        <v-flex xs12 sm12 md12 lg12 xl12 class="mt-3 footer">
          <v-layout row wrap class="pl-3">
            <v-flex xs9 sm9 md9>
                <span>name: {{nameFlag}} email : {{userNameFlag}} pass: {{passwordFlag}} pass1{{password}}</span>
            </v-flex>
            <v-flex xs1 sm1 md1>
              <span></span>
            </v-flex>
            <v-flex xs1 sm1 md1>
              <span>{{confirmPassword}}</span>
            </v-flex>
            <v-flex xs1 sm1 md1>
              <span>Terms</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      nameFlag: false,
      userNameFlag: false,
      passwordFlag: false,
      name:"fdjfe",
      passwordShow: false,
      rulesForName: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 3 || "Min 3 characters",
        (value) => {
          const pattern = /^[A-Z]{1}[a-z]{2,}$/;
          return pattern.test(value) ?this.nameFlag =true: "Invalid name.";
        },
      ],
      rulesForEmail: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^[0-9a-z]+[+_.-]?[0-9a-z]/;
          //const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) ?this.userNameFlag==true :"Invalid e-main";
        },
      ],
      rulesForPass: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$/;
          return (pattern.test(value)) || "Invalid Password";
        },
      ],
        rulesForConfirmPass: [
        (value) => !!value || "Required.",
        (value) => (value || "").length >= 8 || "Min 8 characters",
        (value) => {
          const pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$/;
          return ((pattern.test(value)) && (this.password == value)) ?this.passwordFlag =true: "Invalid Password";
        },
      ],
    };
  },
};
</script>

<style scoped>
.sign-up-page {
  width: 60%;
}
.main-container {
  border: 1px solid #999;
  border-radius: 5px;
}
.main-module {
  margin: inherit;
  padding: inherit;
}
.sconndery-module {
  align-self: center;
}
.account-image {
  height: 100%;
  width: 98%;
}
.heading {
  font-size: larger;
}
.input {
  padding: 5px;
  padding-bottom: 0;
}

.sign-up-next {
  float: right;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0;
}
/* .footer {
} */
@media screen and (max-width: 960px) {
  .sconndery-module {
    display: none;
  }
  .sign-up-page {
    width: 80%;
  }
}
</style>