import SignUp from './components/core/SignUp.vue';
import LogIn from './components/core/LogIn.vue';
import ForgetPassword from './components/core/ForgetPassword.vue';
import ResetPassword from './components/core/ResetPassword.vue';

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const routes =  [
    { path: '/', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/reset', component: ForgetPassword },
    { path: '/resetpassword/*', component: ResetPassword },
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;