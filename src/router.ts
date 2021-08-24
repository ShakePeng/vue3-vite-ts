import { createRouter, createWebHistory } from 'vue-router'
import A from './views/Father.vue'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	  {
		path: '/a',
		name: 'A',
		component: A
	  }
	]
  })
  
  export default router