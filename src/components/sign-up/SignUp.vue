<template>
  <div class="d-flex justify-center align-center ma-6 mt-16 pa-5 pt-8">
    <div class="sign-up-page">
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12 class="main-container">
          <v-layout row wrap >
            <v-flex xs12 sm12 md7 lg7 xl7>
              <div class="ma-5 mx-7 px-3 main-module">
                  <v-layout row wrap>
                      <v-flex xs12 sm12 md12>
                          <div class="my-2 mx-1">
                              <div class="mb-1"><b class="blue--text heading">Google</b></div>
                              <div class="mb-3"><b class="heading">Create your Google Account</b></div>
                          </div>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 class="input">
                          <v-text-field outlined dense label="First Name" :rules="rulesForName"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md6 lg6 class="input">
                          <v-text-field outlined dense label="Last Name" :rules="rulesForName"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12 lg12 class="input">
                          <v-text-field outlined dense label="UserName" :rules="rulesForEmail"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12 lg12 class="input">
                      </v-flex>
                  </v-layout>
              </div>
            </v-flex>

            <v-flex md5 lg5 xl5 class="pa-2 my-10 sconndery-module">
                <v-flex md0 >
                    <img src="../../assets/account.png" alt="" class="account-image">
                    <span>One account. All of Google working for you.</span>
                </v-flex>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 sm12 md12 lg12 xl12 class="mt-3 footer">
          <div>footer elements</div>
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
        rulesForName: [
        value => !!value || 'Required.',
        value => (value || '').length >= 3 || 'Min 3 characters',
        value => {
          const pattern = /^[A-Z]{1}[a-z]{2,}$/;
          return pattern.test(value) || 'Invalid name.';
        },
      ],
      rulesForEmail: [
        value => !!value || 'Required.',
        value => (value || '').length >= 8 || 'Min 8 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-main'
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
.main-module{ 
    margin: inherit;
    padding: inherit;
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
}
/* .footer {
} */
/* @media screen and (max-width: 960px) {
  .sconndery-module{
      display: none;
  }
  .sign-up-page {
      width: 80%;
  }
} */
</style>