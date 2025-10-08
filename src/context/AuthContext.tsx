import { createContext, useContext, useState, type ReactNode } from "react";


export interface User {
    id: string;
    username: string;
    password: string;
    role: string;
    permission: string[];
}

interface AuthContextType {
    user: User | null;
    login: (UserData: User) => void;
    logOut: () => void;
    hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (userData: User) => {
        setUser(userData);
    };
    const logOut = () => {
        setUser(null);
    };
    const hasPermission = (permission: string) => {
       return user?.permission?.includes(permission) || false;
    };

    return (
        <AuthContext.Provider value={{user, login, logOut, hasPermission}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
}