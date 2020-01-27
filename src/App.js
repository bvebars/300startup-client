import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {connect} from 'react-redux'

function App() {
    const {token, login, userId, logout} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    //Delete
    // const product = this.props.products;

    return (
        <AuthContext.Provider value={{
            token, login, userId, logout, isAuthenticated
        }}>
            <div>
                <BrowserRouter>
                    <Navbar/>
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}


export default connect()(App);
