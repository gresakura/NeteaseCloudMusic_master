import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/section',
      children: [
        {
          path: '/section',
          name: 'section',
          component: () => import('@/views/Layout/component/main/section.vue'),
          redirect: '/section/Personalized',
          children: [
            {
              path: '/section/Personalized',
              name: 'Personalized',
              component: () => import('@/views/Main/Personalized.vue')
            },
            {
              path: '/section/latestMusic',
              name: 'latestMusic',
              component: () => import('@/views/Main/latestMusic.vue')
            },
            {
              path: '/section/singer',
              name: 'singer',
              component: () => import('@/views/Main/singer.vue')
            },
            {
              path: '/section/song',
              name: 'song',
              component: () => import('@/views/Main/song.vue')
            },
            {
              path: '/section/theCharts',
              name: 'theCharts',
              component: () => import('@/views/Main/theCharts.vue')
            },
          ]
        },
        {
          path: '/footer',
          name: 'footer',
          component: () => import('@/views/Layout/component/w-footer/index.vue')
        }
      ]
    },
  ]
})

export default router
