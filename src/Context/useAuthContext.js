import { AuthContext } from "./AuthContext";

import { useContext } from "react";

export const useAuthContext = () =>{
    const AUTH = useContext(AuthContext)

    if(!AUTH){
        throw Error("useAuthContext must be used inside an AuthContextProvider")

    }
    return AUTH
}