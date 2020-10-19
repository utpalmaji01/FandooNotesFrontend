import axios from "axios";
import { apiResultBus } from '../../src/main';
const newUserSignUp = (firstNameOfUser, lastNameOfUser, emailOfUser, passwordOfUser, requestedPage) => {
    axios
        .post(
            "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
            {
                firstName: firstNameOfUser,
                lastName: lastNameOfUser,
                email: emailOfUser,
                password: passwordOfUser,
                service: "advance",
            }
        )
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

const userLogIn = function(emailOfUser, passwordOfUser)  {
    axios
        .post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", {
            "username": emailOfUser,
            "password": passwordOfUser
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

export default {
    newUserSignUp,
    userLogIn,
    sendResetLink
}