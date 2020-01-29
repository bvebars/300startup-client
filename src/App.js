import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {connect} from 'react-redux'
import {setAuth} from './actions/auth.action'

import {setProduct} from './actions/product.action'

function App(props) {
    const {token, login, userId, logout} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
    //
    // //Delete
    const {auth} = props.auth;
    const {setAuth} = props;

    return (
        <AuthContext.Provider value={{
            token, login, userId, logout, isAuthenticated
        }}>
            <div>
                <BrowserRouter>
                    <Navbar auth={auth} setAuth={setAuth}/>
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    setAuth: auth => dispatch(setAuth((auth)))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
