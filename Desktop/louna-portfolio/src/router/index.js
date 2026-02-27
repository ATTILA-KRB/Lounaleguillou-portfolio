import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'Louna Le Guillou — Journaliste',
      description: 'Découvrez le portfolio de Louna Le Guillou, journaliste en presse indépendante, engagée pour l\'écologie et la solidarité.'
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { 
      title: 'Portfolio — Louna Le Guillou',
      description: 'Explorez mes derniers articles et collaborations dans la presse, l\'écologie, le féminisme et la justice sociale.'
    },
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import('../views/ExperiencesView.vue'),
    meta: { 
      title: 'Expériences — Louna Le Guillou',
      description: 'Mon parcours professionnel et universitaire dans le journalisme et la communication engagée.'
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { 
      title: 'Contact — Louna Le Guillou',
      description: 'Contactez Louna Le Guillou pour un projet éditorial, une question ou une proposition de collaboration.'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

// Dynamic page title and meta description
router.beforeEach((to) => {
  document.title = to.meta.title || 'Louna Le Guillou'

  if (to.meta.description) {
    let metaTag = document.querySelector('meta[name="description"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.name = 'description'
      document.head.appendChild(metaTag)
    }
    metaTag.content = to.meta.description
  }
})

export default router
