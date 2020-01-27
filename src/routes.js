import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Products} from "./pages/Products";
import {Product} from "./pages/Product";
import {CreateProduct} from "./pages/CreateProduct";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/products" exact>
                    <Products/>
                </Route>
                <Route path="/create" exact>
                    <CreateProduct/>
                </Route>
                <Route path="/product/" exact>
                    <Product/>
                </Route>
                <Redirect to="/products"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
};