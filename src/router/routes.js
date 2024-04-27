import HomeView from "../views/HomeView.vue";
import AdminView from "../views/Admin.vue";
import NoAuthView from "@/views/NoAuth.vue";
import ACCESS_ENUM from "@/access/accessEnum";
export const routes = [
    {
        path: "/",
        name: "题目",
        component: HomeView,
    },
    {
        path: "/noAuth",
        name: "没权限",
        component: NoAuthView,
    },
    {
        path: "/admin",
        name: "admin",
        component: AdminView,
        meta: {
            access: ACCESS_ENUM.NOT_LOGIN,
        },
    },
    {
        path: "/hide",
        name: "隐藏页面",
        component: AdminView,
        meta: {
            hideInMenu: true,
        },
    },
    {
        path: "/about",
        name: "关于我们",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];
//# sourceMappingURL=routes.js.map