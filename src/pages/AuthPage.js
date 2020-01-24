import React, {useContext, useState} from "react";
import {Button, Container, Form, Input} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request} = useHttp();
    const [form, setForm] = useState({email: '', password: ''});

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const registerHandler = async () => {
        try {
            const data = await request('/user/create', 'POST', {...form});
            console.log('Data', data)
        } catch (e) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request('/user/login', 'POST', {...form});
           auth.login(data.token, data.userId)
        } catch (e) {}
    };

   let errors = {};
    if(error) {
        errors = {
            error: {
                content: error,
                pointing: 'below',
            }
        };
    }

    return (
        <div>
            <Container text>
                <h1>Регистрация пользователя</h1>
                <Form>
                    <Form.Field
                        id='phone'
                        control={Input}
                        label='Телефон'
                        placeholder='+7'
                        type="text"
                        name="phone"
                        onChange={changeHandler}
                        {...errors}
                    />
                    <Form.Field>
                        <label>Введите пароль</label>
                        <input
                            placeholder='Введите пароль'
                            id="password"
                            type="password"
                            name="password"
                            onChange={changeHandler}
                        />
                    </Form.Field>

                    <Button
                        type='submit'
                        onClick={registerHandler}
                        disabled={loading}
                    >Регистрация
                    </Button>
                    <Button
                        type='submit'
                        onClick={loginHandler}
                        disabled={loading}
                    >Вход
                    </Button>
                </Form>
            </Container>
        </div>
    )
};