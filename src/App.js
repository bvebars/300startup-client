import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {token, login, userId, logout} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    return (
        <AuthContext.Provider value={{
            token, login, userId, logout, isAuthenticated
        }}>
            <div>
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
