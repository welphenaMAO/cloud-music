import { RouteConfig } from "vue-router"
// import login from "../views/login/index"

const loginRoute: RouteConfig = {
  path: '/table',
  // component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'table',
    icon: 'table'
  },
  children: []
}

export default loginRoute
