// Composables
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
     
      {
        path: '',
        name: 'S1',
        component: () => import('@/views/S1.vue'),

      },
      {
        path: '/s2',
        name: 'S2',
        component: () => import('@/views/S2.vue'),

      },
      {
        path: '/s3',
        name: 'S3',
        component: () => import('@/views/S3.vue'),

      },
      {
        path: '/s4',
        name: 'S4',
        component: () => import('@/views/S4.vue'),
      },
      {
        path: '/s5',
        name: 'S5',
        component: () => import('@/views/S5.vue'),
      },
      {
        path: '/s6',
        name: 'S6',
        component: () => import('@/views/S6.vue'),
      },
      {
        path: '/s7',
        name: 'S7',
        component: () => import('@/views/S7.vue'),
      },
   
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
