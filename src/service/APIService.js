/*************************************************************
 *
 * Purpose         : Define actions for various http methods
 *
 * @description    : Actions to be done when http methods are called.
 *
 *
 * @file           : APIService.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 21/10/2020
 *
 * **********************************************************/

import userAPIServices from "./UserService.js";

/*
 * @description service to pass request to create new user
 * @params {signUpObject} data i.e. details of the user like name, email, password etc.
 */
const newUserSignUp = async (signUpObject) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_SIGN_UP_API_PATH, signUpObject);
}

/*
 * @description service to pass request to log in user
 * @params {logInObject} data i.e. email and password of the user
 */
const userLogIn = async (logInObject) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_LOG_IN_API_PATH, logInObject);
}

/*
 * @description service to send a link to reset account password for user
 * @params {forgotPasswordObject} data i.e. email of the user
 */
const sendResetLink = async (forgotPasswordObject) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_RESET_API_PATH, forgotPasswordObject);
}

/*
 * @description service to reset account password for user
 * @params {resetPasswordObject} data i.e. new password of the user's account
 * @params {token} data i.e. sent from the backend for authorization
 */
const resetNewPassword = async (resetPasswordObject, token) => {
    return await userAPIServices.userServicies(process.env.VUE_APP_RESET_NEW_PASSWPRD_API_PATH + token, resetPasswordObject);
}

export default {
    newUserSignUp,
    userLogIn,
    sendResetLink,
    resetNewPassword
}