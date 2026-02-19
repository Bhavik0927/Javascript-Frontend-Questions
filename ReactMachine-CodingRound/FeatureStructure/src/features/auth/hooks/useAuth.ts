import { useDispatch } from "react-redux"
import { login, logout } from "../store/auth.slice";

export const useAuth = () =>{
    const dispatch = useDispatch();

    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout())
    }
}