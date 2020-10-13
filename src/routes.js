import App from './App.vue';
import SignUp from './components/core/SignUp.vue';

export default [
    { path: '/', component: App,
    children: [
        {path: 'sign-up', component: SignUp},
    ]},
    
]