import { createApp } from 'vue'
import axios from 'axios'
import './style.css'
import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:8000/api/';

import ThreeScene from './components/ThreeScene/ThreeScene.vue'

createApp(ThreeScene).mount('#app')
