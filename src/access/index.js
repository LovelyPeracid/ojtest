import router from "@/router";
import store from "@/store";
router.beforeEach((to, from, next) => {
    if (to.meta?.access === "canAdmin") {
        if (store.state.user.loginUser?.role !== "admin") {
            next("/noAuth");
            return;
        }
    }
    const loginUser = store.state.user.loginUser;
    if (!loginUser || !loginUser.role) {
        await store.dispatch("user/getLoginUser");
    }
    next();
});
//# sourceMappingURL=index.js.map