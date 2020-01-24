import React from "react";
import {Button, Checkbox, Container, Form} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

export const AuthPage = () => {
    return (
        <div>

            <Container text>
                <h1>Регистрация пользователя</h1>
                <Form>
                    <Form.Field>
                        <label>Введите телефон</label>
                        <input
                            placeholder='+7'
                            id="phone"
                            type="text"
                            name="phone"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Введите пароль</label>
                        <input
                            placeholder='Введите пароль'
                            id="password"
                            type="password"
                            name="password"
                        />
                    </Form.Field>
                    <Button type='submit'>Отправить</Button>
                </Form>
            </Container>
        </div>
    )
};