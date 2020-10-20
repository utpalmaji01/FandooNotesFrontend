import axios from "axios";
import { apiResultBus } from '../../src/main';
const newUserSignUp = ( signUpObject, requestedPage) => {
    axios
        .post(
            "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", signUpObject)
        .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                requestedPage.$router.push("/log-in");
            } else {
                alert("sign up un-successfull");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

const userLogIn = (logInObject) => {
    axios
        .post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", logInObject)
        .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                apiResultBus.$emit('apiResultBus', true);
            } else {
                apiResultBus.$emit('apiResultBus', false);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

const sendResetLink = (emailOfUser) => {
    axios
        .post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset", {
            email: emailOfUser
        })
        .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                apiResultBus.$emit('apiResultBus', true);
            } else {
                apiResultBus.$emit('apiResultBus', false);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

const resetNewPassword = (newPasswordOfUser, token) => {
    axios
          .post(
            "http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=" + token,
            {
              newPassword: newPasswordOfUser
            }
          )
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                apiResultBus.$emit('apiResultBus', true);
            } else {
                apiResultBus.$emit('apiResultBus', false);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
}

export default {
    newUserSignUp,
    userLogIn,
    sendResetLink,
    resetNewPassword
}