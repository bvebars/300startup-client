import React, {Component, useContext} from 'react'
import {Input, Menu} from 'semantic-ui-react'
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {

    const state = {};
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/')
    };

    const {activeItem} = state;

    return (
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
                <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={logoutHandler}
                >Выход
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
};