import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services/authService";

interface User {
    email: string;
    password: string
}

interface AuthContextProps {
    isLoggedIn: boolean;
    isLoading: boolean;
    user: User | null; // Replace 'any' with the actual type of user object
    storeToken: (token: string) => void;
    authenticateUser: () => void;
    logOut: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

function AuthProvider({ children }: AuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null); // Replace 'any' with the actual type of your user object

    const navigate = useNavigate()

    const storeToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    const removeToken = () => {                
        localStorage.clear()
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem('authToken');

        if (storedToken) {
            get('/verify')
                .then((response: any) => {
                    const user = response.data;     
                    setIsLoggedIn(true);
                    setIsLoading(false);
                    setUser(user);
                })
                .catch(() => {
                    removeToken()
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUser(null);
                });
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
        }
    }

    const logOut = () => {
        navigate('/')
        removeToken();
        authenticateUser();
    }

    useEffect(() => {
        authenticateUser()
    }, []);

    /* 
      Functions for handling the authentication status (isLoggedIn, isLoading, user)
      will be added here later in the next step
    */

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext };