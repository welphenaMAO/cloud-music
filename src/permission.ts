import router from "./router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import store from "@/store"
import { getToken } from "@/utils/auth"

const token = window.MM?.token || getToken()

NProgress.configure({ showLoading: false })
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if(token) {
    // await store.dispatch('')
    next()
  } else {
    if(to.path === "/login/edit/phone") {
      next()
    } else {
      next({
        path: "/login/edit/phone",
        replace: true
      })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
