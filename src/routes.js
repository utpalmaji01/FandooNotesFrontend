import Home from './components/Home.vue';
import SignUp from './components/sign-up/SignUp.vue';

export default [
    { path: '/', component: Home,
    children: [
        {path: 'sign-up', component: SignUp},
    ]},
    
]