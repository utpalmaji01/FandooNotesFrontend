import axios from "axios";

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