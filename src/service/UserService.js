/*************************************************************
 *
 * Purpose         : Define actions for various http methods which
 *                   take url path and object to do require task and
 *                   return responce or error
 *
 * @description    : Actions to be done when http methods are called.
 *
 * @file           : UserService.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 21/10/2020
 *
 * **********************************************************/

import axios from "axios";

/*
 * @description service to pass post request to do require task
 * @params {urlPath} data i.e. API path where the action needs to be done
 * @params {object} data i.e. set of key & value pair to be accepted by the server
 */
const userServicies = async (urlPath, object) => {
    return await axios
        .post(urlPath, object)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

export default {
    userServicies,
}