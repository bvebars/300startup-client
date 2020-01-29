import React, {Component, useContext} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../hooks/auth.hook";
import {useRoutes} from "../routes";
import createStore from "../store";
import {Provider} from "react-redux";


export const Navbar = (props) => {

    const {token} = useAuth();
    // const isAuthenticated = !!token;
    // const routes = useRoutes(isAuthenticated);


    const state = {};
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/')
    };

    const newAuth = [{
        auth: 'new'
    }];

    const login = props.auth;

    const {activeItem} = state;
    console.log(login);

    return (
        <div>
            <div>
                {/*{(login) ? <a href='/logout'></a> :*/}
                {/*    <a href='/login'>Login</a>}*/}


                <h1>{login}</h1>
                <button onClick={props.setAuth.bind(this, newAuth)}>кнопка</button>
            </div>

            <Menu>
                <Menu.Item
                    as={NavLink}
                    name='editorials'
                    to="/products"
                >
                    Товары
                </Menu.Item>

                <Menu.Item
                    as={NavLink}
                    name='reviews'
                    to="/product"
                >
                    Товар
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                >
                    Upcoming Events
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...'/>
                    </Menu.Item>

                    {(token) ? <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={logoutHandler}
                        >Выход
                        </Menu.Item> :
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={logoutHandler}
                        >Вход
                        </Menu.Item>}


                </Menu.Menu>
            </Menu>
        </div>
    )
};