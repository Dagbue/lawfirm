import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticlesView.vue')
  },
  {
    path: '/requestView',
    name: 'requestView',
    component: () => import(/* webpackChunkName: "requestView" */ '../views/RequestView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/disputeResolutionView',
    name: 'disputeResolutionView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/DisputeResolutionView.vue')
  },
  {
    path: '/commercialLawView',
    name: 'commercialLawView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/CommercialLawView.vue')
  },
  {
    path: '/criminalLawView',
    name: 'criminalLawView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/CriminalLawView.vue')
  },
  {
    path: '/defamation',
    name: 'defamation',
    component: () => import(/* webpackChunkName: "contact" */ '../views/DefamationView.vue')
  },
  {
    path: '/propertyLawView',
    name: 'propertyLawView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/PropertyLawView.vue')
  },
  {
    path: '/brokerageView',
    name: 'brokerageView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/BrokerageView.vue')
  },
  {
    path: '/financialSpecialistsView',
    name: 'financialSpecialistsView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/FinancialSpecialistsView.vue')
  },

  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/list-of-messages",
        name: "listOfMessages",
        component: () =>
            import(/* webpackChunkName: "listOfMessages" */ "../views/Admin/ListOfMessages.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/requestAdminView",
        name: "RequestAdminView",
        component: () =>
            import(/* webpackChunkName: "listOfMessages" */ "../views/Admin/RequestAdminView.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
