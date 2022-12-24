import React, {useState, useContext, createContext} from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
    const auth = useProvideAuh();
    return <AuthContext value= {auth}>{children}</AuthContext>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuh() {
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        setUser('login');
    };

    return {
        user,
        signIn
    };
};