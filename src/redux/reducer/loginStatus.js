
import { loginAction, logoutAction } from "../actionCreator/actionString";

const initialState = {
    token: "",
    role: "",
    isLogin: false
}
const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case loginAction:
            return {
                ...prevState, 
                token: action.token,
                role: action.role,
                isLogin: action.isLogin
            }


        case logoutAction:
            return {
                ...prevState, 
                token: action.token,
                role: action.role,
                isLogin: action.isLogin}
    
        default:
            return prevState;
    }
}

export default loginReducer