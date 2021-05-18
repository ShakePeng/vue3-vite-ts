import { createRouter, createWebHistory } from 'vue-router'
import A from './views/a.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
	  {
		path: '/a',
		name: 'A',
		component: A
	  }
	]
  })
  
  export default router