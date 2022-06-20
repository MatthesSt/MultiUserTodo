import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKXZ5Pjcxf4ZD3FEua-T7lC-_1stuEqnw',
  authDomain: 'multiusertodo-d4600.firebaseapp.com',
  projectId: 'multiusertodo-d4600',
  storageBucket: 'multiusertodo-d4600.appspot.com',
  messagingSenderId: '827798564300',
  appId: '1:827798564300:web:b8860d2ee898a42c16c169',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
