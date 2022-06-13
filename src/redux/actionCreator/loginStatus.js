import {loginAction, logoutAction} from "./actionString";

export const login = (token, role, isLogin) => {
    return {
        type: loginAction,
        token: token,
        role: role,
        isLogin: isLogin
    }
}
export const logout = (token, role, isLogin) => {
    return {
        type: logoutAction,
        token: token,
        role: role,
        isLogin: isLogin
    }
}