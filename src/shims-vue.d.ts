import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import { Store } from "vuex"

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "vue/types/vue" {
   interface Vue {
    $router: VueRouter;
    $route: RouteConfig;
    $store: Store<any>;
    $http: any
  }
}

