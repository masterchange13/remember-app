import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import LoginView from "@/views/Login.vue";
import { localGetItem } from "@/utils";
import dayjs from "dayjs";
import DemoView from "@/views/index/DemoView.vue";
import { formContextKey } from "element-plus";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
      redirect: "/index",
      children: [
        {
          path: "index",
          component: () => import("@/views/index/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: LoginView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   let user = JSON.parse(localGetItem("login_user"));
//   let is_valid = user && user.login_at && dayjs().isBefore(dayjs(user.login_at).add(3, "day"));

//   console.log("user is ", user);
//   console.log("is_valid is ", is_valid);
//   console.log("to fullPath is ", to.fullPath)

//   if (to.fullPath !== "/login") {
//     if (!user || !is_valid) {
//       return next("/login"); // 如果未登录或登录过期，跳转到登录页
//     }
//   } else {
//     if (user && is_valid) {
//       return next("/"); // 已登录用户访问登录页时，跳转到首页
//     }
//   }
//   next(); // 正常放行
// });


export default router;
