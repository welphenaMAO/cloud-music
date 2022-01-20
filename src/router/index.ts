import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/login/index.vue'
import LoginEdit from '@/views/login/edit.vue'

Vue.use(VueRouter)
interface routerFace {
  [key: string]: any;
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children: [
      {
        path: 'edit/:type',
        component: LoginEdit,
        name: 'loginEdit',
        meta: { title: 'loginEdit' }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) as routerFace

const router = createRouter()

// https://segmentfault.com/a/1190000019386190?utm_source=tag-newest
// type Matcher = {
//   match: (raw: RawLocation, current?: Route, redirectedFrom?: Location) => Route;
//   addRoutes: (routes: Array<RouteConfig>) => void;
// };

export function resetRouter () {
  const newRouter = createRouter()

  router.matcher = newRouter.matcher // reset router
}

export default router
