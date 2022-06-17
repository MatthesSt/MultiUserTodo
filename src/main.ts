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
  apiKey: 'AIzaSyAk4iPw4pevd-RsyZ1fGs9pWd-4Oc1Ey-o',
  authDomain: 'multiusertodo.firebaseapp.com',
  projectId: 'multiusertodo',
  storageBucket: 'multiusertodo.appspot.com',
  messagingSenderId: '239458096132',
  appId: '1:239458096132:web:876933225b374a8e219151',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
