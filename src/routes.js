import SignUp from './components/core/SignUp.vue';
import LogIn from './components/core/LogIn.vue';
import ForgetPassword from './components/core/ForgetPassword.vue';
import ResetPassword from './components/core/ResetPassword.vue';


export default [
    { path: '/', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/forget-password', component: ForgetPassword },
    { path: '/reset-password', component: ResetPassword },
]