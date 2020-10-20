import axios from "axios";
import { apiResultBus } from '../../src/main';

const newUserSignUp = (signUpObject, requestedPage) => {
    axios
        .post(
            process.env.VUE_APP_SIGN_UP_API_PATH, signUpObject)
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

const userLogIn = async (logInObject) => {
    let requestStatus = await axios
        .post(
            process.env.VUE_APP_LOG_IN_API_PATH, logInObject)
        .then(function (response) {
            console.log(response);
            return response.status;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
        console.log(requestStatus);
        return requestStatus;
}

const sendResetLink = (emailOfUser) => {
    axios
        .post(process.env.VUE_APP_RESET_API_PATH, {
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
            process.env.VUE_APP_RESET_NEW_PASSWPRD_API_PATH + token,
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