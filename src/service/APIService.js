import axios from "axios";

const newUserSignUp = async (signUpObject) => {
    let requestStatus = await axios
        .post(
            process.env.VUE_APP_SIGN_UP_API_PATH, signUpObject)
        .then(function (response) {
            console.log(response);
            return response;
            // if (response.status == 200) {
            //     requestedPage.$router.push("/log-in");
            // } else {
            //     alert("sign up un-successfull");
            // }
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    return requestStatus;
}

const userLogIn = async (logInObject) => {
    let requestStatus = await axios
        .post(
            process.env.VUE_APP_LOG_IN_API_PATH, logInObject)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    return requestStatus;
}

const sendResetLink = async (resetPasswordObject) => {
    let requestStatus = await axios
        .post(process.env.VUE_APP_RESET_API_PATH, resetPasswordObject)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    return requestStatus;
}

const resetNewPassword = async (resetPasswordObject, token) => {
    let requestStatus = await axios
        .post(
            process.env.VUE_APP_RESET_NEW_PASSWPRD_API_PATH + token,
            resetPasswordObject
        )
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
    return requestStatus;
}

export default {
    newUserSignUp,
    userLogIn,
    sendResetLink,
    resetNewPassword
}