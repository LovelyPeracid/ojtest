import ACCESS_ENUM from "@/access/accessEnum";
const checkAccess = (loginUser, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
    const loginUserAccess = loginUser?.user_role ?? ACCESS_ENUM.NOT_LOGIN;
    if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
        return true;
    }
    if (needAccess === ACCESS_ENUM.USER) {
        if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
            return false;
        }
    }
    if (needAccess === ACCESS_ENUM.ADMIN) {
        if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
            return false;
        }
    }
    // if (to.meta?.access === "canAdmin") {
    //   if (store.state.user.loginUser?.role !== "admin") {
    //     next("/noAuth");
    //     return;
    //   }
    // }
    return true;
};
export default checkAccess;
//# sourceMappingURL=checkAccess.js.map