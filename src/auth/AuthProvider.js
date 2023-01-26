
import React, { createContext, useState } from 'react';
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    setUser(true);
                },

                googleLogin: async () => {
                },

                signup: async (email, password) => {
                },

                logout: async () => {
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};