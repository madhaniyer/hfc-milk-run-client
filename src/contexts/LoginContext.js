import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';
export const LoginContext = createContext();

export function LoginProvider(props) {
        const [isAuthenticated,toggleAuthenticated] = useToggleState(false);
        const [isAuthenticating,toggleAuthenticating] = useToggleState(false);
        return (
            <LoginContext.Provider value={{isAuthenticated,isAuthenticating,toggleAuthenticated,toggleAuthenticating}}>
                {props.children}
            </LoginContext.Provider>
        );
}
