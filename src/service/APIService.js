import userAPIServices from "./UserService.js";

const newUserSignUp = async (signUpObject) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_SIGN_UP_API_PATH, signUpObject);
}

const userLogIn = async (logInObject) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_LOG_IN_API_PATH, logInObject);
}

const sendResetLink = async (forgotPasswordObject) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_RESET_API_PATH, forgotPasswordObject);
}

const resetNewPassword = async (resetPasswordObject, token) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_RESET_NEW_PASSWPRD_API_PATH + token, resetPasswordObject);
}

export default {
    newUserSignUp,
    userLogIn,
    sendResetLink,
    resetNewPassword
}